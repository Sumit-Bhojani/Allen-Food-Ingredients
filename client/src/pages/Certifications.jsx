import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiShield, FiCheckCircle, FiFileText } from 'react-icons/fi';
import { siteImages } from '../data/products';
import './Certifications.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const certDetails = [
  {
    name: "FSSAI Certified",
    regNo: "License No: 1072XXXXXXXXXX",
    fullName: "Food Safety and Standards Authority of India",
    description: "Licensed under India's apex food safety regulatory body, certifying all dehydrated onion, garlic, spices, and seeds comply with food safety, hygiene, and labeling standards.",
    badgeColor: "#1B5E20"
  },
  {
    name: "ISO 22000:2018",
    regNo: "FSMS Accredited",
    fullName: "Food Safety Management System",
    description: "International accreditation ensuring comprehensive hazard analysis, critical control points, traceability, and continuous audit across all processing units.",
    badgeColor: "#0D47A1"
  },
  {
    name: "HACCP Certified",
    regNo: "Hazard Analysis & Critical Control Points",
    fullName: "Preventive Food Safety Standard",
    description: "Systematic biological, chemical, and physical hazard management from farm harvesting, washing, sorting, dehydration, grinding to vacuum packaging.",
    badgeColor: "#E65100"
  },
  {
    name: "GMP Compliant",
    regNo: "Good Manufacturing Practices",
    fullName: "WHO-GMP & Industrial Standard",
    description: "Facility hygiene, air-filtration, stainless-steel food contact equipment, clean-room pulverization, and regular worker sanitation protocols.",
    badgeColor: "#4A148C"
  },
  {
    name: "Halal Certified",
    regNo: "Shariah Compliant Production",
    fullName: "Halal Food Production Standards",
    description: "Certified halal manufacturing process allowing export to Middle East, Southeast Asia, and worldwide halal-consuming markets.",
    badgeColor: "#00695C"
  },
  {
    name: "Kosher Compliant",
    regNo: "Kosher Certified Ingredients",
    fullName: "Jewish Dietary Food Laws",
    description: "Pure plant-based dehydrated ingredients processed in dedicated facilities compliant with strict international Kosher standards.",
    badgeColor: "#37474F"
  }
];

const Certifications = () => {
  return (
    <div className="cert-page">
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-breadcrumb">Home / About Us / Certifications</span>
            <h1>Certified Excellence & Food Safety</h1>
            <p>Our processing units and testing laboratories adhere to the highest international quality, purity, and hygiene benchmarks.</p>
          </motion.div>
        </div>
      </section>

      {/* Intro with Lab Image */}
      <section className="section">
        <div className="container">
          <div className="cert-hero-grid">
            <FadeIn>
              <div className="cert-intro-text">
                <span className="section-label">Quality Assurance</span>
                <h2 className="section-title">Committed to Zero-Defect Food Safety</h2>
                <p>
                  At Allen Food Ingredients, food safety is an uncompromised commitment. We operate modern,
                  hygienic processing units equipped with magnet separators, color sortex machines, and metal detectors.
                </p>
                <p>
                  Every consignment is accompanied by a Certificate of Analysis (COA) guaranteeing moisture limits,
                  microbial safety, mesh size distribution, and zero adulteration.
                </p>
                <div className="cert-stats-mini">
                  <div className="csm-item">
                    <strong>100%</strong>
                    <span>Sortex Cleaned</span>
                  </div>
                  <div className="csm-item">
                    <strong>0%</strong>
                    <span>Preservatives</span>
                  </div>
                  <div className="csm-item">
                    <strong>COA</strong>
                    <span>With Every Batch</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="cert-image-frame">
                <img
                  src={siteImages.qualityControl}
                  alt="Quality Laboratory Testing"
                  className="cert-lab-img"
                />
                <div className="cert-lab-badge">
                  <FiCheckCircle /> Lab Verified Batch Testing
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="cert-grid">
            {certDetails.map((cert, i) => (
              <FadeIn key={cert.name} delay={i * 0.1}>
                <div className="cert-card">
                  <div className="cert-card-header" style={{ borderColor: cert.badgeColor }}>
                    <div className="cert-icon-seal" style={{ background: cert.badgeColor }}>
                      <FiAward />
                    </div>
                    <div>
                      <span className="cert-reg">{cert.regNo}</span>
                      <h3>{cert.name}</h3>
                    </div>
                  </div>
                  <span className="cert-fullname">{cert.fullName}</span>
                  <p>{cert.description}</p>
                  <div className="cert-card-footer">
                    <span className="cert-verified-pill"><FiCheckCircle /> Verified & Valid</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step QA Process */}
      <section className="section qa-section">
        <div className="container">
          <FadeIn>
            <div className="section-header-center">
              <span className="section-label">Our Process</span>
              <h2 className="section-title">From Farm to Final Container</h2>
            </div>
          </FadeIn>
          <div className="qa-steps">
            {[
              { step: "01", title: "Raw Material Selection", desc: "Sourcing only top-grade fresh white onions, red onions, and garlic bulbs with high dry matter and authentic aroma." },
              { step: "02", title: "Cleaning & Continuous Drying", desc: "Automated washing, peeling, multi-stage low-heat dehydration to lock in essential volatile oils and natural color." },
              { step: "03", title: "Sortex & Mesh Grinding", desc: "Laser optical sortex removes any defectives; precision milling produces exact mesh powders and granulations." },
              { step: "04", title: "Packaging & Dispatch", desc: "Moisture-barrier double poly-lined multi-wall paper bags or corrugated cartons ready for sea container export." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="qa-step">
                  <div className="qa-step-number">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
