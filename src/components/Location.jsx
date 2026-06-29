import React from 'react';
import Section from './Section.jsx';

export default function Location({ venue }) {
  return (
    <Section className="location-section">
      <div className="location-panel">
        <h2 className="location-title">Our Day</h2>
        <div className="location-rule" aria-hidden="true" />
        <img className="location-map" src={venue.mapImage} alt="" aria-hidden="true" loading="lazy" />
        <p className="location-name">{venue.name}</p>
        <div className="location-rule location-rule-small" aria-hidden="true" />
        <p className="location-address">{venue.address}</p>
        <p className="location-tap-hint">Tap the image for location</p>
        <a className="location-photo-link" href={venue.mapUrl} target="_blank" rel="noreferrer">
          <span className="frame-corner frame-corner--tl" aria-hidden="true" />
          <span className="frame-corner frame-corner--tr" aria-hidden="true" />
          <span className="frame-corner frame-corner--bl" aria-hidden="true" />
          <span className="frame-corner frame-corner--br" aria-hidden="true" />
          <img className="location-photo" src={venue.image} alt={venue.name} loading="lazy" />
        </a>
      </div>
    </Section>
  );
}
