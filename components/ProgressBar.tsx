"use client";

import { motion } from "framer-motion";

interface GenerationStep {
  emoji: string;
  label: string;
}

interface GenerationStepsProps {
  steps: GenerationStep[];
  currentStep: number;
}

export function GenerationSteps({ steps, currentStep }: GenerationStepsProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            className={`flex flex-col items-center gap-2 ${
              index <= currentStep ? "opacity-100" : "opacity-40"
            }`}
            animate={
              index === currentStep
                ? { scale: [1, 1.05, 1] }
                : {}
            }
            transition={{ duration: 0.5, repeat: index === currentStep ? Infinity : 0 }}
          >
            {/* Step circle */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all ${
                index < currentStep
                  ? "bg-gold text-void"
                  : index === currentStep
                  ? "bg-gold-dim border-2 border-gold text-gold shadow-lg shadow-gold-glow"
                  : "bg-white/5 text-cream-dim border border-border"
              }`}
            >
              {index < currentStep ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step.emoji
              )}
            </div>
            {/* Step label */}
            <span className={`text-xs ${index <= currentStep ? "text-gold" : "text-cream-dim"}`}>
              {step.label}
            </span>
          </motion.div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="w-12 h-px mx-2 relative">
              <div className="absolute inset-0 bg-white/10" />
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold"
                initial={{ width: 0 }}
                animate={{ width: index < currentStep ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Simple progress bar
interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
}

export default function ProgressBar({ progress, className = "" }: ProgressBarProps) {
  return (
    <div className={`w-full h-1 bg-white/10 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-gold to-gold-bright rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
