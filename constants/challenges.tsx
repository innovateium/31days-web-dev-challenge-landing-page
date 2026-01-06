import {
  AiChat01Icon as AiChat01IconData,
  BarChartIcon as BarChartIconData,
  BinaryCodeIcon as BinaryCodeIconData,
  Briefcase01Icon as Briefcase01IconData,
  CloudIcon as CloudIconData,
  CodeIcon as CodeIconData,
  Coffee01Icon as Coffee01IconData,
  DashboardSquare01Icon as DashboardSquare01IconData,
  Dollar01Icon as Dollar01IconData,
  Dumbbell01Icon as Dumbbell01IconData,
  FlashIcon as FlashIconData,
  GlobeIcon as GlobeIconData,
  HelpCircleIcon as HelpCircleIconData,
  Layers01Icon as Layers01IconData,
  Layout01Icon as Layout01IconData,
  Location01Icon as Location01IconData,
  Mail01Icon as Mail01IconData,
  News01Icon as News01IconData,
  PackageIcon as PackageIconData,
  PlayCircleIcon as PlayCircleIconData,
  RefreshIcon as RefreshIconData,
  RocketIcon as RocketIconData,
  Shield01Icon as Shield01IconData,
  ShoppingBag01Icon as ShoppingBag01IconData,
  Tag01Icon as Tag01IconData,
  WorkHistoryIcon as WorkHistoryIconData
} from '@hugeicons/core-free-icons';
import { HugeIcon } from '../components/ui/huge-icon';
import { ChallengeIconProps } from '../types/challengeItem';
import { Week } from '../types/week';

const ShieldCheck = (props: ChallengeIconProps) => <HugeIcon icon={Shield01IconData} {...props} />;
const Tag = (props: ChallengeIconProps) => <HugeIcon icon={Tag01IconData} {...props} />;
const Layout = (props: ChallengeIconProps) => <HugeIcon icon={Layout01IconData} {...props} />;
const Mail = (props: ChallengeIconProps) => <HugeIcon icon={Mail01IconData} {...props} />;
const BarChart3 = (props: ChallengeIconProps) => <HugeIcon icon={BarChartIconData} {...props} />;
const History = (props: ChallengeIconProps) => <HugeIcon icon={WorkHistoryIconData} {...props} />;
const RefreshCcw = (props: ChallengeIconProps) => <HugeIcon icon={RefreshIconData} {...props} />;
const Briefcase = (props: ChallengeIconProps) => <HugeIcon icon={Briefcase01IconData} {...props} />;
const Coffee = (props: ChallengeIconProps) => <HugeIcon icon={Coffee01IconData} {...props} />;
const Rocket = (props: ChallengeIconProps) => <HugeIcon icon={RocketIconData} {...props} />;
const Zap = (props: ChallengeIconProps) => <HugeIcon icon={FlashIconData} {...props} />;
const MapPin = (props: ChallengeIconProps) => <HugeIcon icon={Location01IconData} {...props} />;
const Globe = (props: ChallengeIconProps) => <HugeIcon icon={GlobeIconData} {...props} />;
const Dumbbell = (props: ChallengeIconProps) => <HugeIcon icon={Dumbbell01IconData} {...props} />;
const Layers = (props: ChallengeIconProps) => <HugeIcon icon={Layers01IconData} {...props} />;
const ShoppingBag = (props: ChallengeIconProps) => <HugeIcon icon={ShoppingBag01IconData} {...props} />;
const Newspaper = (props: ChallengeIconProps) => <HugeIcon icon={News01IconData} {...props} />;
const Monitor = (props: ChallengeIconProps) => <HugeIcon icon={DashboardSquare01IconData} {...props} />;
const PlayCircle = (props: ChallengeIconProps) => <HugeIcon icon={PlayCircleIconData} {...props} />;
const Code2 = (props: ChallengeIconProps) => <HugeIcon icon={CodeIconData} {...props} />;
const Cloud = (props: ChallengeIconProps) => <HugeIcon icon={CloudIconData} {...props} />;
const DollarSign = (props: ChallengeIconProps) => <HugeIcon icon={Dollar01IconData} {...props} />;
const Binary = (props: ChallengeIconProps) => <HugeIcon icon={BinaryCodeIconData} {...props} />;
const HelpCircle = (props: ChallengeIconProps) => <HugeIcon icon={HelpCircleIconData} {...props} />;
const Box = (props: ChallengeIconProps) => <HugeIcon icon={PackageIconData} {...props} />;
const Bot = (props: ChallengeIconProps) => <HugeIcon icon={AiChat01IconData} {...props} />;

export const WEEKS: Week[] = [
  {
    title: 'Week 1: The Building Blocks',
    focus: 'High-polish UI, interactivity, CSS mastery, and animations.',
    days: [
      {
        day: 1,
        title: 'Glassmorphism Login',
        theme: 'Components',
        concept: 'Stunning frosted-glass login/signup component.',
        icon: ShieldCheck,
        size: 'md:col-span-2',
        link: 'https://wdc1.innovateium.co.bw',
        details:
          'A premium login interface featuring sophisticated frosted-glass effects, subtle backdrop blurs, and smooth state transitions. This component demonstrates the power of modern CSS/Tailwind for creating high-end aesthetic UIs.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Hugeicons']
      },
      {
        day: 2,
        title: 'Interactive Pricing',
        theme: 'Components',
        concept: '3-tier pricing card set with Monthly/Yearly toggle.',
        icon: Tag,
        size: 'md:col-span-2',
        link: 'https://wdc2.innovateium.co.bw',
        details:
          'A clean and functional pricing section with a seamless monthly/yearly toggle. Each card features hover animations, badge indicators, and clear feature lists to maximize conversion potential.',
        technologies: ['React', 'Hugeicons', 'CSS Transitions', 'State Management']
      },
      {
        day: 3,
        title: 'Advanced Mega-Menu',
        theme: 'Components',
        concept: 'Responsive rich-media menu with icons and images.',
        icon: Layout,
        size: 'md:col-span-1',
        link: 'https://wdc3.innovateium.co.bw',
        details:
          'An expansive navigation system designed for content-heavy sites. It integrates icons and descriptive text for each link, ensuring a smooth user experience across all device sizes.',
        technologies: ['React', 'Radix UI', 'Tailwind CSS', 'Responsive Design']
      },
      {
        day: 4,
        title: 'The "Smart" Contact Form',
        theme: 'Components',
        concept: 'Multi-step wizard with progress bars and validation.',
        icon: Mail,
        size: 'md:col-span-2',
        link: 'https://wdc4.innovateium.co.bw',
        details:
          'A user-centric multi-step form that simplifies complex data entry. Featuring real-time validation, progress tracking, and accessible input fields to ensure high completion rates.',
        technologies: ['React Hook Form', 'Zod', 'Framer Motion', 'React']
      },
      {
        day: 5,
        title: 'Dashboard Widget',
        theme: 'Components',
        concept: 'Animated graph showing sales/users data.',
        icon: BarChart3,
        size: 'md:col-span-1',
        link: 'https://wdc5.innovateium.co.bw',
        details:
          'A data visualization component that displays key metrics through interactive charts. Designed to be lightweight yet visually impactful for modern admin dashboards.',
        technologies: ['Recharts', 'React', 'Tailwind CSS', 'Data Vis']
      },
      {
        day: 6,
        title: 'Social Proof Slider',
        theme: 'Components',
        concept: 'Infinite-scroll testimonial carousel.',
        icon: History,
        size: 'md:col-span-2',
        link: 'https://wdc6.innovateium.co.bw',
        details:
          'An infinite-loop slider that showcases customer testimonials with high-quality avatars and ratings. It utilizes smooth CSS animations for a continuous, non-intrusive review experience.',
        technologies: ['React', 'CSS Keyframes', 'Hugeicons']
      },
      {
        day: 7,
        title: 'Theme Switcher',
        theme: 'Components',
        concept: 'Instant Dark/Light mode with local storage persistence.',
        icon: RefreshCcw,
        size: 'md:col-span-2',
        link: 'https://wdc7.innovateium.co.bw',
        details:
          'A robust theme toggle component that allows users to switch between light and dark modes. It persists user preference via local storage and ensures a flicker-free transition.',
        technologies: ['next-themes', 'React', 'Local Storage', 'CSS Variables']
      }
    ]
  },
  {
    title: 'Week 2: Small Business Essentials',
    focus: 'Conversion optimization, storytelling, and rapid layout deployment.',
    days: [
      {
        day: 8,
        title: 'Personal Portfolio',
        theme: 'Landing Pages',
        concept: 'Sleek single-page CV site for creatives.',
        icon: Briefcase,
        size: 'md:col-span-2',
        link: 'https://wdc8.innovateium.co.bw',
        details:
          'A minimalist yet bold portfolio template designed to highlight professional achievements and creative work. Features smooth scrolling navigation and a specialized project gallery.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion']
      },
      {
        day: 9,
        title: 'Restaurant Menu',
        theme: 'Landing Pages',
        concept: 'Visual-heavy page with parallax and categorized menu.',
        icon: Coffee,
        size: 'md:col-span-2',
        link: 'https://wdc9.innovateium.co.bw',
        details:
          'An appetizing menu showcase with interactive categories and high-resolution imagery. Implements subtle parallax effects to create depth and enhance the dining atmosphere.',
        technologies: ['React', 'Intersection Observer', 'Tailwind CSS']
      },
      {
        day: 10,
        title: 'Hype Page',
        theme: 'Landing Pages',
        concept: 'Coming soon page with countdown and email capture.',
        icon: Rocket,
        size: 'md:col-span-1',
        link: 'https://wdc10.innovateium.co.bw',
        details:
          'A high-impact "coming soon" page focused on lead generation. Includes a dynamic countdown timer and a clean email subscription form to build an early audience.',
        technologies: ['React', 'Date-fns', 'Tailwind CSS']
      },
      {
        day: 11,
        title: 'Service Provider',
        theme: 'Landing Pages',
        concept: 'Trustworthy page for tradespeople with quote focus.',
        icon: Zap,
        size: 'md:col-span-2',
        link: 'https://wdc11.innovateium.co.bw',
        details:
          'A conversion-focused landing page for service-based businesses. Prioritizes trust signals like reviews and certifications while making it easy for users to request a free quote.',
        technologies: ['React', 'Formik', 'Tailwind CSS']
      },
      {
        day: 12,
        title: 'Real Estate Listing',
        theme: 'Landing Pages',
        concept: 'Property showcase with gallery grid and CTA.',
        icon: MapPin,
        size: 'md:col-span-1',
        link: 'https://wdc12.innovateium.co.bw',
        details:
          'An elegant property detail page featuring a responsive photo grid and clear layout for property specifications. Ideal for real estate agencies and individual listings.',
        technologies: ['React', 'Grid Layout', 'Tailwind CSS']
      },
      {
        day: 13,
        title: 'Charity Page',
        theme: 'Landing Pages',
        concept: 'Storytelling page with donation progress bars.',
        icon: Globe,
        size: 'md:col-span-2',
        link: 'https://wdc13.innovateium.co.bw',
        details:
          'A narrative-driven page for non-profit organizations. It emphasizes the mission through impactful imagery and interactive progress bars for ongoing donation campaigns.',
        technologies: ['React', 'Framer Motion', 'Tailwind CSS']
      },
      {
        day: 14,
        title: 'Fitness Landing',
        theme: 'Landing Pages',
        concept: 'High-energy visuals with class timetable layout.',
        icon: Dumbbell,
        size: 'md:col-span-2',
        link: 'https://wdc14.innovateium.co.bw',
        details:
          'A dynamic fitness studio landing page that includes a clean, responsive class schedule and high-energy sections for training programs and trainer profiles.',
        technologies: ['React', 'Tailwind CSS', 'Responsive Tables']
      }
    ]
  },
  {
    title: 'Week 3: Complexity & Architecture',
    focus: 'Multi-page structures, CMS-style layouts, and data organization.',
    days: [
      {
        day: 15,
        title: 'Corporate Intranet',
        theme: 'Complex Sites',
        concept: 'Structured knowledge-base UI with sidebar.',
        icon: Layers,
        size: 'md:col-span-2',
        link: 'https://wdc15.innovateium.co.bw',
        details:
          'A structured internal dashboard layout featuring a collapsible sidebar, breadcrumb navigation, and a searchable knowledge-base interface for organizational efficiency.',
        technologies: ['Next.js', 'Sidebar Logic', 'Search Filter']
      },
      {
        day: 16,
        title: 'E-Comm Detail Page',
        theme: 'Complex Sites',
        concept: 'Product view with image zoom and variants.',
        icon: ShoppingBag,
        size: 'md:col-span-2',
        link: 'https://wdc16.innovateium.co.bw',
        details:
          'A professional e-commerce product page including an interactive image gallery with zoom functionality, variant selectors (size/color), and a clean tabbed description section.',
        technologies: ['React', 'Context API', 'Hover Zoom']
      },
      {
        day: 17,
        title: 'Travel Portal',
        theme: 'Complex Sites',
        concept: 'Search interface with date and guest filters.',
        icon: MapPin,
        size: 'md:col-span-1',
        link: 'https://wdc17.innovateium.co.bw',
        details:
          'A highly functional travel booking interface featuring a sophisticated search bar with integrated date pickers and guest selectors, optimized for user experience.',
        technologies: ['Date-fns', 'React-Day-Picker', 'Tailwind']
      },
      {
        day: 18,
        title: 'News Magazine',
        theme: 'Complex Sites',
        concept: 'Grid-based newspaper layout with feature sections.',
        icon: Newspaper,
        size: 'md:col-span-2',
        link: 'https://wdc18.innovateium.co.bw',
        details:
          'A classic newspaper-style grid layout that effectively organizes diverse content types. Includes sections for breaking news, featured stories, and categorized articles.',
        technologies: ['CSS Grid', 'React', 'Typography']
      },
      {
        day: 19,
        title: 'SaaS Home',
        theme: 'Complex Sites',
        concept: 'Modern tech landing with Bento grids.',
        icon: Monitor,
        size: 'md:col-span-1',
        link: 'https://wdc19.innovateium.co.bw',
        details:
          'A high-converting SaaS landing page utilizing modern Bento-style grids to display application features and benefits in a clean, contemporary design.',
        technologies: ['Next.js', 'Bento Grid', 'AOS Animations']
      },
      {
        day: 20,
        title: 'LMS UI',
        theme: 'Complex Sites',
        concept: 'Course player with video and syllabus list.',
        icon: PlayCircle,
        size: 'md:col-span-2',
        link: 'https://wdc20.innovateium.co.bw',
        details:
          'A dedicated learning management interface featuring a large video player, a scrollable syllabus sidebar with progress tracking, and a focus-mode toggle.',
        technologies: ['Video.js', 'State Management', 'React']
      },
      {
        day: 21,
        title: 'Agency Portfolio',
        theme: 'Complex Sites',
        concept: 'Minimalist site with scroll-triggered animations.',
        icon: Code2,
        size: 'md:col-span-2',
        link: 'https://wdc21.innovateium.co.bw',
        details:
          'An advanced agency showcase featuring immersive scroll-based animations and large typographic sections to tell a compelling brand story for digital agencies.',
        technologies: ['Framer Motion', 'React-Scroll', 'Next.js']
      }
    ]
  },
  {
    title: 'Week 4: Web Applications',
    focus: 'JavaScript logic, API integration, and user interaction.',
    days: [
      {
        day: 22,
        title: 'Weather Dashboard',
        theme: 'Web Apps',
        concept: 'API-driven current weather and 5-day forecast.',
        icon: Cloud,
        size: 'md:col-span-2',
        link: 'https://wdc22.innovateium.co.bw',
        details:
          'A dynamic weather application integrated with real-time APIs to provide weather updates, hourly charts, and detailed 5-day forecasts for any city worldwide.',
        technologies: ['Weather API', 'Axios', 'Chart.js', 'React']
      },
      {
        day: 23,
        title: 'Kanban Board',
        theme: 'Web Apps',
        concept: 'Trello-style drag-and-drop task management.',
        icon: Layout,
        size: 'md:col-span-2',
        link: 'https://wdc23.innovateium.co.bw',
        details:
          'A full-featured project management board allowing users to create, move, and edit tasks across different stages using an intuitive drag-and-drop interface.',
        technologies: ['dnd-kit', 'React', 'Local Storage']
      },
      {
        day: 24,
        title: 'Expense Tracker',
        theme: 'Web Apps',
        concept: 'Dynamic spending visualization with charts.',
        icon: DollarSign,
        size: 'md:col-span-1',
        link: 'https://wdc24.innovateium.co.bw',
        details:
          'A personal finance tool that tracks income and expenses, providing visual insights through pie and bar charts for efficient budget management.',
        technologies: ['React', 'Recharts', 'Form Logic']
      },
      {
        day: 25,
        title: 'Markdown Editor',
        theme: 'Web Apps',
        concept: 'Real-time split-screen Markdown previewer.',
        icon: Binary,
        size: 'md:col-span-2',
        link: 'https://wdc25.innovateium.co.bw',
        details:
          'A powerful tool for writers and developers to create content using Markdown. Features a dual-pane view with instant HTML preview and syntax highlighting.',
        technologies: ['React-Markdown', 'Prism.js', 'React']
      },
      {
        day: 26,
        title: 'Password Utility',
        theme: 'Web Apps',
        concept: 'Secure string generator with strength meter.',
        icon: ShieldCheck,
        size: 'md:col-span-1',
        link: 'https://wdc26.innovateium.co.bw',
        details:
          'A security utility that generates strong, customizable passwords. Includes a real-time strength assessment meter and one-click copy functionality.',
        technologies: ['Crypto API', 'React', 'Tailwind']
      },
      {
        day: 27,
        title: 'Quiz Engine',
        theme: 'Web Apps',
        concept: 'Multi-question assessment with scoring logic.',
        icon: HelpCircle,
        size: 'md:col-span-2',
        link: 'https://wdc27.innovateium.co.bw',
        details:
          'An interactive quiz platform featuring timed questions, immediate feedback, and a detailed results breakdown with score calculations.',
        technologies: ['React', 'Timer Logic', 'State Machine']
      },
      {
        day: 28,
        title: 'Currency/Crypto',
        theme: 'Web Apps',
        concept: 'Live exchange rate converter.',
        icon: RefreshCcw,
        size: 'md:col-span-2',
        link: 'https://wdc28.innovateium.co.bw',
        details:
          'A financial converter tool using live exchange data to switch between dozens of global currencies and popular cryptocurrencies in real-time.',
        technologies: ['ExchangeRate API', 'React', 'Axios']
      }
    ]
  },
  {
    title: 'Wildcard Days: The Future',
    focus: 'Cutting-edge technology and ultimate wow-factor.',
    days: [
      {
        day: 29,
        title: '3D Configurator',
        theme: 'Next-Gen',
        concept: 'Interactive 3D object rendering with Three.js.',
        icon: Box,
        size: 'md:col-span-1',
        link: 'https://wdc29.innovateium.co.bw',
        details:
          'An immersive 3D experience allowing users to interact with and customize a 3D model in real-time within the browser. Demonstrates advanced WebGL capabilities.',
        technologies: ['Three.js', 'React-Three-Fiber', 'GLSL']
      },
      {
        day: 30,
        title: 'AI Wrapper',
        theme: 'Next-Gen',
        concept: 'Gemini3-powered business name generator.',
        icon: Bot,
        size: 'md:col-span-1',
        link: 'https://wdc30.innovateium.co.bw',
        details:
          'An AI-integrated tool that generates creative business ideas and names based on user prompts, leveraging the power of Google Gemini for intelligent suggestions.',
        technologies: ['Google Gemini API', 'Next.js', 'Streaming']
      },
      {
        day: 31,
        title: 'The Grand Timeline',
        theme: 'Meta',
        concept: 'Immersive journey through all 30 challenges.',
        icon: History,
        size: 'md:col-span-2',
        link: 'https://wdc31.innovateium.co.bw',
        details:
          'The ultimate showcase! A high-performance interactive timeline that revisits all previous 30 challenges, creating a cohesive story of the 31-day development journey.',
        technologies: ['React', 'Framer Motion', 'Complex Animations']
      }
    ]
  }
];
