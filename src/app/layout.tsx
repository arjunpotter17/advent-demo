import { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import { Toaster } from 'sonner';
export const metadata: Metadata = {
  title: 'Advent Stones - Premium Granite Solutions',
  description: 'Transform your space with elegant, durable granite surfaces. Expert craftsmanship and quality materials.',
  icons: {
    icon: '/images/Advent/advent_logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <Toaster richColors />
        <ThemeProvider defaultTheme="light" storageKey="advent-ui-theme">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
