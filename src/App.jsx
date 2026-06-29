import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';
import Entrance from './components/Entrance.jsx';
import Hero from './components/Hero.jsx';
import EventDetails from './components/EventDetails.jsx';
import Countdown from './components/Countdown.jsx';
import Schedule from './components/Schedule.jsx';
import Location from './components/Location.jsx';
import RSVP from './components/RSVP.jsx';
import Footer from './components/Footer.jsx';
import { weddingData } from './data/weddingData.js';

export default function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('invitation-open', opened);
  }, [opened]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!opened && <Entrance data={weddingData} onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <motion.main
          className="site-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Hero data={weddingData} />
          <Countdown data={weddingData} targetDate={weddingData.date} />
          <Location venue={weddingData.venue} />
          <EventDetails data={weddingData} />
          <Schedule items={weddingData.schedule} />
          <RSVP options={weddingData.rsvpOptions} />
          <Footer data={weddingData} />
        </motion.main>
      )}
    </>
  );
}
