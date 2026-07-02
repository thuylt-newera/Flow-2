import svgPaths from "./svg-qv3t4qugy4";
import imgLogo from "./78d8b83757960d711682f959a828bea65109f837.png";

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
      <div className="h-[840px] relative shrink-0 w-full" data-name="[Content] Message">
        <div className="content-stretch flex flex-col gap-[42px] items-start p-[56px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[84px] text-black tracking-[-2.1px] w-[828px]">Dì Thư nói và trợ lý Winnie sẽ làm theo</p>
          <Guide />
        </div>
      </div>
      <AiBottomNav />
    </div>
  );
}

function AiArea() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-end justify-self-stretch overflow-clip relative rounded-[28px] self-stretch shrink-0" data-name="AI area">
      <Header />
      <Container />
    </div>
  );
}

function CurrencyName() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Currency name">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[70px] not-italic relative shrink-0 text-[40.635px] text-center text-white tracking-[-1.575px] whitespace-nowrap">₫</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[56px] min-w-full not-italic relative shrink-0 text-[42px] text-white tracking-[-0.6px] w-[min-content]">Doanh thu hôm nay</p>
      <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="Currency">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[70px] not-italic relative shrink-0 text-[63px] text-center text-white tracking-[-1.575px] whitespace-nowrap">1.234.000</p>
        <CurrencyName />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[49px] min-w-full not-italic relative shrink-0 text-[31.5px] text-white w-[min-content]">Đã bán 10 đơn</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-full">
      <div className="bg-[#f4f4f5] flex-[1_0_0] h-[224px] min-w-[64px] relative rounded-[21px]" data-name="_Feature button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[28px] items-center justify-center min-w-[inherit] p-[21px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[70px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / shopping-cart">
                <div className="absolute inset-[4.39%_3.8%_4.18%_4.38%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.2676 64.0057">
                    <path d={svgPaths.p3f0b1e00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-full not-italic relative shrink-0 text-[31.5px] text-black text-center w-[min-content]">Bán hàng</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f5] flex-[1_0_0] h-[224px] min-w-[64px] relative rounded-[21px]" data-name="_Feature button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[28px] items-center justify-center min-w-[inherit] p-[21px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[70px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / package">
                <div className="absolute inset-[4.19%_8.34%_4.17%_8.34%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.3191 64.1467">
                    <path clipRule="evenodd" d={svgPaths.p151f7b00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-full not-italic relative shrink-0 text-[31.5px] text-black text-center w-[min-content]">Đơn đã bán</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f5] flex-[1_0_0] h-[224px] min-w-[64px] relative rounded-[21px]" data-name="_Feature button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[28px] items-center justify-center min-w-[inherit] p-[21px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[70px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / book-user">
                <div className="absolute inset-[4.18%_12.51%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.4872 64.151">
                    <path d={svgPaths.p38139c00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-full not-italic relative shrink-0 text-[31.5px] text-black text-center w-[min-content]">Sổ khách hàng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-full">
      <div className="bg-[#f4f4f5] flex-[1_0_0] h-[224px] min-w-[64px] relative rounded-[21px]" data-name="_Feature button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[28px] items-center justify-center min-w-[inherit] p-[21px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[70px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / warehouse">
                <div className="absolute inset-[9%_4.18%_4.18%_4.18%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.151 60.775">
                    <path d={svgPaths.p93ad580} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-full not-italic relative shrink-0 text-[31.5px] text-black text-center w-[min-content]">Kho hàng</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f5] flex-[1_0_0] h-[224px] min-w-[64px] relative rounded-[21px]" data-name="_Feature button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[28px] items-center justify-center min-w-[inherit] p-[21px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[70px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / clipboard-list">
                <div className="absolute inset-[4.18%_12.51%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.4872 64.151">
                    <path d={svgPaths.pbae7a00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-full not-italic relative shrink-0 text-[31.5px] text-black text-center w-[min-content]">Đặt hàng NPP</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f5] flex-[1_0_0] h-[224px] min-w-[64px] relative rounded-[21px]" data-name="_Feature button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[28px] items-center justify-center min-w-[inherit] p-[21px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[70px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / switch-camera">
                <div className="absolute inset-[4.18%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.151 64.1534">
                    <path d={svgPaths.p17a60200} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-full not-italic relative shrink-0 text-[31.5px] text-black text-center w-[min-content]">Công nợ NPP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-h-px relative w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="gap-x-[28px] gap-y-[28px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] pb-[28px] px-[28px] relative size-full">
        <AiArea />
        <div className="bg-white relative rounded-[28px] self-stretch shrink-0 w-[924px]" data-name="Native area - Home">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[42px] items-start p-[42px] relative size-full">
              <div className="bg-gradient-to-r from-[#dc2626] relative rounded-[28px] shrink-0 to-[#f59e0b] via-[#ea580c] via-[50.935%] w-full" data-name="Revenue card">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[21px] items-center p-[42px] relative size-full">
                    <Frame3 />
                    <div className="bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] shrink-0 size-[70px]" data-name="Neutral Button">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
                        <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / chevron-right">
                          <div className="absolute inset-[20.84%_33.34%]" data-name="Vector (Stroke)">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9938 24.4938">
                              <path d={svgPaths.p8c9e880} fill="var(--fill-0, #27272A)" id="Vector (Stroke)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Frame2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PosHome() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start relative size-full" data-name="POS - Home">
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