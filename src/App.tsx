import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROJECTS } from "./data/projects";
import { HeroCard } from "./components/HeroCard";
import { SkillsCard } from "./components/SkillsCard";
import { StatusCard } from "./components/StatusCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { SocialCard } from "./components/SocialCard";
import { AboutCard } from "./components/AboutCard";
import { CTACard } from "./components/CTACard";
import { BentoCard } from "./components/BentoCard";
import { ProjectContent } from "./components/ProjectContent";
import { animateScroll as scroll } from "react-scroll";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [onboarding, setOnboarding] = useState(true);
  const [containerWidth, setContainerWidth] = useState<number | string>("100%");
  
  // Grid Navigation IDs
  const gridIds = [
    "hero", "skills", "status", "theme-toggle", 
    "github", "linkedin", "about", 
    ...PROJECTS.map(p => `project-${p.id}`), 
    "cta"
  ];
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Focus hero on mount
    const hero = document.getElementById("hero");
    if (hero) hero.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (expandedId) {
      if (e.key === "Escape") setExpandedId(null);
      return;
    }

    let nextIndex = focusedIndex;
    const cols = window.innerWidth >= 768 ? 4 : 2;

    switch (e.key.toLowerCase()) {
      case "arrowright":
      case "d":
        nextIndex = Math.min(focusedIndex + 1, gridIds.length - 1);
        break;
      case "arrowleft":
      case "a":
        nextIndex = Math.max(focusedIndex - 1, 0);
        break;
      case "arrowdown":
      case "s":
        nextIndex = Math.min(focusedIndex + cols, gridIds.length - 1);
        break;
      case "arrowup":
      case "w":
        nextIndex = Math.max(focusedIndex - cols, 0);
        break;
      case "enter":
        const currentId = gridIds[focusedIndex];
        if (currentId.startsWith("project-") || currentId === "hero" || currentId === "about" || currentId === "skills") {
           toggleExpand(currentId);
        } else if (currentId === "theme-toggle") {
           setIsDarkMode(!isDarkMode);
        } else if (currentId === "github") {
           window.open("https://github.com", "_blank");
        } else if (currentId === "linkedin") {
           window.open("https://linkedin.com", "_blank");
        }
        break;
    }

    if (nextIndex !== focusedIndex) {
      setFocusedIndex(nextIndex);
      const nextEl = document.getElementById(gridIds[nextIndex]);
      if (nextEl) nextEl.focus();
      setOnboarding(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, expandedId, isDarkMode]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    setOnboarding(false);
    if (expandedId !== id) {
      scroll.scrollToTop({ duration: 500, smooth: true });
    }
  };

  const cycleWidth = () => {
    if (containerWidth === "100%") setContainerWidth("75%");
    else if (containerWidth === "75%") setContainerWidth("50%");
    else setContainerWidth("100%");
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-20 flex flex-col items-center justify-center transition-colors duration-500 bg-pastel-green-50/30 dark:bg-zinc-950 relative overflow-x-hidden">
      
      {/* Onboarding Overlay */}
      <AnimatePresence>
        {onboarding && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-30 dark:opacity-10 overflow-hidden">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-pastel-green-300 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-emerald-400 rounded-full blur-[150px]" />
      </div>

      {/* Resize Control */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={cycleWidth}
          className="px-4 py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
        >
          Resize Container: {containerWidth}
        </button>
      </div>

      <motion.div 
        layout
        animate={{ width: containerWidth }}
        className="max-w-7xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-min"
      >
        <HeroCard 
          isExpanded={expandedId === "hero"} 
          onClick={() => toggleExpand("hero")} 
          onboarding={onboarding}
        />

        <SkillsCard 
          isExpanded={expandedId === "skills"} 
          onClick={() => toggleExpand("skills")} 
        />

        <StatusCard />

        <ThemeToggle 
          isDarkMode={isDarkMode} 
          onToggle={() => { setIsDarkMode(!isDarkMode); setOnboarding(false); }} 
        />

        <SocialCard 
          id="github" 
          href="https://github.com" 
          icon={FaGithub} 
          label="GITHUB" 
          className="!bg-zinc-900" 
        />

        <SocialCard 
          id="linkedin" 
          href="https://linkedin.com" 
          icon={FaLinkedin} 
          label="LINKEDIN" 
          className="!bg-[#0077b5]" 
        />

        <AboutCard 
          isExpanded={expandedId === "about"} 
          onClick={() => toggleExpand("about")} 
        />

        {PROJECTS.map((project, idx) => {
          const isFeatured = idx === 0;
          const id = `project-${project.id}`;
          return (
            <BentoCard 
              id={id}
              key={project.id}
              isExpanded={expandedId === id}
              onClick={() => toggleExpand(id)}
              span={isFeatured ? "col-span-2 row-span-1" : "col-span-1 row-span-1"}
              className="p-0 border-none h-full"
            >
              <ProjectContent 
                project={project} 
                isExpanded={expandedId === id} 
                onClose={() => setExpandedId(null)}
              />
            </BentoCard>
          );
        })}

        <CTACard />

      </motion.div>
    </div>
  );
};

export default App;
