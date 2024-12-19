"use client";
import NavBar from "@/components/Navbar";
import ProjectsSection from "@/app/projects/component/ProjectsSection";

export default function Projects() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <ProjectsSection />
      </main>
    </>
  );
}
