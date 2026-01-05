'use client';

import ChallengeModal from '@/components/ui/challengeModal';
import { WEEKS } from '@/constants/challenges';
import { ChallengeItem } from '@/types/challengeItem';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function AllDaysPage() {
  const allDays = WEEKS.flatMap((week) => week.days);
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (challenge: ChallengeItem) => {
    setSelectedChallenge(challenge);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      <div className="mb-16 space-y-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          ALL <span className="text-[#ff6000]">PROJECTS</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl font-medium">
          A complete collection of all 31 challenges, from UI components to full-scale web applications and next-gen
          experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allDays.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.day}
              onClick={() => openModal(item)}
              className="group relative text-left bg-slate-50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 rounded-[2rem] p-8 hover:border-[#ff6000]/50 hover:shadow-2xl hover:shadow-[#ff6000]/10 dark:hover:shadow-none transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <span className="text-[#ff6000] font-mono font-black text-sm tracking-wider uppercase">
                      Day {item.day.toString().padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-slate-200/50 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                        {item.theme}
                      </span>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-[#ff6000] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ff6000]/30">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-[#ff6000] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.concept}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center text-[#ff6000] font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                View Project <ArrowRight className="ml-2 w-4 h-4" />
              </div>

              <div className="absolute -bottom-10 -right-10 text-slate-200 dark:text-slate-800/10 group-hover:text-[#ff6000]/5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700 pointer-events-none">
                <Icon size={180} />
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -right-24 -bottom-24 bg-[#ff6000]/10 dark:bg-[#ff6000]/5 blur-[80px] w-64 h-64" />
              </div>
            </button>
          );
        })}
      </div>

      <ChallengeModal challenge={selectedChallenge} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
