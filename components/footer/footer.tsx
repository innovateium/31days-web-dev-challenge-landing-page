import { Facebook, Github, Globe2, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 z-20 dark:border-slate-900 py-16 px-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <Image
          src="/logo.png"
          alt="Innovateium Logo"
          width={160}
          height={36}
          className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
        <p className="text-slate-500 dark:text-slate-500 text-sm max-w-sm font-medium">
          Pushing the boundaries of web development, one day at a time. Designed and built with passion in Botswana. 🇧🇼
        </p>

        <div className="flex items-center gap-6 mt-4">
          <a
            href="https://www.facebook.com/innovateium/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#1877F2] transition-colors transform hover:scale-110 duration-300"
            aria-label="Our Facebook page"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/innovateium"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#E4405F] transition-colors transform hover:scale-110 duration-300"
            aria-label="Our Instagram page"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://github.com/innovateium"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#181717] dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
            aria-label="Our Github page"
          >
            <Github size={24} />
          </a>
          <a
            href="https://innovateium.co.bw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#ff6000] transition-colors transform hover:scale-110 duration-300"
            aria-label="Our website"
          >
            <Globe2 size={24} />
          </a>
          <a
            href="mailto:info@innovateium.co.bw"
            className="text-slate-400 hover:text-[#ff6000] transition-colors transform hover:scale-110 duration-300"
            aria-label="Email us"
          >
            <Mail size={24} />
          </a>
        </div>
        <div className="text-[10px] text-slate-400 dark:text-slate-700 font-bold uppercase tracking-[0.4em]">
          © 2026 Innovateium Pty Ltd • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
