import { team } from '../config';
import type { Dict } from './es';

const en: Dict = {
  meta: {
    title: `${team.name} — Robotics team from Mexico | WRO 2027`,
    description: `${team.name} is a robotics team from Mexico, heading to the World Robot Olympiad 2027.`,
    ogLocale: 'en_US',
  },
  nav: {
    links: [
      { page: '', label: 'Home' },
      { page: 'equipo', label: 'Team' },
      { page: 'robots', label: 'Robots' },
      { page: 'patrocinio', label: 'Sponsors' },
      { page: 'contacto', label: 'Contact' },
    ],
    switchLabel: 'Language',
  },
  hero: {
    tag: 'WRO 2027 / Mexico',
    titleLines: ['We build', 'the path.'],
    lead: 'We are a robotics team from Mexico. We design, program and compete with our own robots against teams from around the world.',
    primaryCta: 'Meet the team',
    secondaryCta: 'Sponsor us',
    about: [
      { label: 'Who we are', text: 'Three robotics students and their coach, with one goal: take the name of Mexico to the World Robot Olympiad 2027.' },
      { label: 'What we do', text: 'We design, program and test autonomous robots, and compete internationally.' },
      { label: 'Our robot', text: 'Vision with MaixCam, control with SPIKE Prime and PID navigation, all developed by us.' },
    ],
  },
  tiles: [
    { page: 'equipo', title: 'The team', text: 'Three members, three competition stories.' },
    { page: 'robots', title: 'Robots', text: 'How we design and program what we build.' },
    { page: 'patrocinio', title: 'Sponsors', text: 'Join us on the road to WRO 2027.' },
    { page: 'contacto', title: 'Contact', text: 'Write to us about partnerships or joining.' },
  ],
  stats: [
    { value: '4', label: 'International destinations' },
    { value: '3 + 1', label: 'Members + coach' },
    { value: 'Top 10', label: 'Worldwide · RoboCup' },
    { value: 'Top 41', label: 'Worldwide · WRO Singapore' },
  ],
  cta: { title: 'Compete with us at WRO 2027.', text: 'We are looking for partners to take Mexico to the world stage.', button: 'I want to sponsor' },
  team: {
    tag: 'The team',
    title: 'Three members. One path.',
    lead: 'Each of us has already competed outside Mexico. These are our stories.',
    people: [
      { name: 'Honoré', role: 'Founder · Programming and vision', bio: 'Founded the team and leads the robot programming and vision: MaixCam, ESP32 and SPIKE Prime. Has competed at WRO Singapore, RoboCup and the UN AI for Good Youth Challenge.', place: 'Singapore', achievements: ['Top 41 worldwide · WRO Singapore', 'Top 10 worldwide · RoboCup', 'UN AI for Good Youth Challenge'] },
      { name: 'Santi', role: 'Role to be confirmed', bio: 'Description to be written: who they are, what they do on the team and what they love about robotics.', place: 'Türkiye', achievements: ['International competition in Türkiye', 'Achievements to be confirmed'] },
      { name: 'Andrés', role: 'Role to be confirmed', bio: 'Description to be written: who they are, what they do on the team and what they love about robotics.', place: 'Singapore', achievements: ['International competition in Singapore', 'Achievements to be confirmed'] },
    ],
  },
  robots: {
    tag: 'Robots',
    title: 'What we build.',
    lead: 'Every robot is a complete project: design, code, testing and results.',
    gallery: ['Robot 1', 'Robot 2', 'Robot 3', 'Robot 4'],
    items: [
      { name: 'WRO 2027 Robot', status: 'In development', text: 'Our robot for the 2027 season, designed from scratch.', points: ['Vision: MaixCam detects colors and objects', 'Communication: UART bridge with ESP32', 'Control: SPIKE Prime hub with PUPRemote', 'Navigation: PID control for turns and lines'] },
      { name: 'Previous robots', status: 'Archive', text: 'Here we will document the robots we have already competed with: design, photos and results.', points: ['Photos and details coming soon'] },
    ],
  },
  sponsors: {
    tag: 'Sponsorship',
    title: 'Back a team from Mexico competing on the world stage.',
    lead: 'Your brand travels with us: on the robot, at the tournament and in our content. We also welcome in-kind support: parts, sensors or 3D printing.',
    amountLabel: 'Contribution',
    amount: 'To be defined',
    tiers: [
      { name: 'Bronze', perks: ['Logo on this site', 'Social media mention', 'Tournament report'] },
      { name: 'Silver', perks: ['Everything in Bronze', 'Logo on shirts and banner', 'Dedicated video'] },
      { name: 'Gold', perks: ['Everything in Silver', 'Logo on the robot', 'Demo at your company or event'] },
    ],
    cta: 'I want to sponsor',
    roadmapTag: 'Roadmap',
    roadmapTitle: 'Road to WRO 2027',
    steps: [
      { status: 'In progress', text: 'Identity, website and sponsorship portfolio' },
      { status: 'Next', text: 'Sponsor outreach' },
      { status: 'Later', text: 'Robot design, build and testing' },
      { status: 'Goal', text: 'Qualifiers and WRO 2027' },
    ],
  },
  contact: {
    tag: 'Contact',
    title: "Let's talk.",
    lead: 'Write to us about sponsorship, partnerships or joining the team.',
  },
  story: {
    tag: 'Our story',
    title: 'A team building its own path.',
    text: 'Competing in robotics from Mexico has no ready-made path. We are building it: training, traveling, testing and trying again. Every competition brings us closer to WRO 2027.',
    label: 'Team photo',
  },
  journey: {
    tag: 'Journey',
    title: 'Where we have already competed.',
    items: [
      { place: 'Singapore', text: 'WRO · Top 41 worldwide' },
      { place: 'Türkiye', text: 'International competition' },
      { place: 'Brazil', text: 'RoboCup · World competition' },
      { place: 'Estonia', text: 'Robotex · International competition' },
      { place: 'WRO 2027', text: 'Our next goal' },
    ],
  },
  partners: { tag: 'Partners', title: 'Who stands with us.', slot: 'Your logo here', text: 'Be the first sponsor of the team.' },
  together: { tag: 'Together', title: 'The whole team.', label: 'Team photo' },
  process: {
    tag: 'How we work',
    title: 'From idea to the competition table.',
    steps: [
      { title: 'Design', text: 'We define the strategy and the mechanical design of the robot.' },
      { title: 'Program', text: 'We write the vision, control and navigation code.' },
      { title: 'Test', text: 'We repeat the tests until the robot is consistent.' },
      { title: 'Compete', text: 'We take what we learned to the table against teams from around the world.' },
    ],
  },
  why: {
    tag: 'Why sponsor',
    title: 'An investment in young talent.',
    items: [
      { title: 'International visibility', text: 'Your brand at world tournaments, on the robot and in our content.' },
      { title: 'Mexican talent', text: 'You back Mexican students competing with the best in the world.' },
      { title: 'Real stories', text: 'Videos and reports of every step of the way, with verifiable results.' },
    ],
  },
  coach: { tag: 'Coach', name: 'To be confirmed', role: 'Team advisor', bio: 'Description to be written: who the coach is, their experience and how they support the team.', label: 'Coach' },
  footer: { location: 'Mexico', rights: 'All rights reserved.' },
};

export default en;
