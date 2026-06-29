import React from 'react';
import Section from './Section.jsx';
import CountdownDisplay from './CountdownDisplay.jsx';

export default function Countdown({ data, targetDate }) {
  return (
    <Section className="countdown-section">
      <div className="countdown-intro">
        <h2>
          We're getting
          <span>married</span>
        </h2>
        <div className="countdown-name">
          <span className="countdown-crown" aria-hidden="true">
            ♔
          </span>
          <p>{data.bride}</p>
        </div>
        <span className="countdown-divider" aria-hidden="true" />
        <div className="countdown-name">
          <span className="countdown-crown" aria-hidden="true">
            ♛
          </span>
          <p>{data.groom}</p>
        </div>
      </div>
      <CountdownDisplay targetDate={targetDate} />
    </Section>
  );
}
