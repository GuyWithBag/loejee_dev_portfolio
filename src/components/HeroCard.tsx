import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { BIO, UI_STRINGS } from "../data/content";

export const HeroCard = ({
  isExpanded,
  onClick,
  onboarding,
  className = "",
}: {
  isExpanded: boolean;
  onClick: () => void;
  onboarding?: boolean;
  className?: string;
}) => {
  return (
    <BentoCard
      id="hero"
      isExpanded={isExpanded}
      onClick={onClick}
      className={`${className} bg-purple-500 dark:bg-purple-600 !p-8 flex-col justify-end border-none ${onboarding ? "z-50 ring-4 ring-purple-400" : ""}`}
    >
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 shadow-xl" />
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400/50 rounded-full group-hover:scale-125 transition-transform duration-500 z-0" />

      <div className="z-10 relative flex flex-col justify-end h-full">
        {!isExpanded && (
          <motion.div
            layout
            className="w-24 h-24 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full mb-4 border-4 border-white/50 dark:border-white/20 shadow-inner flex items-center justify-center overflow-hidden"
          >
            <img
              src={BIO.pfp}
              alt={BIO.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <motion.h1
          layout
          className="text-4xl font-bold text-white leading-tight tracking-tight mb-2"
        >
          Hi, I'm {BIO.name.split(" ")[0]}. <br />
          <span className="opacity-80 text-2xl font-medium tracking-normal">
            {BIO.role}
          </span>
        </motion.h1>

        {onboarding && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl z-20 text-white"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] mb-4 opacity-80">
              {UI_STRINGS.onboardingTitle}
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <span className="w-8 h-8 flex items-center justify-center border-2 border-white/50 rounded-lg font-bold">
                  W
                </span>
              </div>
              <div className="flex gap-2">
                <span className="w-8 h-8 flex items-center justify-center border-2 border-white/50 rounded-lg font-bold">
                  A
                </span>
                <span className="w-8 h-8 flex items-center justify-center border-2 border-white/50 rounded-lg font-bold">
                  S
                </span>
                <span className="w-8 h-8 flex items-center justify-center border-2 border-white/50 rounded-lg font-bold">
                  D
                </span>
              </div>
              <div className="mt-2 text-[8px] opacity-60">
                {UI_STRINGS.onboardingHint}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="mt-6 w-full py-2 bg-white text-purple-600 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              {UI_STRINGS.getStarted}
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
            className="px-2 pb-16 text-sm text-left w-full max-w-4xl mx-auto border-t border-white/20 pt-12 text-white z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex-1">
                <h3 className="text-white/60 mb-4 uppercase tracking-[0.3em] text-[10px] font-bold">
                  Education
                </h3>
                <p className="font-bold text-lg">{BIO.education.degree}</p>
                <p className="opacity-60 uppercase text-[9px] tracking-widest mt-1">
                  {BIO.education.school}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-white/60 mb-4 uppercase tracking-[0.3em] text-[10px] font-bold">
                  Philosophy
                </h3>
                <p className="leading-relaxed italic text-base font-medium">
                  "{BIO.philosophy}"
                </p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <h3 className="text-white/60 mb-8 uppercase tracking-[0.3em] text-[10px] font-bold">
                About Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-medium leading-relaxed">
                {BIO.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </BentoCard>
  );
};
