import svgPaths from "./svg-hlq2eb43m8";
type NeutralButtonProps = {
  className?: string;
  iconOnly?: boolean;
  label?: string;
  size?: "Default" | "Medium" | "Small" | "XSmall";
  state?: "Disabled" | "Enabled" | "Active" | "Focus" | "Hover" | "Loading";
  type?: "Primary" | "Secondary" | "Ghost" | "Tertiary";
};

function NeutralButton({ className, iconOnly = false, label = "Label", size = "Default", state = "Enabled", type = "Primary" }: NeutralButtonProps) {
  if (type === "Ghost" && state === "Disabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Ghost, State=Disabled, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Ghost, State=Enabled, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6604 18.6604">
                <path d={svgPaths.p41fc7e2} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Enabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[49px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Enabled, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Secondary, State=Disabled, Icon only=Yes, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Secondary, State=Enabled, Icon only=Yes, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Enabled, Icon only=No, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Enabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Enabled, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Ghost, State=Enabled, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[14px] h-[70px] items-center justify-center px-[28px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Enabled, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[#27272a] text-[28px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Ghost, State=Enabled, Icon only=Yes, Size=Medium">
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
    );
  }
  if (type === "Primary" && state === "Enabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[42px] items-center justify-center px-[14px] relative rounded-[14px]"} data-name="Type=Primary, State=Enabled, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Enabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Primary, State=Enabled, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Enabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Primary, State=Enabled, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Enabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Primary, State=Enabled, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Enabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Primary, State=Enabled, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Enabled, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#27272a] text-[24.5px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[49px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Enabled, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[42px] items-center justify-center px-[14px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Enabled, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Tertiary, State=Enabled, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Tertiary, State=Enabled, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Tertiary, State=Enabled, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Enabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Tertiary, State=Enabled, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Enabled, Icon only=No, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center px-[14px] relative rounded-[14px]"} data-name="Type=Secondary, State=Enabled, Icon only=No, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center px-[28px] relative rounded-[14px]"} data-name="Type=Secondary, State=Enabled, Icon only=No, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Secondary, State=Enabled, Icon only=Yes, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Secondary, State=Enabled, Icon only=Yes, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Enabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Secondary, State=Enabled, Icon only=Yes, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[56px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Enabled, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[49px] items-center justify-center px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Enabled, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[42px] items-center justify-center px-[14px] relative rounded-[14px]"} data-name="Type=Ghost, State=Enabled, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && !iconOnly && size === "Default") {
    return (
      <div className={className || "content-stretch flex gap-[14px] h-[70px] items-center justify-center px-[28px] relative rounded-[14px]"} data-name="Type=Ghost, State=Enabled, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Enabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Ghost, State=Enabled, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[56px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && !iconOnly && size === "Small") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[49px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[42px] items-center justify-center overflow-clip px-[14px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && !iconOnly && size === "Default") {
    return (
      <div className={className || "content-stretch flex gap-[14px] h-[70px] items-center justify-center overflow-clip px-[28px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && iconOnly && size === "Medium") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && iconOnly && size === "Small") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Hover" && iconOnly && size === "Default") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Type=Primary, State=Hover, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[56px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#27272a] text-[24.5px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && !iconOnly && size === "Small") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[49px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "content-stretch flex gap-[10.5px] h-[42px] items-center justify-center overflow-clip px-[14px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && !iconOnly && size === "Default") {
    return (
      <div className={className || "content-stretch flex gap-[14px] h-[70px] items-center justify-center overflow-clip px-[28px] relative rounded-[14px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[#27272a] text-[28px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && iconOnly && size === "Medium") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && iconOnly && size === "Small") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Hover" && iconOnly && size === "Default") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(244, 244, 245) 0%, rgb(244, 244, 245) 100%)" }} data-name="Type=Tertiary, State=Hover, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] h-[56px] relative rounded-[14px]"} data-name="Type=Secondary, State=Hover, Icon only=No, Size=Medium">
        <div className="content-stretch flex gap-[10.5px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] h-[49px] relative rounded-[14px]"} data-name="Type=Secondary, State=Hover, Icon only=No, Size=Small">
        <div className="content-stretch flex gap-[10.5px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] h-[42px] relative rounded-[14px]"} data-name="Type=Secondary, State=Hover, Icon only=No, Size=XSmall">
        <div className="content-stretch flex gap-[10.5px] items-center justify-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] h-[70px] relative rounded-[14px]"} data-name="Type=Secondary, State=Hover, Icon only=No, Size=Default">
        <div className="content-stretch flex gap-[14px] items-center justify-center overflow-clip px-[28px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Secondary, State=Hover, Icon only=Yes, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Secondary, State=Hover, Icon only=Yes, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Secondary, State=Hover, Icon only=Yes, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Hover" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Secondary, State=Hover, Icon only=Yes, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Hover, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[49px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Hover, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[42px] items-center justify-center overflow-clip px-[14px] relative rounded-[14px]"} data-name="Type=Ghost, State=Hover, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[14px] h-[70px] items-center justify-center overflow-clip px-[28px] relative rounded-[14px]"} data-name="Type=Ghost, State=Hover, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Ghost, State=Hover, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Ghost, State=Hover, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Ghost, State=Hover, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Hover" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Ghost, State=Hover, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[56px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Primary, State=Focus, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[49px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Primary, State=Focus, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[42px] items-center justify-center overflow-clip px-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Primary, State=Focus, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[14px] h-[70px] items-center justify-center overflow-clip px-[28px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Primary, State=Focus, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[56px]"} data-name="Type=Primary, State=Focus, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[49px]"} data-name="Type=Primary, State=Focus, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center overflow-clip p-[10.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[42px]"} data-name="Type=Primary, State=Focus, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Focus" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[70px]"} data-name="Type=Primary, State=Focus, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Tertiary, State=Focus, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[#27272a] text-[24.5px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[49px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Tertiary, State=Focus, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[42px] items-center justify-center overflow-clip px-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Tertiary, State=Focus, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[14px] h-[70px] items-center justify-center overflow-clip px-[28px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Tertiary, State=Focus, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[#27272a] text-[28px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[56px]"} data-name="Type=Tertiary, State=Focus, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[49px]"} data-name="Type=Tertiary, State=Focus, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center overflow-clip p-[10.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[42px]"} data-name="Type=Tertiary, State=Focus, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Focus" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[70px]"} data-name="Type=Tertiary, State=Focus, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white h-[56px] relative rounded-[14px]"} data-name="Type=Secondary, State=Focus, Icon only=No, Size=Medium">
        <div className="content-stretch flex gap-[10.5px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white h-[49px] relative rounded-[14px]"} data-name="Type=Secondary, State=Focus, Icon only=No, Size=Small">
        <div className="content-stretch flex gap-[10.5px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white h-[42px] relative rounded-[14px]"} data-name="Type=Secondary, State=Focus, Icon only=No, Size=XSmall">
        <div className="content-stretch flex gap-[10.5px] items-center justify-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white h-[70px] relative rounded-[14px]"} data-name="Type=Secondary, State=Focus, Icon only=No, Size=Default">
        <div className="content-stretch flex gap-[14px] items-center justify-center overflow-clip px-[28px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white relative rounded-[14px] size-[56px]"} data-name="Type=Secondary, State=Focus, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
              <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                  <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white relative rounded-[14px] size-[49px]"} data-name="Type=Secondary, State=Focus, Icon only=Yes, Size=Small">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
              <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                  <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white relative rounded-[14px] size-[42px]"} data-name="Type=Secondary, State=Focus, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[10.5px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
              <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                  <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Secondary" && state === "Focus" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white relative rounded-[14px] size-[70px]"} data-name="Type=Secondary, State=Focus, Icon only=Yes, Size=Default">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
              <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                  <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" />
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Ghost, State=Focus, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center overflow-clip px-[17.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Ghost, State=Focus, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center overflow-clip px-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Ghost, State=Focus, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center overflow-clip px-[28px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"} data-name="Type=Ghost, State=Focus, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[56px]"} data-name="Type=Ghost, State=Focus, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[49px]"} data-name="Type=Ghost, State=Focus, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center overflow-clip p-[10.5px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[42px]"} data-name="Type=Ghost, State=Focus, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Focus" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[14px] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)] size-[70px]"} data-name="Type=Ghost, State=Focus, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Loading, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Loading, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Primary, State=Loading, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Primary, State=Loading, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Primary, State=Loading, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Primary, State=Loading, Icon only=Yes, Size=Small">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Primary, State=Loading, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Loading" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Primary, State=Loading, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
            <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Loading, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[24.5px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Loading, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch drop-shadow-[0px_1px_1px_rgba(26,26,26,0.05)] flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Loading, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Loading, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[28px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Tertiary, State=Loading, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Tertiary, State=Loading, Icon only=Yes, Size=Small">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Tertiary, State=Loading, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Loading" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[17.5px] relative rounded-[14px] size-[70px]"} data-name="Type=Tertiary, State=Loading, Icon only=Yes, Size=Default">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Loading, Icon only=No, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Loading, Icon only=No, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Secondary, State=Loading, Icon only=No, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Secondary, State=Loading, Icon only=No, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Secondary, State=Loading, Icon only=Yes, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Secondary, State=Loading, Icon only=Yes, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
            <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Secondary, State=Loading, Icon only=Yes, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
            <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Loading" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Secondary, State=Loading, Icon only=Yes, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Loading, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Loading, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Ghost, State=Loading, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Ghost, State=Loading, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Ghost, State=Loading, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Ghost, State=Loading, Icon only=Yes, Size=Small">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Ghost, State=Loading, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[28px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Loading" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Ghost, State=Loading, Icon only=Yes, Size=Default">
        <div className="content-stretch flex items-center justify-center opacity-50 relative shrink-0 size-[35px]" data-name="Spinner">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
            <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
              <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3301 13.3301">
                  <path d={svgPaths.pd2dbf00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Disabled, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Disabled, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Primary, State=Disabled, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Primary, State=Disabled, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Primary, State=Disabled, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Primary, State=Disabled, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Primary, State=Disabled, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Disabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Primary, State=Disabled, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Disabled, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[24.5px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Disabled, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Disabled, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Disabled, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[28px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Tertiary, State=Disabled, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Tertiary, State=Disabled, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Tertiary, State=Disabled, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Disabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Tertiary, State=Disabled, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Disabled, Icon only=No, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Disabled, Icon only=No, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Secondary, State=Disabled, Icon only=No, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Secondary, State=Disabled, Icon only=No, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Secondary, State=Disabled, Icon only=Yes, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Secondary, State=Disabled, Icon only=Yes, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Disabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Secondary, State=Disabled, Icon only=Yes, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Disabled" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Disabled, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Disabled" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-50 px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Disabled, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Disabled" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-50 px-[14px] relative rounded-[14px]"} data-name="Type=Ghost, State=Disabled, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Disabled" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-50 px-[28px] relative rounded-[14px]"} data-name="Type=Ghost, State=Disabled, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Disabled" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Ghost, State=Disabled, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Disabled" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Ghost, State=Disabled, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Disabled" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-50 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Ghost, State=Disabled, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Active, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic relative shrink-0 text-[24.5px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Primary, State=Active, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-60 px-[14px] relative rounded-[14px]"} data-name="Type=Primary, State=Active, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-60 px-[28px] relative rounded-[14px]"} data-name="Type=Primary, State=Active, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Primary, State=Active, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Primary, State=Active, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-60 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Primary, State=Active, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Primary" && state === "Active" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-black content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Primary, State=Active, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Active, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[24.5px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Active, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-60 px-[14px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Active, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[21px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-60 px-[28px] relative rounded-[14px]"} data-name="Type=Tertiary, State=Active, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[#27272a] text-[28px] whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Tertiary, State=Active, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Tertiary, State=Active, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-60 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Tertiary, State=Active, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Tertiary" && state === "Active" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-[#f4f4f5] content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Tertiary, State=Active, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Active, Icon only=No, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Secondary, State=Active, Icon only=No, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-60 px-[14px] relative rounded-[14px]"} data-name="Type=Secondary, State=Active, Icon only=No, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-60 px-[28px] relative rounded-[14px]"} data-name="Type=Secondary, State=Active, Icon only=No, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Secondary, State=Active, Icon only=Yes, Size=Medium">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Secondary, State=Active, Icon only=Yes, Size=Small">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Secondary, State=Active, Icon only=Yes, Size=XSmall">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[16px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && state === "Active" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Secondary, State=Active, Icon only=Yes, Size=Default">
        <div aria-hidden className="absolute border border-[#a1a1aa] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && !iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[56px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Active, Icon only=No, Size=Medium">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[35px] not-italic opacity-50 relative shrink-0 text-[24.5px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && !iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[49px] items-center justify-center opacity-60 px-[17.5px] relative rounded-[14px]"} data-name="Type=Ghost, State=Active, Icon only=No, Size=Small">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && !iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[10.5px] h-[42px] items-center justify-center opacity-60 px-[14px] relative rounded-[14px]"} data-name="Type=Ghost, State=Active, Icon only=No, Size=XSmall">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic opacity-50 relative shrink-0 text-[21px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && !iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex gap-[14px] h-[70px] items-center justify-center opacity-60 px-[28px] relative rounded-[14px]"} data-name="Type=Ghost, State=Active, Icon only=No, Size=Default">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic opacity-50 relative shrink-0 text-[28px] text-black whitespace-nowrap">{label}</p>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && iconOnly && size === "Medium") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[56px]"} data-name="Type=Ghost, State=Active, Icon only=Yes, Size=Medium">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[35px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && iconOnly && size === "Small") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[49px]"} data-name="Type=Ghost, State=Active, Icon only=Yes, Size=Small">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && iconOnly && size === "XSmall") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[10.5px] relative rounded-[14px] size-[42px]"} data-name="Type=Ghost, State=Active, Icon only=Yes, Size=XSmall">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Ghost" && state === "Active" && iconOnly && size === "Default") {
    return (
      <div className={className || "bg-white content-stretch flex items-center justify-center opacity-60 p-[14px] relative rounded-[14px] size-[70px]"} data-name="Type=Ghost, State=Active, Icon only=Yes, Size=Default">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 overflow-clip relative shrink-0 size-[42px]" data-name="Icon Placeholder">
          <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / plus">
            <div className="absolute inset-[16.68%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6631 10.6631">
                <path d={svgPaths.p1942a900} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "bg-black content-stretch flex gap-[14px] h-[70px] items-center justify-center px-[28px] relative rounded-[14px]"} data-name="Type=Primary, State=Enabled, Icon only=No, Size=Default">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">{label}</p>
    </div>
  );
}
type InputGroupAddonProps = {
  className?: string;
  children?: React.ReactNode | null;
};

function InputGroupAddon({ className, children = null }: InputGroupAddonProps) {
  return (
    <div className={className || "content-stretch flex items-center relative"} data-name="Input Group Addon">
      <div className="content-stretch flex gap-[14px] items-center pb-[10.5px] pt-[14px] px-[17.5px] relative shrink-0" data-name="Slot">
        {children || (
          <>
            <div className="bg-black content-stretch flex items-center justify-center py-[10.5px] relative rounded-[9999px] shrink-0 size-[28px]" data-name="Circle">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[12px]" data-name="Icon Placeholder">
                <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / check">
                  <div className="absolute inset-[20.84%_12.51%_25.01%_12.51%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99773 6.49773">
                      <path d={svgPaths.p30cba800} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Spinner">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px overflow-clip relative" data-name="Icon Placeholder">
                <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / loader-circle">
                  <div className="absolute inset-[8.34%_8.34%_8.35%_8.34%]" data-name="Vector (Stroke)">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3276 23.3276">
                      <path d={svgPaths.p407f800} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
              <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / search">
                <div className="absolute inset-[8.34%_8.35%_8.35%_8.34%]" data-name="Vector (Stroke)">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3267 23.3267">
                    <path d={svgPaths.p144c9600} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
            <NeutralButton className="bg-black content-stretch flex gap-[10.5px] h-[49px] items-center justify-center px-[17.5px] relative rounded-[14px] shrink-0" size="Small" />
            <div className="bg-[#f4f4f5] content-stretch flex gap-[7px] h-[35px] items-center justify-center min-w-[35px] overflow-clip p-[7px] relative rounded-[14px] shrink-0" data-name="Kbd">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[21px] text-center whitespace-nowrap">
                <p className="leading-none">⌘</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
type InputGroupProps = {
  className?: string;
  block?: boolean;
  children?: React.ReactNode | null;
  error?: boolean;
  state?: "Enabled" | "Focus" | "Filled" | "Disabled";
  type?: "Text" | "Textarea";
};

export default function InputGroup({ className, block = false, children = null, error = false, state = "Enabled", type = "Text" }: InputGroupProps) {
  const isTextAndEnabledAndErrorAndBlock = type === "Text" && state === "Enabled" && error && block;
  const isTextAndEnabledAndNotErrorAndBlock = type === "Text" && state === "Enabled" && !error && block;
  const isTextAndFilledAndErrorAndBlock = type === "Text" && state === "Filled" && error && block;
  const isTextareaAndFilledAndNotBlock = type === "Textarea" && state === "Filled" && !block;
  return (
    <div className={className || `bg-white relative rounded-[21px] w-[400px] ${state === "Disabled" && !error && ((type === "Textarea" && !block) || (type === "Text" && block)) ? "opacity-50" : type === "Text" && state === "Filled" && error && !block ? "h-[56px]" : type === "Text" && state === "Disabled" && !error && !block ? "h-[70px] opacity-50" : isTextAndEnabledAndNotErrorAndBlock ? "h-[154.5px]" : (type === "Textarea" && state === "Enabled" && !block) || (type === "Textarea" && state === "Focus" && !block) || (type === "Text" && state === "Focus" && block) || isTextareaAndFilledAndNotBlock || (type === "Text" && state === "Filled" && block) || isTextAndEnabledAndErrorAndBlock ? "" : "h-[70px]"}`}>
      <div className={`content-stretch flex overflow-clip relative rounded-[inherit] size-full ${type === "Text" && !block && (["Focus", "Filled"].includes(state) || (state === "Disabled" && !error) || (state === "Enabled" && error)) ? "items-start justify-center" : (type === "Textarea" && !error && !block) || (type === "Text" && !error && block) || (type === "Textarea" && state === "Enabled" && error && !block) || isTextAndEnabledAndErrorAndBlock || (type === "Textarea" && state === "Focus" && error && !block) || (type === "Text" && state === "Focus" && error && block) || (type === "Textarea" && state === "Filled" && error && !block) || isTextAndFilledAndErrorAndBlock ? "flex-col items-start justify-center" : "items-center"}`}>
        {type === "Textarea" && !block && (["Enabled", "Focus"].includes(state) || (state === "Disabled" && !error)) && (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot">
            {children || (
              <>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input Group Addon">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex gap-[14px] items-center pb-[10.5px] pt-[14px] px-[17.5px] relative size-full">
                      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
                    </div>
                  </div>
                </div>
                <div className="h-[105px] relative shrink-0 w-full" data-name="Input Group Control">
                  <div className="content-stretch flex items-start p-[17.5px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Slot">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[#71717a] text-[28px]">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {type === "Text" && !block && ["Enabled", "Focus"].includes(state) && (
          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Slot">
            {children || (
              <>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Input Group Addon">
                  <div className="content-stretch flex gap-[14px] items-center pl-[17.5px] py-[10.5px] relative shrink-0" data-name="Slot">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
                      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / search">
                        <div className="absolute inset-[8.34%_8.35%_8.35%_8.34%]" data-name="Vector (Stroke)">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3267 23.3267">
                            <path d={svgPaths.p144c9600} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] h-[70px] items-center min-w-px relative" data-name="Input Group Control">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex items-start px-[10.5px] relative size-full">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[#71717a] text-[28px]">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {type === "Text" && !block && (state === "Filled" || (state === "Disabled" && !error)) && (
          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Slot">
            {children || (
              <>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Input Group Addon">
                  <div className="content-stretch flex gap-[14px] items-center pl-[17.5px] py-[10.5px] relative shrink-0" data-name="Slot">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon Placeholder">
                      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Lucide Icons / search">
                        <div className="absolute inset-[8.34%_8.35%_8.35%_8.34%]" data-name="Vector (Stroke)">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3267 23.3267">
                            <path d={svgPaths.p144c9600} fill="var(--fill-0, black)" id="Vector (Stroke)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] h-[70px] items-center min-w-px relative" data-name="Input Group Control">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex items-start px-[10.5px] relative size-full">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[28px] text-black">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {type === "Text" && block && (state === "Focus" || (state === "Enabled" && error)) && (
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Slot">
            {children || (
              <>
                <InputGroupAddon className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
                </InputGroupAddon>
                <div className="content-stretch flex h-[105px] items-start relative shrink-0 w-full" data-name="Input Group Control">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[7px] px-[17.5px] relative size-full">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[#71717a] text-[28px]">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {isTextareaAndFilledAndNotBlock && (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot">
            {children || (
              <>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input Group Addon">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex gap-[14px] items-center pb-[10.5px] pt-[14px] px-[17.5px] relative size-full">
                      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
                    </div>
                  </div>
                </div>
                <div className="h-[105px] relative shrink-0 w-full" data-name="Input Group Control">
                  <div className="content-stretch flex items-start p-[17.5px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Slot">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[28px] text-black">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {isTextAndEnabledAndNotErrorAndBlock && (
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px relative w-full" data-name="Slot">
            {children || (
              <>
                <InputGroupAddon className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
                </InputGroupAddon>
                <div className="content-stretch flex h-[70px] items-start relative shrink-0 w-full" data-name="Input Group Control">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[7px] px-[17.5px] relative size-full">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[#71717a] text-[28px]">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {type === "Text" && state === "Filled" && !error && block && (
          <div className="content-stretch flex flex-col h-[144.5px] items-start justify-center relative shrink-0 w-full" data-name="Slot">
            {children || (
              <>
                <InputGroupAddon className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
                </InputGroupAddon>
                <div className="content-stretch flex h-[105px] items-start relative shrink-0 w-full" data-name="Input Group Control">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[7px] px-[17.5px] relative size-full">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[28px] text-black">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {type === "Text" && state === "Disabled" && !error && block && (
          <div className="content-stretch flex flex-col h-[144.5px] items-start justify-center relative shrink-0 w-full" data-name="Slot">
            {children || (
              <>
                <InputGroupAddon className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
                </InputGroupAddon>
                <div className="content-stretch flex h-[105px] items-start relative shrink-0 w-full" data-name="Input Group Control">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[7px] px-[17.5px] relative size-full">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[#71717a] text-[28px]">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {isTextAndFilledAndErrorAndBlock && (
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Slot">
            {children || (
              <>
                <InputGroupAddon className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#71717a] text-[24.5px] whitespace-nowrap">{`https://`}</p>
                </InputGroupAddon>
                <div className="content-stretch flex h-[105px] items-start relative shrink-0 w-full" data-name="Input Group Control">
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Slot">
                    <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[7px] px-[17.5px] relative size-full">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[42px] min-w-px not-italic relative text-[28px] text-black">Placeholder text</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[21px] ${state === "Focus" && error && (!block || (type === "Text" && block)) ? "border-[#fef2f2] shadow-[0px_0px_0px_3px_rgba(220,38,38,0.4)]" : error && ((state === "Enabled" && !block) || (state === "Filled" && !block) || (type === "Text" && state === "Enabled" && block) || (type === "Text" && state === "Filled" && block)) ? "border-[#fef2f2] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]" : state === "Focus" && !error && (!block || (type === "Text" && block)) ? "border-[#a1a1aa] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]" : "border-[#d4d4d8] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]"}`} />
    </div>
  );
}