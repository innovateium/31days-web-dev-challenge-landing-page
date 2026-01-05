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
  title: "Innovateium's 31Days Web Development Challenge",
  description: 'This is the official website for the 31 Days of the Web Development Challenge by Innovateium Pty Ltd'
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
      </body>
    </html>
  );
}
