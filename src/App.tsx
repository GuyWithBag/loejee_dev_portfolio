import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { PROJECTS } from "./data/projects";
import { SOCIALS } from "./data/content";
import { HeroCard } from "./components/HeroCard";
import { SkillsCard } from "./components/SkillsCard";
import { StatusCard } from "./components/StatusCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { SocialCard } from "./components/SocialCard";
import { AboutCard } from "./components/AboutCard";
import { CTACard } from "./components/CTACard";
import { BentoCard } from "./components/BentoCard";
import { ProjectContent } from "./components/ProjectContent";

// ToDo: Change colors
// ToDo: Overflow for Modals (scrollbar appears)
// ToDo: Add Profile Picture

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [onboarding, setOnboarding] = useState(true);

  // Navigation IDs
  const gridIds = [
    "hero",
    "skills",
    "status",
    "cta",
    "about",
    ...SOCIALS.map((s) => s.id),
    "theme-toggle",
    "location",
    ...PROJECTS.map((p) => `project-${p.id}`),
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
        const social = SOCIALS.find((s) => s.id === currentId);

        if (
          currentId.startsWith("project-") ||
          currentId === "hero" ||
          currentId === "about" ||
          currentId === "skills"
        ) {
          setExpandedId(currentId);
          setOnboarding(false);
        } else if (currentId === "theme-toggle") {
          setIsDarkMode(!isDarkMode);
        } else if (social) {
          window.open(social.href, "_blank");
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 bg-pastel-green-100/20 dark:bg-zinc-950 relative overflow-x-hidden p-4 md:p-8 lg:p-12">
      {/* Modals & Overlays */}
      <AnimatePresence>
        {onboarding && !expandedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expandedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl no-scrollbar flex flex-col"
            >
              <button
                onClick={() => setExpandedId(null)}
                className="absolute top-8 right-8 p-4 bg-zinc-900/10 dark:bg-white/10 hover:bg-zinc-900/20 dark:hover:bg-white/20 rounded-full transition-colors z-50 text-zinc-900 dark:text-white backdrop-blur-md"
              >
                <FaTimes size={20} />
              </button>

              {expandedId === "hero" && (
                <HeroCard
                  isExpanded={true}
                  onClick={() => {}}
                  className="!w-full !h-auto !scale-100 !border-none !glass"
                />
              )}

              {expandedId === "about" && (
                <AboutCard
                  isExpanded={true}
                  onClick={() => {}}
                  className="!w-full !h-auto !scale-100 !border-none"
                />
              )}

              {expandedId === "skills" && (
                <SkillsCard
                  isExpanded={true}
                  onClick={() => {}}
                  className="!w-full !h-auto !scale-100 !border-none glass"
                  skillsClasses="aspect-square"
                />
              )}

              {expandedId.startsWith("project-") && (
                <ProjectContent
                  project={
                    PROJECTS.find((p) => `project-${p.id}` === expandedId)!
                  }
                  isExpanded={true}
                  onClose={() => setExpandedId(null)}
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none -z-10 opacity-30 dark:opacity-10 overflow-hidden">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-pastel-green-300 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-emerald-400 rounded-full blur-[150px]" />
      </div>

      <div className="w-full flex flex-col gap-4 md:gap-5">
        {/* Bento Grid Info Section - INSPIRED BY REFERENCE */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-3 md:h-[850px]">
          {/* Row 1 & 2, Col 1 */}
          <HeroCard
            isExpanded={false}
            onClick={() => setExpandedId("hero")}
            onboarding={onboarding}
            className="col-span-1 md:row-span-2 !bg-pastel-green-500 !text-white"
          />

          {/* Row 1, Col 2 */}
          <SkillsCard
            isExpanded={false}
            onClick={() => setExpandedId("skills")}
            className="col-span-1 md:row-span-1 !bg-pastel-green-200 dark:!bg-pastel-green-900/40"
          />

          {/* Row 1, Col 3 */}

          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={() => {
              setIsDarkMode(!isDarkMode);
              setOnboarding(false);
            }}
            className="col-span-1 md:row-span-1"
          />
          {/* Row 1 & 2, Col 4 */}
          <CTACard className="col-span-1 md:row-span-2 !bg-pastel-green-600 !text-white" />

          {/* Row 2, Col 2-3 */}
          <AboutCard
            isExpanded={false}
            onClick={() => setExpandedId("about")}
            className="col-span-1 md:col-span-2 !bg-pastel-green-500 !text-white"
          />

          {/* Row 3, Col 1 & 2 - Socials */}
          {SOCIALS.map((social) => (
            <SocialCard
              key={social.id}
              id={social.id}
              href={social.href}
              icon={social.icon}
              label={social.label}
              className={`border-none ${social.color} col-span-1 md:row-span-1`}
            />
          ))}
          <StatusCard className="col-span-1 md:row-span-1 !bg-pastel-green-200 dark:!bg-pastel-green-900/40" />
          {/* Row 3, Col 3 */}

          {/* Row 3, Col 4 */}
          <BentoCard
            id="location"
            isExpanded={false}
            className="col-span-1 md:row-span-1 !bg-pastel-green-100 dark:!bg-zinc-800 !p-0"
          >
            <img
              className="object-cover h-full w-full"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d22a9649-2901-4991-b63a-a9289dcd7da6/dcknahs-9513eb2f-d7ac-45ea-ae4e-58c0fd3c2ff8.png/v1/fill/w_1192,h_670,q_70,strp/blue_feel_by_paperbaguy_dcknahs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6Ii9mL2QyMmE5NjQ5LTI5MDEtNDk5MS1iNjNhLWE5Mjg5ZGNkN2RhNi9kY2tuYWhzLTk1MTNlYjJmLWQ3YWMtNDVlYS1hZTRlLTU4YzBmZDNjMmZmOC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TVZsWBxIqfWyiWHlPHMY5DuuuN_u9iMW0wdTqzMXZuM"
            />
          </BentoCard>
        </div>

        {/* Flex Wrap Projects Section */}
        <div className="flex flex-wrap gap-4 md:gap-5 px-2">
          {PROJECTS.map((project, idx) => {
            const isFeatured = idx === 0;
            const id = `project-${project.id}`;

            const className = isFeatured
              ? "basis-full md:basis-[calc(50%-0.75rem)] min-h-[300px]"
              : "basis-[calc(50%-0.5rem)] md:basis-[calc(25%-1rem)] aspect-square";

            return (
              <BentoCard
                id={id}
                key={project.id}
                isExpanded={false}
                onClick={() => setExpandedId(id)}
                className={`${className} p-0 border-none h-full flex-grow !rounded-[2.5rem]`}
              >
                <ProjectContent
                  project={project}
                  isExpanded={false}
                  onClose={() => {}}
                />
              </BentoCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
