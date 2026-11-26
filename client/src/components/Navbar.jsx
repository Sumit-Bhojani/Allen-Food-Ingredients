import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleDropdown = (e) => {
    // On small screen, allow toggle
    if (window.innerWidth <= 860) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  const productLinks = [
    { to: '/products/dehydrated-white-onion', label: 'Dehydrated White Onion' },
    { to: '/products/dehydrated-red-pink-onion', label: 'Dehydrated Red/Pink Onion' },
    { to: '/products/dehydrated-garlic', label: 'Dehydrated Garlic' },
    { to: '/products/indian-spices', label: 'Indian Spices' },
    { to: '/products/seeds', label: 'Seeds' },
  ];

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="tel:+917622994133" className="topbar-link">
              <FiPhone className="tb-icon" /> +91 76229 94133
            </a>
            <a href="mailto:info@allenfoodingredients.com" className="topbar-link">
              <FiMail className="tb-icon" /> info@allenfoodingredients.com
            </a>
          </div>
          <div className="topbar-right">
            <span className="cert-pill">FSSAI Certified</span>
            <span className="divider">|</span>
            <span>100% Pure & Tested</span>
            <span className="divider">|</span>
            <span>Pan-India & Export</span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo" aria-label="Allen Food Ingredients Home">
            <Logo theme="dark" height={42} className="desktop-logo" />
          </Link>

          {/* Backdrop overlay for mobile */}
          {isOpen && <div className="nav-backdrop" onClick={() => setIsOpen(false)} />}

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <div className="mobile-nav-header">
              <Logo theme="dark" height={36} />
              <button
                className="mobile-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            <NavLink to="/" className="nav-link" end>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>

            <div
              className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 860 && setDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 860 && setDropdownOpen(false)}
            >
              <div className="nav-dropdown-trigger-row">
                <NavLink to="/products" className="nav-link nav-dropdown-trigger">
                  Products
                </NavLink>
                <button
                  className={`chevron-btn ${dropdownOpen ? 'rotate' : ''}`}
                  onClick={toggleDropdown}
                  aria-label="Toggle products dropdown"
                >
                  <FiChevronDown />
                </button>
              </div>

              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <div className="dropdown-header">Our Specialized Categories</div>
                {productLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="dropdown-item">
                    <span>{link.label}</span>
                    <FiArrowRight className="item-arrow" />
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/certifications" className="nav-link">
              Certifications
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/contact" className="nav-link nav-cta">
              Get In Touch
            </NavLink>

            {/* Mobile Contact Quick Actions */}
            <div className="mobile-contact-bar">
              <span className="mobile-contact-title">Direct Support</span>
              <a href="tel:+917622994133" className="mobile-contact-link">
                <FiPhone /> +91 76229 94133
              </a>
              <a href="mailto:info@allenfoodingredients.com" className="mobile-contact-link">
                <FiMail /> info@allenfoodingredients.com
              </a>
              <div className="mobile-badge-strip">
                <span>✓ FSSAI Certified</span>
                <span>✓ Export Quality</span>
              </div>
            </div>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
