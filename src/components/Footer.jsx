import React from 'react';

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <p>{data.footerText}</p>
      <h2>
        {data.bride} <span>&</span> {data.groom}
      </h2>
      <small>
        {data.displayDate} &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
}
