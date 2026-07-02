function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[100px]" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] not-italic relative shrink-0 text-[28px] text-white w-full">Vui lòng thêm sản phẩm</p>
    </div>
  );
}

export default function Toast() {
  return (
    <div className="bg-black content-stretch flex items-center overflow-clip px-[28px] py-[21px] relative rounded-[14px] shadow-[0px_4px_6px_-4px_rgba(26,26,26,0.05),0px_10px_15px_-3px_rgba(26,26,26,0.05)] size-full" data-name="Toast">
      <Content />
    </div>
  );
}