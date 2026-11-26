import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { getCategories } from '../data/products';
import './Products.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const Products = () => {
  const categories = getCategories();

  return (
    <div className="products-page">
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-breadcrumb">Home / Products</span>
            <h1>Our Product Catalog</h1>
            <p>Explore our comprehensive selection of dehydrated vegetables, authentic spices, edible seeds, and specialty food ingredients.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-all-grid">
            {categories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.08}>
                <Link to={`/products/${cat.id}`} className="product-category-card">
                  <div className="pcc-image-wrapper">
                    <img src={cat.image} alt={cat.name} className="pcc-image" loading="lazy" />
                    <span className="pcc-count-pill">{cat.itemCount} Varieties</span>
                  </div>
                  <div className="pcc-content">
                    <h3>{cat.name}</h3>
                    <p>{cat.description}</p>
                    <div className="pcc-footer">
                      <span className="pcc-tag"><FiCheck /> Food Grade Tested</span>
                      <span className="pcc-link">
                        Explore Category <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <FadeIn>
            <div className="products-cta">
              <h2>Need Custom Specifications or Bulk Export?</h2>
              <p>We supply food manufacturers, private labels, and distributors with customized mesh sizes, moisture control, and packaging options.</p>
              <Link to="/contact" className="btn-primary">Request Custom Quotation <FiArrowRight /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Products;
