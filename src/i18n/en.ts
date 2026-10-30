import { team } from '../config';
import type { Dict } from './es';

const en: Dict = {
  meta: {
    title: `${team.name} — Robotics team from Oaxaca | WRO 2027`,
    description: `${team.name} is a robotics team from Oaxaca, Mexico, heading to the World Robot Olympiad 2027. Top 10 worldwide at RoboCup and Top 41 worldwide at WRO Singapore.`,
    ogLocale: 'en_US',
  },
  nav: {
    links: [
      { href: '#results', label: 'Results' },
      { href: '#robot', label: 'Engineering' },
      { href: '#team', label: 'Team' },
      { href: '#sponsors', label: 'Sponsors' },
      { href: '#contact', label: 'Contact' },
    ],
    cta: 'Sponsor us',
    switchLabel: 'Language',
  },
  hero: {
    tag: 'WRO 2027 / Oaxaca, Mexico',
    titleLines: ['We build', 'the path.'],
    lead: 'A robotics team from Oaxaca heading to the World Robot Olympiad 2027. Real engineering, world-level results and one clear goal: compete head to head with the world.',
    primaryCta: 'Sponsor us',
    secondaryCta: 'See results',
    hud: [
      { label: 'SEASON', value: 'WRO 2027' },
      { label: 'BASE', value: 'OAXACA · MX' },
      { label: 'BEST RESULT', value: 'TOP 10 · ROBOCUP' },
      { label: 'STATUS', value: 'FORMING' },
    ],
  },
  results: {
    tag: 'Results',
    title: 'We have already competed against the world.',
    items: [
      { value: 'Top 10', label: 'Worldwide', text: 'RoboCup' },
      { value: 'Top 41', label: 'Worldwide', text: 'WRO Singapore' },
      { value: 'AI for Good', label: 'Participation', text: 'UN Youth Challenge' },
    ],
  },
  robot: {
    tag: 'Engineering',
    title: 'A robot we design, not one we assemble from a kit.',
    lead: 'Vision, communication and control developed by us, tested again and again on the competition table.',
    stack: [
      { label: 'Vision', text: 'MaixCam camera detecting colors and objects in real time.' },
      { label: 'Communication', text: 'ESP32 UART bridge between vision and the controller.' },
      { label: 'Control', text: 'SPIKE Prime hub connected through PUPRemote.' },
      { label: 'Navigation', text: 'PID control for precise turns and line following.' },
    ],
  },
  team: {
    tag: 'The team',
    title: 'A team in the making.',
    lead: 'We are building the lineup for WRO 2027. If you love building, coding and competing, now is the time to join.',
    members: [
      { name: 'Honoré', role: 'Founder · Engineering and programming' },
      { name: 'Your spot here', role: 'Member · To be confirmed' },
      { name: 'Advisor / coach', role: 'To be confirmed' },
    ],
  },
  sponsors: {
    tag: 'Sponsorship',
    title: 'Back a team from Oaxaca competing on the world stage.',
    lead: 'Your brand travels with us: on the robot, at the tournament and in our content. We also welcome in-kind support: parts, sensors or 3D printing.',
    amountLabel: 'Contribution',
    amount: 'To be defined',
    tiers: [
      { name: 'Bronze', perks: ['Logo on this site', 'Social media mention', 'Tournament report'] },
      { name: 'Silver', perks: ['Everything in Bronze', 'Logo on shirts and banner', 'Dedicated video'] },
      { name: 'Gold', perks: ['Everything in Silver', 'Logo on the robot', 'Demo at your company or event'] },
    ],
    cta: 'I want to sponsor',
  },
  roadmap: {
    tag: 'Roadmap',
    title: 'Road to WRO 2027',
    steps: [
      { status: 'In progress', text: 'Identity, website and sponsorship portfolio' },
      { status: 'Next', text: 'Sponsor outreach and team building' },
      { status: 'Later', text: 'Robot design, build and testing' },
      { status: 'Goal', text: 'Qualifiers and WRO 2027' },
    ],
  },
  contact: {
    tag: 'Contact',
    title: "Let's talk.",
    lead: 'Write to us about sponsorship, partnerships or joining the team.',
    emailLabel: 'Email',
  },
  footer: { location: 'Oaxaca, Mexico', rights: 'All rights reserved.' },
};

export default en;
