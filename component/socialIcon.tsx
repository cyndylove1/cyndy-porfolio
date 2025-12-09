"use client";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function SocialBar() {
  return (
    <div className="fixed left-0 top-[10px] z-50 flex flex-col items-center text-gray-400 text-[20px] hidden md:flex">
      {/* vertical line above icons */}
      <div className="w-[1px] h-[140px] bg-(--gray) mb-4"></div>

      {/* icons */}
      <div className="text-(--gray)">
        <a
          href="https://github.com/cyndylove1"
          target="_blank"
          className="hover:text-white"
        >
          <IoLogoGithub className="hover:text-white cursor-pointer mb-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/cyndylove1/"
          target="_blank"
          className="hover:text-white"
        >
          <FaLinkedin className="hover:text-white cursor-pointer mb-4" />
        </a>

        <a
          href="mailto:Nwekecynthia2015@gmail.com"
          target="_blank"
          className="hover:text-white"
        >
          <MdEmail className="hover:text-white cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
