import { BentoCard } from "./BentoCard";
import { BIO } from "../data/content";

export const StatusCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard
      id="status"
      isExpanded={false}
      className={`bg-white dark:bg-slate-900 !p-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer ${className}`}
    >
      <div className="absolute -bottom-4 w-full h-1/2 bg-green-50 dark:bg-green-900/20 skew-y-12 group-hover:-skew-y-6 transition-transform duration-500 z-0" />
      
      <div className="relative flex h-5 w-5 mb-3 z-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 dark:bg-green-500"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white dark:border-slate-900"></span>
      </div>
      
      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1 z-10">
        Building from
      </p>
      <p className="font-semibold text-slate-800 dark:text-slate-200 z-10 text-sm">
        {BIO.location}
      </p>
    </BentoCard>
  );
};
