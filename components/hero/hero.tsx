import BlurText from '../ui/blurText';

export default function Hero() {
  return (
    <header className="relative z-20 pt-24 pb-20 px-6 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6000] opacity-[0.05] dark:opacity-[0.03] blur-[120px] rounded-full -z-10" />

      <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full mb-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6000] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6000]"></span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff6000]">January 2026 Initiative</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-800 dark:text-slate-200">
        Innovateium&apos;s
      </h1>

      <BlurText
        text1="31"
        text2="DAYS"
        text3="WEB DEV CHALLENGE"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.8] md:leading-[0.8] justify-center"
      />
      <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base md:text-xl leading-relaxed font-medium">
        <span className="text-[#ff6000]">31 Projects</span>. <span className="text-[#ff6000]">31 Days</span>. Building the
        future of digital experiences in Botswana and beyond. High-intensity output meets{' '}
        <span className="text-[#ff6000]">world-class</span> web design.
      </p>
    </header>
  );
}
