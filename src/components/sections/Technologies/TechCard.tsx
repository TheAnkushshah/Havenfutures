import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  name: string;
  Icon: LucideIcon | string;
  isLucideIcon?: boolean;
}

const TechCard = ({ name, Icon, isLucideIcon = false }: TechCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform duration-300">
        {isLucideIcon ? (
          // @ts-ignore - Icon is a Lucide component when isLucideIcon is true
          <Icon className="w-8 h-8 text-primary" />
        ) : (
          <img src={Icon as string} alt={name} className="w-8 h-8" />
        )}
      </div>
      <span className="font-medium text-center">{name}</span>
    </div>
  );
};

export default TechCard;