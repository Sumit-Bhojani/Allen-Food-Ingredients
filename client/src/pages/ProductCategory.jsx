import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowLeft, FiArrowRight, FiCheck, FiX, FiMail, FiPhone } from 'react-icons/fi';
import { getCategoryById } from '../data/products';
import './ProductCategory.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const ProductCategory = () => {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!category) {
    return (
      <div className="not-found-page">
        <div className="container" style={{ textAlign: 'center', padding: '160px 0' }}>
          <h1>Category Not Found</h1>
          <p>The product category you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
            <FiArrowLeft /> Back to Products Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-breadcrumb">
              <Link to="/">Home</Link> / <Link to="/products">Products</Link> / {category.name}
            </span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-items-grid">
            {category.items.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.06}>
                <div className="product-item-card" onClick={() => setSelectedProduct(item)}>
                  <div className="pic-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="pic-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = category.image;
                      }}
                    />
                    <span className="pic-quickview">Click to Enquire</span>
                  </div>
                  <div className="pic-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>

                    {item.specs && (
                      <div className="pic-specs">
                        {Object.entries(item.specs).map(([key, val]) => (
                          <div key={key} className="spec-item">
                            <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}</span>
                            <span className="spec-value">{val}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pic-card-actions">
                      <button
                        className="pic-enquiry-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(item);
                        }}
                      >
                        Enquire Specifications <FiArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div style={{ textAlign: 'center', marginTop: '56px' }}>
              <Link to="/products" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <FiArrowLeft /> Back to All Categories
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Quick View / Enquiry Modal */}
      {selectedProduct && (
        <div className="product-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)} aria-label="Close modal">
              <FiX />
            </button>
            <div className="modal-grid">
              <div className="modal-image-col">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="modal-product-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = category.image;
                  }}
                />
              </div>
              <div className="modal-details-col">
                <span className="modal-category-name">{category.name}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="modal-desc">{selectedProduct.description}</p>

                {selectedProduct.specs && (
                  <div className="modal-specs-box">
                    <h4>Technical Specifications</h4>
                    <div className="modal-specs-list">
                      {Object.entries(selectedProduct.specs).map(([k, v]) => (
                        <div key={k} className="modal-spec-row">
                          <strong>{k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}:</strong>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-cta-box">
                  <h4>Interested in Sourcing this Ingredient?</h4>
                  <p>Send an inquiry to receive specification sheets, COA, samples, and bulk FOB/CIF pricing.</p>
                  <div className="modal-buttons">
                    <Link to="/contact" className="btn-primary" onClick={() => setSelectedProduct(null)}>
                      <FiMail /> Send Inquiry
                    </Link>
                    <a
                      href={`https://wa.me/917622994133?text=Hello,%20I%20am%20inquiring%20about%20${encodeURIComponent(selectedProduct.name)}%20from%20Allen%20Food%20Ingredients.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-modal"
                    >
                      <FiPhone /> WhatsApp Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
