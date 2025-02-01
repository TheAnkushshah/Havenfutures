import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
