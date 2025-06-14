// Project Card Component
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description }) {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-base">{description}</p>
    </motion.div>
  );
}