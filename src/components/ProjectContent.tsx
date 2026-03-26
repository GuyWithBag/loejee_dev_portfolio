import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../data/projects";

export const ProjectContent = ({ project, isExpanded, onClose }: { project: Project; isExpanded: boolean; onClose: () => void }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const isMobileRatio = project.aspectRatio === "mobile";

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
        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <motion.span layout="position" className="text-[10px] font-black uppercase tracking-[0.2em] text-pastel-green-400 mb-1 opacity-80">
            {project.category}
          </motion.span>
          <motion.h2 layout="position" className="text-lg md:text-xl font-black text-white leading-tight uppercase tracking-tighter">
            {project.title}
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white dark:bg-zinc-900 overflow-hidden min-h-[500px]">
      <div className={`lg:w-1/2 relative group bg-black overflow-hidden flex items-center justify-center p-6 md:p-12 ${isMobileRatio ? 'bg-zinc-100 dark:bg-zinc-800' : ''}`}>
        <motion.div 
          layout
          className={`relative shadow-2xl overflow-hidden rounded-3xl h-full w-full ${isMobileRatio ? 'aspect-[9/16] max-h-[600px] w-auto mx-auto' : 'aspect-video w-full'}`}
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
            <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/40 hover:bg-white/60 dark:bg-black/40 dark:hover:bg-black/60 rounded-full backdrop-blur-md transition-all z-10">
              <FaChevronLeft className="text-zinc-900 dark:text-white text-xl" />
            </button>
            <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/40 hover:bg-white/60 dark:bg-black/40 dark:hover:bg-black/60 rounded-full backdrop-blur-md transition-all z-10">
              <FaChevronRight className="text-zinc-900 dark:text-white text-xl" />
            </button>
          </>
        )}
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center"
      >
        <div className="flex justify-between items-start mb-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pastel-green-500 mb-2 block">{project.category}</span>
            <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tighter uppercase">{project.title}</h2>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-400">
            <FaTimes size={28} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-12">
          {project.skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-pastel-green-100 dark:bg-pastel-green-900/30 text-pastel-green-700 dark:text-pastel-green-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-pastel-green-200 dark:border-pastel-green-800">
              {skill}
            </span>
          ))}
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-14 text-lg md:text-xl font-medium">
          {project.description}
        </p>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-4 w-fit px-12 py-6 bg-zinc-900 dark:bg-pastel-green-500 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl transition-all shadow-xl hover:scale-[1.05] hover:shadow-pastel-green-500/30"
          >
            Launch Project <FaExternalLinkAlt size={12} />
          </a>
        )}
      </motion.div>
    </div>
  );
};
