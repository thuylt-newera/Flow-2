import { useEffect, useRef, useState } from "react";
import svgPaths from "@/imports/PosHome-3/svg-qv3t4qugy4";
import imgLogo from "@/imports/PosHome-3/78d8b83757960d711682f959a828bea65109f837.png";
import { formatPrice } from "./products";

// Animate from `from` → `to` on mount; re-animates when either changes
function useCountUp(from: number, to: number, duration = 800) {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    setCurrent(from); // reset to start value
    if (from === to) return;
    const startTime = performance.now();
    const diff = to - from;
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(from + diff * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration]);

  return current;
}

interface Props {
  revenue: number;
  prevRevenue: number;
  orderCount: number;
}

// ── Sub-components identical to PosHome-3 ──────────────────────────────────

function Logo() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[63px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgLogo} />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[49px]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]">
        <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full">
          <div className="absolute inset-[4.18%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6604 25.6604">
              <path d={svgPaths.p7fa8000} fill="black" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] h-[224px] min-w-[64px] relative rounded-[21px]" data-name="_Feature button">
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center min-w-[inherit] p-[21px] relative size-full">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[70px]">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full">{icon}</div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-full not-italic relative shrink-0 text-[31.5px] text-black text-center w-[min-content]">{label}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function PosHomeScreen({ revenue, prevRevenue, orderCount }: Props) {
  const animatedRevenue = useCountUp(prevRevenue, revenue);

  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start relative size-full" data-name="POS - Home">
      {/* Topbar */}
      <div className="backdrop-blur-[30px] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[28px] relative size-full">
            <Logo />
            <div className="flex-[1_0_0] h-px min-w-px relative" />
            <div className="bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center pl-[10.5px] pr-[21px] relative rounded-[14px] shrink-0">
              <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <IconWrapper />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-black whitespace-nowrap">Tạp hóa dì Thư</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-[1_0_0] min-h-px relative w-full">
        <div className="gap-x-[28px] gap-y-[28px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] pb-[28px] px-[28px] relative size-full">

          {/* AI area (left) — identical to PosHome-3 */}
          <div className="bg-white content-stretch flex flex-col items-center justify-end justify-self-stretch overflow-clip relative rounded-[28px] self-stretch shrink-0" data-name="AI area">
            {/* Header */}
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-tl-[21px] rounded-tr-[21px]">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[28px] py-[21px] relative size-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[28px] text-black whitespace-nowrap">Trợ lý WINNIE</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Container */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full">
              {/* Gradient */}
              <div className="absolute blur-[0px] bottom-0 h-[280px] left-0 right-0" style={{ backgroundImage: "linear-gradient(271deg, rgba(252,211,77,0.15) 0.61%, rgba(248,113,113,0.15) 99.3%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%)", maskImage: "linear-gradient(to bottom, transparent 0%, black 55%)" }} data-name="gradient" />
              {/* Content */}
              <div className="flex-[1_0_0] min-h-px relative w-full">
                <div className="content-stretch flex flex-col gap-[42px] items-start p-[56px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[84px] text-black tracking-[-2.1px] w-[828px]">Dì Thư nói và trợ lý Winnie sẽ làm theo</p>
                  {/* Guide */}
                  <div className="content-stretch flex flex-col gap-[42px] h-[416px] items-center max-w-[576px] relative shrink-0 w-[576px]">
                    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] relative rounded-[21px] shrink-0 w-full">
                      <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[21px]" />
                      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[49px] p-[28px] relative size-full text-[35px] text-black tracking-[-0.6px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 w-full">🛍️ Bán hàng</p>
                        <p className="font-['Inter:Italic',sans-serif] font-normal italic relative shrink-0 w-full">"Bình mua 1 chai nước mắm 49 ngàn, 2 trứng gà, 1 coca"</p>
                      </div>
                    </div>
                    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] relative rounded-[21px] shrink-0 w-full">
                      <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[21px]" />
                      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start not-italic p-[28px] relative size-full text-black tracking-[-0.6px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] relative shrink-0 text-[35px] w-full">📦 Kiểm tồn kho và đặt hàng</p>
                        <div className="font-['Inter:Regular',sans-serif] font-normal italic leading-[0] relative shrink-0 text-[0px] w-full">
                          <p className="font-['Inter:Italic',sans-serif] leading-[49px] mb-0 text-[35px]">"Tương ớt còn bao nhiêu chai?"</p>
                          <p className="font-['Inter:Italic',sans-serif] leading-[49px] text-[35px]">"Đặt thêm 1 thùng Chinsu đỏ"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mic */}
              <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-0 pb-[56px] px-[56px] right-0">
                <div className="bg-[#dc2626] content-stretch drop-shadow-[0px_4px_3px_rgba(26,26,26,0.05),0px_8px_5px_rgba(26,26,26,0.05)] flex items-center justify-center p-[28px] relative rounded-[9999px] shrink-0 size-[112px]">
                  <div aria-hidden className="absolute border-10 border-[rgba(220,38,38,0.2)] border-solid inset-[-10px] pointer-events-none rounded-[10009px]" />
                  <div className="overflow-clip relative shrink-0 size-[56px]">
                    <div className="absolute inset-[4.18%_16.68%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.3208 51.3208">
                        <path d={svgPaths.pe0f0e70} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Native area - Home (right) */}
          <div className="bg-white relative rounded-[28px] self-stretch shrink-0" data-name="Native area - Home">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[42px] items-start p-[42px] relative size-full">

                {/* Revenue card — DYNAMIC */}
                <div className="bg-gradient-to-r from-[#dc2626] relative rounded-[28px] shrink-0 to-[#f59e0b] via-[#ea580c] via-[50.935%] w-full" data-name="Revenue card">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[21px] items-center p-[42px] relative size-full">
                      {/* Frame3 — dynamic values */}
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px relative">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[56px] min-w-full text-[42px] text-white tracking-[-0.6px]">Doanh thu hôm nay</p>
                        <div className="content-stretch flex gap-px items-center relative shrink-0">
                          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[70px] text-[63px] text-white tracking-[-1.575px] whitespace-nowrap">
                            {animatedRevenue.toLocaleString("vi-VN")}
                          </p>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[70px] text-[40px] text-white tracking-[-1.575px] whitespace-nowrap">₫</p>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[49px] min-w-full text-[31.5px] text-white">Đã bán {orderCount} đơn</p>
                      </div>
                      {/* Chevron */}
                      <div className="bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] shrink-0 size-[70px]">
                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]">
                          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full">
                            <div className="absolute inset-[20.84%_33.34%]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9938 24.4938">
                                <path d={svgPaths.p8c9e880} fill="#27272A" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature buttons row 1 */}
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-h-px relative w-full">
                  <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-full">
                    <FeatureButton label="Bán hàng" icon={
                      <div className="absolute inset-[4.39%_3.8%_4.18%_4.38%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.2676 64.0057">
                          <path d={svgPaths.p3f0b1e00} fill="black" />
                        </svg>
                      </div>
                    } />
                    <FeatureButton label="Đơn đã bán" icon={
                      <div className="absolute inset-[4.19%_8.34%_4.17%_8.34%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3191 64.1467">
                          <path clipRule="evenodd" d={svgPaths.p151f7b00} fill="black" fillRule="evenodd" />
                        </svg>
                      </div>
                    } />
                    <FeatureButton label="Sổ khách hàng" icon={
                      <div className="absolute inset-[4.18%_12.51%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.4872 64.151">
                          <path d={svgPaths.p38139c00} fill="black" />
                        </svg>
                      </div>
                    } />
                  </div>
                  {/* Feature buttons row 2 */}
                  <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-full">
                    <FeatureButton label="Kho hàng" icon={
                      <div className="absolute inset-[9%_4.18%_4.18%_4.18%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.151 60.775">
                          <path d={svgPaths.p93ad580} fill="black" />
                        </svg>
                      </div>
                    } />
                    <FeatureButton label="Đặt hàng NPP" icon={
                      <div className="absolute inset-[4.18%_12.51%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.4872 64.151">
                          <path d={svgPaths.pbae7a00} fill="black" />
                        </svg>
                      </div>
                    } />
                    <FeatureButton label="Công nợ NPP" icon={
                      <div className="absolute inset-[4.18%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.151 64.1534">
                          <path d={svgPaths.p17a60200} fill="black" />
                        </svg>
                      </div>
                    } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
