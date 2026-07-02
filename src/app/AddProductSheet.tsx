import { useState, useRef, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import AndroidKeyboardTablets from "@/imports/AndroidKeyboardTablets/index";
import AndroidKeyboardTablets1 from "@/imports/AndroidKeyboardTablets-1/index";

// Map key layout positions to characters for click detection
const KEY_CHARS: Record<string, string> = {
  q:"q",w:"w",e:"e",r:"r",t:"t",y:"y",u:"u",i:"i",o:"o",p:"p",
  a:"a",s:"s",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",l:"l",
  z:"z",x:"x",c:"c",v:"v",b:"b",n:"n",m:"m",
  "!":"!","?":"?",",":","," ":" ",".":",",
  "1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","0":"0",
};

function TextField({
  label,
  required,
  placeholder,
  value,
  inputRef,
  onFocus,
  onBlur,
  error,
  autoFocus,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onFocus: () => void;
  onBlur: () => void;
  error?: string;
  autoFocus?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const borderClass = error
    ? "border border-[#f87171] shadow-[0px_0px_0px_3px_rgba(248,113,113,0.25)]"
    : focused
    ? "border border-[#a1a1aa] shadow-[0px_0px_0px_3px_rgba(148,163,184,0.5)]"
    : "border border-[#d4d4d8] shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)]";

  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[28px] text-black w-full">
        <span className="leading-[42px]">{label}</span>
        {required && <span className="leading-[42px] text-[#b91c1c]">*</span>}
      </p>
      <div className={`bg-white h-[70px] relative rounded-[21px] shrink-0 w-full ${borderClass}`}>
        <input
          ref={inputRef}
          readOnly
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onFocus={() => { setFocused(true); onFocus(); }}
          onBlur={() => { setFocused(false); onBlur(); }}
          className="absolute inset-0 w-full h-full bg-transparent px-[24.5px] font-['Inter:Regular',sans-serif] font-normal text-[28px] text-black placeholder-[#a1a1aa] outline-none rounded-[21px] cursor-pointer"
        />
      </div>
      {error && (
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[21px] text-[#b91c1c] leading-[28px]">{error}</p>
      )}
    </div>
  );
}

interface Props {
  onClose: () => void;
  onConfirm: (name: string, price: number) => void;
}

export default function AddProductSheet({ onClose, onConfirm }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState<{ name?: string; price?: string }>({});
  const [activeField, setActiveField] = useState<"name" | "price" | null>("name");
  const [keyboardVisible, setKeyboardVisible] = useState(true);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  // Auto-focus name field on mount
  useEffect(() => {
    setTimeout(() => nameRef.current?.focus(), 50);
  }, []);

  const handleKeyPress = useCallback((e: React.MouseEvent) => {
    const target = e.target as Element;
    // Find the innermost text node with a single character
    const keyEl = target.closest('[data-name="Android tablet Key"], [data-name="_Android tablet Key"]');

    // Detect delete (backspace)
    const isDelete = !!target.closest('[data-name="Special Key"]:not([class*="bg-\\[#097cfb\\]"]):not([class*="bg-\\[#dde1ec\\]"])')
      || (target.closest('[data-name="Special Key"]') && target.closest('.inset-\\[0_0\\.3\\%_77\\.94\\%_91\\.72\\%\\]'));

    // Get character from key
    let char = "";
    if (keyEl) {
      const ps = keyEl.querySelectorAll("p");
      // Take the first large char (the main letter)
      for (const p of Array.from(ps)) {
        const txt = p.textContent?.trim() ?? "";
        if (txt.length === 1) { char = txt; break; }
      }
    }

    // Detect spacebar (StandardKeyLcase)
    const isSpace = !!target.closest('[data-name="Standard Key / Lcase"]');
    if (isSpace) char = " ";

    // Detect special keys
    const specialKey = target.closest('[data-name="Special Key"]');
    const isBackspace = specialKey && specialKey.classList.contains("inset-[0_0.3%_77.94%_91.72%]");
    const isEnter = specialKey && specialKey.classList.contains("bg-[#097cfb]");

    if (isEnter) {
      // Move focus to next field or close keyboard
      if (activeField === "name") priceRef.current?.focus();
      else setKeyboardVisible(false);
      return;
    }

    // Apply to active field
    if (activeField === "name") {
      if (char) setName(prev => prev + char);
      else if (isBackspace) setName(prev => prev.slice(0, -1));
    } else if (activeField === "price") {
      if (char) setPrice(prev => prev + char);
      else if (isBackspace) setPrice(prev => prev.slice(0, -1));
    }
  }, [activeField]);

  // Also handle delete via text content matching
  const handleKeyClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const target = e.target as Element;

    // Backspace: Special Key with Delete icon
    const deleteKey = target.closest('[data-name="Special Key"]');
    if (deleteKey) {
      // Check if it's the delete key (top-right position with delete SVG)
      if (deleteKey.className.includes("91.72%") && deleteKey.className.includes("77.94%")) {
        if (activeField === "name") setName(prev => prev.slice(0, -1));
        else if (activeField === "price") setPrice(prev => prev.slice(0, -1));
        return;
      }
      // Enter key (blue)
      if (deleteKey.className.includes("097cfb")) {
        if (activeField === "name") priceRef.current?.focus();
        else setKeyboardVisible(false);
        return;
      }
      return;
    }

    // Spacebar
    if (target.closest('[data-name="Standard Key / Lcase"]')) {
      if (activeField === "name") setName(prev => prev + " ");
      else if (activeField === "price") setPrice(prev => prev + " ");
      return;
    }

    // Regular key — read main character (first <p> with 1 char)
    const keyEl = target.closest('[data-name="Android tablet Key"], [data-name="_Android tablet Key"]');
    if (!keyEl) return;

    const ps = keyEl.querySelectorAll("p");
    let char = "";
    for (const p of Array.from(ps)) {
      const txt = p.textContent?.trim() ?? "";
      if (txt.length === 1) { char = txt; break; }
    }
    if (!char) return;

    if (activeField === "name") setName(prev => prev + char);
    else if (activeField === "price") setPrice(prev => prev + char);
  }, [activeField]);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Vui lòng không để trống";
    if (!price.trim()) e.price = "Vui lòng không để trống";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleCreate = () => {
    if (!validate()) return;
    const priceNum = (parseInt(price.replace(/[^0-9]/g, ""), 10) || 0) * 1000;
    onConfirm(name.trim(), priceNum);
  };

  const sheetBottom = keyboardVisible ? 420 : 0;

  return (
    <div className="absolute inset-0 size-full" data-name="Add product">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0,0)]" onClick={onClose} />

      {/* Sheet panel */}
      <div
        className="absolute right-0 bg-[#fafafa] flex flex-col overflow-hidden transition-all duration-200"
        style={{ width: 672, bottom: sheetBottom, top: 0 }}
      >
        {/* Header */}
        <div className="relative shrink-0 w-full">
          <div className="flex items-center gap-[21px] p-[21px]">
            <div
              onClick={onClose}
              className="flex items-center justify-center p-[14px] rounded-[14px] shrink-0 size-[56px] cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <X size={28} color="black" />
            </div>
            <div className="flex-1 text-center">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[31.5px] text-black leading-[49px]">Tạo sản phẩm mới</p>
            </div>
            <div className="size-[56px] shrink-0 opacity-0" />
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-[28px] items-start p-[28px]">
            <TextField
              label="Tên sản phẩm"
              required
              placeholder="Nhập tên sản phẩm"
              value={name}
              inputRef={nameRef}
              onFocus={() => { setActiveField("name"); setKeyboardVisible(true); }}
              onBlur={() => {}}
              error={errors.name}
              autoFocus
            />
            <TextField
              label="Giá bán (₫)"
              required
              placeholder="Nhập giá bán"
              value={price ? (parseInt(price.replace(/[^0-9]/g, "") || "0") * 1000).toLocaleString("vi-VN") : ""}
              inputRef={priceRef}
              onFocus={() => { setActiveField("price"); setKeyboardVisible(true); }}
              onBlur={() => {}}
              error={errors.price}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative shrink-0 w-full">
          <div aria-hidden className="absolute border-[#d4d4d8] border-solid border-t inset-0 pointer-events-none" />
          <div className="bg-white p-[28px]">
            <div
              onClick={handleCreate}
              className="w-full h-[70px] relative rounded-[14px] cursor-pointer shadow-[0px_1px_2px_0px_rgba(26,26,26,0.05)] transition-opacity hover:opacity-90 active:opacity-75"
              style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(90deg, rgb(220,38,38) 0%, rgb(220,38,38) 100%)" }}
            >
              <div className="flex items-center justify-center size-full overflow-clip rounded-[inherit]">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] text-[28px] text-white whitespace-nowrap">Tạo</p>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden className="absolute border-[#e4e4e7] border-l border-solid inset-0 pointer-events-none" />
      </div>

      {/* Keyboard */}
      {keyboardVisible && (
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 420 }}
          onClick={handleKeyClick}
        >
          {activeField === "price" ? <AndroidKeyboardTablets1 /> : <AndroidKeyboardTablets />}
        </div>
      )}
    </div>
  );
}
