import PurpleLine from "./purpleLine";

interface TitleProps {
  text?: string;
  width?: number;
}

export default function Title({ text, width }: TitleProps) {
  return (
    <div className="flex items-center gap-[10px] text-white">
      <h2 className="text-[26px] font-semibold whitespace-nowrap">
        <span className="text-(--primary)">#</span>
        {text}
      </h2>

      <PurpleLine width={width} />
    </div>
  );
}
