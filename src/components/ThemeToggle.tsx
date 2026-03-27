import { BentoCard } from "./BentoCard";

export const ThemeToggle = ({
  isDarkMode,
  onToggle,
  className = "",
}: {
  isDarkMode: boolean;
  onToggle: () => void;
  className?: string;
}) => {
  return (
    <BentoCard
      id="theme-toggle"
      isExpanded={false}
      className={`bg-slate-900 dark:bg-white border-none !p-6 ${className} hover:rotate-3`}
    >
      <button
        onClick={onToggle}
        className="w-full h-full flex flex-col items-center justify-center gap-2 transition-all active:scale-95 text-white dark:text-slate-900 group"
      >
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
          {isDarkMode ? "☀️" : "🌙"}
        </span>
        <span className="font-bold text-sm uppercase tracking-widest">{isDarkMode ? "Light" : "Dark"}</span>
      </button>
    </BentoCard>
  );
};
