import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { SKILLS } from "../data/content";

export const SkillsCard = ({
  isExpanded,
  onClick,
  className = "",
}: {
  isExpanded: boolean;
  onClick: () => void;
  className?: string;
  skillsClasses?: string;
}) => {
  const colorClasses = [
    "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800",
    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800",
    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
    "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
  ];

  return (
    <BentoCard
      id="skills"
      isExpanded={isExpanded}
      onClick={onClick}
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 h-full !p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer ${className}`}
    >
      <div className="absolute right-10 -bottom-10 w-32 h-64 bg-slate-50 dark:bg-slate-800 rounded-full rotate-45 group-hover:rotate-[60deg] transition-transform duration-700 z-0" />
      
      <div className="z-10 relative">
        <h2 className="text-sm font-bold mb-4 text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.slice(0, isExpanded ? 20 : 6).map(({ name }, index) => (
            <motion.span
              layout
              key={name}
              className={`px-4 py-2 font-semibold rounded-full text-sm transition-all hover:scale-110 ${index % 2 === 0 ? "hover:rotate-3" : "hover:-rotate-3"} cursor-default shadow border ${colorClasses[index % colorClasses.length]}`}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
};
