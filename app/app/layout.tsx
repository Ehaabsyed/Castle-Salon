import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import SmoothScroll from '../components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Castle Unisex Salon | Premium Hair, Beauty & Grooming in Mangaluru',
  description:
    "Mangaluru's premium unisex salon offering luxury hair styling, beauty treatments, and grooming services.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body className="font-sans bg-[#0a0a0a] text-white antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}