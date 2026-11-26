import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiArrowRight, 
  FiCheck, 
  FiAward, 
  FiShield, 
  FiSettings, 
  FiGlobe,
  FiPackage,
  FiFeather,
  FiCheckCircle,
  FiPhoneCall
} from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import { getCategories, siteImages } from '../data/products';
import { whyChooseUs } from '../data/content';
import './Home.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const iconMap = {
  quality: <FiAward />,
  certified: <FiShield />,
  custom: <FiSettings />,
  global: <FiGlobe />
};

const categoryBadges = {
  "dehydrated-white-onion": { tag: "Dehydrated Vegetables", forms: ["Flakes", "Chopped", "Minced", "Granules", "Powder"] },
  "dehydrated-red-pink-onion": { tag: "Dehydrated Vegetables", forms: ["Flakes", "Chopped", "Minced", "Granules", "Powder"] },
  "dehydrated-garlic": { tag: "Dehydrated Vegetables", forms: ["Flakes", "Chopped", "Minced", "Granules", "Powder"] },
  "indian-spices": { tag: "Whole & Ground Spices", forms: ["Red Chilli", "Turmeric", "Ginger", "Green Chilli"] },
  "seeds": { tag: "Edible Seeds", forms: ["Mustard", "Cumin", "Fennel", "Fenugreek", "Chia"] }
};

const processSteps = [
  { step: "01", title: "Raw Material Sourcing", desc: "Select high-pungency, premium produce directly from trusted agricultural regions." },
  { step: "02", title: "Cleaning & Sorting", desc: "Multi-stage automated washing, skin peeling, and optical sorting to remove impurities." },
  { step: "03", title: "Controlled Dehydration", desc: "Precise low-temperature continuous drying that preserves authentic aroma, color, and nutrients." },
  { step: "04", title: "Granulation & Sizing", desc: "Milled and sifted into flakes, chopped, minced, granules, or ultra-fine powders." },
  { step: "05", title: "Moisture-Proof Packaging", desc: "Food-grade poly-lined multi-wall bags and corrugated cartons for maximum shelf stability." }
];

const Home = () => {
  const categories = getCategories();

  return (
    <div className="home">
      <HeroSection />

      {/* Modern Value Pillars Strip (Maahir Foods inspired) */}
      <section className="pillars-strip-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <FiFeather />
              </div>
              <div className="pillar-text">
                <h4>100% Pure & Natural</h4>
                <p>Zero additives, preservatives, or artificial dyes</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <FiAward />
              </div>
              <div className="pillar-text">
                <h4>Hygienic Dehydration</h4>
                <p>Locks in natural pungency, aroma, and flavor</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <FiPackage />
              </div>
              <div className="pillar-text">
                <h4>Custom Bulk Packaging</h4>
                <p>Poly-lined 20kg/25kg multi-wall bags & boxes</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <FiGlobe />
              </div>
              <div className="pillar-text">
                <h4>Pan-India & Export Ready</h4>
                <p>Full batch COA test reports & dependable dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Matching Live Website (Image 3) */}
      <section className="section about-home-section" id="about">
        <div className="container">
          <FadeIn>
            <div className="about-home-grid">
              <div className="about-home-text">
                <div className="about-pill-tag">About Company</div>
                <h2 className="about-home-title">
                  About <span className="brand-accent">Allen Food Ingredients</span>
                </h2>
                <p className="about-home-paragraph">
                  Allen Food Ingredients is dedicated to providing high-quality dehydrated food ingredients,
                  including dehydrated onion, dehydrated garlic and a wide range of spices. Our commitment to
                  quality begins with carefully selected raw materials and continues through every stage of
                  processing and packaging. We focus on maintaining product quality, natural flavour and
                  consistency to meet the expectations of our customers. We aim to build long-term business
                  relationships by offering reliable products, competitive solutions and dependable customer service.
                </p>

                <ul className="about-home-checklist">
                  <li>
                    <span className="check-mark">✓</span> FSSAI Certified & Quality Tested
                  </li>
                  <li>
                    <span className="check-mark">✓</span> No Preservatives or Additives
                  </li>
                  <li>
                    <span className="check-mark">✓</span> Bulk Supply & Custom Packaging
                  </li>
                  <li>
                    <span className="check-mark">✓</span> Pan-India & Export Delivery
                  </li>
                </ul>

                <div className="about-home-cta">
                  <Link to="/about" className="btn-primary">
                    Read More About Us <FiArrowRight />
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Get In Touch
                  </Link>
                </div>
              </div>

              <div className="about-home-visual">
                <div className="about-img-frame">
                  <img
                    src={siteImages.aboutHero}
                    alt="About Allen Food Ingredients Spices and Herbs"
                    className="about-clean-img"
                    loading="lazy"
                  />
                  <div className="about-badge-floating">
                    <FiCheckCircle className="badge-check-icon" />
                    <div>
                      <strong>100% Quality Focus</strong>
                      <span>Consistent Batch Standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Products Section - Matching Live Website (Image 1) */}
      <section className="section products-section" id="products">
        <div className="container">
          <FadeIn>
            <div className="section-header-center">
              <span className="section-label">Product at a Glance</span>
              <h2 className="section-title">Our Products</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Click on any category to see its types and details
              </p>
            </div>
          </FadeIn>

          <div className="products-grid-live">
            {categories.map((cat, i) => {
              const meta = categoryBadges[cat.id] || { tag: "Ingredients", forms: [] };
              return (
                <FadeIn key={cat.id} delay={i * 0.08}>
                  <Link to={`/products/${cat.id}`} className="live-product-card">
                    <div className="lpc-image-box">
                      <span className="lpc-tag-pill">{meta.tag}</span>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        loading="lazy"
                        className="lpc-img"
                      />
                    </div>
                    <div className="lpc-info">
                      <h3>{cat.name}</h3>
                      <p>{cat.description}</p>
                      
                      {/* Available Forms Preview */}
                      <div className="lpc-forms-chips">
                        {meta.forms.map((f) => (
                          <span key={f} className="form-chip">{f}</span>
                        ))}
                      </div>

                      <div className="lpc-footer">
                        <span className="view-detail-link">
                          View Products →
                        </span>
                        <span className="lpc-inquiry-hint">Details & Specs</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process Section (Maahir Foods inspired) */}
      <section className="section process-section">
        <div className="container">
          <FadeIn>
            <div className="section-header-center">
              <span className="section-label">Hygienic Processing</span>
              <h2 className="section-title">Our Quality & Dehydration Process</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Every batch is strictly controlled from raw sourcing to final vacuum moisture-barrier packaging.
              </p>
            </div>
          </FadeIn>

          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <FadeIn key={step.step} delay={idx * 0.08}>
                <div className="process-card">
                  <div className="process-step-num">{step.step}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Core Strengths */}
      <section className="section why-section">
        <div className="container">
          <FadeIn>
            <div className="section-header-center">
              <span className="section-label">Quality Commitment</span>
              <h2 className="section-title">Why Partner With Allen Food Ingredients</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                We are dedicated to building lasting partnerships through reliable product quality and transparent customer service.
              </p>
            </div>
          </FadeIn>

          <div className="why-grid">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1}>
                <div className="why-card">
                  <div className="why-icon">{iconMap[item.icon]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <span className="cta-badge">Direct Manufacturer Supply</span>
              <h2>Have a Bulk Enquiry or Need Custom Packaging?</h2>
              <p>
                Connect with our team directly. We are ready to provide product samples, COA specifications, and tailored quotations for your requirements.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-cta-primary">
                  Send Inquiry Now <FiArrowRight />
                </Link>
                <a
                  href="https://wa.me/917622994133?text=Hello!%20I%20have%20an%20inquiry%20regarding%20Allen%20Food%20Ingredients."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-secondary"
                >
                  <FiPhoneCall /> WhatsApp: +91 76229 94133
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
