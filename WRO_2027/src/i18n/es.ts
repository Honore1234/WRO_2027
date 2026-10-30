import { team } from '../config';

const es = {
  meta: {
    title: `${team.name} — Equipo de robótica de Oaxaca | WRO 2027`,
    description: `${team.name} es un equipo de robótica de Oaxaca, México, rumbo a la World Robot Olympiad 2027. Top 10 mundial en RoboCup y Top 41 mundial en WRO Singapur.`,
    ogLocale: 'es_MX',
  },
  nav: {
    links: [
      { href: '#results', label: 'Logros' },
      { href: '#robot', label: 'Ingeniería' },
      { href: '#team', label: 'Equipo' },
      { href: '#sponsors', label: 'Patrocinio' },
      { href: '#contact', label: 'Contacto' },
    ],
    cta: 'Patrocínanos',
    switchLabel: 'Idioma',
  },
  hero: {
    tag: 'WRO 2027 / Oaxaca, México',
    titleLines: ['Construimos', 'el camino.'],
    lead: 'Equipo de robótica de Oaxaca rumbo a la World Robot Olympiad 2027. Ingeniería real, resultados mundiales y una meta clara: competir de igual a igual contra el mundo.',
    primaryCta: 'Patrocínanos',
    secondaryCta: 'Ver logros',
    hud: [
      { label: 'TEMPORADA', value: 'WRO 2027' },
      { label: 'BASE', value: 'OAXACA · MX' },
      { label: 'MEJOR RESULTADO', value: 'TOP 10 · ROBOCUP' },
      { label: 'ESTADO', value: 'EN FORMACIÓN' },
    ],
  },
  results: {
    tag: 'Resultados',
    title: 'Ya competimos contra el mundo.',
    items: [
      { value: 'Top 10', label: 'Mundial', text: 'RoboCup' },
      { value: 'Top 41', label: 'Mundial', text: 'WRO Singapur' },
      { value: 'AI for Good', label: 'Participación', text: 'UN Youth Challenge' },
    ],
  },
  robot: {
    tag: 'Ingeniería',
    title: 'Un robot diseñado, no armado de un kit.',
    lead: 'Visión, comunicación y control desarrollados por nosotros, probados una y otra vez en mesa de competencia.',
    stack: [
      { label: 'Visión', text: 'Cámara MaixCam para detectar colores y objetos en tiempo real.' },
      { label: 'Comunicación', text: 'Puente UART con ESP32 entre la visión y el controlador.' },
      { label: 'Control', text: 'Hub SPIKE Prime conectado mediante PUPRemote.' },
      { label: 'Navegación', text: 'Control PID para giros precisos y seguimiento de línea.' },
    ],
  },
  team: {
    tag: 'El equipo',
    title: 'Un equipo en formación.',
    lead: 'Estamos armando la alineación para WRO 2027. Si te apasiona construir, programar y competir, este es el momento de sumarte.',
    members: [
      { name: 'Honoré', role: 'Fundador · Ingeniería y programación' },
      { name: 'Tu lugar aquí', role: 'Integrante · Por confirmar' },
      { name: 'Asesor / coach', role: 'Por confirmar' },
    ],
  },
  sponsors: {
    tag: 'Patrocinio',
    title: 'Apoya a un equipo de Oaxaca que compite en el mundo.',
    lead: 'Tu marca viaja con nosotros: en el robot, en el torneo y en nuestro contenido. También aceptamos apoyo en especie: piezas, sensores o impresión 3D.',
    amountLabel: 'Aportación',
    amount: 'Por definir',
    tiers: [
      { name: 'Bronce', perks: ['Logo en este sitio', 'Mención en redes', 'Reporte del torneo'] },
      { name: 'Plata', perks: ['Todo lo de Bronce', 'Logo en playeras y banner', 'Video dedicado'] },
      { name: 'Oro', perks: ['Todo lo de Plata', 'Logo en el robot', 'Demostración en tu empresa o evento'] },
    ],
    cta: 'Quiero patrocinar',
  },
  roadmap: {
    tag: 'Ruta',
    title: 'Camino a WRO 2027',
    steps: [
      { status: 'En curso', text: 'Identidad, sitio web y portafolio de patrocinio' },
      { status: 'Siguiente', text: 'Búsqueda de patrocinadores y armado del equipo' },
      { status: 'Después', text: 'Diseño, construcción y pruebas del robot' },
      { status: 'Meta', text: 'Clasificatorios y WRO 2027' },
    ],
  },
  contact: {
    tag: 'Contacto',
    title: 'Hablemos.',
    lead: 'Escríbenos para patrocinio, alianzas o para sumarte al equipo.',
    emailLabel: 'Correo',
  },
  footer: { location: 'Oaxaca, México', rights: 'Todos los derechos reservados.' },
};

export default es;
export type Dict = typeof es;
