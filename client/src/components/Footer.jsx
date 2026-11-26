import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <Logo theme="light" height={42} />
            </div>
            <p>
              Dedicated to providing high-quality dehydrated onion, garlic, whole & ground
              Indian spices, and edible seeds. Pure quality and dependable supply.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Our Products</h4>
            <ul>
              <li><Link to="/products/dehydrated-white-onion">Dehydrated White Onion</Link></li>
              <li><Link to="/products/dehydrated-red-pink-onion">Dehydrated Red/Pink Onion</Link></li>
              <li><Link to="/products/dehydrated-garlic">Dehydrated Garlic</Link></li>
              <li><Link to="/products/indian-spices">Indian Spices</Link></li>
              <li><Link to="/products/seeds">Seeds</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <FiMapPin />
              <span>Location: India</span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <a href="tel:+917622994133" style={{ color: "inherit" }}>+91 76229 94133</a>
            </div>
            <div className="contact-item">
              <FiMail />
              <a href="mailto:info@allenfoodingredients.com" style={{ color: "inherit" }}>info@allenfoodingredients.com</a>
            </div>
            <div className="contact-item">
              <span>🕒 Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Allen Food Ingredients. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
