// src/app/layout.tsx
import './globals.css'; // Import your global CSS (Tailwind CSS)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Example: Using Google Font

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WeatherWise App', // Your app title
  description: 'Modern weather application built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Material Icons for basic icons - you might replace these with custom SVGs later */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/* Link for Inter font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}