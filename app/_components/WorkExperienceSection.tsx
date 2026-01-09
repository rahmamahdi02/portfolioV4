"use client";

import { workExperiences } from "../_lib/constants";
import WorkCard from "./WorkCard";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerate";

const WorkExperiences = () => {
  return (
    <section className="py-32 px-5 sm:px-10 lg:px-20" id="about">
      {/* Header with title + button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
  {/* Wrap TextGenerateEffect in a flex column with fixed line-height */}
  {/* <div className="flex flex-col justify-center">
    <TextGenerateEffect
      words="Professional Experience"
      className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200 leading-tight"
    />
  </div> */}
  <div className="space-y-4 mb-10">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
<TextGenerateEffect
  words="Professional Experience"
  className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
/>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-md min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          My professional experience varies from shipping features to production and scaling ML-powered systems used by over 120M users. I&apos;ve built everything from internal SDKs and full-stack applications to technical documentation, and I love working end-to-end on products that have real impact. I&apos;m skilled at taking ideas from 0→1, optimizing ML pipelines, and building reliable, scalable systems in fast-paced, startup-like environments. I&apos;m passionate about creating great developer experiences, contributing to open-source, designing developer-friendly APIs, and building robust, user-facing systems from the ground up.
        
        </motion.p>
      </div>
      <ShinyButton icon={<ChevronRight />} className="sm:mt-1">
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
