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
      className={`dark:!bg-zinc-100 !bg-zinc-800 border-none !p-0 ${className}`}
    >
      <button
        onClick={onToggle}
        className="w-full h-full flex flex-col items-center justify-center gap-3 transition-all active:scale-95 dark:text-black text-white text-[10px] uppercase tracking-[0.3em] group"
      >
        <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">
          {isDarkMode ? "☀️" : "🌙"}
        </span>
        <span>{isDarkMode ? "LIGHT" : "DARK"}</span>
      </button>
    </BentoCard>
  );
};
