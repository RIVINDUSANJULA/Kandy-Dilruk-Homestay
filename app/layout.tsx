import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Kandy Dilruk Homestay | Escape to the Clouds',
  description: 'Experience authentic Sri Lankan hospitality, stunning mountain views, and the calming sound of nature—just a short walk from the heart of Kandy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased smooth-scroll`}>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans text-cream bg-background selection:bg-sunset selection:text-white">
        {children}
      </body>
    </html>
  );
}
