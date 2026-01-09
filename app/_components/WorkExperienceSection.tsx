"use client";

import { workExperiences } from "../_lib/constants";
import WorkCard from "./WorkCard";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const WorkExperiences = () => {
  return (
    <section className="py-32 px-5 sm:px-10 lg:px-20" id="about">
      {/* Header with title + button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Work Experience
        </h2>
        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://www.linkedin.com/in/rahmamahdi/" target="_blank">
            Connect on Linkedin
          </Link>
        </ShinyButton>
      </div>

      {/* Work cards list */}
      <div className="flex flex-col space-y-8">
        {workExperiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <WorkCard experience={exp} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperiences;
