"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface PreviewCardProps {
  blur: string;
  opacity: number;
  bgColor: string;
  borderGradient: boolean;
  gradientFrom: string;
  gradientTo: string;
  shadow: string;
  borderRadius: string;
}

export function PreviewCard({
  blur,
  opacity,
  bgColor,
  borderGradient,
  gradientFrom,
  gradientTo,
  shadow,
  borderRadius,
}: PreviewCardProps) {
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  const cardStyle = {
    backgroundColor: hexToRgba(bgColor, opacity),
    borderImage: borderGradient
      ? `linear-gradient(to right, ${gradientFrom}, ${gradientTo}) 1`
      : "none",
  };

  return (
    <div className="w-full h-96 relative rounded-2xl overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center  p-8 flex items-center justify-center">
 

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`relative z-10 p-8 border-2  ${blur} ${shadow} ${borderRadius} max-w-sm w-full`}
        style={cardStyle}
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-12 h-12 text-white" />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Glass Card</h3>
        <p className="text-white/90 text-sm mb-4">
          This is a beautiful glassmorphism card with customizable effects.
          Adjust the settings to create your perfect design.
        </p>

        <div className="flex gap-2">
          <div className="flex-1 h-2 bg-white/30 rounded-full" />
          <div className="flex-1 h-2 bg-white/30 rounded-full" />
          <div className="flex-1 h-2 bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
