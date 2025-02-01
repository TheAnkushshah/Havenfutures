import { useState } from 'react';
import Container from '../../ui/Container';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Blockchain'];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics platform using machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    technologies: ['Python', 'TensorFlow', 'AWS'],
    category: 'AI/ML',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Expense Tracking Platform',
    description: 'Expenses and compare them to your monthly income with the budget planner.',
    image: 'https://i.imgur.com/201sDLU.png',
    technologies: ['Kotlin', 'Google Cloud', 'MVVM'],
    category: 'Mobile',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
        </Container>

        {/* Fullscreen scrollable categories, centered */}
        <div className="flex md:justify-center gap-4 mb-12 overflow-x-auto w-full scrollbar-hidden justify-start">
          <div className="flex gap-4 p-4"> {/* Added padding to prevent overcrowding */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

      <Container>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
