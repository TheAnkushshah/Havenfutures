import { Code, Smartphone, Cloud, Brain, Database, Terminal, Palette, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced AI algorithms.'
  },
  {
    icon: Database,
    title: 'Blockchain',
    description: 'Secure and transparent blockchain applications.'
  },
  {
    icon: Terminal,
    title: 'DevOps',
    description: 'Streamlined development and deployment processes.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions and auditing.'
  },
  {
    icon: Headphones,
    title: 'IT Consulting',
    description: 'Expert guidance for digital transformation.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of software development and IT services
            to help businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-[#54d585]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#54d585] transition-colors">
                <service.icon className="h-6 w-6 text-[#54d585] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;