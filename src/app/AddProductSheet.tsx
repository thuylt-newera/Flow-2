import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

function TextField({
  label,
  required,
  placeholder,
  value,
  onChange,
  inputRef,
  error,
  autoFocus,
  inputMode,
  onEnter,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  error?: string;
  autoFocus?: boolean;
  inputMode?: "text" | "numeric";
  onEnter?: () => void;
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
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          inputMode={inputMode}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); onEnter?.(); } }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="absolute inset-0 w-full h-full bg-transparent px-[24.5px] font-['Inter:Regular',sans-serif] font-normal text-[28px] text-black placeholder-[#a1a1aa] outline-none rounded-[21px]"
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

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  // Auto-focus name field on mount
  useEffect(() => {
    setTimeout(() => nameRef.current?.focus(), 50);
  }, []);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Vui lòng không để trống";
    if (!price.trim()) e.price = "Vui lòng không để trống";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleCreate = () => {
    if (!validate()) return;
    const priceNum = parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;
    onConfirm(name.trim(), priceNum);
  };

  return (
    <div className="absolute inset-0 size-full" data-name="Add product">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0,0)]" onClick={onClose} />

      {/* Sheet panel */}
      <div
        className="absolute right-0 bg-[#fafafa] flex flex-col overflow-hidden"
        style={{ width: 672, bottom: 0, top: 0 }}
      >
        {/* Header */}
        <div className="relative shrink-0 w-full">
          <div className="flex items-center gap-[21px] p-[21px]">
            <div
              onClick={onClose}
              className="flex items-center justify-center p-[14px] rounded-[14px] shrink-0 size-[56px] cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <X size={36} color="black" />
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
              onChange={setName}
              inputRef={nameRef}
              error={errors.name}
              autoFocus
              onEnter={() => priceRef.current?.focus()}
            />
            <TextField
              label="Giá bán (₫)"
              required
              placeholder="Nhập giá bán"
              value={price ? parseInt(price.replace(/[^0-9]/g, "") || "0", 10).toLocaleString("vi-VN") : ""}
              onChange={(v) => setPrice(v.replace(/[^0-9]/g, ""))}
              inputRef={priceRef}
              inputMode="numeric"
              error={errors.price}
              onEnter={handleCreate}
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
    </div>
  );
}
