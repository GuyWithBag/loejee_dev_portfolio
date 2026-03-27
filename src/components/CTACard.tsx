import { BentoCard } from "./BentoCard";
import { CONTACT } from "../data/content";

export const CTACard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard
      id="cta"
      isExpanded={false}
      className={`bg-zinc-900 dark:bg-pastel-green-500 !text-white border-none items-center text-center overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="p-6 flex flex-col items-center justify-center h-full relative z-10 gap-4">
        <h2 className="text-2xl font-black leading-tight uppercase tracking-[0.2em] italic">
          {CONTACT.ctaTitle}
        </h2>
        <p>{CONTACT.email}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          onClick={(e) => e.stopPropagation()}
          className="w-full py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-[9px] font-black uppercase tracking-0.4em rounded-xl transition-all hover:scale-105"
        >
          {CONTACT.ctaButton}
        </a>
      </div>
    </BentoCard>
  );
};
