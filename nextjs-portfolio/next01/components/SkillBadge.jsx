// Skill Badge Component
export default function SkillBadge({ skill }) {
  return (
    <span className="m-2 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">
      {skill}
    </span>
  );
}