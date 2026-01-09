import { workExperiences } from "../_lib/constants";
import WorkCard from "./WorkCard";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const WorkExperiences = () => {
  return (
    <div className="py-32" id="about">
      {/* Header with title + button */}
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Work Experience
        </h2>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://www.linkedin.com/in/rahmamahdi/" target="_blank">
            Connect on Linkedin
          </Link>
        </ShinyButton>
      </div>

      {/* Grid of experience cards */}
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {workExperiences.map((exp) => (
          <WorkCard key={exp.company} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperiences;
