import React from 'react';
import Section from './Section.jsx';

export default function Schedule({ items }) {
  return (
    <Section eyebrow="Schedule" title="Wedding day rhythm">
      <div className="schedule-list">
        {items.map((item) => (
          <article className="schedule-item" key={`${item.time}-${item.title}`}>
            <time>{item.time}</time>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
