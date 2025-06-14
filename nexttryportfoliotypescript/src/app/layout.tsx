// src/app/layout.tsx
import './globals.css'; // Global CSS for Tailwind base, components, utilities, and custom styles
import { Poppins, Orbitron } from 'next/font/google'; // Import Google Fonts
import type { Metadata } from 'next'; // Type for metadata

// Import components that are part of the main layout
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// --- Configure Google Fonts ---
// Poppins for general body text (variable: --font-poppins)
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap', // Swap ensures fallback font is used until Poppins loads
  variable: '--font-poppins',
  weight: ['300', '400', '500', '700'], // Specify the weights you need
});

// Orbitron for headings and futuristic elements (variable: --font-orbitron)
const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap', // Swap ensures fallback font is used until Orbitron loads
  variable: '--font-orbitron',
  weight: ['400', '700'], // Specify the weights you need
});

// --- Metadata for SEO & Social Sharing ---
export const metadata: Metadata = {
  title: 'Gokul Kumar Sant - Designer & Software Engineer Portfolio',
  description: 'Gokul Kumar Sant is a passionate Designer & Software Engineer building modern, responsive, and visually appealing web experiences with React, Next.js, and Tailwind CSS. Explore his projects and skills.',
  keywords: ['Gokul Sant', 'Portfolio', 'Next.js Developer', 'React Developer', 'Tailwind CSS', 'Framer Motion', 'Web Design', 'Software Engineer', 'Front-end Developer'],
  authors: [{ name: 'Gokul Kumar Sant', url: 'https://www.linkedin.com/in/gokulkumarsant/' }], // Replace with your LinkedIn
  creator: 'Gokul Kumar Sant',
  publisher: 'Gokul Kumar Sant',
  applicationName: 'Gokul Kumar Sant Portfolio',
  colorScheme: 'dark', // Indicate dark theme preference

  // Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Gokul Kumar Sant - Designer & Software Engineer Portfolio',
    description: 'A modern, responsive personal portfolio website showcasing projects and skills.',
    url: 'https://yourportfolio.com', // **IMPORTANT: Replace with your deployed domain**
    siteName: 'Gokul Kumar Sant Portfolio',
    images: [
      {
        url: '/images/og-image.jpg', // **IMPORTANT: Create an image at public/images/og-image.jpg (1200x630px recommended)**
        width: 1200,
        height: 630,
        alt: 'Gokul Kumar Sant Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Twitter Card (for Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: 'Gokul Kumar Sant - Portfolio',
    description: 'Explore web development projects and design expertise.',
    creator: '@GokulSantamb', // **IMPORTANT: Replace with your Twitter handle**
    images: ['/images/twitter-image.jpg'], // **IMPORTANT: Create an image at public/images/twitter-image.jpg (1200x675px recommended)**
  },
  // Canonical URL (prevents duplicate content issues)
  alternates: {
    canonical: 'https://yourportfolio.com', // **IMPORTANT: Replace with your deployed domain**
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${orbitron.variable} dark`}>
      {/* The 'dark' class here can be used by Tailwind to enable dark mode specific styles */}
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-80px)] overflow-hidden">
          {/* Main content area, adjusts for Navbar height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}