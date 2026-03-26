import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiNextdotjs, SiSvelte, SiFlutter, SiGodotengine, SiTypescript, SiReact, SiFirebase, SiTailwindcss, SiDart, SiCplusplus, SiOpengl } from "react-icons/si";
import heroImg from "./assets/hero.png";
import { PROJECTS, type Project } from "./data/projects";

// --- Components ---

const BentoCard = ({ 
  children, 
  className = "", 
  onClick, 
  isExpanded,
  basis = "basis-full md:basis-[calc(25%-1rem)]"
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  id: string;
  isExpanded: boolean;
  basis?: string;
}) => (
  <motion.div 
    layout
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    onClick={onClick}
    className={`bento-card relative flex flex-col overflow-hidden flex-grow flex-shrink-0 min-h-[200px] ${onClick ? 'cursor-pointer' : ''} ${className} ${isExpanded ? 'basis-full z-20 order-first h-auto' : `${basis} z-10`}`}
  >
    {children}
  </motion.div>
);

const ProjectContent = ({ project, isExpanded }: { project: Project; isExpanded: boolean }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  if (!isExpanded) {
    return (
      <div className="absolute inset-0 group">
        <motion.img 
          layout="position"
          src={project.images[0]} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 dark:opacity-40" 
          alt={project.title}
        />
        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <motion.span layout="position" className="text-[10px] font-bold uppercase tracking-[0.2em] text-pastel-green-400 mb-1 opacity-80">
            {project.category}
          </motion.span>
          <motion.h2 layout="position" className="text-xl font-bold text-white leading-tight">
            {project.title}
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-full w-full bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="lg:w-3/5 relative group bg-black h-64 lg:min-h-[400px] overflow-hidden">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={project.images[currentImgIndex]} 
          className="w-full h-full object-cover"
          key={currentImgIndex}
        />
        {project.images.length > 1 && (
          <>
            <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-all">
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-all">
              <FaChevronRight className="text-white text-xl" />
            </button>
          </>
        )}
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center"
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold leading-tight">{project.title}</h2>
          <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <FaTimes className="text-zinc-400 text-2xl" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.skills.map(skill => (
            <span key={skill} className="px-4 py-1.5 bg-pastel-green-100 dark:bg-pastel-green-900/30 text-pastel-green-700 dark:text-pastel-green-300 text-[10px] font-black uppercase tracking-widest rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 text-lg">
          {project.description}
        </p>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-3 w-full py-5 bg-pastel-green-500 hover:bg-pastel-green-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-pastel-green-500/20 hover:scale-[1.02]"
          >
            Launch Project <FaExternalLinkAlt size={14} />
          </a>
        )}
      </motion.div>
    </div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [isDarkMode]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center transition-colors duration-300 overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-50 dark:opacity-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pastel-green-300 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-400 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        layout
        className="max-w-6xl w-full flex flex-wrap gap-4 items-stretch"
      >
        {/* Hero Tile */}
        <BentoCard 
          id="hero"
          isExpanded={expandedId === "hero"}
          onClick={() => toggleExpand("hero")}
          basis="basis-full md:basis-[calc(25%-1rem)]"
          className="flex-col items-center text-center !bg-pastel-green-100 dark:!bg-pastel-green-900 border-none min-h-[350px] md:min-h-0"
        >
          <div className="p-8 flex flex-col items-center h-full justify-center">
            <motion.img 
              layout
              src={heroImg} 
              alt="Loejee Miguel L. Dulaugon" 
              className="w-32 h-32 rounded-2xl object-cover mb-6 shadow-lg z-10"
            />
            <motion.h1 layout className="text-xl md:text-2xl font-bold leading-tight mb-2 z-10 uppercase tracking-tighter">Loejee Miguel L. Dulaugon</motion.h1>
            <motion.p layout className="text-pastel-green-700 dark:text-pastel-green-300 font-bold z-10 text-xs uppercase tracking-widest">Full Stack Developer</motion.p>
          </div>
          
          <AnimatePresence>
            {expandedId === "hero" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="px-8 pb-12 text-sm text-zinc-600 dark:text-zinc-400 text-left w-full max-w-2xl mx-auto flex flex-col md:flex-row gap-8"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-[0.2em] text-[10px]">Education</h3>
                  <p>BS Computer Science - University of Mindanao</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-[0.2em] text-[10px]">Philosophy</h3>
                  <p className="leading-relaxed italic">"Code is a tool for creativity. I believe in building software that feels right to the user."</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </BentoCard>

        {/* Skills Tile */}
        <BentoCard 
          id="skills"
          isExpanded={expandedId === "skills"}
          onClick={() => toggleExpand("skills")}
          basis="basis-[calc(50%-0.5rem)] md:basis-[calc(25%-1rem)]"
          className="bg-white dark:bg-zinc-900"
        >
          <div className="p-6 h-full flex flex-col">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-[11px]">
              <span className="w-1 h-4 bg-pastel-green-500 rounded-full"></span>
              Stack
            </h2>
            <div className={`grid ${expandedId === "skills" ? "grid-cols-3 md:grid-cols-6" : "grid-cols-2"} gap-2 md:gap-3`}>
              {[
                { name: "NextJS", Icon: SiNextdotjs },
                { name: "React", Icon: SiReact },
                { name: "Typescript", Icon: SiTypescript },
                { name: "Tailwind", Icon: SiTailwindcss },
                { name: "Svelte", Icon: SiSvelte },
                { name: "Flutter", Icon: SiFlutter },
                { name: "Dart", Icon: SiDart },
                { name: "Godot", Icon: SiGodotengine },
                { name: "C++", Icon: SiCplusplus },
                { name: "Firebase", Icon: SiFirebase },
                { name: "OpenGL", Icon: SiOpengl }
              ].slice(0, expandedId === "skills" ? 12 : 4).map(({ name, Icon }) => (
                <motion.div 
                  layout
                  key={name} 
                  className="flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-700/50 group hover:border-pastel-green-200 transition-colors"
                >
                  <Icon className="text-xl mb-1 text-zinc-400 group-hover:text-pastel-green-500 transition-colors" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-center opacity-0 group-hover:opacity-100 transition-opacity">{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* About Tile */}
        <BentoCard 
          id="about"
          isExpanded={expandedId === "about"}
          onClick={() => toggleExpand("about")}
          basis="basis-full md:basis-[calc(50%-1rem)]"
          className="bg-white dark:bg-zinc-900"
        >
          <div className="p-6 md:p-8 h-full flex flex-col justify-center">
            <motion.h2 layout className="text-xl md:text-2xl font-bold mb-3 italic">"Hi there! 👋"</motion.h2>
            <motion.p layout className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
              I'm a passionate developer focused on building intuitive and performant applications across web, mobile, and game engines.
            </motion.p>
            <AnimatePresence>
              {expandedId === "about" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-100 dark:border-zinc-800 pt-8"
                >
                  <div>
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.2em] text-pastel-green-600">Expertise</h3>
                    <ul className="space-y-3 text-zinc-500 text-sm">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pastel-green-400 rounded-full" /> Web Apps (React/Svelte)</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pastel-green-400 rounded-full" /> Mobile (Flutter)</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pastel-green-400 rounded-full" /> Games (Godot)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.2em] text-pastel-green-600">Approach</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Iterative growth, clean architecture, and empathy for the user. I believe in software that solves real problems.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </BentoCard>

        {/* Project Tiles */}
        {PROJECTS.map((project, idx) => {
          const isFeatured = idx === 0;
          return (
            <BentoCard 
              id={`project-${project.id}`}
              key={project.id}
              isExpanded={expandedId === `project-${project.id}`}
              onClick={() => toggleExpand(`project-${project.id}`)}
              basis={isFeatured ? "basis-full md:basis-[calc(50%-1rem)]" : "basis-[calc(50%-0.5rem)] md:basis-[calc(25%-1rem)]"}
              className="p-0 border-none min-h-[250px]"
            >
              <ProjectContent project={project} isExpanded={expandedId === `project-${project.id}`} />
            </BentoCard>
          );
        })}

        {/* Theme Toggle & Socials */}
        <BentoCard 
          id="socials"
          isExpanded={false}
          basis="basis-[calc(50%-0.5rem)] md:basis-[calc(25%-1rem)]"
          className="!bg-zinc-100 dark:!bg-zinc-800 border-none justify-between p-3 md:p-4"
        >
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-full h-1/2 flex items-center justify-center gap-3 bg-white dark:bg-zinc-700 rounded-2xl mb-2 hover:scale-[1.02] transition-transform active:scale-95 shadow-sm font-bold text-xs uppercase tracking-widest"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <div className="flex gap-2 h-1/2">
            <a 
              href="https://github.com" 
              target="_blank" 
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center bg-zinc-900 text-white rounded-2xl hover:scale-[1.05] transition-transform text-xl"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center bg-[#0077b5] text-white rounded-2xl hover:scale-[1.05] transition-transform text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </BentoCard>

        {/* Status Tile */}
        <BentoCard 
          id="status"
          isExpanded={false}
          basis="basis-[calc(50%-0.5rem)] md:basis-[calc(25%-1rem)]"
          className="text-center bg-white dark:bg-zinc-900 border-none"
        >
          <div className="p-4 flex flex-col items-center justify-center h-full">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Active
            </div>
            <h3 className="text-sm font-bold uppercase tracking-tighter">Davao, PH</h3>
            <p className="text-[9px] text-zinc-400 mt-1 uppercase tracking-[0.2em] font-bold">GMT +8</p>
          </div>
        </BentoCard>

        {/* CTA Tile */}
        <BentoCard 
          id="cta"
          isExpanded={false}
          basis="basis-full md:basis-[calc(25%-1rem)]"
          className="bg-zinc-900 dark:bg-pastel-green-500 !text-white border-none items-center text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <div className="p-6 flex flex-col items-center justify-center h-full relative z-10">
            <h2 className="text-lg font-bold mb-4 leading-tight uppercase tracking-tighter italic">Let's build something!</h2>
            <a 
              href="mailto:hello@loejee.dev" 
              onClick={(e) => e.stopPropagation()}
              className="w-full py-2.5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all hover:scale-[1.05]"
            >
              Hire Me
            </a>
          </div>
        </BentoCard>

      </motion.div>
    </div>
  );
};

export default App;
