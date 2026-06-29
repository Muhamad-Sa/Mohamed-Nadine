import entranceMobileImage from '../1.png';
import entranceDesktopImage from '../2.png';
import heroBackgroundImage from '../3.jpg';
import mapImage from '../4.png';
import locationImage from '../5.png';

// Edit this file to customize names, dates, venue details, story text, images, and RSVP options.
export const weddingData = {
  bride: 'Mohamed',
  groom: 'Nadine',
  date: '2026-07-28T19:00:00+02:00',
  displayDate: 'Tuesday, July 28, 2026',
  shortLine: 'Together with their families',
  invitationLine: 'Invite you to celebrate their wedding',
  romanticLine: 'A celebration of love, laughter, and forever.',
  entranceImages: {
    desktop: entranceDesktopImage,
    mobile: entranceMobileImage,
  },
  venue: {
    name: 'AlMasaya Hall',
    address: 'Dar El Moshah, Heliopolis, Cairo',
    mapLabel: 'AlMasaya Hall — Dar El Moshah',
    mapUrl: 'https://maps.app.goo.gl/eYFZhuRgbfXfHGSX9',
    mapImage,
    image: locationImage,
  },
  heroImage: heroBackgroundImage,
  story:
    'From a quiet hello to a promise beneath the evening lights, every chapter led us here. We are grateful to share this day with the people who have made our story warmer, brighter, and more beautiful.',
  timeline: [
    {
      title: 'First Meeting',
      date: 'Spring 2021',
      text: 'A chance introduction became the beginning of something gentle and unforgettable.',
    },
    {
      title: 'First Date',
      date: 'Summer 2021',
      text: 'Coffee turned into hours of conversation, easy laughter, and a feeling of home.',
    },
    {
      title: 'The Proposal',
      date: 'Autumn 2025',
      text: 'Under golden evening light, the easiest yes began our forever.',
    },
    {
      title: 'Wedding Day',
      date: 'July 28, 2026',
      text: 'We gather with our loved ones to celebrate the life we are building together.',
    },
  ],
  event: {
    date: 'Tuesday, July 28, 2026',
    time: '7:00 PM',
    venue: 'AlMasaya Hall',
    address: 'Dar El Moshah, Heliopolis, Cairo',
    dressCode: 'Formal evening attire',
    note: 'Please arrive 30 minutes early so everyone can be seated comfortably.',
  },
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85',
      alt: 'Elegant wedding table with candles and flowers',
    },
    {
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
      alt: 'Bride and groom walking together outdoors',
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
      alt: 'Wedding rings and floral details',
    },
    {
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
      alt: 'Romantic wedding reception setting',
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
      alt: 'Wedding bouquet in soft blush colors',
    },
    {
      src: 'https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=1200&q=85',
      alt: 'Couple embracing during golden hour',
    },
  ],
  schedule: [
    { time: '6:00 PM', title: 'Guest Arrival' },
    { time: '7:00 PM', title: 'Ceremony' },
    { time: '8:00 PM', title: 'Dinner' },
    { time: '9:00 PM', title: 'First Dance' },
    { time: '10:00 PM', title: 'Celebration' },
  ],
  rsvpOptions: ['Yes, joyfully attending', 'No, sending love'],
  footerText: 'We cannot wait to celebrate with you.',
};
