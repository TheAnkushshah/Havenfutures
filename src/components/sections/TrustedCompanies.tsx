const companies = [
  {
    name: 'Microsoft',
    logo: 'https://static.vecteezy.com/system/resources/previews/028/339/964/non_2x/microsoft-icon-logo-symbol-free-png.png',
  },
  {
    name: 'Google',
    logo: 'https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png',
  },
  {
    name: 'Mercedes',
    logo: 'https://static.vecteezy.com/system/resources/previews/022/498/229/non_2x/mercedes-benz-logos-popular-brands-of-cars-isolated-on-transparent-background-3d-render-free-png.png',
  },
  {
    name: 'Paypal',
    logo: 'https://static.vecteezy.com/system/resources/previews/028/766/362/non_2x/paypal-payment-icon-symbol-free-png.png',
  },
  {
    name: 'Meta',
    logo: 'https://static.vecteezy.com/system/resources/previews/012/871/381/non_2x/meta-brand-icon-illustration-top-tech-company-logotype-free-png.png',
  },
];

const TrustedCompanies = () => {
  return (
    <div className="space-y-10">
      <p className="text-xl text-gray-500 dark:text-gray-400 !leading-relaxed">
        Trusted by industry leaders worldwide
      </p>
      <div className="flex flex-wrap gap-14 items-center">
        {/* Iterate through the companies array */}
        {companies.map((company) => (
          <div
            key={company.name} // Use company.name for a unique key
            className="group relative flex items-center justify-center"
          >
            <img
              src={company.logo} // Use company.logo for the image source
              alt={`${company.name} logo`} // Use company.name for the alt text
              className="h-14 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
              {company.name} {/* Use company.name for the span text */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedCompanies;
