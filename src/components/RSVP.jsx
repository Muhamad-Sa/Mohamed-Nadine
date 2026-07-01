import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import Section from './Section.jsx';

export default function RSVP({ options }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section eyebrow="RSVP" title="Kindly reply">
      <div className="rsvp-panel">
        {submitted ? (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="eyebrow">Response received</p>
            <h3>Thank you for your reply.</h3>
            <p>We look forward to celebrating with you.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Full Name
              <input name="name" type="text" placeholder="Your full name" required />
            </label>
            <label>
              Will you attend?
              <select name="attendance" required defaultValue="">
                <option value="" disabled>
                  Select your response
                </option>
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Message to the couple
              <textarea name="message" rows="5" placeholder="Write a sweet note" />
            </label>
            <motion.button
              type="submit"
              className="primary-button"
              style={{ width: '100%' }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Send RSVP
            </motion.button>
          </form>
        )}
      </div>
    </Section>
  );
}
