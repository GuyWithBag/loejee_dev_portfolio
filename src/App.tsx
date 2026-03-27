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
    <div className="p-4 md:p-10 min-h-screen flex flex-col items-center transition-colors duration-500">
      {/* Modals & Overlays */}
      <AnimatePresence>
        {onboarding && !expandedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 pointer-events-none"
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
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-3xl no-scrollbar flex flex-col border border-white/20"
            >
              <button
                onClick={() => setExpandedId(null)}
                className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all z-50 text-white backdrop-blur-md hover:scale-110"
              >
                <FaTimes size={20} />
              </button>

              {expandedId === "hero" && (
                <HeroCard
                  isExpanded={true}
                  onClick={() => {}}
                  className="!w-full !h-auto !scale-100 !border-none"
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
                  className="!w-full !h-auto !scale-100 !border-none"
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

      <div className="max-w-5xl w-full flex flex-col gap-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">
          {/* Row 1 & 2, Col 1-2 */}
          <HeroCard
            isExpanded={false}
            onClick={() => setExpandedId("hero")}
            onboarding={onboarding}
            className="md:col-span-2 md:row-span-2"
          />

          {/* Row 1, Col 3-4 */}
          <AboutCard
            isExpanded={false}
            onClick={() => setExpandedId("about")}
            className="md:col-span-2"
          />

          {/* Row 2, Col 3 */}
          <StatusCard className="md:col-span-1" />

          {/* Row 2, Col 4 */}
          {SOCIALS.filter(s => s.id.toLowerCase().includes("github")).map((social) => (
            <SocialCard
              key={social.id}
              id={social.id}
              href={social.href}
              icon={social.icon}
              label={social.label}
              className={`bg-slate-900 dark:bg-slate-800 md:col-span-1`}
            />
          ))}

          {/* Row 3, Col 1-2 */}
          <SkillsCard
            isExpanded={false}
            onClick={() => setExpandedId("skills")}
            className="md:col-span-2"
          />

          {/* Row 3, Col 3 */}
          {SOCIALS.filter(s => s.id.toLowerCase().includes("linkedin")).map((social) => (
            <SocialCard
              key={social.id}
              id={social.id}
              href={social.href}
              icon={social.icon}
              label={social.label}
              className={`bg-blue-600 dark:bg-blue-700 md:col-span-1`}
            />
          ))}

          {/* Row 3, Col 4 */}
          <CTACard className="md:col-span-1" />

          {/* Theme Toggle Bento */}
          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={() => {
              setIsDarkMode(!isDarkMode);
              setOnboarding(false);
            }}
            className="md:col-span-1"
          />
          
          <BentoCard
            id="location"
            isExpanded={false}
            className="md:col-span-1 !p-0 overflow-hidden"
          >
            <img
              className="object-cover h-full w-full group-hover:scale-125 transition-transform duration-1000"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d22a9649-2901-4991-b63a-a9289dcd7da6/dcknahs-9513eb2f-d7ac-45ea-ae4e-58c0fd3c2ff8.png/v1/fill/w_1192,h_670,q_70,strp/blue_feel_by_paperbaguy_dcknahs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6Ii9mL2QyMmE5NjQ5LTI5MDEtNDk5MS1iNjNhLWE5Mjg5ZGNkN2RhNi9kY2tuYWhzLTk1MTNeb2j2Zixk72fC1hZTRlLTU4YzBmZDNjMmZmOC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TVZsWBxIqfWyiWHlPHMY5DuuuN_u9iMW0wdTqzMXZuM"
              alt="location"
            />
          </BentoCard>
        </div>

        {/* Projects Section */}
        <div className="flex flex-wrap gap-6 mt-2">
          {PROJECTS.map((project, idx) => {
            const id = `project-${project.id}`;
            const aspectClass = idx === 0 ? "w-full md:w-[600px] aspect-video" : 
                               idx === 1 ? "w-full md:w-[280px] aspect-[9/16]" :
                               "w-full md:w-[350px] aspect-square flex-grow";
            
            return (
              <BentoCard
                id={id}
                key={project.id}
                isExpanded={false}
                onClick={() => setExpandedId(id)}
                className={`${aspectClass} !p-0 border-slate-200 dark:border-slate-800 ${idx % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
              >
                <ProjectContent
                  project={project}
                  isExpanded={false}
                  onClose={() => {}}
                />
              </BentoCard>
            );
          })}
          
          <BentoCard
            id="add-project"
            isExpanded={false}
            className="w-full sm:w-[250px] md:w-[300px] aspect-square bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-4 border-dashed border-slate-300 dark:border-slate-700 !p-8 text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center shadow-inner group relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-200/50 dark:bg-slate-800/50 rounded-full group-hover:scale-125 transition-transform duration-500 z-0" />
            <div className="z-10 relative flex flex-col items-center">
              <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-300 dark:group-hover:bg-slate-700 transition-colors shadow-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <span className="font-bold tracking-wide">Add Project</span>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default App;
