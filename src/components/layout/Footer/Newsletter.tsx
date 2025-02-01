import React from 'react';
import { Send } from 'lucide-react';
import Button from '../../ui/Button';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="w-full max-w-md pl-0 pr-0">
      <h3 className="text-lg font-semibold mb-4 text-left">Stay Updated</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-left">
        Subscribe to our newsletter for the latest tech insights and company updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 justify-start">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button type="submit" icon={Send}>
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
