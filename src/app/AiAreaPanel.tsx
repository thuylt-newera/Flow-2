import svgPaths from "@/imports/PosLenDơn/svg-swwgr6ywk8";

export default function AiAreaPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-end justify-self-stretch overflow-clip relative rounded-[28px] self-stretch shrink-0" data-name="AI area">
      {/* Header tab */}
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-tl-[21px] rounded-tr-[21px]" data-name="Tab item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[28px] py-[21px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">Trợ lý WINNIE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-name="Container">
        {/* Gradient */}
        <div
          className="absolute blur-[0px] bottom-0 h-[280px] left-0 right-0"
          style={{
            backgroundImage: "linear-gradient(271deg, rgba(252, 211, 77, 0.15) 0.61%, rgba(248, 113, 113, 0.15) 99.3%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
          }}
          data-name="gradient"
        />

        {/* Content */}
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="[Content] Message">
          <div className="content-stretch flex flex-col gap-[42px] items-start p-[56px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[84px] text-black tracking-[-2.1px] w-[828px]">Dì Thư nói và trợ lý Winnie sẽ làm theo</p>

            {/* Guide cards */}
            <div className="content-stretch flex flex-col gap-[42px] h-[416px] items-center max-w-[576px] relative shrink-0 w-[576px]" data-name="Guide">
              {/* Card 1 — Bán hàng */}
              <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] relative rounded-[21px] shrink-0 w-full" data-name="Guide card">
                <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[21px]" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[49px] p-[28px] relative size-full text-[35px] text-black tracking-[-0.6px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 w-full">🛍️ Bán hàng</p>
                  <p className="font-['Inter:Italic',sans-serif] font-normal italic relative shrink-0 w-full">"Bình mua 1 chai nước mắm 49 ngàn, 2 trứng gà, 1 coca"</p>
                </div>
              </div>

              {/* Card 2 — Kiểm tồn kho */}
              <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] relative rounded-[21px] shrink-0 w-full" data-name="Guide card">
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

        {/* Mic button */}
        <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-0 pb-[56px] px-[56px] right-0" data-name="AI bottom nav">
          <div className="bg-[#dc2626] content-stretch drop-shadow-[0px_4px_3px_rgba(26,26,26,0.05),0px_8px_5px_rgba(26,26,26,0.05)] flex items-center justify-center p-[28px] relative rounded-[9999px] shrink-0 size-[112px]" data-name="Record button">
            <div aria-hidden className="absolute border-10 border-[rgba(220,38,38,0.2)] border-solid inset-[-10px] pointer-events-none rounded-[10009px]" />
            <div className="overflow-clip relative shrink-0 size-[56px]" data-name="Lucide Icons / mic">
              <div className="absolute inset-[4.18%_16.68%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.3208 51.3208">
                  <path d={svgPaths.pe0f0e70} fill="var(--fill-0, white)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
