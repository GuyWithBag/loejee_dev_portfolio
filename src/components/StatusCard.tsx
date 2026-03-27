import { BentoCard } from "./BentoCard";
import { BIO } from "../data/content";

export const StatusCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard
      id="status"
      isExpanded={false}
      className={`text-center bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-none ${className}`}
    >
      <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full">
        <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.3em] mb-3">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          ACTIVE
        </div>
        <h3 className="text-sm font-black uppercase tracking-tighter">
          {BIO.location}
        </h3>
        <p className="text-[8px] text-zinc-400 mt-1 uppercase tracking-[0.3em] font-black opacity-50">
          GMT +8
        </p>
      </div>
    </BentoCard>
  );
};
