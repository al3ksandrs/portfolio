import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationTimeline";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 space-y-20">
        <Hero />
        <SocialLinks />
        <SkillsGrid />
        <ProjectsSection />
        <ExperienceTimeline />
        <EducationTimeline />
      </main>
      <Footer />
    </div>
  );
}
