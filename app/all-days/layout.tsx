import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import GridBackground from '@/components/ui/gridBackground';

export default function AllDaysLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full relative bg-white dark:bg-slate-950 text-slate-950 dark:text-white transition-colors duration-500 selection:bg-[#ff6000]/30 font-sans">
      <GridBackground />
      <div className="relative z-10">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
