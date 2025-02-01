import { useState } from 'react';
import Container from '../../ui/Container';
import TechCard from './TechCard';
import { categories } from './techStackData';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === name
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              {name}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories
            .find(cat => cat.name === activeCategory)
            ?.technologies.map(tech => (
              <TechCard
                key={tech.name}
                name={tech.name}
                Icon={tech.icon}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Technologies;