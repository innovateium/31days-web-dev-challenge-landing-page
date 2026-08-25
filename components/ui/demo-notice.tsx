'use client';

import Image from 'next/image';
import * as React from 'react';

interface DemoNoticeProps {
  /** The name this build goes by, used in the opening sentence. */
  project: string;
  /** Unique per project so dismissing one does not dismiss the rest. */
  storageKey: string;
}

/**
 * The same notice ships in all thirty two builds, so it deliberately styles
 * itself with fixed values rather than each project's design tokens. Whatever
 * palette the surrounding site uses, this panel reads the same everywhere.
 */
export function DemoNotice({ project, storageKey }: DemoNoticeProps) {
  const [open, setOpen] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setReady(true);
    try {
      if (window.sessionStorage.getItem(storageKey) !== 'seen') setOpen(true);
    } catch {
      // Private browsing can refuse sessionStorage. Showing the notice is the
      // safer failure, so fall through to opening it.
      setOpen(true);
    }
  }, [storageKey]);

  const dismiss = React.useCallback(() => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(storageKey, 'seen');
    } catch {
      /* nothing to do, the notice simply shows again next load */
    }
    triggerRef.current?.focus();
  }, [storageKey]);

  // Hold focus inside the panel while it is up, and let Escape close it.
  React.useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    panel?.querySelector<HTMLButtonElement>('[data-autofocus]')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dismiss();
        return;
      }
      if (event.key !== 'Tab' || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>('a[href], button');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, dismiss]);

  if (!ready) return null;

  return (
    <>
      <style>{DEMO_NOTICE_CSS}</style>

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="About this demo"
        className="inv-notice-trigger"
        hidden={open}
      >
        <InfoIcon />
      </button>

      {open && (
        <div className="inv-notice-root" role="dialog" aria-modal="true" aria-labelledby="inv-notice-title">
          <div className="inv-notice-scrim" onMouseDown={dismiss} />

          <div ref={panelRef} className="inv-notice-panel">
            <div className="inv-notice-brand">
              <Image
                src="/brand/lockup-dark.png"
                alt="Innovateium"
                width={175}
                height={30}
                className="inv-notice-lockup inv-notice-lockup-light"
              />
              <Image
                src="/brand/lockup-light.png"
                alt="Innovateium"
                width={175}
                height={30}
                className="inv-notice-lockup inv-notice-lockup-dark"
              />
            </div>

            <p className="inv-notice-eyebrow">Demo notice</p>
            <h2 id="inv-notice-title" className="inv-notice-title">
              Everything here is made up
            </h2>

            <div className="inv-notice-body">
              <p>
                <strong>{project}</strong> is a demonstration build for Innovateium&apos;s 31 Days of Web Development
                Challenge. Every name, price, listing, message and statistic on this page was invented to show the
                interface working. None of it describes a real business, person or transaction.
              </p>

              <div className="inv-notice-callout">
                <ShieldIcon />
                <p>
                  <strong>Nothing you type is collected.</strong> There is no account, no tracking of what you do here,
                  and no server storing your input. Anything you enter stays in this browser and goes when you close the
                  tab.
                </p>
              </div>

              <p>Put in any dummy data you like and click anything you want to. Nothing here can break.</p>
            </div>

            <button type="button" data-autofocus onClick={dismiss} className="inv-notice-cta">
              Got it, let me look around
            </button>

            <a
              href="https://31days.innovateium.co.bw"
              target="_blank"
              rel="noreferrer"
              className="inv-notice-link"
            >
              See all 31 builds
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 10.75v6" strokeLinecap="round" />
      <path d="M12 7.5h.01" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 2.75 4.75 5.5v6c0 4.4 3 8.05 7.25 9.75 4.25-1.7 7.25-5.35 7.25-9.75v-6L12 2.75Z" strokeLinejoin="round" />
      <path d="m9.25 11.75 2 2 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Scoped to `inv-notice-` so it cannot collide with anything a project already
 * defines, and written in plain CSS so it does not depend on that project's
 * Tailwind theme being configured any particular way.
 */
const DEMO_NOTICE_CSS = `
.inv-notice-root, .inv-notice-trigger { --inv-orange: #e34b25; --inv-ink: #0d0d0f; --inv-paper: #ffffff;
  --inv-muted: #5b5f66; --inv-line: rgb(0 0 0 / 0.10); --inv-soft: rgb(0 0 0 / 0.04); }
@media (prefers-color-scheme: dark) {
  .inv-notice-root, .inv-notice-trigger { --inv-ink: #f4f4f5; --inv-paper: #101013; --inv-muted: #a1a1aa;
    --inv-line: rgb(255 255 255 / 0.12); --inv-soft: rgb(255 255 255 / 0.06); }
}
html.dark .inv-notice-root, html.dark .inv-notice-trigger,
[data-theme="dark"] .inv-notice-root, [data-theme="dark"] .inv-notice-trigger {
  --inv-ink: #f4f4f5; --inv-paper: #101013; --inv-muted: #a1a1aa;
  --inv-line: rgb(255 255 255 / 0.12); --inv-soft: rgb(255 255 255 / 0.06);
}
html.light .inv-notice-root, html.light .inv-notice-trigger,
[data-theme="light"] .inv-notice-root, [data-theme="light"] .inv-notice-trigger {
  --inv-ink: #0d0d0f; --inv-paper: #ffffff; --inv-muted: #5b5f66;
  --inv-line: rgb(0 0 0 / 0.10); --inv-soft: rgb(0 0 0 / 0.04);
}

.inv-notice-trigger { position: fixed; right: 1rem; bottom: 1rem; z-index: 2147483000;
  display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem;
  border-radius: 9999px; border: 1px solid var(--inv-line); background: var(--inv-paper);
  color: var(--inv-muted); cursor: pointer; box-shadow: 0 6px 20px rgb(0 0 0 / 0.10);
  transition: color .2s ease, border-color .2s ease, transform .2s ease; }
.inv-notice-trigger:hover { color: var(--inv-orange); border-color: var(--inv-orange); transform: translateY(-1px); }
.inv-notice-trigger:focus-visible { outline: 2px solid var(--inv-orange); outline-offset: 2px; }

.inv-notice-root { position: fixed; inset: 0; z-index: 2147483001; display: flex; align-items: center;
  justify-content: center; padding: 1.25rem; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }
.inv-notice-scrim { position: absolute; inset: 0; background: rgb(6 6 8 / 0.62);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); animation: inv-notice-fade .28s ease both; }

.inv-notice-panel { position: relative; width: 100%; max-width: 30rem; max-height: calc(100dvh - 2.5rem);
  overflow-y: auto; overscroll-behavior: contain; border-radius: 1.25rem; border: 1px solid var(--inv-line);
  background: var(--inv-paper); color: var(--inv-ink); padding: 1.75rem;
  box-shadow: 0 28px 70px rgb(0 0 0 / 0.30); animation: inv-notice-rise .34s cubic-bezier(0.22, 1, 0.36, 1) both; }

.inv-notice-brand { margin-bottom: 1.5rem; }
.inv-notice-lockup { height: 1.75rem; width: auto; }
.inv-notice-lockup-dark { display: none; }
@media (prefers-color-scheme: dark) {
  .inv-notice-lockup-light { display: none; }
  .inv-notice-lockup-dark { display: block; }
}
html.dark .inv-notice-lockup-light, [data-theme="dark"] .inv-notice-lockup-light { display: none; }
html.dark .inv-notice-lockup-dark, [data-theme="dark"] .inv-notice-lockup-dark { display: block; }
html.light .inv-notice-lockup-light, [data-theme="light"] .inv-notice-lockup-light { display: block; }
html.light .inv-notice-lockup-dark, [data-theme="light"] .inv-notice-lockup-dark { display: none; }

.inv-notice-eyebrow { margin: 0 0 .5rem; font-size: .6875rem; font-weight: 600; letter-spacing: .14em;
  text-transform: uppercase; color: var(--inv-orange); }
.inv-notice-title { margin: 0 0 1rem; font-size: 1.5rem; line-height: 1.2; font-weight: 700;
  letter-spacing: -0.02em; color: var(--inv-ink); }
.inv-notice-body { display: flex; flex-direction: column; gap: .875rem; font-size: .875rem; line-height: 1.65;
  color: var(--inv-muted); }
.inv-notice-body p { margin: 0; }
.inv-notice-body strong { color: var(--inv-ink); font-weight: 600; }

.inv-notice-callout { display: flex; gap: .75rem; padding: .875rem; border-radius: .75rem;
  border: 1px solid var(--inv-line); background: var(--inv-soft); }
.inv-notice-callout svg { flex: none; margin-top: .125rem; color: var(--inv-orange); }

.inv-notice-cta { margin-top: 1.5rem; width: 100%; border: 0; border-radius: .75rem; padding: .8125rem 1rem;
  background: var(--inv-orange); color: #fff; font-size: .875rem; font-weight: 600; cursor: pointer;
  transition: filter .2s ease, transform .15s ease; }
.inv-notice-cta:hover { filter: brightness(1.08); }
.inv-notice-cta:active { transform: scale(.99); }
.inv-notice-cta:focus-visible { outline: 2px solid var(--inv-orange); outline-offset: 3px; }

.inv-notice-link { display: block; margin-top: .875rem; text-align: center; font-size: .75rem;
  color: var(--inv-muted); text-decoration: none; }
.inv-notice-link:hover { color: var(--inv-orange); text-decoration: underline; }

@keyframes inv-notice-fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes inv-notice-rise { from { opacity: 0; transform: translateY(14px) scale(.97) } to { opacity: 1; transform: none } }

@media (prefers-reduced-motion: reduce) {
  .inv-notice-scrim, .inv-notice-panel { animation: none; }
  .inv-notice-trigger, .inv-notice-cta { transition: none; }
}
`;
