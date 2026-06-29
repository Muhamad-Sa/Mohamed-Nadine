import { motion } from 'framer-motion';
import React from 'react';

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
        <p className="eyebrow">{data.shortLine}</p>
        <h1>
          {data.bride} <span>&</span> {data.groom}
        </h1>
        <p className="hero-line">{data.romanticLine}</p>
        <div className="hero-meta">
          <span>{data.displayDate}</span>
          <span>{data.venue.name}</span>
          <span>{data.venue.address}</span>
        </div>
      </motion.div>
    </section>
  );
}
