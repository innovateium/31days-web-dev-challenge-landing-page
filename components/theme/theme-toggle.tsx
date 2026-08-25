'use client';

import { useThemeTransition } from '@/lib/use-theme-transition';
import { HugeIcon } from '@/components/ui/huge-icon';
import { Moon01Icon, Sun01Icon } from '@hugeicons/core-free-icons';
import * as React from 'react';

export function ThemeToggle({ className }: { className?: string }) {
  const { toggle, resolvedTheme, mounted } = useThemeTransition();

  if (!mounted) {
    return <div className="h-10 w-10 shrink-0 rounded-full bg-black/5 dark:bg-white/5" aria-hidden />;
  }

  const dark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={
        className ??
        'relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] transition-colors hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10'
      }
    >
      <span className="rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0">
        <HugeIcon icon={Sun01Icon} size={18} />
      </span>
      <span className="absolute rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100">
        <HugeIcon icon={Moon01Icon} size={18} />
      </span>
    </button>
  );
}
