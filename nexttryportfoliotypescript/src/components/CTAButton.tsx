// src/components/CTAButton.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  ariaLabel?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  children,
  className = '',
  target,
  rel,
  ariaLabel,
}) => {
  return (
    <Link href={href} passHref>
      <motion.button
        className={`relative inline-flex items-center justify-center px-8 py-3 font-bold text-lg rounded-full overflow-hidden
                    bg-gradient-to-r from-primary to-secondary text-background
                    shadow-lg hover:shadow-glow-primary transition-all duration-300 ease-out-expo
                    ${className}`}
        whileHover={{ scale: 1.05, boxShadow: 'var(--tw-shadow-glow-primary)' }} // Use glow shadow
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, ease: 'ease-out-expo' }} // Use custom ease
        target={target}
        rel={rel}
        aria-label={ariaLabel || (typeof children === 'string' ? children : 'Call to action')}
      >
        {/* Subtle shimmer effect on hover */}
        <motion.span
          className="absolute inset-0 bg-white opacity-0 mix-blend-overlay"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%', opacity: 0.1 }}
          transition={{ duration: 0.7, ease: 'ease-out-expo' }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    </Link>
  );
};

export default CTAButton;