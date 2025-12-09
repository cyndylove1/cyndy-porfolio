interface BtnProps {
  text?: string;
  hideIcon?: boolean;
}

export default function Button({ text, hideIcon }: BtnProps) {
  return (
    <button className="relative px-6 py-2 border-[1px] border-(--primary) text-[14px] rounded-sm overflow-hidden group cursor-pointer flex items-center gap-[5px]">
      {/* Text */}
      <span className="relative z-10 text-white">{text}</span>

      {/* Icon */}
      {!hideIcon && <span className="relative z-10 text-white">→</span>}

      {/* Hover Mask */}
      <span className="absolute inset-0 bg-(--primary) translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    </button>
  );
}
