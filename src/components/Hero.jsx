import { motion } from 'framer-motion';
import React from 'react';
import { useRef } from 'react';

export default function Hero({ data }) {
  return (
    <section className="hero" style={{ '--hero-image': `url(${data.heroImage})` }}>
      <div className="hero-overlay" />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{data.shortLine}</p>
        <h1>
          {data.bride} <span>&</span> {data.groom}
        </h1>
        <p className="hero-line">{data.romanticLine}</p>
        <div className="hero-meta">
          <span>{data.displayDate}</span>
          <span>{data.venue.name}</span>
          <span>{data.venue.address}</span>
        </div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <motion.div
            className="hero-scroll-hint__line"
            animate={{ scaleY: [0.85, 1, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.svg
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M1 1L12 12L23 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
