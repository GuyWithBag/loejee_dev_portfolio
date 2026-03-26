import { motion } from "framer-motion";
import React from "react";

export const BentoCard = ({ 
  children, 
  className = "", 
  onClick, 
  id,
  tabIndex = 0,
  containerClasses = ""
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  id: string;
  isExpanded?: boolean;
  tabIndex?: number;
  containerClasses?: string;
}) => (
  <motion.div 
    layout
    id={id}
    tabIndex={tabIndex}
    transition={{ type: "spring", stiffness: 250, damping: 25 }}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`bento-card relative flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ${onClick ? 'cursor-pointer' : ''} ${className} z-10 ${containerClasses}`}
  >
    {children}
  </motion.div>
);
