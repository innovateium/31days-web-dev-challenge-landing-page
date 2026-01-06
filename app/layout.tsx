import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Ubuntu, Ubuntu_Mono } from 'next/font/google';
import { ThemeProvider } from '../components/theme/theme-provider';
import './globals.css';

const ubuntuSans = Ubuntu({
  variable: '--font-ubuntu-sans',
  weight: ['400', '500', '700']
});

const ubuntuMono = Ubuntu_Mono({
  variable: '--font-ubuntu-mono',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: {
    default: '31 Days of Web Development Challenge | Innovateium',
    template: '%s | 31 Days Challenge'
  },
  description:
    "Join Innovateium's 31-day journey of building high-performance web applications, premium UIs, and next-gen experiments. One project, every single day.",
  metadataBase: new URL('https://31days.innovateium.co.bw'),
  keywords: [
    'web development',
    '31 days web development challenge',
    'innovateium',
    'innovateium pty ltd',
    'next.js',
    'tailwind css 4',
    'frontend engineering',
    'botswana tech',
    'web design',
    'botswana developer',
    'website development in botswana',
    'botswana software developer',
    'sadc software developer',
    'system developer',
    'local software developer',
    'botswana website development'
  ],
  authors: [{ name: 'Innovateium', url: 'https://innovateium.co.bw' }],
  creator: 'Innovateium Pty Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://31days.innovateium.co.bw',
    siteName: 'Innovateium 31 Days Challenge',
    title: '31 Days of Web Development Challenge | Innovateium',
    description: '31 Days. 31 Projects. A showcase of modern web development excellence by Innovateium.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Innovateium 31 Days Challenge'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '31 Days of Web Development Challenge | Innovateium',
    description: '31 Days. 31 Projects. Building the future of digital experiences.',
    images: ['/og-image.webp'],
    creator: '@innovateium'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' }
  ],
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntuSans.variable} ${ubuntuMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
