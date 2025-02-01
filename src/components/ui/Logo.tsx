const Logo = () => {
  return (
    <div className="flex items-center">
      {/* Logo Icon/Image */}
      <img
        src="/Haven Futures.png" // Replace with your logo file path
        alt="Haven Futures Logo"
        className="h-14 w-13 mr-3"
      />
      {/* Logo Text */}
      <span className="text-xl font-bold tracking-wider text-gray-800 dark:text-white">
        Haven Futures
      </span>
    </div>
  );
};

export default Logo;
