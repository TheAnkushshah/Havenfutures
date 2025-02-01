import { MapPin, Clock, IndianRupee } from 'lucide-react';
import Button from '../../ui/Button';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

const JobCard = ({ title, location, type, salary, description, requirements }: JobCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          {location}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          {type}
        </div>
        <div className="flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          {salary}
        </div>
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mb-6">
  <h4 className="font-medium mb-2">Requirements:</h4>
  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
    {requirements.map((req, index) => (
      <li key={index} className="text-justify">
        {req}
      </li>
    ))}
  </ul>
</div>

      <Button className="w-full">Apply Now</Button>
    </div>
  );
};

export default JobCard;