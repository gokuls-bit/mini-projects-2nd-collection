/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'], // Use CSS variables from Next/font
        orbitron: ['var(--font-orbitron)', 'sans-serif'], // Use CSS variables from Next/font
      },
      colors: {
        primary: '#FFD700', // Gold/Amber for accents
        secondary: '#00BFFF', // Deep Sky Blue for secondary accents
        background: '#1A1A2E', // Dark Blue/Purple for background
        card: '#22223B', // Slightly lighter dark for cards
        text: '#E0E0E0', // Light grey for primary text
        muted: '#A0A0A0', // Muted grey for secondary text
        accentCyan: '#00BFFF', // Consistent naming
        accentYellow: '#FFD700', // Consistent naming
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-futuristic-primary': 'linear-gradient(135deg, var(--tw-colors-primary), var(--tw-colors-secondary))',
        'gradient-futuristic-secondary': 'linear-gradient(45deg, var(--tw-colors-secondary), var(--tw-colors-primary))',
      },
      boxShadow: {
        'glass-light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.18)',
        'glow-primary': '0 0 15px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.4)', // Stronger glow
        'glow-secondary': '0 0 15px rgba(0, 191, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.4)', // Stronger glow
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)', // More dramatic ease-out
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities, addVariant, e }) {
      const newUtilities = {
        '.backdrop-filter-blur': { // Already defined, keeping for clarity
          backdropFilter: 'blur(20px)',
        },
        '.bg-glassmorphism': { // Already defined, keeping for clarity
          backgroundColor: 'rgba(34, 34, 59, 0.4)', // card color with transparency
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.bg-gradient-border': { // For gradient borders on hover
          position: 'relative',
          isolation: 'isolate',
        },
        '.bg-gradient-border::before': { // Pseudo-element for the gradient border
          content: '""',
          position: 'absolute',
          inset: '0',
          borderRadius: 'inherit', // Inherit border-radius from parent
          padding: '1px', // Border thickness
          background: 'linear-gradient(to right, var(--tw-colors-primary), var(--tw-colors-secondary)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          MaskComposite: 'exclude',
          zIndex: '-1', // Behind the content
        },
        '.text-gradient-primary': {
          background: 'linear-gradient(to right, var(--tw-colors-primary), var(--tw-colors-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(to right, var(--tw-colors-secondary), var(--tw-colors-primary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);

      // Add a 'group-hover-border' variant
      addVariant('group-hover-border', ({ modifySelectors, separator }) => {
        return modifySelectors(({ className }) => {
          return `.group:hover .${e(`group-hover-border${separator}${className}`)}`;
        });
      });
    },
  ],
};