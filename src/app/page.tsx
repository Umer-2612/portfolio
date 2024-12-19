import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import ProjectsSection from "@/app/projects/component/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
