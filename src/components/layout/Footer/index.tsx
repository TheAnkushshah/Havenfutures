import Container from '../../ui/Container';
import Logo from '../../ui/Logo';
import Newsletter from './Newsletter';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 dark:text-gray-400 mb-6">
              Building innovative solutions for tomorrow's challenges. We help businesses transform through technology.
            </p>
            <SocialLinks />
          </div>
          <div className="lg:col-span-2">
            <QuickLinks />
          </div>
        </div>

        <Newsletter />
      </Container>

      {/* Move border-t outside Container */}
      <div className="border-t dark:border-gray-800 mt-16 pt-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Haven Futures. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                Cookie Policy
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
