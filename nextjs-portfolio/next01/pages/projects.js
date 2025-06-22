// Projects Page - projects.js
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    { title: 'Weather App', description: 'A sleek weather application with location-based weather details.' },
    { title: 'Community App', description: 'An app to foster community interactions and communications.' },
    { title: 'Furnimart Chatbox', description: 'Real-time chat app for e-commerce using MERN and Socket.IO.' },
    { title: 'E-commerce Website', description: 'A full-fledged online shopping platform.' },
  ];

  return (
    <section className="p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} description={project.description} />
      ))}
    </section>
  );
}