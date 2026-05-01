import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });

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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased smooth-scroll`}>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
