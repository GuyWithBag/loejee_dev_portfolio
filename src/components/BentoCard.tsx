import { motion } from "framer-motion";
import React from "react";

export const BentoCard = ({ 
  children, 
  className = "", 
  onClick, 
  isExpanded,
  span = "col-span-1 row-span-1",
  id,
  tabIndex = 0
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  id: string;
  isExpanded: boolean;
  span?: string;
  tabIndex?: number;
}) => (
  <motion.div 
    layout
    id={id}
    tabIndex={tabIndex}
    transition={{ type: "spring", stiffness: 250, damping: 25 }}
    onClick={onClick}
    whileHover={{ scale: isExpanded ? 1 : 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`bento-card relative flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow ${onClick ? 'cursor-pointer' : ''} ${className} 
      ${isExpanded ? 'col-span-2 md:col-span-4 row-span-auto z-20 h-auto order-first' : `${span} z-10 ${span.includes('row-span-1') && span.includes('col-span-1') ? 'aspect-square' : ''}`}
    `}
  >
    {children}
  </motion.div>
);
