import type { IconType } from "react-icons";
import { BentoCard } from "./BentoCard";

interface SocialCardProps {
  id: string;
  href: string;
  icon: IconType;
  label: string;
  className?: string;
}

export const SocialCard = ({
  id,
  href,
  icon: Icon,
  label,
  className = "",
}: SocialCardProps) => {
  const isGithub = id.toLowerCase().includes("github");
  const isLinkedin = id.toLowerCase().includes("linkedin");
  
  const rotationClass = isGithub ? "hover:-rotate-6" : isLinkedin ? "hover:rotate-6" : "";

  return (
    <BentoCard
      id={id}
      isExpanded={false}
      className={`!p-6 text-white overflow-hidden relative group border-transparent dark:border-slate-700 ${rotationClass} ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full flex flex-col items-center justify-center z-10 relative"
      >
        {isGithub && (
          <div className="absolute -right-4 -bottom-4 w-20 h-20 border-4 border-white/10 rounded-full group-hover:scale-150 transition-transform duration-500 z-0" />
        )}
        {isLinkedin && (
          <div className="absolute -left-6 -top-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500 z-0" />
        )}
        
        <Icon className="text-5xl mb-2 z-10 transition-transform group-hover:scale-110" />
        <span className="font-bold z-10">{label}</span>
      </a>
    </BentoCard>
  );
};
