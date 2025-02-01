import Container from '../../ui/Container';
import AppCard from './AppCard';
import { apps } from './appsData';

const AppMania = () => {
  return (
    <section id="app-mania" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">App Mania</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of innovative apps and software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map(app => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AppMania;