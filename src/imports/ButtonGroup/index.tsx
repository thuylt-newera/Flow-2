import svgPaths from "./svg-2zw0jryx4u";

function SecondaryButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-name="Secondary button">
      <div className="bg-[#f4f4f5] flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px]" data-name="Neutral Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[14px] items-center justify-center px-[28px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / arrow-left">
                <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9911 27.992">
                    <path d={svgPaths.pdf7580} fill="var(--fill-0, #27272A)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[#27272a] text-[28px] whitespace-nowrap">Trở về</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fef2f2] flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px]" data-name="Destructive Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[14px] items-center justify-center px-[28px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[#b91c1c] text-[28px] whitespace-nowrap">Huỷ đơn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ButtonGroup() {
  return (
    <div className="bg-white content-stretch flex gap-[28px] items-start p-[28px] relative size-full" data-name="button group">
      <SecondaryButton />
      <div className="flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Brand Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[14px] items-center justify-center px-[28px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">Tiếp tục</p>
          </div>
        </div>
      </div>
    </div>
  );
}