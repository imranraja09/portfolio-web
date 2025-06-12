import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Imran Raja - Portfolio | Computer Engineering Student',
  description: 'Portfolio website of Imran Raja, a passionate Computer Engineering student specializing in web development and software engineering.',
  keywords: 'Imran Raja, Computer Engineering, Web Developer, Portfolio, Student, Projects',
  authors: [{ name: 'Imran Raja' }],
  openGraph: {
    title: 'Imran Raja - Portfolio',
    description: 'Portfolio website of Imran Raja, Computer Engineering student',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}