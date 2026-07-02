import imgImage from "./c1902011eccf838e44c12b93ec7db9e53ed05852.png";
import imgImage1 from "./0e64876c7e0521f3e3a2f4b894de7389c05a039d.png";
import imgImage2 from "./7a13ca0d9aa440c5d4c0b2e37600f2caedbb9346.png";
import imgImage3 from "./dfa9f09713fbf37867ae7ab7de0d4cc07bbdb30b.png";
import imgImage4 from "./fc94ed2ce9494293ab6884757714212d17bf5887.png";
import imgImage5 from "./144829a070f1fbb4389b028a670c6dff59a60e97.png";
import imgImage6 from "./979ba2e41856555b8dc97bf7379fd75a21eb90d5.png";

function Image() {
  return (
    <div className="aspect-[208/208] relative rounded-[28px] shrink-0 w-full" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage} />
        <div className="absolute bg-[#f4f4f5] inset-0 rounded-[28px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Prices() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3.5px] items-center leading-[42px] min-h-px not-italic relative text-black w-full whitespace-nowrap" data-name="Prices">
      <p className="relative shrink-0 text-[28px]">9.000</p>
      <p className="relative shrink-0 text-[18.060000000000002px]">₫</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] h-[42px] items-start relative shrink-0 w-full" data-name="Price">
      <Prices />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[133px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic overflow-hidden relative shrink-0 text-[28px] text-black text-ellipsis w-full">{`Mì khoai tây Omachi xốt bò `}</p>
      <Price />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[14px] relative size-full">
          <Content1 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Brand Button">
              <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10.5px] items-center justify-center px-[17.5px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#dc2626] text-[24.5px] whitespace-nowrap">Thêm vào đơn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="aspect-[208/208] relative rounded-[28px] shrink-0 w-full" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage} />
        <div className="absolute bg-[#f4f4f5] inset-0 rounded-[28px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[28px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Prices1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3.5px] items-center leading-[42px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Prices">
      <p className="relative shrink-0 text-[28px]">75.000</p>
      <p className="relative shrink-0 text-[18.060000000000002px]">₫</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Price">
      <Prices1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px relative w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic overflow-hidden relative shrink-0 text-[28px] text-black text-ellipsis w-full">Nước mắm Chin-Su ủ chượp 365 - 40N thủy tinh 700ml</p>
      <Price1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[14px] relative size-full">
          <Content3 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Brand Button">
              <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10.5px] items-center justify-center px-[17.5px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#dc2626] text-[24.5px] whitespace-nowrap">Thêm vào đơn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="aspect-[208/208] relative rounded-[28px] shrink-0 w-full" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage} />
        <div className="absolute bg-[#f4f4f5] inset-0 rounded-[28px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[28px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Prices2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3.5px] items-center leading-[42px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Prices">
      <p className="relative shrink-0 text-[28px]">18.000</p>
      <p className="relative shrink-0 text-[18.060000000000002px]">₫</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Price">
      <Prices2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px relative w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic overflow-hidden relative shrink-0 text-[28px] text-black text-ellipsis w-full">Tương ớt Chinsu chai 250g</p>
      <Price2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[14px] relative size-full">
          <Content5 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Brand Button">
              <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10.5px] items-center justify-center px-[17.5px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#dc2626] text-[24.5px] whitespace-nowrap">Thêm vào đơn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[208/208] relative rounded-[28px] shrink-0 w-full" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage} />
        <div className="absolute bg-[#f4f4f5] inset-0 rounded-[28px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[28px]">
          <img alt="" className="absolute h-[90.76%] left-[-10.51%] max-w-none top-[4.62%] w-[121.01%]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function Prices3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3.5px] items-center leading-[42px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Prices">
      <p className="relative shrink-0 text-[28px]">5.000</p>
      <p className="relative shrink-0 text-[18.060000000000002px]">₫</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Price">
      <Prices3 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic overflow-hidden relative shrink-0 text-[28px] text-black text-ellipsis w-full">Mì Kokomi Pro canh chua nam bộ</p>
      <Price3 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[14px] relative size-full">
          <Content7 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Brand Button">
              <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10.5px] items-center justify-center px-[17.5px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#dc2626] text-[24.5px] whitespace-nowrap">Thêm vào đơn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="aspect-[208/208] relative rounded-[28px] shrink-0 w-full" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage} />
        <div className="absolute bg-[#f4f4f5] inset-0 rounded-[28px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Prices4() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3.5px] items-center leading-[42px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Prices">
      <p className="relative shrink-0 text-[28px]">138.000</p>
      <p className="relative shrink-0 text-[18.060000000000002px]">₫</p>
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Price">
      <Prices4 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic overflow-hidden relative shrink-0 text-[28px] text-black text-ellipsis w-full">Kokomi pro canh chua Nam Bộ 82g</p>
      <Price4 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[14px] relative size-full">
          <Content9 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Brand Button">
              <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10.5px] items-center justify-center px-[17.5px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#dc2626] text-[24.5px] whitespace-nowrap">Thêm vào đơn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="aspect-[208/208] relative rounded-[28px] shrink-0 w-full" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[28px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgImage} />
        <div className="absolute bg-[#f4f4f5] inset-0 rounded-[28px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[28px]">
          <img alt="" className="absolute left-[5.43%] max-w-none size-[89.13%] top-[5.43%]" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Prices5() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3.5px] items-center leading-[42px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Prices">
      <p className="relative shrink-0 text-[28px]">248.000</p>
      <p className="relative shrink-0 text-[18.060000000000002px]">₫</p>
    </div>
  );
}

function Price5() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Price">
      <Prices5 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px relative w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic overflow-hidden relative shrink-0 text-[28px] text-black text-ellipsis w-full">Mì tô khoai tây Omachi lẩu tôm càng</p>
      <Price5 />
    </div>
  );
}

function Content10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[14px] relative size-full">
          <Content11 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] h-[56px] relative rounded-[14px] shrink-0 w-full" data-name="Brand Button">
              <div aria-hidden className="absolute border border-[#f87171] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10.5px] items-center justify-center px-[17.5px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#dc2626] text-[24.5px] whitespace-nowrap">Thêm vào đơn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function List() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] px-[28px] relative size-full" data-name="List">
      <div className="bg-white content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[21px] self-stretch shrink-0" data-name="Product cart">
        <Image />
        <Content />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[21px] self-stretch shrink-0" data-name="Product cart">
        <Image1 />
        <Content2 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[21px] self-stretch shrink-0" data-name="Product cart">
        <Image2 />
        <Content4 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[21px] self-stretch shrink-0" data-name="Product cart">
        <Image3 />
        <Content6 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[21px] self-stretch shrink-0" data-name="Product cart">
        <Image4 />
        <Content8 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[21px] self-stretch shrink-0" data-name="Product cart">
        <Image5 />
        <Content10 />
      </div>
    </div>
  );
}