import {
  BriefcaseBusiness,
  Contact as ContactIco,
  House,
  UserRound,
} from "lucide-react";
import { Navbar } from "@/app/_components/ui/Navbar";
import HeroSection from "@/app/_components/HeroSection";
import Skills from "@/app/_components/Skills";
import ProjectsSection from "@/app/_components/ProjectsSection";
import WorkExperienceSection from "@/app/_components/WorkExperienceSection";
import Testimonials from "@/app/_components/Testimonials";
import Footer from "@/app/_components/Footer";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Projects", link: "#work", icon: <BriefcaseBusiness /> },
  { name: "Work Experience", link: "#about", icon: <UserRound /> },
  { name: "Contact", link: "#contact", icon: <ContactIco /> },
];

const Homepage = () => {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <HeroSection />
        <ProjectsSection />
        <Skills />
        <WorkExperienceSection />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
