"use client";

import Image from "next/image";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-6 space-y-4"
    >
      <div className="flex items-center gap-4">
        <Image src={companyLogo} alt={heading} width={48} height={48} />
        <div>
          <h3 className="text-xl font-semibold">{heading}</h3>
          <p className="text-sm text-muted-foreground">{subheading}</p>
        </div>
      </div>

      <p className="text-sm">{description}</p>

      <ProjectTechnologiesMini techStack={techStack} />
    </motion.div>
  );
};

export default WorkCard;
