import { motion } from 'framer-motion';
import React from 'react';

export default function Entrance({ data, onOpen }) {
  return (
    <motion.section
      className="entrance"
      style={{
        '--entrance-desktop-image': `url(${data.entranceImages.desktop})`,
        '--entrance-mobile-image': `url(${data.entranceImages.mobile})`,
      }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(14px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.85, 0], y: [-10, -90], x: index % 2 ? 18 : -18 }}
            transition={{
              duration: 4 + (index % 5),
              repeat: Infinity,
              delay: index * 0.18,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="invitation-template"
        initial={{ opacity: 0, y: 38, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="template-copy">
          <p className="eyebrow">{data.shortLine}</p>
          <h1>
            {data.bride}
            <span>&</span>
            {data.groom}
          </h1>
          <p className="script-line">{data.invitationLine}</p>
          <p className="entrance-date">{data.displayDate}</p>
          <motion.div
            className="entrance-arrow"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              className="entrance-arrow__line"
              animate={{ scaleY: [0.85, 1, 0.85] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.svg
              className="entrance-arrow__chevron"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M1 1L12 12L23 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.div>

          <motion.button
            className="primary-button"
            onClick={onOpen}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Invitation
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
