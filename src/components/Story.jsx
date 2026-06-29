import React from 'react';
import Section from './Section.jsx';

export default function Story({ data }) {
  return (
    <Section eyebrow="Our Story" title="Every moment brought us closer">
      <div className="story-layout">
        <p className="story-copy">{data.story}</p>
        <div className="story-timeline">
          {data.timeline.map((item) => (
            <article className="premium-card story-card" key={item.title}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
