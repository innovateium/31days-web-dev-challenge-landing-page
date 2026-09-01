'use client';

import { WEEKS } from '@/constants/challenges';
import { ChallengeItem } from '@/types/challengeItem';
import { useState } from 'react';
import ChallengeModal from '../ui/challengeModal';

/** The whole challenge runs inside October 2026, so day N is simply N October. */
function dateFor(day: string) {
  return `${Number(day)} Oct`;
}

export default function RoadMaps() {
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
    <main className="max-w-7xl mx-auto px-6 pb-32 space-y-28">
      {WEEKS.map((week, weekIndex) => (
        <section key={weekIndex} className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-[#E04B26] pl-6 py-2 z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">{week.title}</h2>
              <p className="text-slate-500 dark:text-slate-400 font-bold mt-1 uppercase text-xs tracking-[0.2em]">
                {week.focus}
              </p>
            </div>
            <div className="text-5xl font-black text-slate-200 dark:text-slate-800 opacity-50 hidden md:block">
              0{weekIndex + 1}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px] md:auto-rows-[200px]">
            {week.days.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.day}
                  onClick={() => openModal(item)}
                  className={`${item.size} group relative text-left bg-slate-50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 rounded-[2.5rem] p-8 hover:border-[#E04B26]/50 hover:shadow-2xl hover:shadow-[#E04B26]/5 dark:hover:shadow-none transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="flex items-baseline gap-2">
                        <span className="font-mono text-2xl font-black text-[#E04B26]">{item.day}</span>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                          {dateFor(item.day)}
                        </span>
                      </span>
                      <div className="h-10 w-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-[#E04B26] transition-colors group-hover:border-[#E04B26]/30">
                        <Icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[#E04B26] dark:group-hover:text-white transition-colors duration-300 leading-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                        {item.concept}
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -right-10 text-slate-200 dark:text-slate-800/20 group-hover:text-[#E04B26]/10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700">
                    <Icon size={160} />
                  </div>

                  <span className="relative z-10 mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E04B26] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View the build
                    <span aria-hidden>&rarr;</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <ChallengeModal challenge={selectedChallenge} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
