import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import RoadMaps from '@/components/roadmaps/roadmaps';
import GridBackground from '@/components/ui/gridBackground';
import { SiteFooter } from '@/components/ui/site-footer';
import { FOOTER } from '@/constants/footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-white dark:bg-slate-950 text-slate-950 dark:text-white transition-colors duration-500 selection:bg-[#E04B26]/30 font-sans">
      <GridBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <RoadMaps />
        <SiteFooter {...FOOTER} />
      </div>
    </div>
  );
}
