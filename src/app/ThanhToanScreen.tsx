import svgPaths from "@/imports/PosThanhToan/svg-jdd3yg8tl7";
import imgLogo from "@/imports/PosThanhToan/78d8b83757960d711682f959a828bea65109f837.png";
import { formatPrice } from "./products";
import AiAreaPanel from "./AiAreaPanel";
import type { OrderItem } from "./SheetInteractive";

interface Props {
  items: OrderItem[];
  onBack: () => void;
  onCancel: () => void;
  onComplete: () => void;
}

export default function ThanhToanScreen({ items, onBack, onCancel, onComplete }: Props) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const totalItems = items.reduce((s, it) => s + it.qty, 0);
  const customerPays = subtotal;

  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start relative size-full" data-name="POS - Thanh toán">
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

          {/* Left — AI area */}
          <AiAreaPanel />

          {/* Right — Native area Thanh toán */}
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
              <div className="content-stretch flex items-center justify-center p-[21px] relative rounded-tl-[21px] rounded-tr-[21px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[35px]">
                  <div className="absolute inset-[16.68%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3255 23.3255">
                      <path d={svgPaths.p3f40d600} fill="#71717A" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Order */}
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px overflow-clip relative rounded-bl-[28px] rounded-br-[28px] rounded-tr-[28px] w-full">
              {/* Scrollable content */}
              <div className="flex-[1_0_0] min-h-0 overflow-y-auto relative w-full">
                <div className="content-stretch flex flex-col items-start px-[28px] relative w-full">

                  {/* Customer info */}
                  <div className="content-stretch flex flex-col gap-[7px] items-start pb-[42px] pt-[28px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[21px] items-center min-h-[56px] relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] text-[35px] text-black tracking-[-0.6px] whitespace-nowrap">Khách hàng</p>
                      <div className="bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px] shrink-0">
                        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[35px] text-[24.5px] text-black whitespace-nowrap">Sổ khách hàng</p>
                      </div>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black w-full">Chưa có thông tin khách hàng</p>
                  </div>

                  {/* Tóm tắt đơn */}
                  <div className="content-stretch flex flex-col gap-[7px] items-start py-[42px] relative shrink-0 w-full">
                    <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none text-[31.5px] text-black tracking-[-0.7875px] whitespace-nowrap">Tóm tắt đơn</p>
                    <div className="content-stretch flex flex-col gap-[14px] items-center justify-center overflow-clip relative shrink-0 w-full">
                      {/* Tổng tiền hàng */}
                      <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
                        <div className="flex gap-[7px] items-center whitespace-nowrap">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black">Tổng tiền hàng</p>
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black">∙</p>
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black">{totalItems} sản phẩm</p>
                        </div>
                        <div className="flex gap-px items-center">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black text-center whitespace-nowrap">{formatPrice(subtotal)}</p>
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[18px] text-black text-center whitespace-nowrap">₫</p>
                        </div>
                      </div>
                      {/* Khách phải trả */}
                      <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[28px] text-black whitespace-nowrap">Khách phải trả</p>
                        <div className="flex gap-px items-center">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[28px] text-[#dc2626] text-center whitespace-nowrap">{formatPrice(customerPays)}</p>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] text-[18px] text-[#dc2626] text-center whitespace-nowrap">₫</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hình thức thanh toán */}
                  <div className="content-stretch flex flex-col gap-[7px] items-start py-[42px] relative shrink-0 w-full">
                    <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none text-[31.5px] text-black tracking-[-0.7875px] whitespace-nowrap">Hình thức thanh toán</p>
                    <div className="content-stretch flex gap-[28px] items-center justify-center overflow-clip pt-[7px] relative shrink-0 w-full">
                      {/* Trả ngay — selected */}
                      <div className="bg-[rgba(220,38,38,0.05)] flex-[1_0_0] min-w-[64px] relative rounded-[28px]">
                        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[21px] items-center justify-center min-w-[inherit] p-[28px] relative size-full">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[56px]">
                              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full">
                                <div className="absolute inset-[20.84%_4.18%]">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.3208 32.6553">
                                    <path d={svgPaths.p3e3544c0} fill="#DC2626" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[#dc2626] text-[28px] text-center">Trả ngay</p>
                          </div>
                        </div>
                        <div aria-hidden className="absolute border-2 border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[28px]" />
                      </div>
                      {/* Ghi nợ */}
                      <div className="flex-[1_0_0] min-w-[64px] relative rounded-[28px] cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[21px] items-center justify-center min-w-[inherit] p-[28px] relative size-full">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[56px]">
                              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full">
                                <div className="absolute inset-[4.18%_12.51%]">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9897 51.3208">
                                    <path d={svgPaths.p10e36400} fill="black" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] text-[28px] text-black text-center">Ghi nợ</p>
                          </div>
                        </div>
                        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[28px]" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom bar */}
              <div className="relative rounded-bl-[28px] rounded-br-[28px] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[28px] items-start p-[28px] relative size-full">
                      {/* Trở về + Huỷ đơn */}
                      <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative">
                        <div onClick={onBack} className="bg-[#f4f4f5] flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] cursor-pointer hover:bg-gray-200 transition-colors">
                          <div className="flex flex-row items-center justify-center size-full gap-[14px] px-[28px]">
                            <div className="overflow-clip relative shrink-0 size-[42px]">
                              <div className="absolute inset-[16.68%]">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9911 27.992">
                                  <path d={svgPaths.pdf7580} fill="#27272A" />
                                </svg>
                              </div>
                            </div>
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[#27272a] text-[28px] whitespace-nowrap">Trở về</p>
                          </div>
                        </div>
                        <div onClick={onCancel} className="bg-[#fef2f2] flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] cursor-pointer hover:bg-red-100 transition-colors">
                          <div className="flex flex-row items-center justify-center size-full">
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[#b91c1c] text-[28px] whitespace-nowrap">Huỷ đơn</p>
                          </div>
                        </div>
                      </div>
                      {/* Hoàn tất đơn hàng */}
                      <div onClick={onComplete} className="flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] cursor-pointer shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)] hover:opacity-90 transition-opacity" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(90deg, rgb(220,38,38) 0%, rgb(220,38,38) 100%)" }}>
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-white whitespace-nowrap">Hoàn tất đơn hàng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none rounded-bl-[28px] rounded-br-[28px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
