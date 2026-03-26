import { BentoCard } from "./BentoCard";

export const ThemeToggle = ({ isDarkMode, onToggle }: { isDarkMode: boolean, onToggle: () => void }) => {
  return (
    <BentoCard 
      id="theme-toggle"
      isExpanded={false}
      span="col-span-1 md:col-span-1 row-span-1"
      className="!bg-zinc-100 dark:!bg-zinc-800/50 border-none p-4 shadow-none flex items-center justify-center"
    >
      <button 
        onClick={onToggle}
        className="w-full h-full flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-700 rounded-3xl hover:scale-[1.02] transition-all active:scale-95 shadow-sm font-black text-[10px] uppercase tracking-[0.3em] group"
      >
        <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">{isDarkMode ? "☀️" : "🌙"}</span>
        <span>{isDarkMode ? "LIGHT" : "DARK"}</span>
      </button>
    </BentoCard>
  );
};
