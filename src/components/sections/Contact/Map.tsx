const Map = () => {
  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6981863754727!2d77.07391947613279!3d28.458513191960733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e8582c77bd%3A0x9175181e14d9437d!2sUnitech%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1734156069682!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale hover:grayscale-0 transition-all duration-300"
      ></iframe>
    </div>
  );
};

export default Map;