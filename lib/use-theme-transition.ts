'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { flushSync } from 'react-dom';

/**
 * Wraps a theme change in a View Transition so the new theme is revealed by a
 * circle growing out of the button that was pressed.
 *
 * Two details matter and both were wrong in the first version.
 *
 * The theme class has to be on the document before the callback returns, or the
 * transition captures no change and the browser discards it. next-themes goes
 * through React state, so the update needs flushSync to land in time.
 *
 * The circle is animated here rather than from a @keyframes rule. A CSS
 * animation would have to read the origin from custom properties, and those
 * have to inherit all the way into the ::view-transition pseudo tree to be
 * usable. Passing literal pixel values to the pseudo-element removes that
 * dependency, so the circle always starts exactly on the button.
 */
const DURATION_MS = 560;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

type ViewTransition = { ready: Promise<void>; finished: Promise<void> };
type StartViewTransition = (callback: () => void) => ViewTransition;

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

      // Measured before the swap, while the button is still where it was clicked.
      const rect = event?.currentTarget?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = start.call(document, () => {
        flushSync(() => setTheme(next));
      });

      transition.ready
        .then(() => {
          root.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`
              ]
            },
            {
              duration: DURATION_MS,
              easing: EASING,
              pseudoElement: '::view-transition-new(root)'
            }
          );
        })
        .catch(() => {
          // A transition can be aborted, for instance on a background tab. The
          // theme has still changed, so there is nothing to put right here.
        });
    },
    [resolvedTheme, setTheme]
  );

  return { toggle, resolvedTheme, mounted };
}
