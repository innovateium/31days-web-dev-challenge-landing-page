'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../theme/theme-toggle';
import Tooltip from '../ui/tooltip';

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800/50 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Innovateium Logo"
          width={180}
          height={40}
          className="h-8 w-auto transition-opacity hover:opacity-80"
          priority
        />
      </Link>
      <div className="flex items-center space-x-4 md:space-x-8 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
        <Link
          href="/"
          className={`${
            pathname === '/'
              ? 'text-[#ff6000]'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
          } transition-all duration-300`}
        >
          Roadmap
        </Link>
        <Link
          href="/all-days"
          className={`${
            pathname.startsWith('/all-days')
              ? 'text-[#ff6000]'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
          } transition-all duration-300`}
        >
          All Projects
        </Link>
        <a
          href="https://innovateium.co.bw"
          className="hidden sm:block border border-slate-200 dark:border-slate-700 px-5 py-2 rounded-full hover:border-[#ff6000] hover:bg-[#ff6000] hover:text-white transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-1">
            Agency Website <ExternalLink size={12} />
          </div>
        </a>
        <Tooltip text="View Our GitHub Page">
          <a
            href="https://github.com/innovateium"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 text-slate-900 dark:text-white"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </Tooltip>
        <Tooltip text="Theme">
          <ThemeToggle />
        </Tooltip>
      </div>
    </nav>
  );
}
