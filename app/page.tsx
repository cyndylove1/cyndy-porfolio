"use client";

import Navbar from "@/component/navbar";
import SocialBar from "@/component/socialIcon";
import ImageSection from "@/component/imageSection";
import QuoteSection from "@/component/quoteSection";
import Projects from "./projects/page";
import Project from "@/component/project";
import Skills from "@/component/skills";
import DotIcon from "@/component/dotIcon";
import AboutMe from "@/component/aboutMe";
import Contact from "@/component/contact";
import HeroContent from "@/component/heroContent";

export default function Home() {
  return (
    <main className="h-full text-white relative overflow-hidden">
      {/* Main content wrapper */}
      <div className="">
        {/* HERO SECTION */}
        <HeroContent />
        {/* QUOTE SECTION */}
        <QuoteSection />
        {/*PROJECTS */}
        <Project />
        {/* SKILLS */}
        <Skills showLeft />
        {/* ABOUT */}
        <AboutMe />
        {/* CONTACT */}
        <Contact />
      </div>
    </main>
  );
}
