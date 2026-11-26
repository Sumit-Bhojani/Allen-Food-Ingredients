import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck } from 'react-icons/fi';
import './Contact.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-breadcrumb">Home / Contact Us</span>
            <h1>Get In Touch</h1>
            <p>Have a bulk enquiry or need custom packaging? Send us a message and our team will get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <FadeIn>
            <div className="contact-card-wrapper">
              {/* Left Column: Get In Touch (Image 2) */}
              <div className="contact-left-panel">
                <h2>Get In Touch</h2>
                <p className="contact-left-desc">
                  Have a bulk enquiry or need custom packaging? Send us a message and our team will get back to you within 24 hours.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-entry">
                    <div className="entry-icon"><FiPhone /></div>
                    <div className="entry-text">
                      <span className="entry-label">Call Us</span>
                      <a href="tel:+917622994133" className="entry-value">+91 76229 94133</a>
                    </div>
                  </div>

                  <div className="contact-info-entry">
                    <div className="entry-icon"><FiMail /></div>
                    <div className="entry-text">
                      <span className="entry-label">Email Us</span>
                      <a href="mailto:info@allenfoodingredients.com" className="entry-value">info@allenfoodingredients.com</a>
                    </div>
                  </div>

                  <div className="contact-info-entry">
                    <div className="entry-icon"><FiMapPin /></div>
                    <div className="entry-text">
                      <span className="entry-label">Location</span>
                      <span className="entry-value">India</span>
                    </div>
                  </div>

                  <div className="contact-info-entry">
                    <div className="entry-icon"><FiClock /></div>
                    <div className="entry-text">
                      <span className="entry-label">Business Hours</span>
                      <span className="entry-value">Mon – Sat: 9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Send Us a Message (Image 2) */}
              <div className="contact-right-panel">
                <h2>Send Us a Message</h2>
                <p className="contact-form-sub">Fill the form below — we'll reply soon.</p>

                <form className="contact-inner-form" onSubmit={handleSubmit}>
                  <div className="form-fields-grid">
                    <div className="form-field">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Contact Number"
                      />
                    </div>

                    <div className="form-field">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Your Subject"
                      />
                    </div>

                    <div className="form-field full-span">
                      <label>Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows="5"
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className={`send-message-btn ${submitted ? 'sent' : ''}`} disabled={submitted}>
                    {submitted ? (
                      <><FiCheck /> Message Sent Successfully!</>
                    ) : (
                      <>Send Message →</>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;
