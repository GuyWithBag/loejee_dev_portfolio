import type { FC } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { 
  PiMoon, 
  PiSun, 
  PiUserCircleFill, 
  PiMapPinFill, 
  PiGithubLogoFill, 
  PiLightningFill, 
  PiLinkedinLogoFill, 
  PiAtomFill, 
  PiDeviceMobileFill, 
  PiPaintBrushBroadFill, 
  PiWindFill,
  PiXBold,
  PiRocketLaunchFill,
  PiCaretLeftBold,
  PiCaretRightBold,
  PiHandWavingFill,
  PiGlobeHemisphereEastFill,
  PiPlusBold
} from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { BIO, SKILLS, SOCIALS, CONTACT } from "./data/content";
import { PROJECTS } from "./data/projects";

const App: FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});

  const navigablesRef = useRef<(HTMLDivElement | HTMLAnchorElement | HTMLButtonElement)[]>([]);

  // Theme management
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  const endOnboarding = useCallback(() => {
    if (isOnboarding) {
      setIsOnboarding(false);
      document.body.classList.remove("onboarding-active");
    }
  }, [isOnboarding]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModal) {
        if (e.key === "Escape") setActiveModal(null);
        return;
      }

      const key = e.key.toLowerCase();
      const validKeys = ["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", "enter", " "];

      if (validKeys.includes(key)) {
        endOnboarding();
      }

      if (key === "enter" || key === " ") {
        const current = navigablesRef.current[focusedIndex];
        if (current) current.click();
        return;
      }

      let newIndex = focusedIndex;
      if (key === "d" || key === "arrowright") {
        newIndex = (focusedIndex + 1) % navigablesRef.current.length;
      } else if (key === "a" || key === "arrowleft") {
        newIndex = (focusedIndex - 1 + navigablesRef.current.length) % navigablesRef.current.length;
      } else if (key === "s" || key === "arrowdown") {
        newIndex = Math.min(focusedIndex + 2, navigablesRef.current.length - 1);
      } else if (key === "w" || key === "arrowup") {
        newIndex = Math.max(focusedIndex - 2, 0);
      }

      if (newIndex !== focusedIndex) {
        setFocusedIndex(newIndex);
        navigablesRef.current[newIndex]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, endOnboarding, activeModal]);

  const handleCarouselMove = (projectId: number, direction: number, max: number) => {
    setCarouselIndices(prev => {
      const current = prev[projectId] || 0;
      let next = current + direction;
      if (next < 0) next = max - 1;
      if (next >= max) next = 0;
      return { ...prev, [projectId]: next };
    });
  };

  const registerNavigable = (el: HTMLDivElement | HTMLAnchorElement | HTMLButtonElement | null, index: number) => {
    if (el) navigablesRef.current[index] = el;
  };

  return (
    <div className={`p-4 md:p-10 min-h-screen flex flex-col items-center font-sans text-slate-800 dark:text-slate-100 ${isOnboarding ? "onboarding-active" : ""}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-2xl z-[60]"
      >
        {isDark ? <PiSun className="text-xl" /> : <PiMoon className="text-xl" />}
      </button>

      {/* Onboarding Tooltip */}
      <AnimatePresence>
        {isOnboarding && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 px-6 py-3 rounded-full backdrop-blur-md font-bold text-sm z-[60] flex items-center gap-3 animate-bounce shadow-2xl border border-white/10"
          >
            <div className="flex gap-1">
              <kbd className="px-2 py-1 bg-slate-800 dark:bg-slate-200 rounded text-xs">W</kbd>
              <kbd className="px-2 py-1 bg-slate-800 dark:bg-slate-200 rounded text-xs">A</kbd>
              <kbd className="px-2 py-1 bg-slate-800 dark:bg-slate-200 rounded text-xs">S</kbd>
              <kbd className="px-2 py-1 bg-slate-800 dark:bg-slate-200 rounded text-xs">D</kbd>
            </div>
            <span>or Arrows to navigate. Enter to open.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl w-full flex flex-col gap-6 mt-10 relative z-10" onClick={endOnboarding}>
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px] w-full">
          
          {/* Hero Card */}
          <div
            id="hero-card"
            tabIndex={0}
            ref={(el) => registerNavigable(el, 0)}
            onClick={() => setActiveModal("hero")}
            className="navigable blur-target md:col-span-2 md:row-span-2 bg-purple-500 dark:bg-purple-600 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-3xl flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-purple-400 dark:border-purple-500"
          >
            <div className="w-24 h-24 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full mb-4 border-4 border-white/50 dark:border-white/20 shadow-inner z-10 overflow-hidden">
               <img src={BIO.pfp} alt={BIO.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl font-bold text-white z-10 leading-tight tracking-tight">
              Hi, I'm {BIO.name.split(' ')[0]}. I'm a Developer & UI Designer.
            </h1>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 shadow-xl" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400/50 rounded-full group-hover:scale-125 transition-transform duration-500 z-0" />
          </div>

          {/* About Card */}
          <div
            tabIndex={0}
            ref={(el) => registerNavigable(el, 1)}
            onClick={() => setActiveModal("about")}
            className="navigable blur-target md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-3xl flex flex-col justify-center relative overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer"
          >
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-3xl rotate-12 group-hover:rotate-[60deg] transition-transform duration-700 z-0 shadow-inner" />
            <div className="z-10 relative">
              <div className="flex items-center gap-2 mb-2">
                <PiUserCircleFill className="text-2xl text-slate-400" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">About Me</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                {BIO.about[0].substring(0, 100)}...
              </p>
              <span className="text-purple-500 text-xs font-bold mt-2 inline-block group-hover:translate-x-1 transition-transform">
                Click to read more -{">"}
              </span>
            </div>
          </div>

          {/* Location Card */}
          <div
            tabIndex={0}
            ref={(el) => registerNavigable(el, 2)}
            onClick={() => setActiveModal("location")}
            className="navigable blur-target md:col-span-1 bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-3xl flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer"
          >
            <div className="absolute -bottom-4 w-full h-1/2 bg-green-50 dark:bg-green-900/20 skew-y-12 group-hover:-skew-y-6 transition-transform duration-500 z-0" />
            <div className="relative flex h-6 w-6 mb-3 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-2 border-white dark:border-slate-900" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 z-10">Building from</p>
            <p className="font-semibold text-slate-800 dark:text-slate-200 z-10">{BIO.location}</p>
          </div>

          {/* GitHub Card */}
          <a
            href={SOCIALS.find(s => s.id === "github")?.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            ref={(el) => registerNavigable(el, 3)}
            className="navigable blur-target md:col-span-1 bg-slate-900 dark:bg-slate-800 text-white rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-4 hover:-rotate-3 hover:shadow-3xl cursor-pointer flex flex-col items-center justify-center relative overflow-hidden group border border-transparent dark:border-slate-700"
          >
            <div className="absolute -right-4 -bottom-4 w-20 h-20 border-4 border-white/10 rounded-full group-hover:scale-150 transition-transform duration-500 z-0" />
            <PiGithubLogoFill className="text-5xl mb-2 z-10 group-hover:scale-110 transition-transform" />
            <span className="font-bold z-10">GitHub</span>
          </a>

          {/* Skills Card */}
          <div
            tabIndex={0}
            ref={(el) => registerNavigable(el, 4)}
            onClick={() => setActiveModal("skills")}
            className="navigable blur-target md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-3xl flex flex-col justify-center relative overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer"
          >
            <div className="absolute right-10 -bottom-10 w-32 h-64 bg-slate-50 dark:bg-slate-800 rounded-full rotate-45 group-hover:rotate-[60deg] transition-transform duration-700 z-0" />
            <div className="z-10 relative">
              <h2 className="text-sm font-bold mb-4 text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <PiLightningFill /> Core Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold rounded-full text-sm flex items-center gap-2 shadow-sm border border-blue-200 dark:border-blue-800 transition-transform group-hover:rotate-2">
                  <PiAtomFill className="text-lg" /> ReactJS
                </span>
                <span className="px-4 py-2 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 font-semibold rounded-full text-sm flex items-center gap-2 shadow-sm border border-sky-200 dark:border-sky-800 transition-transform group-hover:-rotate-2">
                  <PiDeviceMobileFill className="text-lg" /> Flutter
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold rounded-full text-sm flex items-center gap-2 shadow-sm border border-purple-200 dark:border-purple-800 transition-transform group-hover:rotate-2">
                  <PiPaintBrushBroadFill className="text-lg" /> UI/UX Design
                </span>
                <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-semibold rounded-full text-sm flex items-center gap-2 shadow-sm border border-teal-200 dark:border-teal-800 transition-transform group-hover:-rotate-1">
                  <PiWindFill className="text-lg" /> Tailwind
                </span>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={SOCIALS.find(s => s.id === "linkedin")?.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            ref={(el) => registerNavigable(el, 5)}
            className="navigable blur-target md:col-span-1 bg-blue-600 dark:bg-blue-700 text-white rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-4 hover:rotate-3 hover:shadow-3xl cursor-pointer flex flex-col items-center justify-center relative overflow-hidden group border border-transparent dark:border-blue-600"
          >
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500 z-0" />
            <PiLinkedinLogoFill className="text-5xl mb-2 z-10 group-hover:scale-110 transition-transform" />
            <span className="font-bold z-10">LinkedIn</span>
          </a>

          {/* Contact Card */}
          <button
            tabIndex={0}
            ref={(el) => registerNavigable(el, 6)}
            onClick={() => window.location.href = `mailto:${CONTACT.email}`}
            className="navigable blur-target md:col-span-1 bg-yellow-400 dark:bg-yellow-500 rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-4 hover:shadow-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group outline-none border border-yellow-300 dark:border-yellow-600"
          >
            <div className="absolute right-0 bottom-0 w-16 h-16 bg-white/30 dark:bg-white/10 rounded-tl-[2rem] group-hover:scale-150 transition-transform duration-500 z-0 shadow-lg" />
            <div className="z-10 relative flex flex-col items-center w-full">
              <h2 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">{CONTACT.ctaTitle}</h2>
              <div className="bg-slate-900 text-white w-full py-2 rounded-full font-bold text-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-xl">
                {CONTACT.ctaButton}
              </div>
            </div>
          </button>
        </div>

        {/* Projects Section */}
        <div className="flex flex-wrap items-start justify-between gap-6 mt-6 blur-target pb-20 w-full" id="projects-container">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              tabIndex={0}
              ref={(el) => registerNavigable(el, 7 + idx)}
              onClick={() => {
                 if (expandedProjectId === project.id) setExpandedProjectId(null);
                 else setExpandedProjectId(project.id);
              }}
              className={`navigable project-card grow basis-[300px] min-h-[300px] rounded-[2.5rem] text-white shadow-2xl cursor-pointer relative overflow-hidden group border border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-500 ${
                expandedProjectId === project.id ? "w-full flex-basis-full h-[450px] md:flex-row cursor-default" : "aspect-video"
              }`}
            >
              {/* Expanded Content */}
              {expandedProjectId === project.id && (
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between h-full bg-slate-900 dark:bg-slate-950 z-30 overflow-y-auto">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-4xl font-black tracking-tight text-white">{project.title}</h3>
                      <button
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedProjectId(null);
                        }}
                      >
                        <PiXBold className="text-xl" />
                      </button>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed text-lg mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-bold border border-white/20 flex items-center gap-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-white text-slate-900 py-3 rounded-full font-bold transition-transform hover:scale-105 flex items-center justify-center gap-2">
                      <PiRocketLaunchFill className="text-xl" /> Live App
                    </button>
                    <button className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                      <PiGithubLogoFill className="text-2xl" />
                    </button>
                  </div>
                </div>
              )}

              {/* Media Container */}
              <div className="media-container relative w-full h-full flex-1 min-h-[300px] overflow-hidden">
                <div className={`absolute inset-0 bg-slate-900/50 z-10 transition-opacity duration-300 ${expandedProjectId === project.id ? "opacity-0" : "opacity-100"}`} />
                
                {/* Carousel Track */}
                <div 
                  className="w-full h-full flex transition-transform duration-500" 
                  style={{ transform: `translateX(-${(carouselIndices[project.id] || 0) * 100}%)` }}
                >
                  {project.images.map((img, i) => (
                    <img key={i} src={img} className="w-full h-full object-cover shrink-0" alt={`${project.title} ${i}`} />
                  ))}
                </div>

                {/* Carousel Controls */}
                {expandedProjectId === project.id && project.images.length > 1 && (
                  <div className="absolute inset-0 z-20 pointer-events-none p-4 flex justify-between items-center">
                    <button
                      className="pointer-events-auto w-10 h-10 bg-black/50 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCarouselMove(project.id, -1, project.images.length);
                      }}
                    >
                      <PiCaretLeftBold />
                    </button>
                    <button
                      className="pointer-events-auto w-10 h-10 bg-black/50 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCarouselMove(project.id, 1, project.images.length);
                      }}
                    >
                      <PiCaretRightBold />
                    </button>
                  </div>
                )}

                {/* Default Content (Overlay) */}
                {expandedProjectId !== project.id && (
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
                    <div>
                      <h3 className="text-3xl font-black mb-2 tracking-tighter shadow-sm">{project.title}</h3>
                      <p className="text-slate-200 font-medium">Click to expand details.</p>
                    </div>
                    <div className="flex gap-2">
                       {project.skills.slice(0, 2).map(skill => (
                         <span key={skill} className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-md border border-white/30">{skill}</span>
                       ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Add Project Card (Placeholder) */}
          <div
            tabIndex={0}
            ref={(el) => registerNavigable(el, 7 + PROJECTS.length)}
            className="navigable grow basis-[200px] max-w-[400px] aspect-square bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-4 border-dashed border-slate-300 dark:border-slate-700 rounded-[2.5rem] p-8 text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center shadow-inner transition-all duration-300 hover:scale-105 hover:-translate-y-4 hover:rotate-1 hover:shadow-3xl cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-200/50 dark:bg-slate-800/50 rounded-full group-hover:scale-125 transition-transform duration-500 z-0" />
            <div className="z-10 relative flex flex-col items-center">
              <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-300 dark:group-hover:bg-slate-700 transition-colors shadow-xl">
                <PiPlusBold className="text-xl text-slate-500 dark:text-slate-400" />
              </div>
              <span className="font-bold tracking-wide">Add Project</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-2xl rounded-[2.5rem] p-10 shadow-3xl border overflow-hidden ${getModalTheme(activeModal)}`}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-20"
              >
                <PiXBold className="text-2xl" />
              </button>
              <div className="relative z-10 h-full w-full">
                {renderModalContent(activeModal)}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper functions for Modal
function getModalTheme(type: string) {
  switch (type) {
    case "hero":
      return "bg-purple-500 dark:bg-purple-600 text-white border-purple-400 dark:border-purple-500";
    default:
      return "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-800";
  }
}

function renderModalContent(type: string) {
  switch (type) {
    case "hero":
      return (
        <>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 rounded-full z-0" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/50 rounded-full z-0" />
          <div className="relative z-10">
            <PiHandWavingFill className="text-6xl mb-6 inline-block animate-bounce" />
            <h2 className="text-4xl font-black mb-4">Hello World!</h2>
            <p className="text-white/90 text-lg mb-4">{BIO.philosophy}</p>
            <p className="text-white/90 text-lg">Use the grid behind this window to explore my stack, my current location, and my selected projects.</p>
          </div>
        </>
      );
    case "about":
      return (
        <>
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-slate-100 dark:bg-slate-800 rounded-3xl rotate-[30deg] z-0" />
          <div className="relative z-10">
            <PiUserCircleFill className="text-6xl text-blue-500 mb-6 inline-block" />
            <h2 className="text-4xl font-black mb-4">About Me</h2>
            <div className="space-y-4">
              {BIO.about.map((p, i) => (
                <p key={i} className="text-slate-500 dark:text-slate-400 text-lg">{p}</p>
              ))}
            </div>
          </div>
        </>
      );
    case "location":
      return (
        <>
          <div className="absolute -bottom-10 left-0 w-full h-1/2 bg-green-50 dark:bg-green-900/20 skew-y-6 z-0" />
          <div className="relative z-10">
            <PiMapPinFill className="text-6xl text-green-500 mb-6 inline-block" />
            <h2 className="text-4xl font-black mb-4">Current Location</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Currently building from <strong className="text-slate-900 dark:text-white">{BIO.location}</strong>.</p>
            <div className="mt-8 w-full h-48 bg-white dark:bg-slate-900 rounded-3xl flex items-center justify-center border-2 border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="text-slate-500 dark:text-slate-400 font-bold flex flex-col items-center gap-2">
                <PiGlobeHemisphereEastFill className="text-4xl" /> Remote Work Ready
              </span>
            </div>
          </div>
        </>
      );
    case "skills":
      return (
        <>
          <div className="absolute right-[-10%] bottom-[-20%] w-64 h-96 bg-slate-50 dark:bg-slate-800 rounded-full rotate-45 z-0" />
          <div className="relative z-10">
            <PiLightningFill className="text-6xl text-yellow-500 mb-6 inline-block" />
            <h2 className="text-4xl font-black mb-6">Deep Dive: Tech Stack</h2>
            <ul className="space-y-4">
              {SKILLS.slice(0, 3).map((skill, i) => (
                <li key={i} className="flex items-center gap-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                  <skill.Icon className="text-4xl text-blue-500" />
                  <div>
                    <strong className="block text-xl text-slate-800 dark:text-slate-100">{skill.name}</strong>
                    <span className="text-sm text-slate-500">Expertise in {skill.name} development</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    default:
      return null;
  }
}

export default App;
