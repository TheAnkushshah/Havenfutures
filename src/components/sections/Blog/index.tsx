import Container from '../../ui/Container';
import BlogCard from './BlogCard';

const blogs = [
  {
    title: 'How AI - Transforming the Future of Software Development',
    excerpt: 'Exploring how artificial intelligence is revolutionising the way we build the software.',
    image: 'https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt8a875652918a2da8/66b48c9cbbe3a8843f6d6cbe/News_Image_-_2024-08-07T095607.430.jpg?disable=upscale&width=1200&height=630&fit=crop',
    author: {
      name: 'Ankush Shah',
      avatar: 'https://avatar.iran.liara.run/public/13',
    },
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    tags: ['AI', 'Development'],
  },
  {
    title: 'Quantum Computing Unlocking the Best of Technology',
    excerpt: 'Discover how quantum computing is set to change problem-solving and innovation.',
    image: 'https://www.envisioning.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fenvisioning%2Fimage%2Fupload%2Fc_fill%2Ch_720%2Cw_1280%2Ff_auto%2Fv1%2Fs3%2Fimages%2F26d4adf7-1a57-4ad9-bfc8-0fb94cc73bba&w=3840&q=75',
    author: {
      name: 'Rootvik',
      avatar: 'https://avatar.iran.liara.run/public/12',
    },
    date: 'Sep 08, 2024',
    readTime: '10 min read',
    tags: ['AI','ML', 'Quantum Computing'],
  },
  {
    title: 'Power of 5G - Changing Internet Connectivity Forever',
    excerpt: 'Learn how 5G is transforming industries with faster speeds and smarter connectivity.',
    image: 'https://www.shutterstock.com/image-photo/night-planet-earth-space-light-600nw-2495143773.jpg',
    author: {
      name: 'Arun Harsana',
      avatar: 'https://avatar.iran.liara.run/public/39',
    },
    date: 'Oct 20, 2024',
    readTime: '7 min read',
    tags: ['Internet', '5G', 'Networks'],
  },
  // Add more blog posts
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on technology, innovation, and industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;