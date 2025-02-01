import { Github, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/havenfutures', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/havenfutures', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/havenfutures', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/havenfutures', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/thehavenfutures', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@havenfutures', label: 'YouTube' },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors dark:hover:bg-primary"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;