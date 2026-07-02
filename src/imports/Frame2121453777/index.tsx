function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Field">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[28px] text-black w-full">
          <span className="leading-[42px]">Giá bán (₫)</span>
          <span className="leading-[42px] text-[#b91c1c]">*</span>
        </p>
        <div className="bg-white h-[70px] relative rounded-[21px] shrink-0 w-full" data-name="Type=Text, State=Enabled, Error=False">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[24.5px] py-[14px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[#71717a] text-[28px] whitespace-nowrap">Nhập giá bán</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]" />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start p-[28px] relative size-full">
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Field">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[28px] text-black w-full">
          <span className="leading-[42px]">Tên sản phẩm</span>
          <span className="leading-[42px] text-[#b91c1c]">*</span>
        </p>
        <div className="bg-white h-[70px] relative rounded-[21px] shrink-0 w-full" data-name="Type=Text, State=Focus, Error=False">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[24.5px] py-[14px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[#71717a] text-[28px] whitespace-nowrap">Nhập tên sản phẩm</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
        </div>
      </div>
      <Row />
    </div>
  );
}