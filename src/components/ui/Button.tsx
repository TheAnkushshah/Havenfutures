import React from 'react';
import { LucideIcon, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: LucideIcon;
  children: React.ReactNode;
  href?: string;
}

const Button = ({
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 disabled:hover:bg-primary',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:hover:bg-transparent disabled:hover:text-primary',
    ghost:
      'text-gray-600 hover:text-primary dark:text-gray-300 disabled:hover:text-gray-600 dark:disabled:hover:text-gray-300',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {Icon && <Icon className="ml-2 h-5 w-5" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && (
        <Icon
          className={`ml-2 h-5 w-5 ${
            props.disabled && Icon === Loader2 ? 'animate-spin' : ''
          }`}
        />
      )}
    </button>
  );
};

export default Button;