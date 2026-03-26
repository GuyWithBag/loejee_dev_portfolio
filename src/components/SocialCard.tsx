import type { IconType } from "react-icons";
import { BentoCard } from "./BentoCard";

interface SocialCardProps {
  id: string;
  href: string;
  icon: IconType;
  label: string;
  className?: string;
}

export const SocialCard = ({ id, href, icon: Icon, label, className = "", containerClasses = "" }: SocialCardProps & { containerClasses?: string }) => {
  return (
    <BentoCard 
      id={id}
      isExpanded={false}
      containerClasses={containerClasses}
      className={`!p-0 border-none flex items-center justify-center ${className}`}
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full flex flex-col items-center justify-center gap-3 text-white transition-transform hover:scale-[1.05] group"
      >
        <Icon className="text-4xl md:text-5xl group-hover:scale-110 transition-transform" />
        <span className="font-black text-[10px] uppercase tracking-[0.3em]">{label}</span>
      </a>
    </BentoCard>
  );
};
