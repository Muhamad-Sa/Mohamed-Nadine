import { motion } from 'framer-motion';
import React from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Section({ eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      className={`section ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      {(eyebrow || title) && (
        <div className="section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  );
}
