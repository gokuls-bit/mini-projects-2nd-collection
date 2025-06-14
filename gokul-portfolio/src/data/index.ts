// src/data/index.ts
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDev } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiPhoneLine } from 'react-icons/ri';

// --- PERSONAL INFORMATION ---
export const personalInfo = {
  name: 'Gokul Kumar Sant',
  title: 'Designer & Software Engineer',
  about: "I'm a passionate Software Engineer with a keen eye for design, specializing in creating intuitive and visually appealing web experiences. My expertise spans front-end development, focusing on React, Next.js, and modern CSS frameworks like Tailwind CSS, bringing ideas to life with clean code and smooth animations. I love transforming complex problems into elegant solutions.",
  profileImage: '/images/gokulkumarsant.png', // Corrected profile image path
  resumePath: '/resume.gokulsant.pdf', // Corrected resume path (assuming it's a PDF)
  contactEmail: 'gokulsant684@gmail.com',
  contactNumber: '+91-9518193235', // Assuming you still want this number
};

// --- SOCIAL LINKS ---
export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gokulkumarsant/',
    icon: FaLinkedin,
  },
  {
    name: 'Twitter (X)',
    url: 'https://x.com/GokulSantamb',
    icon: FaTwitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/gokulsantt/?hl=en',
    icon: FaInstagram,
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/gokul_kumarsant_b56023e9',
    icon: FaDev, // Assuming you have FaDev from react-icons/fa
  },
  // Add GitHub if you have one, it's essential for a dev portfolio!
  // {
  //   name: 'GitHub',
  //   url: 'https://github.com/your-github-username', // IMPORTANT: Replace with your actual GitHub URL
  //   icon: FaGithub,
  // },
];

// --- PROJECTS DATA ---
export const projects = [
  {
    id: 1,
    name: 'WeatherWise App',
    description: 'A sleek and intuitive weather application built with React and a public weather API, featuring real-time data, forecast, and location-based weather updates. Designed with a clean, modern UI for easy readability.',
    image: '/images/weather-app.webp', // Example image path
    tags: ['React', 'API Integration', 'Tailwind CSS', 'Responsive Design'],
    github: 'https://github.com/your-username/weather-wise-app', // Replace with actual GitHub link
    live: 'https://weatherwise-app.vercel.app/', // Replace with actual live link
  },
  {
    id: 2,
    name: 'Community Connect Platform',
    description: 'A full-stack social platform enabling users to create posts, connect with friends, and join interest-based communities. Features include authentication, real-time updates, and media sharing capabilities.',
    image: '/images/community-app.webp', // Example image path
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Authentication', 'WebSockets'],
    github: 'https://github.com/your-username/community-connect', // Replace with actual GitHub link
    live: 'https://community-connect.vercel.app/', // Replace with actual live link
  },
  {
    id: 3,
    name: 'E-commerce Storefront',
    description: 'A modern e-commerce solution with product listings, shopping cart functionality, and secure checkout. Built with a focus on user experience and scalability, integrating a robust payment gateway.',
    image: '/images/ecommerce-store.webp', // Example image path
    tags: ['Next.js', 'Stripe', 'TypeScript', 'Redux', 'REST API'],
    github: 'https://github.com/your-username/ecommerce-store', // Replace with actual GitHub link
    live: 'https://ecommerce-store.vercel.app/', // Replace with actual live link
  },
  // Add more projects as needed
];

// --- SKILLS DATA ---
export const skills = [
  {
    category: 'Front-end Development',
    items: [
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Intermediate' },
      { name: 'Redux', level: 'Intermediate' },
      { name: 'Responsive Design', level: 'Advanced' },
    ],
  },
  {
    category: 'Back-end Development',
    items: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'NPM / Yarn', level: 'Advanced' },
      { name: 'Vercel', level: 'Intermediate' },
      { name: 'Figma (Basic UI/UX)', level: 'Intermediate' },
      { name: 'Postman', level: 'Intermediate' },
    ],
  },
  {
    category: 'Design & UI/UX',
    items: [
      { name: 'UI Principles', level: 'Intermediate' },
      { name: 'Wireframing', level: 'Basic' },
      { name: 'Prototyping', level: 'Basic' },
    ],
  },
];

// --- NAVIGATION LINKS ---
export const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/projects', name: 'Projects' },
  { path: '/skills', name: 'Skills' },
  { path: '/contact', name: 'Contact' },
];