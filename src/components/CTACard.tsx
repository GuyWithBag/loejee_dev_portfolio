import { BentoCard } from "./BentoCard";
import { CONTACT } from "../data/content";

export const CTACard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard
      id="cta"
      isExpanded={false}
      className={`bg-yellow-400 dark:bg-yellow-500 !p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer ${className}`}
    >
      <div className="absolute right-0 bottom-0 w-16 h-16 bg-white/30 rounded-tl-[2rem] group-hover:scale-150 transition-transform duration-500 z-0 shadow-lg border border-yellow-200 dark:border-yellow-600" />
      
      <div className="z-10 relative flex flex-col items-center">
        <h2 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">
          {CONTACT.ctaTitle}
        </h2>
        <a
          href={`mailto:${CONTACT.email}`}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 text-white dark:bg-slate-900 dark:text-white px-6 py-2 rounded-full font-bold text-sm transition-transform duration-300 hover:scale-125 hover:-rotate-3 shadow-3xl"
        >
          {CONTACT.ctaButton}
        </a>
      </div>
    </BentoCard>
  );
};
