import { workExperiences } from "../_lib/constants";
import WorkCard from "./WorkCard";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const WorkExperiences = () => {
  return (
    <div className="h-screen py-32" id="about">
      {/* Header with title + button */}
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between mb-8">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Work Experience
        </h2>
        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://www.linkedin.com/in/rahmamahdi/" target="_blank">
            Connect on Linkedin
          </Link>
        </ShinyButton>
      </div>

      {/* Vertical scroll container */}
      <div className="h-[70vh] overflow-y-auto space-y-8 snap-y snap-mandatory">
        {workExperiences.map((exp) => (
          <div key={exp.company} className="snap-start">
            <WorkCard experience={exp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperiences;


