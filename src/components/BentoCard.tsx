import { motion } from "framer-motion";
import React from "react";

export const BentoCard = ({
  children,
  className = "",
  onClick,
  id,
  tabIndex = 0,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id: string;
  isExpanded?: boolean;
  tabIndex?: number;
}) => (
  <motion.div
    layout
    id={id}
    tabIndex={tabIndex}
    transition={{ type: "spring", stiffness: 250, damping: 25 }}
    onClick={onClick}
    className={`bento-card group relative flex flex-col ${onClick ? "cursor-pointer" : ""} ${className} z-10`}
  >
    {children}
  </motion.div>
);
