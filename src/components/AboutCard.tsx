import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { BIO } from "../data/content";

export const AboutCard = ({ isExpanded, onClick, containerClasses = "" }: { isExpanded: boolean, onClick: () => void, containerClasses?: string }) => {
  return (
    <BentoCard 
      id="about"
      isExpanded={isExpanded}
      onClick={onClick}
      containerClasses={containerClasses}
      className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 h-full"
    >
      <div className="p-8 md:p-12 h-full flex flex-col justify-center">
        <motion.h2 layout className="text-2xl md:text-3xl font-black mb-4 italic tracking-tighter uppercase leading-none">"Hi there! 👋"</motion.h2>
        <motion.p layout className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-medium">
          {BIO.about[0]}
        </motion.p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-100 dark:border-zinc-800 pt-12"
            >
              <div>
                <h3 className="text-[9px] font-black mb-6 uppercase tracking-[0.3em] text-pastel-green-600">Expertise</h3>
                <ul className="space-y-4 text-zinc-500 text-[10px] font-black tracking-widest">
                  {BIO.expertise.map(item => (
                    <li key={item.label} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pastel-green-400 rounded-full" /> {item.label} ({item.details})</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[9px] font-black mb-6 uppercase tracking-[0.3em] text-pastel-green-600">Approach</h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-medium">
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
