import { Star, Download, ExternalLink } from 'lucide-react';
import Button from '../../ui/Button';

interface AppCardProps {
  name: string;
  description: string;
  icon: string;
  screenshots: string[];
  rating: number;
  downloads: string;
  category: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

const AppCard = ({
  name,
  description,
  icon,
  screenshots,
  rating,
  downloads,
  category,
  playStoreUrl,
  appStoreUrl,
}: AppCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
      {/* App Header */}
      <div className="p-6 flex gap-4 pb-4">
        <img
          src={icon}
          alt={name}
          className="w-20 h-20 rounded-xl"
        />
        <div>
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">{category}</span>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">{rating}</span>
            </div>
            <div className="flex items-center">
              <Download className="w-4 h-4 text-gray-500" />
              <span className="ml-1 text-sm">{downloads}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="pl-6 pr-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}
        </p>
      </div>

      {/* Screenshots Carousel */}
      <div className="relative overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4 pl-6 pr-6 pt-4 pb-2 snap-x snap-mandatory">
          {screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`${name} screenshot ${index + 1}`}
              className="w-48 h-auto rounded-lg snap-center shrink-0"
            />
          ))}
          {/* Add a fixed-width spacer at the end */}
         <div className="shrink-0 w-2"></div>
        </div>
      </div>
        
        {/* Download Buttons */}
        <div className="flex gap-4 pl-6 pr-6 pb-8 pt-6">
          {playStoreUrl && (
            <Button
              href={playStoreUrl}
              className="flex-1"
              icon={ExternalLink}
            >
              Buy
            </Button>
          )}
          {appStoreUrl && (
            <Button
              href={appStoreUrl}
              variant="outline"
              className="flex-1"
              icon={ExternalLink}
            >
              Test
            </Button>
          )}
        </div>
      </div>
  );
};

export default AppCard;