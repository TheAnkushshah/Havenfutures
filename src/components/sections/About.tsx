import Container from '../ui/Container';
import { Clock, Users, Target, Zap } from 'lucide-react';

const values = [
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'We deliver solutions that optimize your business processes.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together to achieve exceptional results.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technologies.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality solutions.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Haven Futures</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We are a forward-thinking software development company dedicated to helping businesses 
              navigate the digital landscape. With years of experience and a passion for innovation, 
              we deliver solutions that drive growth and success.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-sm">
                  <div className="font-semibold">Years of Excellence</div>
                  <div className="text-gray-600 dark:text-gray-400">Software Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;