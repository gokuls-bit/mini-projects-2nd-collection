import SkillBadge from '@/components/SkillBadge';

export default function Skills() {
  const skills = ['JavaScript', 'TypeScript', 'C++', 'Python', 'Java', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'SCSS', 'Figma', 'Adobe XD', 'Git', 'Postman', 'JWT Auth', 'REST APIs', 'Socket.IO', 'TensorFlow Basics'];

  return (
    <section className="p-8 max-w-5xl mx-auto flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </section>
  );
}
