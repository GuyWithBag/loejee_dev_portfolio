import { BentoCard } from "./BentoCard";

export const ThemeToggle = ({ isDarkMode, onToggle, containerClasses = "" }: { isDarkMode: boolean, onToggle: () => void, containerClasses?: string }) => {
  return (
    <BentoCard 
      id="theme-toggle"
      isExpanded={false}
      containerClasses={containerClasses}
      className="!bg-zinc-100 dark:!bg-zinc-800/50 border-none !p-0"
    >
      <button 
        onClick={onToggle}
        className="w-full h-full flex flex-col items-center justify-center gap-3 transition-all active:scale-95 font-black text-[10px] uppercase tracking-[0.3em] group"
      >
        <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">{isDarkMode ? "☀️" : "🌙"}</span>
        <span>{isDarkMode ? "LIGHT" : "DARK"}</span>
      </button>
    </BentoCard>
  );
};
