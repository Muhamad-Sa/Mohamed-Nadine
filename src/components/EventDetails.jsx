import React from 'react';
import Section from './Section.jsx';

export default function EventDetails({ data }) {
  const e = data.event;
  return (
    <Section eyebrow="Details" title="The celebration">
      <article className="premium-card event-card event-card--single">
        <p className="eyebrow">Wedding Ceremony & Celebration</p>
        <h3>{e.venue}</h3>
        <dl>
          <div>
            <dt>Date</dt>
            <dd>{e.date}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{e.time}</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>{e.address}</dd>
          </div>
          <div>
            <dt>Dress Code</dt>
            <dd>{e.dressCode}</dd>
          </div>
        </dl>
        <p className="note">{e.note}</p>
      </article>
    </Section>
  );
}
