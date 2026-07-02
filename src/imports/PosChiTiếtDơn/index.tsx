import svgPaths from "./svg-ybkjyh21z";
import imgLogo from "./78d8b83757960d711682f959a828bea65109f837.png";
import imgThumb from "./0e64876c7e0521f3e3a2f4b894de7389c05a039d.png";

function Logo() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[63px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgLogo} />
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-px min-w-px relative" data-name="spacer" />;
}

function IconWrapper() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[49px]" data-name="Icon wrapper">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
        <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / store">
          <div className="absolute inset-[4.18%]" data-name="Vector (Stroke)">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6604 25.6604">
              <path d={svgPaths.p7fa8000} fill="var(--fill-0, black)" id="Vector (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function NeutralButton() {
  return (
    <div className="bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center pl-[10.5px] pr-[21px] relative rounded-[14px] shrink-0" data-name="Neutral Button">
      <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <IconWrapper />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">Tạp hóa dì Thư</p>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Right">
      <NeutralButton />
    </div>
  );
}

function TabItem() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-tl-[21px] rounded-tr-[21px]" data-name="Tab item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[28px] py-[21px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">Trợ lý WINNIE</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
      <TabItem />
    </div>
  );
}

function Gradient() {
  return <div className="absolute blur-[0px] bottom-[-20px] h-[140px] left-0 right-0" style={{ backgroundImage: "linear-gradient(-85.0253deg, rgba(252, 211, 77, 0.15) 0.61246%, rgba(248, 113, 113, 0.15) 99.302%)" }} data-name="gradient" />;
}

function Guide() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] h-[416px] items-center max-w-[576px] relative shrink-0 w-[576px]" data-name="Guide">
      <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] relative rounded-[21px] shrink-0 w-full" data-name="Guide card">
        <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[21px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[49px] p-[28px] relative size-full text-[35px] text-black tracking-[-0.6px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 w-full">🛍️ Bán hàng</p>
          <p className="font-['Inter:Italic',sans-serif] font-normal italic relative shrink-0 w-full">“Bình mua 1 chai nước mắm 49 ngàn, 2 trứng gà, 1 coca”</p>
        </div>
      </div>
      <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] relative rounded-[21px] shrink-0 w-full" data-name="Guide card">
        <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[21px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start not-italic p-[28px] relative size-full text-black tracking-[-0.6px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] relative shrink-0 text-[35px] w-full">📦 Kiểm tồn kho và đặt hàng</p>
          <div className="font-['Inter:Regular',sans-serif] font-normal italic leading-[0] relative shrink-0 text-[0px] w-full">
            <p className="font-['Inter:Italic',sans-serif] leading-[49px] mb-0 text-[35px]">“Tương ớt còn bao nhiêu chai?”</p>
            <p className="font-['Inter:Italic',sans-serif] leading-[49px] text-[35px]">“Đặt thêm 1 thùng Chinsu đỏ”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AiBottomNav() {
  return (
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
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-name="Container">
      <Gradient />
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="[Content] Message">
        <div className="content-stretch flex flex-col gap-[42px] items-start p-[56px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[84px] text-black tracking-[-2.1px] w-[828px]">Dì Thư nói và trợ lý Winnie sẽ làm theo</p>
          <Guide />
        </div>
      </div>
      <AiBottomNav />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[42px]" data-name="Icon wrapper">
      <div className="overflow-clip relative shrink-0 size-[35px]" data-name="Lucide Icons / plus">
        <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3255 23.3255">
            <path d={svgPaths.p3f40d600} fill="var(--fill-0, #71717A)" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] not-italic relative shrink-0 text-[35px] text-black tracking-[-0.6px] whitespace-nowrap">Khách hàng</p>
    </div>
  );
}

function ContentCustomerInfo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[3.5px] relative shrink-0 w-full" data-name="[Content] Customer info">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[28px] text-black w-full">Chưa có thông tin khách hàng</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] not-italic relative shrink-0 text-[35px] text-black tracking-[-0.6px] whitespace-nowrap">Đơn hàng</p>
    </div>
  );
}

function Thumb() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[148.5px]" data-name="Thumb">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[#f4f4f5] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgThumb} />
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10.5px] items-start min-h-px relative w-full" data-name="Info">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic overflow-hidden relative shrink-0 text-[28px] text-black text-ellipsis w-full">Mì khoai tây Omachi xốt bò bằm</p>
    </div>
  );
}

function CurrencyName() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Currency name">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[18.060000000000002px] text-black text-center whitespace-nowrap">₫</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[3.5px] items-center relative shrink-0" data-name="Price">
      <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="Currency">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] not-italic relative shrink-0 text-[28px] text-black text-center whitespace-nowrap">9.000</p>
        <CurrencyName />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[148.5px] items-start min-w-px relative" data-name="info">
      <Info1 />
      <Price />
    </div>
  );
}

function CardInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[28px] items-start min-w-px relative" data-name="Card info">
      <Thumb />
      <Info />
    </div>
  );
}

function Quantity() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Quantity">
      <div className="bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Neutral Button">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / minus">
            <div className="absolute inset-[45.84%_16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3255 2.90955">
                <path d={svgPaths.p14925200} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] not-italic relative shrink-0 text-[31.5px] text-black whitespace-nowrap">5</p>
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

function Actions() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex flex-col gap-[14px] items-end justify-end relative shrink-0" data-name="Quanity">
        <Quantity />
      </div>
      <div className="bg-[#fef2f2] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px] shrink-0" data-name="Destructive Button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#b91c1c] text-[24.5px] whitespace-nowrap">Xóa</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[35px] items-start relative shrink-0 w-full" data-name="Content">
      <CardInfo />
      <Actions />
    </div>
  );
}

function Order() {
  return (
    <div className="content-stretch flex flex-col items-start py-[28px] relative shrink-0 w-full" data-name="Order">
      <div className="content-stretch flex gap-[21px] items-center min-h-[56px] relative shrink-0 w-full" data-name="Section header">
        <Title1 />
        <div className="content-stretch flex gap-[14px] h-[70px] items-center justify-center px-[28px] relative rounded-[14px] shrink-0" data-name="Brand Button">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
              <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9906 27.9906">
                  <path d={svgPaths.p3b36c300} fill="var(--fill-0, #DC2626)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[#dc2626] text-[28px] whitespace-nowrap">Thêm sản phẩm</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center pt-[14px] relative shrink-0 w-full" data-name="[Content] Product list">
        <div className="content-stretch flex flex-col items-end justify-center overflow-clip py-[28px] relative shrink-0 w-full" data-name="Product card">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] not-italic relative shrink-0 text-[35px] text-black tracking-[-0.6px] whitespace-nowrap">Ưu đãi của khách</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-1/4 left-1/4 right-[-6.25%] top-[12.5%]">
      <div className="absolute inset-[0_0_-1.27%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.126 26.5831">
          <g id="Frame 2121453712">
            <g filter="url(#filter0_d_8_7903)" id="Vector">
              <path d={svgPaths.p338f5180} fill="var(--fill-0, #F4F4F5)" />
            </g>
            <g filter="url(#filter1_d_8_7903)" id="Vector_2">
              <path d={svgPaths.p47c27c0} fill="var(--fill-0, #F4F4F5)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.8334" id="filter0_d_8_7903" width="31.2813" x="2.84473" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.333333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_7903" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_7903" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="9.08333" id="filter1_d_8_7903" width="19.9063" x="0" y="17.4998">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.333333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_7903" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_7903" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0" data-name="Toggle">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <span className="leading-[42px] text-[28px]">Giảm 5.000</span>
        <span className="leading-[42px] text-[18.060000000000002px]">₫</span>
        <span className="leading-[42px] text-[28px]">{` `}</span>
      </p>
      <div className="bg-[#dc2626] content-stretch drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] flex h-[56px] items-center justify-end p-[3.5px] relative rounded-[9999px] shrink-0 w-[98px]" data-name="Switch Toggle">
        <div className="relative shrink-0 size-[49px]" data-name="Switch">
          <div className="absolute inset-[-2.04%_-4.08%_-6.12%_-4.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
              <g filter="url(#filter0_d_14_14242)" id="Switch">
                <circle cx="26.5" cy="25.5" fill="var(--fill-0, white)" r="24.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="53" id="filter0_d_14_14242" width="53" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.102 0 0 0 0 0.102 0 0 0 0 0.102 0 0 0 0.05 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_14_14242" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_14_14242" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Coupon() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start py-[28px] relative shrink-0 w-full" data-name="Coupon">
      <div className="content-stretch flex gap-[21px] items-center min-h-[56px] relative shrink-0 w-full" data-name="Section header">
        <Title2 />
      </div>
      <div className="content-stretch flex flex-col gap-[28px] items-start justify-center overflow-clip pt-[14px] relative shrink-0 w-full" data-name="[Content] Customer's coupon">
        <div className="content-stretch flex gap-[21px] items-center relative shrink-0 w-full" data-name="Voucher">
          <div className="overflow-clip relative shrink-0 size-[42px]" data-name="Lucide Icons / ticket-percent">
            <div className="absolute inset-[16.68%_4.18%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4906 27.9906">
                <path d={svgPaths.p19406940} fill="var(--fill-0, #DC2626)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[28px] text-black">Dùng ưu đãi</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[#dc2626] text-[28px] text-center whitespace-nowrap">Chọn ưu đãi</p>
          <div className="overflow-clip relative shrink-0 size-[35px]" data-name="Lucide Icons / chevron-right">
            <div className="absolute inset-[20.84%_33.34%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6615 20.4115">
                <path d={svgPaths.p723a000} fill="var(--fill-0, #71717A)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[21px] items-center relative shrink-0 w-full" data-name="Point exchange">
          <div className="relative rounded-[100px] shrink-0 size-[42px]" data-name="Icon/X point">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0.25%_0.25%_0.24%_0.24%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.794 41.794">
                  <path d={svgPaths.p6934280} fill="url(#paint0_linear_8_7949)" id="Vector" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_7949" x1="10.8333" x2="29.7927" y1="2.22563" y2="37.4022">
                      <stop stopColor="#FDD518" />
                      <stop offset="0.25" stopColor="#FDCD18" />
                      <stop offset="0.62" stopColor="#FEB819" />
                      <stop offset="1" stopColor="#FF9C1A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-[6.94%_6.94%_6.93%_6.93%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.1748 36.1748">
                  <path d={svgPaths.p311ace00} fill="url(#paint0_linear_8_7907)" id="Vector" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_7907" x1="9.40501" x2="26.3374" y1="2.49555" y2="32.9023">
                      <stop stopColor="#FDBE22" />
                      <stop offset="0.53" stopColor="#FDCD1B" />
                      <stop offset="1" stopColor="#FDD518" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-[8.08%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.2121 35.2121">
                  <path d={svgPaths.p3cfd3100} fill="url(#paint0_linear_8_7925)" id="Vector" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_7925" x1="9.15479" x2="25.6363" y1="2.42878" y2="32.0265">
                      <stop stopColor="#FDD518" />
                      <stop offset="0.47" stopColor="#FDCD1B" />
                      <stop offset="1" stopColor="#FDBE22" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-[6.76%_6.75%_6.76%_6.77%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.3231 36.3214">
                  <path d={svgPaths.p36c0b850} fill="var(--fill-0, #FF9D1A)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[-0.01%_0_0_-0.01%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.0046 42.0052">
                  <path d={svgPaths.p1c6b650} fill="var(--fill-0, #FDDD46)" id="Vector" />
                </svg>
              </div>
              <Frame />
            </div>
            <div aria-hidden className="absolute border border-[#fef08a] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[28px] text-black">Dùng 2.000 điểm WinX</p>
          <Toggle />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[28px] relative size-full">
          <div className="content-stretch flex flex-col gap-[7px] items-start py-[42px] relative shrink-0 w-full" data-name="[Section] Customer info">
            <div className="content-stretch flex gap-[21px] items-center min-h-[56px] relative shrink-0 w-full" data-name="Section header">
              <Title />
              <div className="bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px] shrink-0" data-name="Neutral Button">
                <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
                  <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / book-user">
                    <div className="absolute inset-[4.18%_12.51%]" data-name="Vector (Stroke)">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2436 32.0755">
                        <path d={svgPaths.p3d4bda00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-black whitespace-nowrap">Sổ khách hàng</p>
              </div>
            </div>
            <ContentCustomerInfo />
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 862 1">
                <path d="M0 0.5H862" id="Divider" stroke="var(--stroke-0, #D4D4D8)" />
              </svg>
            </div>
          </div>
          <Order />
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 862 1">
                <path d="M0 0.5H862" id="Divider" stroke="var(--stroke-0, #D4D4D8)" />
              </svg>
            </div>
          </div>
          <Coupon />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[7px] items-center not-italic relative shrink-0 text-black w-[586.5px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] relative shrink-0 text-[31.5px]">Tổng tiền</p>
      <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[42px] relative shrink-0 text-[28px]">{`∙ 5 sản phẩm `}</p>
    </div>
  );
}

function CurrencyName1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Currency name">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#dc2626] text-[27.09px] text-center tracking-[-0.6px] whitespace-nowrap">₫</p>
    </div>
  );
}

function Line() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="line">
      <Frame1 />
      <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="Currency">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[49px] not-italic relative shrink-0 text-[#dc2626] text-[31.5px] text-center whitespace-nowrap">40.000</p>
        <CurrencyName1 />
      </div>
    </div>
  );
}

function CurrencyName2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Currency name">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[#71717a] text-[18.060000000000002px] text-center whitespace-nowrap">₫</p>
    </div>
  );
}

function Line1() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="line">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{`Khách hàng được giảm 5.000₫ `}</p>
      <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="Currency">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[42px] line-through not-italic relative shrink-0 text-[#71717a] text-[28px] text-center whitespace-nowrap">45.000</p>
        <CurrencyName2 />
      </div>
    </div>
  );
}

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

function ButtonGroup() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button group">
      <div className="content-stretch flex gap-[28px] items-start p-[28px] relative size-full">
        <SecondaryButton />
        <div className="flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Brand Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[14px] items-center justify-center px-[28px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">Tiếp tục</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentOrder() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative rounded-bl-[28px] rounded-br-[28px] rounded-tr-[28px] w-full" data-name="[Content] Order">
      <Container1 />
      <div className="content-stretch drop-shadow-[0px_-8px_8px_rgba(0,0,0,0.03)] flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Bottom bar - Order">
        <div className="bg-white relative shrink-0 w-full" data-name="Summary">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[7px] items-center justify-center pt-[21px] px-[28px] relative size-full">
              <Line />
              <Line1 />
            </div>
          </div>
        </div>
        <ButtonGroup />
      </div>
    </div>
  );
}

function NativeAreaLenDn() {
  return (
    <div className="content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative self-stretch shrink-0" data-name="Native area - Lên đơn">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tab bar">
        <div className="bg-white content-stretch flex items-center justify-center min-w-[140px] px-[28px] py-[21px] relative rounded-tl-[28px] rounded-tr-[28px] shrink-0" data-name="Tab item">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">Đơn 1</p>
          <div className="absolute bottom-[-3.5px] right-[-24.5px] size-[24.5px]" data-name="Right curve">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
              <path d={svgPaths.pd54aa00} fill="var(--fill-0, white)" id="Right curve" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center p-[21px] relative rounded-tl-[21px] rounded-tr-[21px] shrink-0" data-name="Tab item">
          <IconWrapper1 />
        </div>
      </div>
      <ContentOrder />
    </div>
  );
}

function Body() {
  return (
    <div className="h-[1074px] relative shrink-0 w-full" data-name="Body">
      <div className="gap-x-[28px] gap-y-[28px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] pb-[28px] px-[28px] relative size-full">
        <div className="bg-white content-stretch flex flex-col items-center justify-end justify-self-stretch overflow-clip relative rounded-[28px] self-stretch shrink-0" data-name="AI area">
          <Header />
          <Container />
        </div>
        <NativeAreaLenDn />
      </div>
    </div>
  );
}

export default function PosChiTitDn() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start relative size-full" data-name="POS - Chi tiết đơn">
      <div className="backdrop-blur-[30px] relative shrink-0 w-full" data-name="Topbar">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[28px] relative size-full">
            <Logo />
            <Spacer />
            <Right />
          </div>
        </div>
      </div>
      <Body />
    </div>
  );
}