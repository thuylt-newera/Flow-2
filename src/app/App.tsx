import { useEffect, useRef, useState } from "react";
import PosLenDonScreen from "./PosLenDonScreen";
import { PRODUCTS } from "./products";
import Dialog from "@/imports/Dialog-1/index";
import Toast from "@/imports/Toast/index";
import SheetInteractive, { OrderItem } from "./SheetInteractive";
import ChiTietDonScreen from "./ChiTietDonScreen";
import AddProductSheet from "./AddProductSheet";
import ThanhToanScreen from "./ThanhToanScreen";
import PosHomeScreen from "./PosHomeScreen";
import successSoundUrl from "@/imports/Thanh_toa_n_tha_nh_.MP3";

const DESIGN_W = 1920;
const DESIGN_H = 1200;

const globalStyles = `
  [data-name="gradient"] {
    bottom: 0 !important;
    height: 280px !important;
    background-image: linear-gradient(271deg, rgba(252, 211, 77, 0.15) 0.61%, rgba(248, 113, 113, 0.15) 99.3%) !important;
    filter: blur(0px) !important;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 55%) !important;
    mask-image: linear-gradient(to bottom, transparent 0%, black 55%) !important;
  }

  [data-name="_Feature button"] {
    cursor: pointer;
    transition: background-color 0.12s ease, transform 0.1s ease;
  }
  [data-name="_Feature button"]:hover {
    background-color: #e2e2e4 !important;
  }
  [data-name="_Feature button"]:active {
    background-color: #d0d0d2 !important;
    transform: scale(0.97);
  }

  /* Neutral buttons (Trở về, Sổ khách hàng, Đóng, Tạp hóa dì Thư) */
  [data-name="Neutral Button"] {
    cursor: pointer;
    transition: background-color 0.12s ease, transform 0.1s ease;
  }
  [data-name="Neutral Button"]:hover {
    background-color: #f0f0f0 !important;
  }
  [data-name="Neutral Button"]:active {
    background-color: #e4e4e4 !important;
    transform: scale(0.97);
  }

  /* Destructive button (Huỷ đơn in bottom bar) */
  [data-name="Destructive Button"] {
    cursor: pointer;
    transition: background-color 0.12s ease, transform 0.1s ease;
  }
  [data-name="Destructive Button"]:hover {
    background-color: #fee2e2 !important;
  }
  [data-name="Destructive Button"]:active {
    background-color: #fecaca !important;
    transform: scale(0.97);
  }

  /* Sheet slide-in from right */
  .sheet-enter {
    animation: slideIn 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }
  @keyframes slideIn {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }

  /* Sheet: make product list scrollable, keep header/search/filter/bottom fixed */
  [data-name="[Sheet] Thêm sản phẩm"] > div {
    overflow: hidden !important;
  }
  [data-name="[Sheet] Thêm sản phẩm"] [data-name="List"] {
    overflow-y: auto !important;
    min-height: 0 !important;
    flex-shrink: 1 !important;
  }
  [data-name="[Sheet] Thêm sản phẩm"] [data-name="List"] > div {
    height: auto !important;
  }

  /* Fix Toast content width */
  [data-name="Toast"] [data-name="Content"] {
    width: auto !important;
    flex: 1 !important;
  }

  /* Brand buttons (Tiếp tục, Thêm sản phẩm, Huỷ đơn in dialog) */
  [data-name="Brand Button"] {
    cursor: pointer;
    transition: opacity 0.12s ease, transform 0.1s ease;
  }
  [data-name="Brand Button"]:hover {
    opacity: 0.88;
  }
  [data-name="Brand Button"]:active {
    opacity: 0.75;
    transform: scale(0.97);
  }
`;

type Screen = "home" | "len-don" | "chi-tiet-don" | "thanh-toan";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [screen, setScreen] = useState<Screen>("home");
  const [showDialog, setShowDialog] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [inventoryToast, setInventoryToast] = useState(false);
  const inventoryToastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [successToast, setSuccessToast] = useState(false);
  const successToastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [revenue, setRevenue] = useState(1234000);
  const [prevRevenue, setPrevRevenue] = useState(1234000);
  const [orderCount, setOrderCount] = useState(10);

  // Single unified live order list — newest first across all sources
  const [liveOrderItems, setLiveOrderItems] = useState<Array<{id: string; name: string; price: number; img: string; qty: number}>>([]);

  // Derived quantities for SheetInteractive display
  const liveQuantities = Object.fromEntries(
    liveOrderItems
      .filter(item => item.id.startsWith("fixed-"))
      .map(item => [parseInt(item.id.replace("fixed-", "")), item.qty])
  );

  const handleLiveAdjust = (i: number, delta: number) => {
    const id = `fixed-${i}`;
    setLiveOrderItems(prev => {
      const idx = prev.findIndex(item => item.id === id);
      if (idx === -1) {
        if (delta <= 0) return prev;
        // New product — prepend (newest first)
        return [{ id, ...PRODUCTS[i], qty: delta }, ...prev];
      }
      const newQty = Math.max(0, prev[idx].qty + delta);
      if (newQty === 0) return prev.filter(item => item.id !== id);
      return prev.map(item => item.id === id ? { ...item, qty: newQty } : item);
    });
  };

  const handleAllAdjust = (id: string, delta: number) => {
    setLiveOrderItems(prev => {
      const idx = prev.findIndex(item => item.id === id);
      if (idx === -1) return prev;
      const newQty = Math.max(0, prev[idx].qty + delta);
      if (newQty === 0) return prev.filter(item => item.id !== id);
      return prev.map(item => item.id === id ? { ...item, qty: newQty } : item);
    });
  };

  const allLiveItems = liveOrderItems;
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setScale(Math.min(vw / DESIGN_W, vh / DESIGN_H));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const triggerToast = () => {
    setShowToast(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setShowToast(false), 2500);
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as Element;
    const getText = (el: Element | null) => el?.textContent?.trim() ?? "";

    // If sheet is open, block all outer interactions
    if (showSheet) return;

    // While dialog open — only handle dialog buttons
    if (showDialog) {
      const neutralBtn = target.closest('[data-name="Neutral Button"]');
      if (getText(neutralBtn).includes("Đóng")) { setShowDialog(false); return; }
      const brandBtn = target.closest('[data-name="Brand Button"]');
      if (getText(brandBtn).includes("Huỷ đơn")) { setShowDialog(false); setScreen("home"); setLiveOrderItems([]); setPrevRevenue(revenue); return; }
      return;
    }

    // POS-Home: Bán hàng → POS-Lên đơn
    const featureBtn = target.closest('[data-name="_Feature button"]');
    if (getText(featureBtn).includes("Bán hàng")) { setScreen("len-don"); return; }

    // POS-Lên đơn actions
    if (screen === "len-don") {
      const neutralBtn = target.closest('[data-name="Neutral Button"]');
      if (getText(neutralBtn).includes("Trở về")) { setScreen("home"); setPrevRevenue(revenue); return; }

      const destructiveBtn = target.closest('[data-name="Destructive Button"]');
      if (destructiveBtn) { setShowDialog(true); return; }

      const brandBtn = target.closest('[data-name="Brand Button"]');
      if (getText(brandBtn).includes("Thêm sản phẩm")) { setShowSheet(true); return; }
      if (getText(brandBtn).includes("Tiếp tục")) { triggerToast(); return; }
    }
  };

  const scaledW = DESIGN_W * scale;
  const scaledH = DESIGN_H * scale;

  return (
    <>
      <style>{globalStyles}</style>
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          background: "#f4f4f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: scaledW,
            height: scaledH,
            position: "relative",
            flexShrink: 0,
          }}
        >
          <div
            onClick={handleClick}
            style={{
              width: DESIGN_W,
              height: DESIGN_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {screen === "home" ? <PosHomeScreen revenue={revenue} prevRevenue={prevRevenue} orderCount={orderCount} /> : screen === "len-don" ? (
              <PosLenDonScreen
                allItems={allLiveItems}
                onAdjust={handleAllAdjust}
                onBack={() => { setScreen("home"); setPrevRevenue(revenue); }}
                onCancel={() => setShowDialog(true)}
                onContinue={() => {
                  if (liveOrderItems.length === 0) { triggerToast(); return; }
                  setOrderItems(liveOrderItems.map(({ id: _id, ...rest }) => rest as OrderItem));
                  setScreen("thanh-toan");
                }}
                onAddProduct={() => setShowSheet(true)}
              />
            ) : screen === "chi-tiet-don" ? (
              <ChiTietDonScreen
                initialItems={orderItems}
                onBack={() => setScreen("len-don")}
                onCancel={() => { setShowDialog(true); }}
                onContinue={(items) => { setOrderItems(items); setScreen("thanh-toan"); }}
              />
            ) : (
              <ThanhToanScreen
                items={orderItems}
                onBack={() => setScreen("len-don")}
                onCancel={() => setShowDialog(true)}
                onComplete={() => {
                  const orderTotal = orderItems.reduce((s, it) => s + it.price * it.qty, 0);
                  setPrevRevenue(revenue);
                  setRevenue(revenue + orderTotal);
                  setOrderCount(prev => prev + 1);
                  new Audio(successSoundUrl).play().catch(() => {});
                  setScreen("home");
                  setLiveOrderItems([]);
                  setOrderItems([]);
                  setSuccessToast(true);
                  if (successToastTimer.current) clearTimeout(successToastTimer.current);
                  successToastTimer.current = setTimeout(() => setSuccessToast(false), 3000);
                }}
              />
            )}

            {/* Sheet drawer — right panel width, slides in from right */}
            {showSheet && (
              <div
                onClick={() => setShowSheet(false)}
                style={{ position: "absolute", inset: 0, zIndex: 60, background: "rgba(0,0,0,0)" }}
              >
                {/* Sheet panel — right-aligned, clipped to canvas height */}
                <div
                  className="sheet-enter"
                  onClick={e => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 672,
                    height: DESIGN_H,
                    overflow: "hidden",
                  }}
                >
                  <SheetInteractive
                    quantities={liveQuantities}
                    onAdjust={handleLiveAdjust}
                    onClose={() => setShowSheet(false)}
                    onConfirm={() => setShowSheet(false)}
                    onCreateNew={() => {
                      setShowSheet(false);
                      setShowAddProduct(true);
                    }}
                  />
                </div>
              </div>
            )}

            {/* Add Product overlay — full canvas, with keyboard at bottom */}
            {showAddProduct && (
              <div
                style={{ position: "absolute", inset: 0, zIndex: 65 }}
                onClick={(e) => {
                  const target = e.target as Element;
                  const neutralBtn = target.closest('[data-name="Neutral Button"]');
                  if (neutralBtn) setShowAddProduct(false);
                }}
              >
                <AddProductSheet
                  onClose={() => setShowAddProduct(false)}
                  onConfirm={(name, price) => {
                    const id = `custom-${Date.now()}`;
                    setLiveOrderItems(prev => [{ id, name, price, img: "", qty: 1 }, ...prev]);
                    setShowAddProduct(false);
                    setScreen("len-don");
                    setInventoryToast(true);
                    if (inventoryToastTimer.current) clearTimeout(inventoryToastTimer.current);
                    inventoryToastTimer.current = setTimeout(() => setInventoryToast(false), 2500);
                  }}
                />
              </div>
            )}

            {/* Success toast — bottom right of screen */}
            {successToast && (
              <div style={{ position: "absolute", bottom: 60, right: 56, zIndex: 80, pointerEvents: "none" }}>
                <div className="flex items-center gap-[14px] overflow-clip px-[28px] py-[21px] rounded-[14px] shadow-[0px_4px_6px_-4px_rgba(26,26,26,0.05),0px_10px_15px_-3px_rgba(26,26,26,0.05)]" style={{ background: "#16a34a" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[28px] text-white whitespace-nowrap">Thanh toán thành công</p>
                </div>
              </div>
            )}

            {/* Inventory toast — bottom center of right panel */}
            {inventoryToast && (
              <div
                style={{
                  position: "absolute",
                  bottom: 200,
                  left: "50%",
                  transform: "translateX(10%)",
                  zIndex: 80,
                  pointerEvents: "none",
                }}
              >
                <div className="bg-black flex items-center overflow-clip px-[28px] py-[21px] rounded-[14px] shadow-[0px_4px_6px_-4px_rgba(26,26,26,0.05),0px_10px_15px_-3px_rgba(26,26,26,0.05)]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[28px] text-white whitespace-nowrap">Đã thêm sản phẩm vào kho hàng</p>
                </div>
              </div>
            )}

            {/* Dialog overlay */}
            {showDialog && (
              <div style={{ position: "absolute", inset: 0, zIndex: 50 }}>
                <Dialog />
              </div>
            )}

            {/* Toast above summary row, centered in right panel */}
            {showToast && (
              <div
                style={{
                  position: "absolute",
                  // Bottom bar = ButtonGroup (~126px) + Summary (~91px) = ~217px from bottom
                  bottom: 230,
                  // Right panel center: 28px padding + 918px left col + 28px gap + 918px/2 ≈ 1433px center
                  // Toast width 560px → left = 1433 - 280 = 1153px
                  left: 1153,
                  width: 560,
                  height: 84,
                  zIndex: 40,
                  pointerEvents: "none",
                }}
              >
                <Toast />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
