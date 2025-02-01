import Container from '../../ui/Container';
import JobCard from './JobCard';

const jobs = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '60k - 90k',
    description: 'We are looking for an experienced Senior Full Stack Developer to join our growing team.',
    requirements: [
      '5+ years of experience with React and Node.js',
      'Strong understanding of cloud services (AWS/Azure)',
      'Experience with all kind of microservices architecture',
    ],
  },
  {
    title: 'Intern - Backend Web Developer',
    location: 'On-Site',
    type: 'Flexible',
    salary: '50k - 80k',
    description: 'We are looking for an experienced Intern - Backend Web Developer to join our growing team.',
    requirements: [
      'Basic knowledge of Node.js & similar frameworks',
      'Familiar with databases like MongoDB or PostgreSQL.',
      'Understanding of RESTful APIs.',
    ],
  },
  // Add more job listings
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Be part of our mission to build innovative solutions that shape the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Careers;