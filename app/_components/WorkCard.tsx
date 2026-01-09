"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

import { motion } from "framer-motion";

interface WorkCardProps {
  experience: {
    company: string;
    title: string;
    duration: string;
    location: string;
    description: string;
    technologies: string[];
    companyLogo: string;
  };
}

const WorkCard = ({ experience }: WorkCardProps) => {
  const { company, title, duration, location, description, technologies, companyLogo } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-6 space-y-4"
    >
      <div className="flex items-center gap-4">
        <Image src={companyLogo} alt={company} width={48} height={48} />
        <div>
          <h3 className="text-xl font-semibold">{company}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{duration} • {location}</p>
        </div>
      </div>

      <p className="text-sm">{description}</p>

      <ProjectTechnologiesMini techStack={technologies} />
    </motion.div>
  );
};

export default WorkCard;

  