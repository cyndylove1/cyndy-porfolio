'use client';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { AnimatedItem } from "./animatedItem";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="w-full text-gray-300 py-10 lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 border-t-[1px] border-(--gray)">
      {/* TOP SECTION */}
      <div className="lg:max-w-6xl mx-auto flex justify-between items-start gap-10">
        {/* LEFT SIDE */}
        <AnimatedItem index={0} delay={0.05}>
          <div>
            <Logo />
            <p className="mt-4 text-sm text-(--gray)">Frontend Developer</p>
          </div>
        </AnimatedItem>

        {/* RIGHT SIDE */}
        <AnimatedItem index={1} delay={0.1}>
          <div className="text-right">
            <h3 className="text-white font-semibold mb-3">Media</h3>

            <div className="flex md:justify-end gap-4 text-gray-400 text-xl">
              <a
                href="https://github.com/cyndylove1"
                target="_blank"
                className="hover:text-white"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/cyndylove1/"
                target="_blank"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </AnimatedItem>
      </div>

      {/* COPYRIGHT */}
      <AnimatedItem index={2} delay={0.15}>
        <div className="mt-12 text-center text-sm text-gray-500">
          &copy; 2024 Nweke Cynthia Chinenye.
        </div>
      </AnimatedItem>
    </footer>
  );
}
