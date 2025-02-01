const links = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Press Kit', href: '#press' },
  ],
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'AI & ML', href: '#services' },
  ],
  Resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'Status', href: '#status' },
    { label: 'Open Source', href: '#opensource' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR', href: '/gdpr' },
  ],
};

const QuickLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-semibold mb-4">{category}</h3>
          <ul className="space-y-2">
            {items.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors dark:hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;