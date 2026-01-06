'use client';

import { ChallengeItem } from '@/types/challengeItem';
import { ArrowUpRight01Icon, Cancel01Icon, ChipIcon } from '@hugeicons/core-free-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { HugeIcon } from './huge-icon';

interface ChallengeModalProps {
  challenge: ChallengeItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ChallengeModal({ challenge, isOpen, onClose }: ChallengeModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!challenge) return null;

  const Icon = challenge.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Header / Close Button */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#ff6000] transition-colors"
                aria-label="Close modal"
              >
                <HugeIcon icon={Cancel01Icon} size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Top Section: Day & Icon */}
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-[#ff6000]/10 flex items-center justify-center text-[#ff6000]">
                  <Icon size={32} />
                </div>
                <div>
                  <span className="text-[#ff6000] font-mono font-black text-sm tracking-widest uppercase">
                    Challenge Day {challenge.day}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-1">{challenge.title}</h2>
                </div>
              </div>

              {/* Theme Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-slate-700">
                  {challenge.theme}
                </span>
              </div>

              {/* Concept Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff6000]" />
                  The Concept
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{challenge.details}</p>
              </div>

              {/* Technologies Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <HugeIcon icon={ChipIcon} className="text-[#ff6000]" size={20} />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {challenge.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer / CTA */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                <a
                  href={challenge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#ff6000] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#ff8000] hover:shadow-xl transition-all active:scale-95"
                >
                  View Live Demo <HugeIcon icon={ArrowUpRight01Icon} size={18} />
                </a>
                <button
                  onClick={onClose}
                  className="px-8 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 font-bold text-sm uppercase tracking-widest text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  Go Back
                </button>
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -bottom-20 -right-20 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -rotate-12 overflow-hidden">
              <Icon size={300} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
