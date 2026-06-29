import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import Section from './Section.jsx';

export default function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <Section eyebrow="Gallery" title="A glimpse of the day">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.button
            className={`gallery-item gallery-item-${index + 1}`}
            key={image.src}
            onClick={() => setActiveImage(image)}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Open image: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage.src}
              alt={activeImage.alt}
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
            />
            <button className="lightbox-close" onClick={() => setActiveImage(null)}>
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
