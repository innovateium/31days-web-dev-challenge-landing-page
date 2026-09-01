'use client';

import { HugeIcon } from '@/components/ui/huge-icon';
import {
  ArrowUpRight01Icon,
  Facebook01Icon,
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  Mail01Icon,
  WhatsappIcon
} from '@hugeicons/core-free-icons';
import Image from 'next/image';
import * as React from 'react';

export interface FooterLink {
  label: string;
  href: string;
  /** Marks a link that leaves the page, so it opens in a new tab. */
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SiteFooterProps {
  /** The name this build goes by, e.g. "Tiro". */
  project: string;
  /** Day number in the challenge, 1 to 31. */
  day: number;
  /** e.g. "23 October 2026". */
  date: string;
  /** One line in the fictional brand's own voice. */
  tagline: string;
  /** Two or three columns of links that belong to this build. */
  columns?: FooterColumn[];
  /** Any CSS colour. Drives every hover and the rule above the contact strip. */
  accent?: string;
  /** Set when the surrounding page is already dark, so the footer stays flush. */
  tone?: 'auto' | 'dark';
}

const WHATSAPP_NUMBER = '26772218758';
const WHATSAPP_DISPLAY = '+267 72 218 758';

const CONTACT = [
  { icon: GlobeIcon, label: 'innovateium.co.bw', href: 'https://innovateium.co.bw' },
  { icon: Mail01Icon, label: 'info@innovateium.co.bw', href: 'mailto:info@innovateium.co.bw' },
  { icon: WhatsappIcon, label: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}` }
];

const SOCIAL = [
  { icon: Facebook01Icon, label: 'Facebook', href: 'https://www.facebook.com/innovateium/' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/innovateium' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/innovateium' }
];

/**
 * One footer for all thirty two builds. The top half belongs to whichever
 * fictional brand the build is showing; the bottom half is Innovateium, so
 * every demo funnels back to the same place without the demo ever pretending
 * the invented business has real accounts.
 */
export function SiteFooter({
  project,
  day,
  date,
  tagline,
  columns = [],
  accent = '#E04B26',
  tone = 'auto'
}: SiteFooterProps) {
  return (
    <footer
      className={`inv-footer${tone === 'dark' ? ' inv-footer-dark' : ''}`}
      style={{ ['--inv-footer-accent' as string]: accent }}
    >
      <style>{FOOTER_CSS}</style>

      <div className="inv-footer-inner">
        <div className="inv-footer-top">
          <div className="inv-footer-about">
            <p className="inv-footer-project">{project}</p>
            <p className="inv-footer-tagline">{tagline}</p>
            <p className="inv-footer-day">
              Day {day} of 31 <span aria-hidden>&middot;</span> {date}
            </p>
          </div>

          {columns.length > 0 && (
            <nav className="inv-footer-columns" aria-label={`${project} footer`}>
              {columns.map((column) => (
                <div key={column.title} className="inv-footer-column">
                  <p className="inv-footer-column-title">{column.title}</p>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          {link.label}
                          {link.external && <HugeIcon icon={ArrowUpRight01Icon} size={12} />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          )}
        </div>

        <div className="inv-footer-contact">
          <div className="inv-footer-brand">
            <Image
              src="/brand/lockup-dark.png"
              alt="Innovateium"
              width={175}
              height={30}
              className="inv-footer-lockup inv-footer-lockup-light"
            />
            <Image
              src="/brand/lockup-light.png"
              alt="Innovateium"
              width={175}
              height={30}
              className="inv-footer-lockup inv-footer-lockup-dark"
            />
            <p>Built in Gaborone, Botswana 🇧🇼</p>
          </div>

          <ul className="inv-footer-reach">
            {CONTACT.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <HugeIcon icon={item.icon} size={16} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="inv-footer-social">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <HugeIcon icon={item.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="inv-footer-legal">
          <p>&copy; 2026 Innovateium Pty Ltd. Everything on this page is invented for demonstration.</p>
          <a href="https://31days.innovateium.co.bw" target="_blank" rel="noreferrer">
            See all 31 builds
            <HugeIcon icon={ArrowUpRight01Icon} size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/**
 * Scoped to `inv-footer-` and written in plain CSS, because the thirty two
 * builds name their design tokens thirty two different ways. Only the accent
 * comes from outside, through a custom property.
 */
const FOOTER_CSS = `
.inv-footer { --inv-f-ink: #231f20; --inv-f-muted: #62666e; --inv-f-paper: #fafafa;
  --inv-f-line: rgb(0 0 0 / 0.09); --inv-f-faint: #8b9098;
  border-top: 1px solid var(--inv-f-line); background: var(--inv-f-paper); color: var(--inv-f-ink);
  font-family: inherit; }
@media (prefers-color-scheme: dark) {
  .inv-footer { --inv-f-ink: #f4f4f5; --inv-f-muted: #9ca1aa; --inv-f-paper: #231f20;
    --inv-f-line: rgb(255 255 255 / 0.10); --inv-f-faint: #5d626b; }
}
html.dark .inv-footer, [data-theme="dark"] .inv-footer, .inv-footer-dark {
  --inv-f-ink: #f4f4f5; --inv-f-muted: #9ca1aa; --inv-f-paper: #231f20;
  --inv-f-line: rgb(255 255 255 / 0.10); --inv-f-faint: #5d626b;
}
html.light .inv-footer, [data-theme="light"] .inv-footer {
  --inv-f-ink: #231f20; --inv-f-muted: #62666e; --inv-f-paper: #fafafa;
  --inv-f-line: rgb(0 0 0 / 0.09); --inv-f-faint: #8b9098;
}

.inv-footer-inner { max-width: 72rem; margin: 0 auto; padding: 3.5rem 1.5rem 2rem; }

.inv-footer-top { display: grid; gap: 2.5rem; grid-template-columns: 1fr; }
@media (min-width: 48rem) { .inv-footer-top { grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.6fr); gap: 3rem; } }

.inv-footer-project { margin: 0; font-size: 1.0625rem; font-weight: 700; letter-spacing: -0.01em; color: var(--inv-f-ink); }
.inv-footer-tagline { margin: .5rem 0 0; max-width: 34ch; font-size: .875rem; line-height: 1.65; color: var(--inv-f-muted); }
.inv-footer-day { margin: 1rem 0 0; font-size: .6875rem; font-weight: 600; letter-spacing: .12em;
  text-transform: uppercase; color: var(--inv-f-faint); }

.inv-footer-columns { display: grid; gap: 2rem 1.5rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
@media (min-width: 40rem) { .inv-footer-columns { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.inv-footer-column-title { margin: 0 0 .875rem; font-size: .6875rem; font-weight: 700; letter-spacing: .12em;
  text-transform: uppercase; color: var(--inv-f-ink); }
.inv-footer-column ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: .625rem; }
.inv-footer-column a { display: inline-flex; align-items: center; gap: .25rem; font-size: .8125rem;
  color: var(--inv-f-muted); text-decoration: none; transition: color .18s ease; }
.inv-footer-column a:hover { color: var(--inv-footer-accent); }

.inv-footer-contact { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--inv-f-line);
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.75rem; }
.inv-footer-brand p { margin: .625rem 0 0; font-size: .75rem; color: var(--inv-f-faint); }
.inv-footer-lockup { height: 1.5rem; width: auto; }
.inv-footer-lockup-dark { display: none; }
@media (prefers-color-scheme: dark) {
  .inv-footer-lockup-light { display: none; }
  .inv-footer-lockup-dark { display: block; }
}
html.dark .inv-footer-lockup-light, [data-theme="dark"] .inv-footer-lockup-light,
.inv-footer-dark .inv-footer-lockup-light { display: none; }
html.dark .inv-footer-lockup-dark, [data-theme="dark"] .inv-footer-lockup-dark,
.inv-footer-dark .inv-footer-lockup-dark { display: block; }
html.light .inv-footer-lockup-light, [data-theme="light"] .inv-footer-lockup-light { display: block; }
html.light .inv-footer-lockup-dark, [data-theme="light"] .inv-footer-lockup-dark { display: none; }

.inv-footer-reach { margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; }
.inv-footer-reach a { display: inline-flex; align-items: center; gap: .5rem; font-size: .8125rem;
  color: var(--inv-f-muted); text-decoration: none; transition: color .18s ease; }
.inv-footer-reach a:hover { color: var(--inv-footer-accent); }
.inv-footer-reach svg { flex: none; color: var(--inv-footer-accent); }

.inv-footer-social { margin: 0; padding: 0; list-style: none; display: flex; gap: .5rem; }
.inv-footer-social a { display: flex; align-items: center; justify-content: center; width: 2.25rem; height: 2.25rem;
  border-radius: 9999px; border: 1px solid var(--inv-f-line); color: var(--inv-f-muted);
  transition: color .18s ease, border-color .18s ease, transform .18s ease; }
.inv-footer-social a:hover { color: var(--inv-footer-accent); border-color: var(--inv-footer-accent);
  transform: translateY(-2px); }

.inv-footer-legal { margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--inv-f-line);
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .75rem; }
.inv-footer-legal p { margin: 0; font-size: .75rem; color: var(--inv-f-faint); }
.inv-footer-legal a { display: inline-flex; align-items: center; gap: .25rem; font-size: .75rem; font-weight: 600;
  color: var(--inv-f-muted); text-decoration: none; transition: color .18s ease; }
.inv-footer-legal a:hover { color: var(--inv-footer-accent); }

.inv-footer a:focus-visible { outline: 2px solid var(--inv-footer-accent); outline-offset: 3px; border-radius: 4px; }

@media (prefers-reduced-motion: reduce) {
  .inv-footer a { transition: none; }
  .inv-footer-social a:hover { transform: none; }
}
`;
