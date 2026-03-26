import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { SKILLS } from "../data/content";

export const SkillsCard = ({ isExpanded, onClick, containerClasses = "" }: { isExpanded: boolean, onClick: () => void, containerClasses?: string }) => {
  return (
    <BentoCard 
      id="skills"
      isExpanded={isExpanded}
      onClick={onClick}
      containerClasses={containerClasses}
      className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
    >
      <div className="p-6 h-full flex flex-col">
        <h2 className="text-[9px] font-black mb-4 flex items-center gap-3 uppercase tracking-[0.3em] text-pastel-green-600">
          <span className="w-4 h-0.5 bg-pastel-green-500 rounded-full"></span>
          Stack
        </h2>
        <div className={`grid ${isExpanded ? "grid-cols-3 md:grid-cols-6" : "grid-cols-2"} gap-3 flex-1`}>
          {SKILLS.slice(0, isExpanded ? 12 : 4).map(({ name, Icon }) => (
            <motion.div 
              layout
              key={name} 
              className="relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800 aspect-square rounded-2xl border border-zinc-100 dark:border-zinc-800 group hover:border-pastel-green-300 transition-all overflow-hidden"
            >
              <motion.div
                className="flex flex-col items-center justify-center h-full w-full transition-transform duration-300 group-hover:-translate-y-2"
              >
                <Icon className="text-xl md:text-2xl text-zinc-400 group-hover:text-pastel-green-500 transition-colors" />
                <span className="text-[7px] font-black uppercase tracking-widest text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">
                  {name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
};
