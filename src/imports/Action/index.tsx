import svgPaths from "./svg-uy6raopmjq";

function Quantity() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Quantity">
      <div className="bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Neutral Button">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / minus">
            <div className="absolute inset-[45.84%_16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3255 2.90955">
                <path d={svgPaths.p14925200} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] not-italic relative shrink-0 text-[31.5px] text-black whitespace-nowrap">1</p>
      <div className="bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Neutral Button">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3255 23.3255">
                <path d={svgPaths.p3f40d600} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Action() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Action">
      <Quantity />
    </div>
  );
}