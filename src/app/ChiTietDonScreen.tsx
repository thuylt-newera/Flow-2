import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import svgPaths from "@/imports/PosChiTiếtDơn/svg-ybkjyh21z";
import imgLogo from "@/imports/PosChiTiếtDơn/78d8b83757960d711682f959a828bea65109f837.png";
import AiAreaPanel from "./AiAreaPanel";
import { Product, formatPrice } from "./products";


interface OrderItem extends Product {
  qty: number;
}

interface Props {
  initialItems: OrderItem[];
  onBack: () => void;
  onCancel: () => void;
  onContinue?: (items: OrderItem[]) => void;
}

export default function ChiTietDonScreen({ initialItems, onBack, onCancel, onContinue }: Props) {
  const [items, setItems] = useState<OrderItem[]>(initialItems);

  const adjustQty = (i: number, delta: number) => {
    setItems(prev => {
      const next = [...prev];
      next[i] = { ...next[i], qty: Math.max(0, next[i].qty + delta) };
      return next.filter(it => it.qty > 0);
    });
  };

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const total = subtotal;
  const totalQty = items.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start relative size-full" data-name="POS - Chi tiết đơn">

      {/* Topbar */}
      <div className="backdrop-blur-[30px] relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[28px] relative size-full">
            <div className="relative rounded-[14px] shrink-0 size-[63px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgLogo} />
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" />
            <div className="bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center pl-[10.5px] pr-[21px] relative rounded-[14px] shrink-0">
              <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="bg-[#f1f5f9] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[49px]">
                <div className="overflow-clip relative shrink-0 size-[28px]">
                  <div className="absolute inset-[4.18%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6604 25.6604">
                      <path d={svgPaths.p7fa8000} fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-black whitespace-nowrap">Tạp hóa dì Thư</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-[1_0_0] min-h-px relative w-full">
        <div className="gap-x-[28px] gap-y-[28px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] pb-[28px] px-[28px] relative size-full">

          {/* AI area (left) */}
          <AiAreaPanel />

          {/* Native area - right */}
          <div className="content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative self-stretch shrink-0">
            {/* Tab bar */}
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="bg-white content-stretch flex items-center justify-center min-w-[140px] px-[28px] py-[21px] relative rounded-tl-[28px] rounded-tr-[28px] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[28px] text-black whitespace-nowrap">Đơn 1</p>
                <div className="absolute bottom-[-3.5px] right-[-24.5px] size-[24.5px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
                    <path d={svgPaths.pd54aa00} fill="white" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content order */}
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative rounded-bl-[28px] rounded-br-[28px] rounded-tr-[28px] w-full">
              {/* Scrollable container */}
              <div className="flex-[1_0_0] min-h-0 overflow-y-auto relative w-full">
                <div className="content-stretch flex flex-col items-start px-[28px] relative w-full">

                  {/* Customer info */}
                  <div className="content-stretch flex flex-col gap-[7px] items-start py-[42px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[21px] items-center min-h-[56px] relative shrink-0 w-full">
                      <div className="flex-[1_0_0]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] text-[35px] text-black tracking-[-0.6px] whitespace-nowrap">Khách hàng</p>
                      </div>
                      <div className="bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px] shrink-0">
                        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[35px] text-[24.5px] text-black whitespace-nowrap">Sổ khách hàng</p>
                      </div>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black w-full">Chưa có thông tin khách hàng</p>
                  </div>

                  <div className="h-px bg-[#d4d4d8] w-full shrink-0" />

                  {/* Order items */}
                  <div className="content-stretch flex flex-col items-start py-[28px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[21px] items-center min-h-[56px] relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] text-[35px] text-black tracking-[-0.6px] whitespace-nowrap">Đơn hàng</p>
                      <div className="content-stretch flex gap-[14px] h-[70px] items-center justify-center px-[28px] relative rounded-[14px] shrink-0 cursor-pointer">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[#dc2626] text-[28px] whitespace-nowrap">+ Thêm sản phẩm</p>
                      </div>
                    </div>

                    {/* Product list */}
                    <div className="content-stretch flex flex-col items-center justify-center pt-[14px] relative shrink-0 w-full">
                      {items.map((item, i) => (
                        <div key={i} className="content-stretch flex flex-col items-end justify-center overflow-clip py-[28px] relative shrink-0 w-full border-b border-[#f4f4f5] last:border-0">
                          <div className="content-stretch flex gap-[35px] items-start relative shrink-0 w-full">
                            {/* Card info */}
                            <div className="content-stretch flex flex-[1_0_0] gap-[28px] items-start min-w-px relative">
                              {/* Thumbnail */}
                              <div className="relative rounded-[14px] shrink-0 size-[148px]">
                                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[14px]">
                                  <div className="absolute bg-[#f4f4f5] inset-0 rounded-[14px]" />
                                  {item.img ? (
                                    <img alt="" className="absolute max-w-none object-contain rounded-[14px] size-full" src={item.img} />
                                  ) : (
                                    <div className="absolute inset-0 flex items-center justify-center rounded-[14px]">
                                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* Info */}
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-black overflow-hidden text-ellipsis w-full">{item.name}</p>
                                <div className="flex gap-[3.5px] items-center">
                                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[28px] text-black whitespace-nowrap">{formatPrice(item.price)}</p>
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[18px] text-black whitespace-nowrap">₫</p>
                                </div>
                              </div>
                            </div>
                            {/* Actions */}
                            <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
                              {/* Quantity stepper */}
                              <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                                <div
                                  onClick={() => adjustQty(i, -1)}
                                  className="bg-white flex items-center justify-center p-[14px] relative rounded-[14px] shrink-0 size-[56px] cursor-pointer hover:bg-gray-50 active:scale-95 transition-all"
                                >
                                  <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
                                  <Minus size={24} color="black" />
                                </div>
                                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] text-[31.5px] text-black whitespace-nowrap">{item.qty}</p>
                                <div
                                  onClick={() => adjustQty(i, 1)}
                                  className="bg-white flex items-center justify-center p-[14px] relative rounded-[14px] shrink-0 size-[56px] cursor-pointer hover:bg-gray-50 active:scale-95 transition-all"
                                >
                                  <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
                                  <Plus size={24} color="black" />
                                </div>
                              </div>
                              {/* Delete */}
                              <div
                                onClick={() => adjustQty(i, -item.qty)}
                                className="bg-[#fef2f2] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px] shrink-0 cursor-pointer hover:bg-red-100 transition-colors"
                              >
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[35px] text-[#b91c1c] text-[24.5px] whitespace-nowrap">Xóa</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-[#d4d4d8] w-full shrink-0" />

                  {/* Ưu đãi / WinX */}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="content-stretch drop-shadow-[0px_-8px_8px_rgba(0,0,0,0.03)] flex flex-col items-start overflow-clip relative shrink-0 w-full">
                {/* Summary */}
                <div className="bg-white relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[7px] items-center justify-center pt-[21px] px-[28px] relative w-full">
                    {/* Total line */}
                    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between overflow-clip relative shrink-0 w-full">
                      <div className="flex gap-[7px] items-center whitespace-nowrap">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] text-[31.5px] text-black">Tổng tiền</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black">∙ {totalQty} sản phẩm</p>
                      </div>
                      <div className="flex gap-px items-center">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] text-[#dc2626] text-[31.5px] text-center whitespace-nowrap">{formatPrice(total)}</p>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#dc2626] text-[27px] whitespace-nowrap">₫</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Buttons */}
                <div className="bg-white relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[28px] items-start p-[28px] relative size-full">
                    {/* Trở về */}
                    <div
                      onClick={onBack}
                      className="bg-[#f4f4f5] flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      <div className="flex flex-row items-center justify-center size-full gap-[14px] px-[28px]">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[#27272a] text-[28px] whitespace-nowrap">← Trở về</p>
                      </div>
                    </div>
                    {/* Huỷ đơn */}
                    <div
                      onClick={onCancel}
                      className="bg-[#fef2f2] flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] cursor-pointer hover:bg-red-100 transition-colors"
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[#b91c1c] text-[28px] whitespace-nowrap">Huỷ đơn</p>
                      </div>
                    </div>
                    {/* Tiếp tục */}
                    <div
                      onClick={() => onContinue?.(items)}
                      className="flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] cursor-pointer shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)] hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(90deg, rgb(220,38,38) 0%, rgb(220,38,38) 100%)" }}
                    >
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-white whitespace-nowrap">Tiếp tục</p>
                      </div>
                    </div>
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
