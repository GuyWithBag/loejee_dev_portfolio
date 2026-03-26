import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard";
import heroImg from "../assets/hero.png";

export const HeroCard = ({ 
  isExpanded, 
  onClick, 
  onboarding 
}: { 
  isExpanded: boolean, 
  onClick: () => void,
  onboarding?: boolean
}) => {
  return (
    <BentoCard 
      id="hero"
      isExpanded={isExpanded}
      onClick={onClick}
      span="col-span-1 row-span-2"
      className={`flex-col items-center text-center !bg-pastel-green-100 dark:!bg-pastel-green-950/40 border-none relative h-full ${onboarding ? 'z-50 ring-4 ring-pastel-green-400 scale-[1.05]' : ''}`}
    >
      <div className="p-8 flex flex-col items-center h-full justify-center min-h-[400px]">
        <motion.div layout className="relative mb-6">
          <motion.div layout className="absolute -inset-4 bg-pastel-green-400/20 rounded-full blur-2xl" />
          <motion.img 
            src={heroImg} 
            alt="Loejee Miguel L. Dulaugon" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl z-10 relative border-4 border-white/50 dark:border-zinc-800/50"
          />
        </motion.div>
        <motion.h1 layout className="text-xl md:text-3xl font-black leading-tight mb-2 z-10 uppercase tracking-tighter">Loejee Miguel L. Dulaugon</motion.h1>
        <motion.p layout className="text-pastel-green-600 dark:text-pastel-green-400 font-black z-10 text-[10px] md:text-xs uppercase tracking-[0.4em]">Full Stack Developer</motion.p>
        
        {onboarding && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl shadow-xl z-20"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Navigate with keyboard</p>
            <div className="flex flex-col items-center gap-2">
               <div className="flex gap-2">
                  <span className="w-8 h-8 flex items-center justify-center border-2 border-zinc-900 dark:border-white rounded-lg font-bold">W</span>
               </div>
               <div className="flex gap-2">
                  <span className="w-8 h-8 flex items-center justify-center border-2 border-zinc-900 dark:border-white rounded-lg font-bold">A</span>
                  <span className="w-8 h-8 flex items-center justify-center border-2 border-zinc-900 dark:border-white rounded-lg font-bold">S</span>
                  <span className="w-8 h-8 flex items-center justify-center border-2 border-zinc-900 dark:border-white rounded-lg font-bold">D</span>
               </div>
               <div className="mt-2 text-[8px] opacity-60">or Arrow Keys</div>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); onClick(); }}
              className="mt-6 px-6 py-2 bg-pastel-green-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-10 pb-16 text-sm text-zinc-600 dark:text-zinc-400 text-left w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12 border-t border-pastel-green-200/50 dark:border-zinc-800/50 pt-12"
          >
            <div className="flex-1">
              <h3 className="font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-[0.3em] text-[10px]">Education</h3>
              <p className="font-bold text-lg">BS Computer Science</p>
              <p className="opacity-60 uppercase text-[9px] font-black tracking-widest mt-1">University of Mindanao</p>
            </div>
            <div className="flex-1">
              <h3 className="font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-[0.3em] text-[10px]">Philosophy</h3>
              <p className="leading-relaxed italic text-base font-medium">"Code is a tool for creativity. I believe in building software that doesn't just work, but feels right to the user."</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </BentoCard>
  );
};
