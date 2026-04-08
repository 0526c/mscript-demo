"use client";

import { motion } from "framer-motion";
import { Shot } from "@/types";

interface StoryCardProps {
  shot: Shot;
  index: number;
}

export default function StoryCard({ shot, index }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative aspect-video rounded-xl border border-border overflow-hidden group cursor-pointer"
      whileHover={{ 
        scale: 1.03, 
        y: -4,
        borderColor: "rgba(212,168,75,0.5)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}
    >
      {/* Gradient background based on genre */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsla(${340 + index * 45}, 30%, 14%, 1) 0%, hsla(${340 + index * 45 + 20}, 25%, 10%, 1) 100%)`
        }}
      />

      {/* Silhouette */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-24 rounded-full"
        style={{ 
          background: `hsla(${340 + index * 45}, 25%, 28%, 0.35)`,
          filter: 'blur(1px)'
        }}
      />

      {/* Info overlay */}
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-void via-void/80 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-gold mb-0.5">{shot.number}</div>
            <div className="text-[10px] text-cream-dim">{shot.movement}</div>
          </div>
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-xl border-2 border-gold/0 group-hover:border-gold/30 transition-colors pointer-events-none" />
    </motion.div>
  );
}
