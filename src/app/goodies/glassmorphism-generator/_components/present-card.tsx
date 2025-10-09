"use client";

import { motion } from "framer-motion";

interface PresetCardProps {
  name: string;
  config: {
    blur: number;
    opacity: number;
    bgColor: string;
    borderGradient: boolean;
    gradientFrom: string;
    gradientTo: string;
    shadow: number;
    borderRadius: number;
  };
  onClick: () => void;
}

export function PresetCard({ name, config, onClick }: PresetCardProps) {
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  const blurMap: Record<number, string> = {
    0: "backdrop-blur-none",
    4: "backdrop-blur-sm",
    8: "backdrop-blur",
    12: "backdrop-blur-md",
    16: "backdrop-blur-lg",
    20: "backdrop-blur-xl",
    24: "backdrop-blur-2xl",
    28: "backdrop-blur-3xl",
  };

  const radiusMap: Record<number, string> = {
    0: "rounded-none",
    1: "rounded-sm",
    2: "rounded-md",
    3: "rounded-lg",
    4: "rounded-xl",
    5: "rounded-2xl",
  };

  const cardStyle = {
    backgroundColor: hexToRgba(config.bgColor, config.opacity),
    borderImage: config.borderGradient
      ? `linear-gradient(to right, ${config.gradientFrom}, ${config.gradientTo}) 1`
      : "none",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-lg h-24 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900"
    >
      <div
        className={`absolute inset-2 ${blurMap[config.blur]} ${radiusMap[config.borderRadius]} border-2 flex items-center justify-center`}
        style={cardStyle}
      >
        <span className="text-white font-medium text-sm drop-shadow-lg">
          {name}
        </span>
      </div>
    </motion.button>
  );
}
