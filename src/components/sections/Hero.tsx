import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import TrustedCompanies from './TrustedCompanies';
import TypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div className="relative min-h-screen hero-section pt-12 flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-gray-900">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <Container className="relative">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 !leading-tight">
            Innovating Tomorrow,{' '}
            <span className="text-primary">Today.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 !leading-relaxed">
            We build cutting-edge software solutions that transform businesses and drive growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button icon={ArrowRight}>
              Explore Services
            </Button>
            <Button variant="outline">
              Contact Us
            </Button>
          </div>

          {/* Search Box with Typing Animation */}
          <div className="relative max-w-md mb-10">
            {/* Search Box Container */}
            <div className="relative flex items-center border border-primary rounded-full bg-white dark:bg-gray-800 p-2 shadow-lg">
              {/* Search Icon */}
              <span className="absolute left-4 text-primary dark:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
              </span>

              {/* Typing Effect Inside Search Box */}
              <TypingEffect
              text={['Search for solutions...', 'Discover our services...', 'Find your next project...']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={3000}
              className="pl-12 pr-4 py-2 text-lg text-gray-600 dark:text-gray-300 placeholder-transparent focus:outline-none"
              />
            </div>
          </div>

          <TrustedCompanies />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
