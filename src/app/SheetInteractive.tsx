import { useState } from "react";
import { X, Minus, Plus } from "lucide-react";
import imgBg from "@/imports/SheetThemSảnPhẩm/c1902011eccf838e44c12b93ec7db9e53ed05852.png";
import { PRODUCTS, Product, formatPrice } from "./products";

export interface OrderItem extends Product { qty: number; }

function ProductAction({ qty, onAdd, onMinus, onPlus }: {
  qty: number;
  onAdd: () => void;
  onMinus: () => void;
  onPlus: () => void;
}) {
  if (qty === 0) {
    return (
      <div
        onClick={(e) => { e.stopPropagation(); onAdd(); }}
        className="bg-white drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] h-[56px] relative rounded-[14px] shrink-0 w-full cursor-pointer transition-opacity hover:opacity-80 active:opacity-60"
      >
        <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="flex items-center justify-center size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[35px] text-[#dc2626] text-[24.5px] whitespace-nowrap">Thêm vào đơn</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-[24px] items-center justify-between w-full">
      <div onClick={(e) => { e.stopPropagation(); onMinus(); }} className="bg-white flex items-center justify-center relative rounded-[14px] shrink-0 size-[56px] cursor-pointer hover:bg-gray-50 active:scale-95 transition-all">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <Minus size={28} color="black" />
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[31.5px] text-black whitespace-nowrap">{qty}</p>
      <div onClick={(e) => { e.stopPropagation(); onPlus(); }} className="bg-white flex items-center justify-center relative rounded-[14px] shrink-0 size-[56px] cursor-pointer hover:bg-gray-50 active:scale-95 transition-all">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <Plus size={28} color="black" />
      </div>
    </div>
  );
}

export default function SheetInteractive({ onClose, onConfirm, onCreateNew, quantities, onAdjust }: {
  onClose: () => void;
  onConfirm: (items: OrderItem[]) => void;
  onCreateNew: () => void;
  quantities: Record<number, number>;
  onAdjust: (i: number, delta: number) => void;
}) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const adjust = (i: number, delta: number) => onAdjust(i, delta);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? PRODUCTS.map((p, i) => ({ p, i })).filter(({ p }) => p.name.toLowerCase().includes(q))
    : [];

  const searchBorder = focused
    ? "border border-[#a1a1aa] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"
    : "border border-[#d4d4d8] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)] hover:border-[#a1a1aa]";

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="bg-[#fafafa] relative size-full flex flex-col" data-name="[Sheet] Thêm sản phẩm">

      {/* Header */}
      <div className="relative shrink-0 w-full">
        <div className="flex items-center gap-[21px] p-[21px]">
          <div onClick={(e) => { e.stopPropagation(); onClose(); }} className="flex items-center justify-center p-[14px] rounded-[14px] shrink-0 size-[56px] cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors">
            <X size={36} color="black" />
          </div>
          <div className="flex-1 text-center">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[31.5px] text-black">Thêm sản phẩm</p>
          </div>
          <div className="size-[56px] shrink-0 opacity-0" />
        </div>
      </div>

      {/* Search + Tạo mới */}
      <div className="sheet-search-row relative z-10 shrink-0 w-full px-[28px] pb-[24px] flex gap-[14px] items-center">
        <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
          <div className={`bg-white h-[70px] relative rounded-[21px] ${searchBorder}`}>
            <input
              value={query}
              placeholder="Nhập tên hoặc mã sản phẩm"
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="absolute inset-0 w-full h-full bg-transparent px-[21px] font-['Inter:Regular',sans-serif] font-normal text-[28px] text-black placeholder-[#71717a] outline-none rounded-[21px]"
            />
          </div>
          {filtered.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-[8px] z-20 bg-white rounded-[21px] border border-[#d4d4d8] shadow-[0px_4px_12px_0px_rgba(26,26,26,0.12)] overflow-hidden max-h-[420px] overflow-y-auto">
              {filtered.map(({ p, i }) => (
                <div
                  key={i}
                  onClick={() => { adjust(i, 1); setQuery(""); }}
                  className="flex items-center gap-[14px] px-[21px] py-[14px] cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <div className="relative size-[70px] shrink-0 rounded-[14px] overflow-hidden bg-[#f4f4f5]">
                    <img alt="" className="absolute inset-0 max-w-none object-contain size-full" src={p.img} />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[36px] text-[28px] text-black line-clamp-2">{p.name}</p>
                    <div className="flex gap-[3.5px] items-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-black whitespace-nowrap">
                      <p className="text-[24px]">{formatPrice(p.price)}</p>
                      <p className="text-[16px]">₫</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          onClick={(e) => { e.stopPropagation(); onCreateNew(); }}
          className="shrink-0 h-[70px] px-[28px] flex items-center justify-center rounded-[21px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(90deg, rgb(220,38,38) 0%, rgb(220,38,38) 100%)" }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-white whitespace-nowrap">Tạo mới</p>
        </div>
      </div>

      {/* Product list — scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto w-full" data-name="List">
        <div className="grid grid-cols-2 gap-[24px] px-[28px] pb-[28px]">
          {PRODUCTS.map((product, i) => (
            <div key={i} onClick={() => adjust(i, 1)} className="bg-white flex flex-col overflow-clip rounded-[21px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75" data-name="Product cart">
              <div className="aspect-square relative rounded-[28px] w-full shrink-0">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
                  <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgBg} />
                  <div className="absolute bg-[#f4f4f5] inset-0 rounded-[28px]" />
                  <img alt="" className="absolute max-w-none object-contain rounded-[28px] size-full" src={product.img} />
                </div>
              </div>
              <div className="bg-white w-full p-[14px] flex flex-col flex-1 justify-between gap-[16px]">
                <div className="flex flex-col gap-[7px]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black overflow-hidden text-ellipsis w-full">{product.name}</p>
                  <div className="flex gap-[3.5px] items-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-black whitespace-nowrap">
                    <p className="text-[28px]">{formatPrice(product.price)}</p>
                    <p className="text-[18px]">₫</p>
                  </div>
                </div>
                <ProductAction
                  qty={quantities[i] ?? 0}
                  onAdd={() => adjust(i, 1)}
                  onMinus={() => adjust(i, -1)}
                  onPlus={() => adjust(i, 1)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative shrink-0 w-full">
        <div className="bg-white p-[28px]">
          <div
            onClick={handleConfirm}
            className="w-full h-[70px] relative rounded-[14px] bg-white cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
            <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-black whitespace-nowrap">Đóng</p>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none" />
      </div>

      <div aria-hidden className="absolute border-[#e4e4e7] border-l border-solid inset-0 pointer-events-none" />

    </div>
  );
}
