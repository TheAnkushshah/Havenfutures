import Container from '../../ui/Container';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Map from './Map';
import ChatBot from '../../features/ChatBot';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
            Our team is ready to answer any questions you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <ContactForm />
            </div>
            <Map />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </Container>
      <ChatBot />
    </section>
  );
};

export default Contact;