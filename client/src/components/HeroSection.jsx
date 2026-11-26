import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiShield, FiGlobe, FiAward } from 'react-icons/fi';
import { heroSlides } from '../data/products';
import './HeroSection.css';

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const activeSlide = heroSlides[current];

  return (
    <section className="hero-slider-section">
      <div className="hero-slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero-slide-active"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          >
            <div className="hero-slide-overlay" />
          </motion.div>
        </AnimatePresence>

        <div className="container hero-content-wrapper">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-text-block"
          >
            <div className="hero-tag-badge">
              <span className="badge-dot" />
              {activeSlide.tag}
            </div>

            <h1 className="hero-title">{activeSlide.title}</h1>
            <p className="hero-subtitle">{activeSlide.subtitle}</p>

            <div className="hero-cta-group">
              <Link to="/products" className="btn-hero-primary">
                Explore Our Products <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn-hero-secondary">
                Request Quick Quote
              </Link>
            </div>
          </motion.div>

          <div className="hero-trust-bar">
            <div className="trust-pill">
              <FiShield className="trust-icon" />
              <div>
                <strong>FSSAI Certified</strong>
                <span>100% Quality Tested</span>
              </div>
            </div>
            <div className="trust-pill">
              <FiGlobe className="trust-icon" />
              <div>
                <strong>Pan-India & Export</strong>
                <span>Reliable Delivery</span>
              </div>
            </div>
            <div className="trust-pill">
              <FiAward className="trust-icon" />
              <div>
                <strong>Natural & Pure</strong>
                <span>No Preservatives Added</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous slide">
          <FiChevronLeft />
        </button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Next slide">
          <FiChevronRight />
        </button>

        {/* Dot Indicators */}
        <div className="slider-indicators">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              className={`indicator-dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="dot-fill" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
