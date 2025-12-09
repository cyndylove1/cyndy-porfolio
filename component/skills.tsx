
"use client";
import { AnimatedItem } from "./animatedItem";
import SkillLeftContent from "./skillLeftContent";
import SkillsGrid from "./skillsGrid";
import Title from "./title";

interface SkillsProps {
  showLeft?: boolean; 
}

export default function Skills({ showLeft = false }: SkillsProps) {
  return (
    <section className="w-full relative">
      {/* Title */}
      <div className="lg:px-[4rem] xl:px-[6rem] px-4 md:px-8 mb-10">
        <Title text="skills" width={200} />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-[4rem] xl:px-[6rem] md:px-8 px-4">
        <AnimatedItem index={0} delay={0.05}>
          {showLeft && <SkillLeftContent />}
        </AnimatedItem>

        {/* Skills Grid */}
        <AnimatedItem index={1} delay={0.1}>
          <SkillsGrid cols="grid-cols-1 md:grid-cols-3" />
        </AnimatedItem>
      </div>
    </section>
  );
}
