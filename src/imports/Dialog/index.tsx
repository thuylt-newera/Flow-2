function TitleAndDesc() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10.5px] items-start min-w-px not-italic relative" data-name="Title and Desc">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] relative shrink-0 text-[28px] text-black w-full">Huỷ đơn</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[35px] relative shrink-0 text-[#71717a] text-[24.5px] w-full">Bạn có chắc chắn muốn huỷ đơn hàng này?</p>
    </div>
  );
}

function AlertDialogFooter() {
  return (
    <div className="relative shrink-0 w-full" data-name="Alert Dialog Footer">
      <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[14px] items-center justify-end p-[28px] relative size-full">
          <div className="bg-white flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px]" data-name="Neutral Button">
            <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[14px] items-center justify-center px-[28px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">Đóng</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Brand Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[14px] items-center justify-center px-[28px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">Huỷ đơn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertDialog() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_3px_rgba(26,26,26,0.05),0px_10px_7.5px_rgba(26,26,26,0.05)] flex flex-col items-start max-w-[512px] relative rounded-[28px] shrink-0 w-[512px]" data-name="Alert Dialog">
      <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="relative shrink-0 w-full" data-name="Alert Dialog Header">
        <div className="content-stretch flex gap-[14px] items-start p-[28px] relative size-full">
          <TitleAndDesc />
        </div>
      </div>
      <AlertDialogFooter />
    </div>
  );
}

export default function Dialog() {
  return (
    <div className="bg-[rgba(0,0,0,0.25)] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Dialog">
      <AlertDialog />
    </div>
  );
}