import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import Section from './Section.jsx';

const WA_NUMBER = '201157669504';

export default function RSVP({ options }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const attendance = form.attendance.value;
    const guests = form.guests.value;
    const message = form.message.value.trim();

    const text = [
      `💍 RSVP — Mohamed & Nadine`,
      ``,
      `👤 Name: ${name}`,
      `✉️ Attending: ${attendance}`,
      `👥 Number of guests: ${guests}`,
      message ? `💬 Note: ${message}` : null,
    ]
      .filter((line) => line !== null)
      .join('\n');

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
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
            <p className="eyebrow">Almost done!</p>
            <h3>WhatsApp opened with your response.</h3>
            <p>Just tap <strong>Send</strong> in WhatsApp to confirm your attendance.</p>
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
              Number of guests
              <input name="guests" type="number" min="1" max="6" defaultValue="1" required />
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
