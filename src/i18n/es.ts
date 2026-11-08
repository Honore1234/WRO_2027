import { team } from '../config';

const es = {
  meta: {
    title: `${team.name} — Equipo de robótica de México | WRO 2027`,
    description: `${team.name} es un equipo de robótica de México, rumbo a la World Robot Olympiad 2027.`,
    ogLocale: 'es_MX',
  },
  nav: {
    links: [
      { page: '', label: 'Inicio' },
      { page: 'equipo', label: 'Equipo' },
      { page: 'robots', label: 'Robots' },
      { page: 'patrocinio', label: 'Patrocinio' },
      { page: 'contacto', label: 'Contacto' },
    ],
    switchLabel: 'Idioma',
  },
  hero: {
    tag: 'WRO 2027 / México',
    titleLines: ['Construimos', 'el camino.'],
    lead: 'Somos un equipo de robótica de México. Diseñamos, programamos y competimos con robots propios contra equipos de todo el mundo.',
    primaryCta: 'Conoce al equipo',
    secondaryCta: 'Patrocínanos',
    about: [
      { label: 'Quiénes somos', text: 'Tres estudiantes de robótica y su coach, con una meta: llevar el nombre de México a la World Robot Olympiad 2027.' },
      { label: 'Lo que hacemos', text: 'Diseñamos, programamos y probamos robots autónomos, y competimos a nivel internacional.' },
      { label: 'Nuestro robot', text: 'Visión con MaixCam, control con SPIKE Prime y navegación PID, todo desarrollado por nosotros.' },
    ],
  },
  tiles: [
    { page: 'equipo', title: 'El equipo', text: 'Tres integrantes, tres historias de competencia.' },
    { page: 'robots', title: 'Robots', text: 'Cómo diseñamos y programamos lo que construimos.' },
    { page: 'patrocinio', title: 'Patrocinio', text: 'Súmate y viaja con nosotros a WRO 2027.' },
    { page: 'contacto', title: 'Contacto', text: 'Escríbenos para alianzas o para sumarte.' },
  ],
  stats: [
    { value: '4', label: 'Destinos internacionales' },
    { value: '3 + 1', label: 'Integrantes + coach' },
    { value: 'Top 10', label: 'Mundial · RoboCup' },
    { value: 'Top 41', label: 'Mundial · WRO Singapur' },
  ],
  cta: { title: 'Compite con nosotros en WRO 2027.', text: 'Buscamos aliados para llevar a México al escenario mundial.', button: 'Quiero patrocinar' },
  team: {
    tag: 'El equipo',
    title: 'Tres integrantes. Un camino.',
    lead: 'Cada uno ya ha competido fuera de México. Estas son sus historias.',
    people: [
      { name: 'Honoré', role: 'Fundador · Programación y visión', bio: 'Fundó el equipo y se encarga de la programación y la visión del robot: MaixCam, ESP32 y SPIKE Prime. Ha competido en WRO Singapur, RoboCup y el UN AI for Good Youth Challenge.', place: 'Singapur', achievements: ['Top 41 mundial · WRO Singapur', 'Top 10 mundial · RoboCup', 'UN AI for Good Youth Challenge'] },
      { name: 'Santi', role: 'Rol por confirmar', bio: 'Descripción por escribir: quién es, qué hace en el equipo y qué lo apasiona de la robótica.', place: 'Turquía', achievements: ['Competencia internacional en Turquía', 'Logros por confirmar'] },
      { name: 'Andrés y Jesús (coach)', role: 'Rol por confirmar', bio: 'Descripción por escribir: quién es, qué hace en el equipo y qué lo apasiona de la robótica.', place: 'Singapur', achievements: ['Competencia internacional en Singapur', 'Logros por confirmar'] },
    ],
  },
  robots: {
    tag: 'Robots',
    title: 'Lo que construimos.',
    lead: 'Cada robot es un proyecto completo: diseño, código, pruebas y resultados.',
    gallery: ['Robot 1', 'Robot 2', 'Robot 3', 'Robot 4'],
    items: [
      { name: 'Robot WRO 2027', status: 'En desarrollo', text: 'Nuestro robot para la temporada 2027, diseñado desde cero.', points: ['Visión: MaixCam detecta colores y objetos', 'Comunicación: puente UART con ESP32', 'Control: hub SPIKE Prime con PUPRemote', 'Navegación: control PID para giros y línea'] },
      { name: 'Robots anteriores', status: 'Archivo', text: 'Aquí documentaremos los robots con los que ya competimos: diseño, fotos y resultados.', points: ['Fotos y detalles próximamente'] },
    ],
  },
  sponsors: {
    tag: 'Patrocinio',
    title: 'Apoya a un equipo de México que compite en el mundo.',
    lead: 'Tu marca viaja con nosotros: en el robot, en el torneo y en nuestro contenido. También aceptamos apoyo en especie: piezas, sensores o impresión 3D.',
    tiers: [
      { name: 'Bronce', price: '$3,000 MXN', perks: ['Logo en este sitio', 'Mención en redes', 'Reporte del torneo'] },
      { name: 'Plata', price: '$5,000 MXN', perks: ['Todo lo de Bronce', 'Logo en playeras y banner', 'Video dedicado'] },
      { name: 'Oro', price: '$10,000 MXN', perks: ['Todo lo de Plata', 'Logo en el robot', 'Demostración en tu empresa o evento'] },
    ],
    cta: 'Quiero patrocinar',
    roadmapTag: 'Ruta',
    roadmapTitle: 'Camino a WRO 2027',
    steps: [
      { status: 'En curso', text: 'Identidad, sitio web y portafolio de patrocinio' },
      { status: 'Siguiente', text: 'Búsqueda de patrocinadores' },
      { status: 'Después', text: 'Diseño, construcción y pruebas del robot' },
      { status: 'Meta', text: 'Clasificatorios y WRO 2027' },
    ],
  },
  contact: {
    tag: 'Contacto',
    title: 'Hablemos.',
    lead: 'Escríbenos para patrocinio, alianzas o para sumarte al equipo.',
  },
  story: {
    tag: 'Nuestra historia',
    title: 'Un equipo que construye su propio camino.',
    text: 'Competir en robótica desde México no tiene un camino hecho. Lo estamos construyendo: entrenando, viajando, probando y volviendo a intentar. Cada competencia nos acerca a WRO 2027.',
    label: 'Foto del equipo',
  },
  journey: {
    tag: 'Recorrido',
    title: 'Donde ya hemos competido.',
    items: [
      { place: 'Singapur', text: 'WRO · Top 41 mundial' },
      { place: 'Turquía', text: 'Competencia internacional' },
      { place: 'Brasil', text: 'RoboCup · Competencia mundial' },
      { place: 'Estonia', text: 'Robotex · Competencia internacional' },
      { place: 'WRO 2027', text: 'Nuestra próxima meta' },
    ],
  },
  partners: { tag: 'Aliados', title: 'Quienes nos acompañan.', slot: 'Tu logo aquí', text: 'Sé el primer patrocinador del equipo.' },
  together: { tag: 'Juntos', title: 'El equipo completo.', label: 'Foto del equipo' },
  process: {
    tag: 'Cómo trabajamos',
    title: 'De la idea a la mesa de competencia.',
    steps: [
      { title: 'Diseñar', text: 'Definimos la estrategia y el diseño mecánico del robot.' },
      { title: 'Programar', text: 'Escribimos el código de visión, control y navegación.' },
      { title: 'Probar', text: 'Repetimos las pruebas hasta que el robot sea consistente.' },
      { title: 'Competir', text: 'Llevamos lo aprendido a la mesa frente a equipos de todo el mundo.' },
    ],
  },
  why: {
    tag: 'Por qué patrocinar',
    title: 'Una inversión en talento joven.',
    items: [
      { title: 'Visibilidad internacional', text: 'Tu marca en torneos mundiales, en el robot y en nuestro contenido.' },
      { title: 'Talento mexicano', text: 'Apoyas a estudiantes mexicanos que compiten con los mejores del mundo.' },
      { title: 'Historias reales', text: 'Videos y reportes de cada paso del camino, con resultados verificables.' },
    ],
  },
  coach: { tag: 'Coach', name: 'Jesús', role: 'Asesor del equipo', bio: 'Descripción por escribir: quién es el coach, su experiencia y cómo acompaña al equipo.', label: 'Coach' },
  footer: { location: 'México', rights: 'Todos los derechos reservados.' },
};

export default es;
export type Dict = typeof es;
