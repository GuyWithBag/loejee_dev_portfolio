import { useState, useEffect, useRef, useCallback } from "react";
import type { FC } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRocket,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSun,
  FaMoon,
  FaMousePointer,
} from "react-icons/fa";
import {
  HiOutlineUserCircle,
  HiOutlineLightningBolt,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { BIO, SKILLS, SOCIALS, CONTACT } from "./data/content";
import { PROJECTS } from "./data/projects";

const App: FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<
    Record<number, number>
  >({});

  const navigablesRef = useRef<(HTMLElement | null)[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Focus sidebar when it opens
  useEffect(() => {
    if (expandedProject !== null) {
      setTimeout(() => {
        sidebarRef.current?.focus();
      }, 100);
    }
  }, [expandedProject]);

  // Dark Mode Toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const endOnboarding = useCallback(() => {
    if (isOnboarding) {
      setIsOnboarding(false);
      navigablesRef.current[currentIndex]?.focus();
    }
  }, [isOnboarding, currentIndex]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModal || expandedProject !== null) {
        if (e.key === "Escape") {
          setActiveModal(null);
          setExpandedProject(null);
        }
        return;
      }

      const key = e.key.toLowerCase();
      const validKeys = [
        "w",
        "a",
        "s",
        "d",
        "arrowup",
        "arrowdown",
        "arrowleft",
        "arrowright",
        "enter",
        " ",
      ];

      if (validKeys.includes(key)) {
        if (isOnboarding) {
          endOnboarding();
          return;
        }
        e.preventDefault();
      }

      if (key === "enter" || key === " ") {
        navigablesRef.current[currentIndex]?.click();
        return;
      }

      let newIndex = currentIndex;
      if (key === "d" || key === "arrowright") {
        newIndex = (currentIndex + 1) % navigablesRef.current.length;
      } else if (key === "a" || key === "arrowleft") {
        newIndex =
          (currentIndex - 1 + navigablesRef.current.length) %
          navigablesRef.current.length;
      } else if (key === "s" || key === "arrowdown") {
        const step = currentIndex >= 7 ? 3 : 2;
        newIndex = Math.min(
          currentIndex + step,
          navigablesRef.current.length - 1,
        );
      } else if (key === "w" || key === "arrowup") {
        const step = currentIndex >= 7 ? 3 : 2;
        newIndex = Math.max(currentIndex - step, 0);
      }

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        navigablesRef.current[newIndex]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, activeModal, isOnboarding, endOnboarding, expandedProject]);

  // Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (expandedProject !== null) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transition = "transform 0.1s ease-out";
    card.style.transform = `perspective(1000px) scale(1.02) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transition =
      "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    card.style.transform = "";
  };

  const toggleProject = (id: number) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
      if (!(id in carouselIndices)) {
        setCarouselIndices((prev) => ({ ...prev, [id]: 0 }));
      }
    }
  };

  const moveCarousel = (projectId: number, direction: number, max: number) => {
    setCarouselIndices((prev) => {
      const current = prev[projectId] || 0;
      let next = current + direction;
      if (next < 0) next = max - 1;
      if (next >= max) next = 0;
      return { ...prev, [projectId]: next };
    });
  };

  const renderModalContent = () => {
    if (!activeModal) return null;

    const modalData: Record<string, any> = {
      hero: {
        theme:
          "bg-purple-500 dark:bg-purple-600 text-white border-purple-400 dark:border-purple-500",
        content: (
          <>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 rounded-full z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/50 rounded-full z-0"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6 inline-block animate-bounce">
                👋
              </div>
              <h2 className="text-4xl font-black mb-4">Hello World!</h2>
              <p className="text-white/90 text-lg mb-4">{BIO.philosophy}</p>
              <p className="text-white/90 text-lg">
                Use the grid behind this window to explore my stack, my current
                location, and my selected projects.
              </p>
            </div>
          </>
        ),
      },
      about: {
        theme:
          "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-800",
        content: (
          <>
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-slate-100 dark:bg-slate-800 rounded-3xl rotate-[30deg] z-0"></div>
            <div className="relative z-10">
              <HiOutlineUserCircle className="text-6xl text-blue-500 mb-6" />
              <h2 className="text-4xl font-black mb-4">About Me</h2>
              {BIO.about.map((p, i) => (
                <p
                  key={i}
                  className="text-slate-500 dark:text-slate-400 text-lg mb-4"
                >
                  {p}
                </p>
              ))}
              <p className="text-slate-500 dark:text-slate-400 text-lg italic">
                Approach: {BIO.approach}
              </p>
            </div>
          </>
        ),
      },
      location: {
        theme:
          "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-800",
        content: (
          <>
            <div className="absolute -bottom-10 left-0 w-full h-1/2 bg-green-50 dark:bg-green-900/20 skew-y-6 z-0"></div>
            <div className="relative z-10">
              <FaMapMarkerAlt className="text-6xl text-green-500 mb-6" />
              <h2 className="text-4xl font-black mb-4">Current Location</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                Currently building from{" "}
                <strong className="text-slate-900 dark:text-white">
                  {BIO.location}
                </strong>
                .
              </p>
              <div className="mt-8 w-full h-48 bg-white dark:bg-slate-900 rounded-3xl flex items-center justify-center border-2 border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="text-slate-500 dark:text-slate-400 font-bold flex flex-col items-center gap-2">
                  <HiOutlineGlobeAlt className="text-4xl" /> Remote Work Ready
                </span>
              </div>
            </div>
          </>
        ),
      },
      skills: {
        theme:
          "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-800",
        content: (
          <>
            <div className="absolute right-[-10%] bottom-[-20%] w-64 h-96 bg-slate-50 dark:bg-slate-800 rounded-full rotate-45 z-0"></div>
            <div className="relative z-10">
              <HiOutlineLightningBolt className="text-6xl text-yellow-500 mb-6" />
              <h2 className="text-4xl font-black mb-6">
                Deep Dive: Tech Stack
              </h2>
              <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-4 no-scrollbar">
                {SKILLS.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm"
                  >
                    <skill.Icon className="text-4xl text-blue-500" />
                    <div>
                      <strong className="block text-xl text-slate-800 dark:text-slate-100">
                        {skill.name}
                      </strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ),
      },
    };

    const data = modalData[activeModal];
    if (!data) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        ></div>
        <div
          className={`relative w-full max-w-2xl rounded-[2.5rem] p-10 shadow-3xl border overflow-hidden transition-all duration-300 ${data.theme}`}
        >
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-20 text-current"
          >
            <FaTimes className="text-2xl" />
          </button>
          <div className="relative z-10 h-full w-full">{data.content}</div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    if (expandedProject === null) return null;
    const project = PROJECTS.find((p) => p.id === expandedProject);
    if (!project) return null;

    const carouselIndex = carouselIndices[project.id] || 0;

    return (
      <div
        ref={sidebarRef}
        tabIndex={-1}
        className="fixed top-6 bottom-6 right-6 w-[calc(100%-3rem)] md:w-[500px] lg:w-[600px] bg-white dark:bg-slate-900 shadow-3xl z-[70] flex flex-col animate-slide-in-right rounded-[2.5rem] border-4 border-white dark:border-slate-800 outline-none overflow-hidden"
      >
        <div className="p-8 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
          <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Project Details
          </h3>
          <button
            onClick={() => setExpandedProject(null)}
            className="w-12 h-12 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors text-slate-600 dark:text-slate-300 shadow-inner"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
            <div
              className="carousel-track w-full h-full flex transition-transform duration-500"
              style={{
                transform: `translateX(-${carouselIndex * 100}%)`,
              }}
            >
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-full object-contain shrink-0"
                  alt={`${project.title} UI ${i + 1}`}
                />
              ))}
            </div>

            {project.images.length > 1 && (
              <div className="absolute inset-0 z-20 pointer-events-none p-4 flex justify-between items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveCarousel(project.id, -1, project.images.length);
                  }}
                  className="pointer-events-auto w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-xl rounded-full text-white flex items-center justify-center hover:scale-110 transition-all shadow-2xl border border-white/20"
                >
                  <FaChevronLeft className="text-xl" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveCarousel(project.id, 1, project.images.length);
                  }}
                  className="pointer-events-auto w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-xl rounded-full text-white flex items-center justify-center hover:scale-110 transition-all shadow-2xl border border-white/20"
                >
                  <FaChevronRight className="text-xl" />
                </button>
              </div>
            )}
          </div>

          <div className="p-10">
            <h2 className="text-4xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800 flex items-center gap-2 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg mb-10">
                {project.description}
              </p>
            </div>

            <div className="flex gap-4 mt-auto">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-[1.5rem] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/25"
                >
                  <FaRocket className="text-2xl" /> View Project
                </a>
              )}
              <a
                href="#"
                className="w-20 h-20 bg-slate-900 dark:bg-slate-800 text-white rounded-[1.5rem] flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-700 transition-all hover:scale-[1.02] shadow-xl"
              >
                <FaGithub className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen flex font-sans text-slate-800 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/30 ${isOnboarding ? "onboarding-active" : ""}`}
      onClick={() => endOnboarding()}
    >
      <div
        className={`flex-1 transition-all duration-700 ease-in-out p-4 md:p-10 flex flex-col items-center ${expandedProject !== null ? "lg:mr-[580px] lg:translate-x-[-40px]" : ""}`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDark(!isDark);
          }}
          className="fixed top-6 left-6 w-12 h-12 flex items-center justify-center bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-2xl z-[60]"
        >
          {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>

        {isOnboarding && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 px-6 py-3 rounded-full backdrop-blur-md font-bold text-sm z-[60] flex items-center gap-3 animate-bounce shadow-2xl border border-white/10">
            <div className="flex gap-1">
              {["W", "A", "S", "D"].map((key) => (
                <kbd key={key} className="px-2 py-1 bg-slate-800 dark:bg-slate-200 rounded text-xs">
                  {key}
                </kbd>
              ))}
            </div>
            <span>or Arrows to navigate. Enter to open.</span>
          </div>
        )}

        <div className="max-w-5xl w-full flex flex-col gap-6 mt-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px] w-full">
            <div
              id="hero-card"
              tabIndex={0}
              ref={(el) => {
                navigablesRef.current[0] = el;
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveModal("hero")}
              className="navigable blur-target md:col-span-2 md:row-span-2 bg-purple-500 dark:bg-purple-600 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-300 ease-bouncy hover:shadow-3xl flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-purple-400 dark:border-purple-500"
            >
              <div className="w-24 h-24 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full mb-4 border-4 border-white/50 dark:border-white/20 shadow-inner z-10 pointer-events-none flex items-center justify-center overflow-hidden">
                <img src={BIO.pfp} alt={BIO.name} className="w-full h-full object-cover" />
              </div>
              <h1 className="text-4xl font-bold text-white z-10 leading-tight tracking-tight pointer-events-none">
                Hi, I'm {BIO.name.split(" ")[0]}. {BIO.role}
              </h1>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 shadow-xl pointer-events-none"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400/50 rounded-full group-hover:scale-125 transition-transform duration-500 z-0 pointer-events-none"></div>
            </div>

            <div
              tabIndex={0}
              ref={(el) => {
                navigablesRef.current[1] = el;
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveModal("about")}
              className="navigable blur-target md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-300 ease-bouncy hover:shadow-3xl flex flex-col justify-center relative overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer"
            >
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-3xl rotate-12 group-hover:rotate-[60deg] transition-transform duration-700 z-0 shadow-inner pointer-events-none"></div>
              <div className="z-10 relative pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <HiOutlineUserCircle className="text-2xl text-slate-400" />
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">About Me</h2>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm line-clamp-2">
                  {BIO.about[0]}
                </p>
                <span className="text-purple-500 text-xs font-bold mt-2 inline-block group-hover:translate-x-1 transition-transform">
                  Click to read more -&gt;
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              ref={(el) => {
                navigablesRef.current[2] = el;
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveModal("location")}
              className="navigable blur-target md:col-span-1 bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 ease-bouncy hover:shadow-3xl flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer"
            >
              <div className="absolute -bottom-4 w-full h-1/2 bg-green-50 dark:bg-green-900/20 skew-y-12 group-hover:-skew-y-6 transition-transform duration-500 z-0 pointer-events-none"></div>
              <div className="relative flex h-6 w-6 mb-3 z-10 pointer-events-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-2 border-white dark:border-slate-900"></span>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 z-10 pointer-events-none">
                Building from
              </p>
              <p className="font-semibold text-slate-800 dark:text-slate-200 z-10 pointer-events-none">
                {BIO.location}
              </p>
            </div>

            <a
              href={SOCIALS.find((s) => s.id === "github")?.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              ref={(el) => {
                navigablesRef.current[3] = el;
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="navigable blur-target md:col-span-1 bg-slate-900 dark:bg-slate-800 text-white rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 ease-bouncy hover:shadow-3xl cursor-pointer flex flex-col items-center justify-center relative overflow-hidden group border border-transparent dark:border-slate-700"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 border-4 border-white/10 rounded-full group-hover:scale-150 transition-transform duration-500 z-0 pointer-events-none"></div>
              <FaGithub className="text-5xl mb-2 z-10 group-hover:scale-110 transition-transform pointer-events-none" />
              <span className="font-bold z-10 pointer-events-none">GitHub</span>
            </a>

            <div
              tabIndex={0}
              ref={(el) => {
                navigablesRef.current[4] = el;
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveModal("skills")}
              className="navigable blur-target md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-300 ease-bouncy hover:shadow-3xl flex flex-col justify-center relative overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer"
            >
              <div className="absolute right-10 -bottom-10 w-32 h-64 bg-slate-50 dark:bg-slate-800 rounded-full rotate-45 group-hover:rotate-[60deg] transition-transform duration-700 z-0 pointer-events-none"></div>
              <div className="z-10 relative pointer-events-none">
                <h2 className="text-sm font-bold mb-4 text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <HiOutlineLightningBolt /> Core Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.slice(0, 4).map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold rounded-full text-sm flex items-center gap-2 shadow-sm border border-blue-200 dark:border-blue-800"
                    >
                      <skill.Icon className="text-lg" /> {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={SOCIALS.find((s) => s.id === "linkedin")?.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              ref={(el) => {
                navigablesRef.current[5] = el;
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="navigable blur-target md:col-span-1 bg-blue-600 dark:bg-blue-700 text-white rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 ease-bouncy hover:shadow-3xl cursor-pointer flex flex-col items-center justify-center relative overflow-hidden group border border-transparent dark:border-blue-600"
            >
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500 z-0 pointer-events-none"></div>
              <FaLinkedin className="text-5xl mb-2 z-10 group-hover:scale-110 transition-transform pointer-events-none" />
              <span className="font-bold z-10 pointer-events-none">LinkedIn</span>
            </a>

            <button
              tabIndex={0}
              ref={(el) => {
                navigablesRef.current[6] = el;
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => (window.location.href = `mailto:${CONTACT.email}`)}
              className="navigable blur-target md:col-span-1 bg-yellow-400 dark:bg-yellow-500 rounded-[2.5rem] p-6 shadow-2xl transition-all duration-300 ease-bouncy hover:shadow-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group outline-none border border-yellow-300 dark:border-yellow-600"
            >
              <div className="absolute right-0 bottom-0 w-16 h-16 bg-white/30 dark:bg-white/10 rounded-tl-[2rem] group-hover:scale-150 transition-transform duration-500 z-0 shadow-lg pointer-events-none"></div>
              <div className="z-10 relative flex flex-col items-center w-full pointer-events-none">
                <h2 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">
                  {CONTACT.ctaTitle}
                </h2>
                <div className="bg-slate-900 text-white w-full py-2 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2">
                  <FaEnvelope /> {CONTACT.ctaButton}
                </div>
              </div>
            </button>
          </div>

          <div
            className="flex flex-col md:flex-row items-start justify-between gap-6 blur-target pb-20 w-full"
            id="projects-container"
          >
            {[0, 1, 2].map((colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6 flex-1 w-full">
                {[...PROJECTS, "placeholder" as const].map((item, originalIndex) => {
                  if (originalIndex % 3 !== colIndex) return null;

                  if (item === "placeholder") {
                    return (
                      <div
                        key="placeholder"
                        className="navigable project-card w-full aspect-square bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-4 border-dashed border-slate-300 dark:border-slate-700 rounded-[2.5rem] p-8 text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center shadow-inner transition-all duration-300 hover:shadow-3xl cursor-pointer group relative overflow-hidden"
                        ref={(el) => {
                          navigablesRef.current[7 + PROJECTS.length] = el;
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-200/50 dark:bg-slate-800/50 rounded-full group-hover:scale-125 transition-transform duration-500 z-0 pointer-events-none"></div>
                        <div className="z-10 relative flex flex-col items-center pointer-events-none">
                          <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-300 dark:group-hover:bg-slate-700 transition-colors shadow-xl">
                            <FaMousePointer className="text-xl text-slate-500 dark:text-slate-400" />
                          </div>
                          <span className="font-bold tracking-wide">Add Project</span>
                        </div>
                      </div>
                    );
                  }

                  const project = item;
                  const isSelected = expandedProject === project.id;
                  const navigableIndex = 7 + originalIndex;

                  return (
                    <div
                      key={project.id}
                      tabIndex={0}
                      ref={(el) => {
                        navigablesRef.current[navigableIndex] = el;
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => toggleProject(project.id)}
                      className={`navigable project-card rounded-[2.5rem] text-white shadow-2xl cursor-pointer relative overflow-hidden group border transition-all duration-500
                        ${isSelected ? "border-blue-500 ring-4 ring-blue-500/20" : "border-slate-200 dark:border-slate-800"}
                        ${project.aspectRatio === "16:9" ? "aspect-video" : project.aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-square"}
                      `}
                    >
                      <div className="media-container relative w-full h-full overflow-hidden">
                        <img
                          src={project.images[0]}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          alt={project.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 pointer-events-none">
                          <h3 className="text-2xl font-black mb-2 tracking-tighter">{project.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.slice(0, 2).map((skill, i) => (
                              <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md border border-white/30">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      {renderSidebar()}
      {renderModalContent()}
    </div>
  );
};

export default App;
