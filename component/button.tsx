interface BtnProps {
  text?: string;
  hideIcon?: boolean;
  className?: string;
}

export default function Button({ text, hideIcon, className }: BtnProps) {
  return (
    <button
      className={`
        relative
        px-6 py-2
        border border-(--primary)
        text-[14px]
        rounded-sm
        overflow-hidden
        cursor-pointer
        flex items-center gap-[5px]
        group/btn
        ${className ?? ""}
      `}
    >
      {/* Text */}
      <span className="relative z-10 text-white">{text}</span>

      {/* Icon */}
      {!hideIcon && <span className="relative z-10 text-white">→</span>}
      
      <span
        className="
          absolute inset-0
          bg-(--primary)
          translate-x-[-100%]
          transition-transform
          duration-300
          group-hover/btn:translate-x-0
        "
      />
    </button>
  );
}
