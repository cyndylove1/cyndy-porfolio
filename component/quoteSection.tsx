import { AnimatedItem } from "../component/animatedItem";
import SquareIcon from "./squareIcon";

export default function QuoteSection() {
  return (
    <>
      <section>
        <section className="relative z-0 mx-4 lg:mx-0">
          <div className="relative w-full py-[2rem] flex justify-center items-center">
            {/* Quote Box */}
            <AnimatedItem index={0} delay={0.05}>
              <div className="relative border border-[#ABB2BF] rounded-sm px-8 py-6 max-w-2xl text-gray-200">
                <span className="absolute -top-3 left-4 text-(--gray) text-4xl">
                  “
                </span>

                <p className="font-[400] text-[15px] text-white tracking-tight">
                  JavaScript is the duct tape of the Internet
                </p>

                <div className="absolute -bottom-5 right-10 border border-[#ABB2BF] rounded-sm px-4 bg-[#282c34]">
                  <span className="text-(--gray) text-2xl">“</span>
                  <span className="font-mono text-sm text-white">
                    – Brendan Eich
                  </span>
                </div>
              </div>
            </AnimatedItem>

            {/* Square Icon */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden lg:flex">
              <SquareIcon />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
