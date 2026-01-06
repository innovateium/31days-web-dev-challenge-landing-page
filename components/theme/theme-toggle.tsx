'use client';

import { Moon01Icon, Sun01Icon } from '@hugeicons/core-free-icons';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { HugeIcon } from '../ui/huge-icon';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-900 animate-pulse" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
      aria-label="Toggle Theme"
    >
      <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
        <HugeIcon icon={Sun01Icon} className="h-5 w-5 text-slate-900" />
      </div>
      <div className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        <HugeIcon icon={Moon01Icon} className="h-5 w-5 text-white" />
      </div>
    </button>
  );
}
