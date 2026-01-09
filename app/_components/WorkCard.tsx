"use client";

import Image from "next/image";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

interface WorkExperience {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  companyLogo: string;
  techStack: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
}

interface WorkCardProps {
  experience: WorkExperience;
}

const WorkCard = ({ experience }: WorkCardProps) => {
  const { heading, subheading, description, techStack, companyLogo } = experience;

  return (
    <div className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Image src={companyLogo} alt={heading} width={48} height={48} />
        <div>
          <h3 className="text-xl font-semibold">{heading}</h3>
          <p className="text-sm text-muted-foreground">{subheading}</p>
        </div>
      </div>

      <p className="text-sm">{description}</p>

      <ProjectTechnologiesMini techStack={techStack} />
    </div>
  );
};

export default WorkCard;
