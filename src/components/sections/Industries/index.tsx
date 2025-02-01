import Container from '../../ui/Container';
import { Building2, Stethoscope, ShoppingBag, Landmark, Plane, Gamepad2, GraduationCap, Factory } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Digital solutions for property management and real estate operations'
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'Innovative healthcare technology and patient care systems'
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description: 'E-commerce and retail management solutions'
  },
  {
    icon: Landmark,
    name: 'Finance',
    description: 'Fintech solutions and banking systems'
  },
  {
    icon: Plane,
    name: 'Travel',
    description: 'Travel and hospitality management systems'
  },
  {
    icon: Gamepad2,
    name: 'Gaming',
    description: 'Gaming and entertainment solutions'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'EdTech and learning management systems'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Industrial automation and manufacturing solutions'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering innovative solutions across diverse industry sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <industry.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{industry.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Industries;