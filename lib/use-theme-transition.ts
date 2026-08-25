'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

/**
 * Wraps a theme change in a View Transition so the swap can be animated in
 * CSS rather than cross-faded by the browser default.
 *
 * The element that triggered the change publishes its centre and the distance
 * to the furthest corner as CSS custom properties, so a transition can grow
 * out of the button that was actually pressed rather than from a hardcoded
 * corner. Everything degrades to a plain setState where the API is missing
 * (Firefox today) or where the reader has asked for less motion.
 */
type StartViewTransition = (callback: () => void) => { finished: Promise<void> };

export function useThemeTransition() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const toggle = React.useCallback(
    (event?: React.MouseEvent<HTMLElement>) => {
      const next = resolvedTheme === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;

      const start = (document as Document & { startViewTransition?: StartViewTransition })
        .startViewTransition;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!start || reduced) {
        setTheme(next);
        return;
      }

      // Origin of the reveal: the button's centre, falling back to the middle
      // of the viewport when the toggle is fired from the keyboard.
      const rect = event?.currentTarget?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

      root.style.setProperty('--vt-x', `${x}px`);
      root.style.setProperty('--vt-y', `${y}px`);
      root.style.setProperty('--vt-r', `${radius}px`);
      root.dataset.vtActive = 'true';

      start.call(document, () => setTheme(next)).finished.finally(() => {
        delete root.dataset.vtActive;
      });
    },
    [resolvedTheme, setTheme]
  );

  return { toggle, resolvedTheme, mounted };
}
