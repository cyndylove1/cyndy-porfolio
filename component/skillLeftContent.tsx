import DotIcon from "./dotIcon";
import PurpleIcon from "./purpleIcon";

export default function SkillLeftContent() {
    return (
      <>
        <div className="hidden lg:flex">
          {/* Top-left dots */}
          <div className="absolute top-[5rem] ">
            <DotIcon width={63} height={63} />
          </div>

          {/* Top-right hollow square */}
          <div className="absolute top-[5rem] left-[20rem] w-20 h-20 border border-(--gray)"></div>

          {/* Middle dots */}
          <div className="absolute  top-[11rem] left-[13rem] grid grid-cols-5 gap-1">
            <DotIcon width={63} height={63} />
          </div>

          {/* Small floating square */}
          <div className="absolute top-[17rem] left-[20rem] w-14 h-14 border border-(--gray)"></div>

          {/* Purple overlay squares */}
          <div className="absolute top-[16rem]">
            <PurpleIcon width={113} height={113} />
          </div>
        </div>
      </>
    );
}