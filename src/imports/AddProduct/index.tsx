import svgPaths from "./svg-8wpu4ue4iw";
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

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[49px] not-italic overflow-hidden relative shrink-0 text-[31.5px] text-black text-center text-ellipsis w-full whitespace-nowrap">Tạo sản phẩm mới</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[21px] items-center p-[21px] relative size-full">
          <div className="content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Neutral Button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / x">
                <div className="absolute inset-[20.84%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4115 20.4115">
                    <path d={svgPaths.p3f4f5a00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame />
          <div className="content-stretch flex items-center justify-center opacity-0 p-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Neutral Button">
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
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Field">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24.5px] text-black w-full">
          <span className="leading-[35px]">Giá bán (₫)</span>
          <span className="leading-[35px] text-[#b91c1c]">*</span>
        </p>
        <div className="bg-white h-[70px] relative rounded-[21px] shrink-0 w-full" data-name="Type=Text, State=Focus, Error=False">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[24.5px] py-[14px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">5.000</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <div className="content-stretch flex flex-col gap-[28px] items-start p-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Field">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24.5px] text-black w-full">
            <span className="leading-[35px]">Tên sản phẩm</span>
            <span className="leading-[35px] text-[#b91c1c]">*</span>
          </p>
          <div className="bg-white h-[70px] relative rounded-[21px] shrink-0 w-full" data-name="Type=Text, State=Filled, Error=False">
            <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[24.5px] py-[14px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">Trứng gà ta</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]" />
          </div>
        </div>
        <Row />
      </div>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button group">
      <div className="content-stretch flex gap-[28px] items-start p-[28px] relative size-full">
        <div className="flex-[1_0_0] h-[70px] min-w-px relative rounded-[14px] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(220, 38, 38) 0%, rgb(220, 38, 38) 100%)" }} data-name="Brand Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[14px] items-center justify-center px-[28px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">Tạo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideSheet() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] h-[1200px] left-0 top-0 w-[1920px]" data-name="Side sheet">
      <div className="-translate-y-1/2 absolute bg-[#fafafa] h-[780px] right-0 top-[calc(50%-210px)] w-[672px]" data-name="[Sheet] Add prodcut">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Header1 />
          <Frame1 />
          <div className="relative rounded-bl-[28px] rounded-br-[28px] shrink-0 w-full" data-name="Bottom bar - General">
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <ButtonGroup1 />
            </div>
            <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none rounded-bl-[28px] rounded-br-[28px]" />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#e4e4e7] border-l border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function AndroidTabletKey() {
  return (
    <div className="absolute bg-white inset-[25.98%_87.34%_51.96%_4.69%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">a</p>
      </div>
    </div>
  );
}

function AndroidTabletKey1() {
  return (
    <div className="absolute bg-white inset-[25.98%_78.17%_51.96%_13.86%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">s</p>
      </div>
    </div>
  );
}

function AndroidTabletKey2() {
  return (
    <div className="absolute bg-white inset-[51.96%_82.85%_25.98%_9.17%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">z</p>
      </div>
    </div>
  );
}

function AndroidTabletKey3() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[77.94%_82.85%_0_9.17%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">,</p>
      </div>
    </div>
  );
}

function AndroidTabletKey4() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_82.85%_77.94%_9.17%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">w</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function AndroidTabletKey5() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_92.02%_77.94%_0] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">q</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function AndroidTabletKey6() {
  return (
    <div className="absolute bg-white inset-[25.98%_68.94%_51.96%_23.08%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">d</p>
      </div>
    </div>
  );
}

function AndroidTabletKey7() {
  return (
    <div className="absolute bg-white inset-[51.96%_73.68%_25.98%_18.34%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">x</p>
      </div>
    </div>
  );
}

function AndroidTabletKey8() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_73.68%_77.94%_18.34%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">e</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function AndroidTabletKey9() {
  return (
    <div className="absolute bg-white inset-[25.98%_59.77%_51.96%_32.25%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">f</p>
      </div>
    </div>
  );
}

function AndroidTabletKey10() {
  return (
    <div className="absolute bg-white inset-[51.96%_64.51%_25.98%_27.52%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">c</p>
      </div>
    </div>
  );
}

function AndroidTabletKey11() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_64.51%_77.94%_27.52%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">r</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function AndroidTabletKey12() {
  return (
    <div className="absolute bg-white inset-[25.98%_50.6%_51.96%_41.43%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">g</p>
      </div>
    </div>
  );
}

function AndroidTabletKey13() {
  return (
    <div className="absolute bg-white inset-[51.96%_55.33%_25.98%_36.69%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">v</p>
      </div>
    </div>
  );
}

function StandardKeyLcase() {
  return (
    <div className="absolute inset-[77.94%_27.67%_0_18.34%] overflow-clip" data-name="Standard Key / Lcase">
      <div className="absolute bg-white inset-0" data-name="Key pad" />
    </div>
  );
}

function AndroidTabletKey14() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_55.33%_77.94%_36.69%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">t</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function AndroidTabletKey15() {
  return (
    <div className="absolute bg-white inset-[25.98%_41.43%_51.96%_50.6%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">h</p>
      </div>
    </div>
  );
}

function AndroidTabletKey16() {
  return (
    <div className="absolute bg-white inset-[51.96%_46.16%_25.98%_45.86%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">b</p>
      </div>
    </div>
  );
}

function AndroidTabletKey17() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_46.16%_77.94%_45.86%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">y</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function AndroidTabletKey18() {
  return (
    <div className="absolute bg-white inset-[25.98%_32.2%_51.96%_59.82%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">j</p>
      </div>
    </div>
  );
}

function AndroidTabletKey19() {
  return (
    <div className="absolute bg-white inset-[51.96%_36.99%_25.98%_55.03%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">n</p>
      </div>
    </div>
  );
}

function AndroidTabletKey20() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_36.99%_77.94%_55.03%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">u</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function AndroidTabletKey21() {
  return (
    <div className="absolute bg-white inset-[51.96%_27.82%_25.98%_64.21%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">m</p>
      </div>
    </div>
  );
}

function AndroidTabletKey22() {
  return (
    <div className="absolute bg-white inset-[51.96%_18.64%_25.98%_73.38%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">!</p>
      </div>
    </div>
  );
}

function AndroidTabletKey23() {
  return (
    <div className="absolute bg-white inset-[51.96%_9.47%_25.98%_82.55%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">?</p>
      </div>
    </div>
  );
}

function AndroidTabletKey24() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[77.94%_9.47%_0_82.55%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">.</p>
      </div>
    </div>
  );
}

function AndroidTabletKey25() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_27.82%_77.94%_64.21%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">i</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function AndroidTabletKey26() {
  return (
    <div className="absolute bg-white inset-[25.98%_13.86%_51.96%_78.17%] overflow-clip" data-name="Android tablet Key">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">l</p>
      </div>
    </div>
  );
}

function AndroidTabletKey27() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_18.64%_77.94%_73.38%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">o</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">9</p>
      </div>
    </div>
  );
}

function AndroidTabletKey28() {
  return (
    <div className="[word-break:break-word] absolute bg-white inset-[0_9.47%_77.94%_82.55%] leading-[0] overflow-clip text-[#586c9d] text-center" data-name="Android tablet Key">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center text-[44px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">p</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[46px] justify-center right-[13.27px] text-[20px] top-[23px] translate-x-1/2 w-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <div className="-translate-y-1/2 absolute h-[104px] left-px right-[0.27px] top-[calc(50%-0.28px)]" data-name="Numbers">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#586c9d] text-[32px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">?123</p>
      </div>
    </div>
  );
}

function TextKey() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[77.94%_92.02%_0_0]" data-name="Text Key">
      <Numbers />
    </div>
  );
}

function Numbers1() {
  return (
    <div className="-translate-y-1/2 absolute h-[104px] left-px right-[0.27px] top-[calc(50%-0.28px)]" data-name="Numbers">
      <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#586c9d] text-[28px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">?123</p>
      </div>
    </div>
  );
}

function TextKey1() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[77.94%_0.3%_0_91.72%]" data-name="Text Key">
      <Numbers1 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.36px)] size-[44px] top-[calc(50%-0.28px)]" data-name="Arrow">
      <div className="absolute inset-[-2.09%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44.9216">
          <g id="Arrow">
            <path d={svgPaths.p28ecce00} id="Vector 13" stroke="var(--stroke-0, #586C9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
            <line id="Line 19" stroke="var(--stroke-0, #586C9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" x1="13.1574" x2="30.0278" y1="43.1716" y2="43.1716" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpecialKey() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[51.96%_92.02%_25.98%_0]" data-name="Special Key">
      <Arrow />
    </div>
  );
}

function Delete() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.49px)] size-[44px] top-[calc(50%-0.47px)]" data-name="Delete">
      <div className="absolute inset-[0_-3.85%_0_-12.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.2094 44">
          <g id="Delete">
            <g id="Android">
              <path clipRule="evenodd" d={svgPaths.pf932fa0} fillRule="evenodd" id="Path" stroke="var(--stroke-0, #586C9D)" strokeLinecap="square" strokeWidth="3.5" />
              <path d={svgPaths.p2a8f9880} fill="var(--fill-0, #586C9D)" id="Union" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpecialKey1() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[0_0.3%_77.94%_91.72%]" data-name="Special Key">
      <Delete />
    </div>
  );
}

function SpecialKey2() {
  return (
    <div className="absolute bg-[#097cfb] inset-[25.98%_0.3%_51.96%_87.34%]" data-name="Special Key">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.31px)] size-[54px] top-[calc(50%-0.28px)]" data-name="Arrow right">
        <div className="absolute inset-[18.52%_6.48%_16.67%_5.56%]">
          <div className="absolute inset-[-5.71%_-4.21%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5 39">
              <path d={svgPaths.p6b16f00} id="Vector 19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.49px)] size-[44px] top-[calc(50%-0.2px)]" data-name="Arrow">
      <div className="absolute inset-[-2.09%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44.9216">
          <g id="Arrow">
            <path d={svgPaths.p28ecce00} id="Vector 13" stroke="var(--stroke-0, #586C9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
            <line id="Line 19" stroke="var(--stroke-0, #586C9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" x1="13.1574" x2="30.0278" y1="43.1716" y2="43.1716" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpecialKey3() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[51.96%_0.3%_25.98%_91.72%]" data-name="Special Key">
      <Arrow1 />
    </div>
  );
}

function EmogiIcon() {
  return (
    <div className="absolute inset-[3.7%]" data-name="Emogi Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.7407 40.7407">
        <g id="Emogi Icon">
          <circle cx="20.3704" cy="20.3704" id="Ellipse 55" r="18.6204" stroke="var(--stroke-0, #586C9D)" strokeWidth="3.5" />
          <circle cx="13.5803" cy="16.2964" fill="var(--fill-0, #586C9D)" id="Ellipse 56" r="2.71605" />
          <circle cx="27.1604" cy="16.2964" fill="var(--fill-0, #586C9D)" id="Ellipse 57" r="2.71605" />
          <path d={svgPaths.p14f2a880} id="Vector 16" stroke="var(--stroke-0, #586C9D)" strokeLinecap="round" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}

function Emoji() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.19px)] size-[44px] top-[calc(50%-0.06px)]" data-name="Emoji">
      <EmogiIcon />
    </div>
  );
}

function SpecialKey4() {
  return (
    <div className="absolute bg-[#dde1ec] inset-[77.94%_18.64%_0_73.38%]" data-name="Special Key">
      <Emoji />
    </div>
  );
}

function LettersLayout() {
  return (
    <div className="absolute inset-[5.21%_1.26%_5.08%_1.26%]" data-name="Letters Layout">
      <AndroidTabletKey />
      <AndroidTabletKey1 />
      <AndroidTabletKey2 />
      <AndroidTabletKey3 />
      <AndroidTabletKey4 />
      <AndroidTabletKey5 />
      <AndroidTabletKey6 />
      <AndroidTabletKey7 />
      <AndroidTabletKey8 />
      <AndroidTabletKey9 />
      <AndroidTabletKey10 />
      <AndroidTabletKey11 />
      <AndroidTabletKey12 />
      <AndroidTabletKey13 />
      <StandardKeyLcase />
      <AndroidTabletKey14 />
      <AndroidTabletKey15 />
      <AndroidTabletKey16 />
      <AndroidTabletKey17 />
      <AndroidTabletKey18 />
      <AndroidTabletKey19 />
      <AndroidTabletKey20 />
      <div className="absolute bg-white inset-[25.98%_23.03%_51.96%_68.99%] overflow-clip" data-name="_Android tablet Key">
        <div className="[word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[1.32%_0_-1.32%_0] justify-center leading-[0] text-[#586c9d] text-[44px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">k</p>
        </div>
      </div>
      <AndroidTabletKey21 />
      <AndroidTabletKey22 />
      <AndroidTabletKey23 />
      <AndroidTabletKey24 />
      <AndroidTabletKey25 />
      <AndroidTabletKey26 />
      <AndroidTabletKey27 />
      <AndroidTabletKey28 />
      <TextKey />
      <TextKey1 />
      <SpecialKey />
      <SpecialKey1 />
      <SpecialKey2 />
      <SpecialKey3 />
      <SpecialKey4 />
    </div>
  );
}

export default function AddProduct() {
  return (
    <div className="relative size-full" data-name="Add product">
      <div className="absolute bg-[#f4f4f5] content-stretch flex flex-col h-[1200px] items-start left-0 top-0 w-[1920px]" data-name="POS - Lên đơn">
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
      <SideSheet />
      <div className="absolute bg-[#f2f6ff] bottom-0 h-[420px] left-0 overflow-clip right-0" data-name="Android Keyboard - Tablets">
        <LettersLayout />
      </div>
    </div>
  );
}