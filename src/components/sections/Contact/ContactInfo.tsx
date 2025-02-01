import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Unitech Trade Centre', 'Gurgaon, India'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 9773605849', 'Mon-Sat 9AM to 6PM'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@havenfutures.com', 'support@havenfutures.com'],
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    details: ['Available 24/7', 'Typical response time: 5 Sec'],
  },
];

const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
      {contactInfo.map((info) => (
        <div key={info.title} className="flex items-start space-x-4 mb-8 last:mb-0">
          <div className="p-3 bg-primary/10 rounded-lg">
            <info.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{info.title}</h3>
            {info.details.map((detail) => (
              <p key={detail} className="text-gray-600 dark:text-gray-400">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;