import Link from "next/link";
import { SiCypress } from "react-icons/si";
export default function Logo() {
  return (
    <>
      <Link href="/">
        <div className="flex items-center gap-[10px] text-white">
          <SiCypress size={20} />
          <h1 className="font-semibold text-[20px]">Cyndy</h1>
        </div>
      </Link>
    </>
  );
}
