interface SkillCardProps {
  name: string;
  icon: string;
  level: string;
}
const skillCard = ({ name, icon, level }: SkillCardProps) => {
  return (
    <div className="flex items-center justify-start text-black border-2 group hover:border-primary rounded-lg p-4  hover:shadow-lg transition duration-300 gap-x-5 relative cursor-default">
      {/* Icon */}
      <img
        src={icon}
        alt={`${name} Icon`}
        className="w-8 h-8 mr-2 grayscale group-hover:grayscale-0 group-hover:scale-125 transition duration-300"
        loading="lazy"
      />

      {/* Nama Teknologi */}
      <span className="font-bold md:text-lg absolute left-16 top-5 md:top-[1.1rem] transition-all duration-300 group-hover:-translate-y-2.5">
        {name}
      </span>
      <span className="text-xs md:text-sm text-muted-foreground absolute left-16 top-[1.3rem] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2.5">
        {level}
      </span>
    </div>
  );
};
export default skillCard;
