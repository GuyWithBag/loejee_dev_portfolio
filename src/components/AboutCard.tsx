import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { BIO } from "../data/content";

export const AboutCard = ({
  isExpanded,
  onClick,
  className = "",
}: {
  isExpanded: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <BentoCard
      id="about"
      isExpanded={isExpanded}
      onClick={onClick}
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 h-full !p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer ${className}`}
    >
      <div className="absolute -right-8 -top-8 w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-3xl rotate-12 group-hover:rotate-[60deg] transition-transform duration-700 z-0" />
      
      <div className="z-10 relative">
        <motion.h2
          layout
          className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50"
        >
          About Me
        </motion.h2>
        <motion.p
          layout
          className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm"
        >
          {BIO.about[0]}
        </motion.p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-xs font-bold mb-4 uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Expertise
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  {BIO.expertise.map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="font-semibold">{item.label}</span>
                      <span className="opacity-60 text-xs">({item.details})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold mb-4 uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Approach
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {BIO.approach}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BentoCard>
  );
};
