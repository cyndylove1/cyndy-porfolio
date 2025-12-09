interface PurpleLineProps {
  className?: string;
  width?: number;
}

export default function PurpleLine({ className, width }: PurpleLineProps) {
  return (
    <div
      style={{ width: width ? `${width}px` : "100%" }} 
      className={`h-[2px] bg-(--primary) hidden md:flex ${className}`}
    ></div>
  );
}
