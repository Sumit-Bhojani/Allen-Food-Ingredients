import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiArrowRight, FiTarget, FiEye, FiShield, FiAward, FiGlobe, FiTruck } from 'react-icons/fi';
import { values } from '../data/content';
import { siteImages } from '../data/products';
import './About.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-breadcrumb">Home / About Us</span>
            <h1>About Allen Food Ingredients</h1>
            <p>Dedicated to delivering pure, premium dehydrated food ingredients, spices, and seeds.</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story with Real Imagery */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <FadeIn>
              <div className="about-story-visual">
                <div className="story-image-wrap">
                  <img
                    src={siteImages.aboutHero}
                    alt="Allen Food Ingredients Spices and Herbs"
                    className="story-img"
                  />
                  <div className="quality-seal-badge">
                    <FiShield className="seal-icon" />
                    <div>
                      <strong>100% Pure</strong>
                      <span>FSSAI Tested</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="about-story-text">
                <span className="section-label">Our Story</span>
                <h2 className="section-title">
                  Dedicated to <span className="brand-accent">Quality, Purity & Trust</span>
                </h2>
                <p>
                  Allen Food Ingredients is dedicated to providing high-quality dehydrated food ingredients,
                  including dehydrated white onion, red/pink onion, dehydrated garlic, edible seeds, and an authentic range of whole and ground spices.
                </p>
                <p>
                  Our commitment to quality begins with carefully selected raw materials and continues through
                  every stage of processing and packaging. We focus on maintaining product quality, natural flavour and
                  consistency to meet the expectations of our customers.
                </p>
                <p>
                  We aim to build long-term business relationships by offering reliable products, competitive solutions and dependable customer service.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <FiCheck className="highlight-check" />
                    <span>FSSAI Certified & Quality Tested</span>
                  </div>
                  <div className="highlight-item">
                    <FiCheck className="highlight-check" />
                    <span>No Preservatives or Additives</span>
                  </div>
                  <div className="highlight-item">
                    <FiCheck className="highlight-check" />
                    <span>Bulk Supply & Custom Packaging</span>
                  </div>
                  <div className="highlight-item">
                    <FiCheck className="highlight-check" />
                    <span>Pan-India & Export Delivery</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Commitment Section with Photo */}
      <section className="section commitment-section">
        <div className="container">
          <div className="cv-grid">
            <FadeIn>
              <div className="cv-text">
                <span className="section-label">Our Promise</span>
                <h2 className="section-title">Our Commitment</h2>
                <p>
                  At Allen Food Ingredients, our commitment is to deliver consistent quality in every batch we produce.
                  We source only the finest raw materials, process them using modern dehydration techniques, and follow strict
                  quality control measures at every step.
                </p>
                <p>
                  We are committed to food safety, hygiene, and transparency. From farm selection to final packaging,
                  every process is designed to preserve natural flavour, colour, and nutritional value — ensuring our customers
                  receive products they can trust.
                </p>
                <div className="cv-bullets">
                  <div className="cv-bullet"><FiShield className="cv-icon" /> Strict Quality Control at Every Stage</div>
                  <div className="cv-bullet"><FiAward className="cv-icon" /> Hygienic Processing & Food-Grade Packaging</div>
                  <div className="cv-bullet"><FiGlobe className="cv-icon" /> Traceable & Sustainable Sourcing</div>
                  <div className="cv-bullet"><FiTruck className="cv-icon" /> On-Time Delivery & Reliable Support</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="cv-image-wrap">
                <img
                  src={siteImages.commitment}
                  alt="Our Quality Processing Commitment"
                  className="cv-img"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Vision Section with Photo */}
      <section className="section vision-section">
        <div className="container">
          <div className="cv-grid reverse">
            <FadeIn>
              <div className="cv-text">
                <span className="section-label">Future Outlook</span>
                <h2 className="section-title">Our Vision</h2>
                <p>
                  Our vision is to become a globally trusted name in dehydrated food ingredients by consistently delivering
                  premium quality, natural flavour, and dependable service. We aspire to be the preferred partner for food manufacturers,
                  restaurants, and exporters worldwide.
                </p>
                <p>
                  We aim to grow through innovation, sustainable practices, and strong customer relationships — while contributing
                  to the food industry with purity, passion, and purpose.
                </p>
                <div className="cv-bullets">
                  <div className="cv-bullet"><FiTarget className="cv-icon" /> Global Trust in Dehydrated Ingredients</div>
                  <div className="cv-bullet"><FiAward className="cv-icon" /> Innovation in Processing & Packaging</div>
                  <div className="cv-bullet"><FiCheck className="cv-icon" /> Sustainable & Ethical Practices</div>
                  <div className="cv-bullet"><FiGlobe className="cv-icon" /> Long-Term Customer Partnerships</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="cv-image-wrap">
                <img
                  src={siteImages.vision}
                  alt="Our Vision for Food Ingredients"
                  className="cv-img"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header-center">
              <span className="section-label">Guiding Principles</span>
              <h2 className="section-title">What Drives Us Every Day</h2>
            </div>
          </FadeIn>
          <div className="values-grid">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="value-card">
                  <div className="value-number">0{i + 1}</div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <FadeIn>
            <div className="about-cta">
              <h2>Connect With Allen Food Ingredients</h2>
              <p>Looking for a reliable supplier of dehydrated onion, garlic, spices, or seeds? We would love to discuss your requirements and supply samples.</p>
              <Link to="/contact" className="btn-primary">Send An Inquiry <FiArrowRight /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;
