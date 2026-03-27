import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../data/projects";

export const ProjectContent = ({ project, isExpanded }: { project: Project; isExpanded: boolean; onClose: () => void }) => {
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
      <div className="absolute inset-0 group overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.25] z-0 shadow-inner"
          style={{ backgroundImage: `url(${project.images[0]})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70 transition-colors duration-300 group-hover:bg-slate-900/60 z-10 border border-slate-700 dark:border-slate-900" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
          <div>
            <h3 className="text-2xl font-black mb-2 tracking-tighter text-white leading-tight uppercase">
              {project.title}
            </h3>
            <p className="text-slate-200 text-sm font-medium leading-relaxed max-w-sm line-clamp-2">
              {project.description}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.skills.slice(0, 2).map(skill => (
              <span key={skill} className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md border border-white/30 shadow-sm text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white dark:bg-slate-900 overflow-hidden min-h-[500px]">
      <div className="lg:w-1/2 relative group bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center p-6 md:p-12">
        <motion.div 
          layout
          className="relative shadow-2xl overflow-hidden rounded-[2.5rem] w-full aspect-video"
        >
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={project.images[currentImgIndex]} 
            className="w-full h-full object-cover"
            key={currentImgIndex}
          />
        </motion.div>
        
        {project.images.length > 1 && (
          <>
            <button onClick={prevImg} className="absolute left-10 top-1/2 -translate-y-1/2 p-4 bg-white/40 hover:bg-white/60 dark:bg-black/40 dark:hover:bg-black/60 rounded-full backdrop-blur-md transition-all z-10 text-slate-900 dark:text-white">
              <FaChevronLeft size={20} />
            </button>
            <button onClick={nextImg} className="absolute right-10 top-1/2 -translate-y-1/2 p-4 bg-white/40 hover:bg-white/60 dark:bg-black/40 dark:hover:bg-black/60 rounded-full backdrop-blur-md transition-all z-10 text-slate-900 dark:text-white">
              <FaChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center"
      >
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 block">{project.category}</span>
          <h2 className="text-4xl font-black leading-tight tracking-tighter text-slate-900 dark:text-slate-50 uppercase">{project.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold rounded-full text-sm border border-slate-200 dark:border-slate-700">
              {skill}
            </span>
          ))}
        </div>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 text-lg font-medium">
          {project.description}
        </p>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-3 w-fit px-8 py-4 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 font-bold uppercase tracking-wider text-sm rounded-full transition-all hover:scale-110 hover:-rotate-3 shadow-3xl"
          >
            Visit Website <FaExternalLinkAlt size={14} />
          </a>
        )}
      </motion.div>
    </div>
  );
};
