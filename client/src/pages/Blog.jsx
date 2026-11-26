import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { blogPosts } from '../data/content';
import './Blog.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-breadcrumb">Home / Blog</span>
            <h1>Industry Insights & Knowledge</h1>
            <p>Expert articles, processing guides, and global market trends from Allen Food Ingredients.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <article className="blog-card">
                  <div className="blog-card-image-wrap">
                    <img src={post.image} alt={post.title} className="blog-img" loading="lazy" />
                    <span className="blog-category-tag">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span><FiCalendar /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span><FiClock /> {post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-read-more">
                      Read Article <FiArrowRight />
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
