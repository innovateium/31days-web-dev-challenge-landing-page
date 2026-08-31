import Header from '@/components/header/header';
import GridBackground from '@/components/ui/gridBackground';
import { SiteFooter } from '@/components/ui/site-footer';
import { FOOTER } from '@/constants/footer';

export default function AllDaysLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full relative bg-white dark:bg-slate-950 text-slate-950 dark:text-white transition-colors duration-500 selection:bg-[#E04B26]/30 font-sans">
      <GridBackground />
      <div className="relative z-10">
        <Header />
        {children}
        <SiteFooter {...FOOTER} />
      </div>
    </div>
  );
}
