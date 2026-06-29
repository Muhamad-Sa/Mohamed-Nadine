import { motion } from 'framer-motion';
import React from 'react';
import { useEffect, useMemo, useState } from 'react';

function getTimeLeft(targetDate) {
  const distance = new Date(targetDate).getTime() - Date.now();
  const safeDistance = Math.max(distance, 0);

  return {
    days: Math.floor(safeDistance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeDistance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeDistance / (1000 * 60)) % 60),
    seconds: Math.floor((safeDistance / 1000) % 60),
  };
}

export default function CountdownDisplay({ targetDate, compact = false }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
  const units = useMemo(
    () => [
      ['Days', timeLeft.days],
      ['Hours', timeLeft.hours],
      ['Minutes', timeLeft.minutes],
      ['Seconds', timeLeft.seconds],
    ],
    [timeLeft],
  );

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`countdown-grid ${compact ? 'compact' : ''}`} aria-label="Wedding countdown">
      {units.map(([label, value]) => (
        <React.Fragment key={label}>
          <motion.div
            className="countdown-tile"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.strong key={value} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }}>
              {String(value).padStart(2, '0')}
            </motion.strong>
            <span>{label}</span>
          </motion.div>
          {label !== 'Seconds' && <span className="countdown-separator">:</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
