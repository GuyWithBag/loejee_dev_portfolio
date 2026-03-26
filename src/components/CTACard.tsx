import { BentoCard } from "./BentoCard";

export const CTACard = () => {
  return (
    <BentoCard 
      id="cta"
      isExpanded={false}
      span="col-span-1 md:col-span-1 row-span-1"
      className="bg-zinc-900 dark:bg-pastel-green-500 !text-white border-none items-center text-center overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="p-6 flex flex-col items-center justify-center h-full relative z-10">
        <h2 className="text-base font-black mb-4 leading-tight uppercase tracking-[0.2em] italic">Let's build!</h2>
        <a 
          href="mailto:hello@loejee.dev" 
          onClick={(e) => e.stopPropagation()}
          className="w-full py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-[9px] font-black uppercase tracking-[0.4em] rounded-xl transition-all hover:scale-[1.05]"
        >
          Hire Me
        </a>
      </div>
    </BentoCard>
  );
};
