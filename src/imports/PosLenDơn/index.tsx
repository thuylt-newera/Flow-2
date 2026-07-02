import svgPaths from "./svg-swwgr6ywk8";
import imgLogo from "./78d8b83757960d711682f959a828bea65109f837.png";
import imgImage from "./a0bdb74d24d375e638652c37ab6393365b00c2ae.png";

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

function Image() {
  return (
    <div className="relative shrink-0 size-[168px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center p-[28px] relative shrink-0" data-name="Empty state">
      <Image />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[49px] not-italic relative shrink-0 text-[31.5px] text-black whitespace-nowrap">Chưa thêm sản phẩm nào</p>
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
      <div className="relative shrink-0 w-full" data-name="[Content] Product list">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-center justify-center p-[28px] relative size-full">
            <EmptyState />
          </div>
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
        </div>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="[word-break:break-word] content-center flex flex-[1_0_0] flex-wrap font-['Inter:Semi_Bold',sans-serif] font-semibold gap-y-[8px] items-center justify-between min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="line">
      <p className="leading-[49px] relative shrink-0 text-[31.5px] text-black">Tổng tiền:</p>
      <p className="leading-[42px] relative shrink-0 text-[#dc2626] text-[28px] text-center">Chưa có</p>
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
      <div className="relative rounded-bl-[28px] rounded-br-[28px] shrink-0 w-full" data-name="Bottom bar - Order">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-white relative shrink-0 w-full" data-name="Summary">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[28px] py-[21px] relative size-full">
                <Line />
              </div>
            </div>
          </div>
          <ButtonGroup />
        </div>
        <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none rounded-bl-[28px] rounded-br-[28px]" />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="gap-x-[28px] gap-y-[28px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] pb-[28px] px-[28px] relative size-full">
        <div className="bg-white content-stretch flex flex-col items-center justify-end justify-self-stretch overflow-clip relative rounded-[28px] self-stretch shrink-0" data-name="AI area">
          <Header />
          <Container />
        </div>
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
      </div>
    </div>
  );
}

export default function PosLenDn() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start relative size-full" data-name="POS - Lên đơn">
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