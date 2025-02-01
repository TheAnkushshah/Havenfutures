import { useState } from 'react';
import { Menu, X, ShoppingCart, Box, Network, AppWindow } from 'lucide-react'; // Import any icons you want
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import Container from '../ui/Container';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Custom', href: '#custom' },
  { name: 'Services', href: '#services', subItems: [
      { name: 'Web Design', href: '#webdesign', icon: <Box className="h-6 w-6 text-white" /> },
      { name: 'App Development', href: '#appdev', icon: <AppWindow className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
      { name: 'Web Design', href: '#webdesign', icon: <Box className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
      { name: 'Web Design', href: '#webdesign', icon: <Box className="h-6 w-6 text-white" /> },
      { name: 'App Development', href: '#appdev', icon: <AppWindow className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
      { name: 'Web Design', href: '#webdesign', icon: <Box className="h-6 w-6 text-white" /> },
      { name: 'App Development', href: '#appdev', icon: <AppWindow className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
      { name: 'SEO Services', href: '#seo', icon: <Network className="h-6 w-6 text-white" /> },
    ]
  },
  { name: 'Pre-Built kits', href: '#prebuiltkits' },
  { name: 'App Mania', href: '#appmania' },
  { name: 'Aams', href: '#aams' },
  { name: 'Special', href: '#' },
  { name: 'Shop', href: '#shop' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <Container>
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8 flex-nowrap relative">
              {navItems.map((item) => (
                <div key={item.name} className="group relative">
                  {/* Main Navigation Item */}
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </a>

                  {/* Mega Menu */}
                  {item.subItems && (
                    <div className="fixed left-80 hidden group-hover:grid grid-cols-5 gap-8 bg-white dark:bg-gray-900 backdrop-blur-md z-50 shadow-lg rounded-b-xl py-10 mt-8 ml-80 w-[1150px]">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex flex-col items-center space-y-4 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                        >
                          <div className="p-4 bg-primary rounded-md">
                            {subItem.icon}
                          </div>
                          <span>{subItem.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Cart Button */}
              <Button className="p-2 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-white" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden mt-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full">
                <ShoppingCart className="h-6 w-6 text-white" />
              </Button>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;