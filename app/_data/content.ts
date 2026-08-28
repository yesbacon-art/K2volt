export const solutions = [
  {
    slug: 'residential',
    label: 'Residential',
    name: 'K2 Home',
    statement: 'Whole-home energy confidence.',
    image: '/images/k2volt-residential.png',
    alt: 'K2VOLT residential battery at a solar-powered American home',
    summary:
      'A quiet, intelligent energy-storage system designed to increase solar self-use and keep essential home loads ready through an outage.',
    applications: ['Backup power', 'Solar self-consumption', 'Time-of-use management'],
    capabilities: [
      ['Designed around the home', 'A refined, compact system architecture for everyday residential environments.'],
      ['Intelligent energy control', 'Coordinates solar, battery, home demand, and the grid around household priorities.'],
      ['Ready when the grid is not', 'Maintains dependable access to stored energy when continuity matters most.'],
    ],
  },
  {
    slug: 'commercial-industrial',
    label: 'Commercial & Industrial',
    name: 'K2 Business',
    statement: 'Energy that works as hard as your business.',
    image: '/images/k2volt-commercial.png',
    alt: 'K2VOLT commercial battery cabinets at a modern American facility',
    summary:
      'Modular storage for businesses and industrial sites seeking demand-cost control, operational resilience, and a more flexible energy strategy.',
    applications: ['Demand management', 'Operational continuity', 'On-site renewable integration'],
    capabilities: [
      ['Flexible system architecture', 'Configure storage around facility loads, operational priorities, and future expansion.'],
      ['Lower peak exposure', 'Use stored energy to reduce demand peaks and improve control over energy costs.'],
      ['Connected operations', 'Monitor energy flow, performance, and asset health through one operating layer.'],
    ],
  },
  {
    slug: 'utility-scale',
    label: 'Utility Scale',
    name: 'K2 Grid',
    statement: 'Storage infrastructure for the modern grid.',
    image: '/images/k2volt-utility.png',
    alt: 'K2VOLT utility-scale storage connected to renewable generation',
    summary:
      'Grid-ready energy storage engineered to support renewable integration, capacity requirements, and resilient power networks at scale.',
    applications: ['Renewable firming', 'Capacity support', 'Grid services'],
    capabilities: [
      ['Modular by design', 'Build from repeatable storage blocks that support phased deployment and portfolio growth.'],
      ['Grid-aware controls', 'Coordinate power, energy, availability, and operating objectives across the asset.'],
      ['Lifecycle visibility', 'Maintain a clear view of system performance from commissioning through long-term operation.'],
    ],
  },
] as const;

export const news = [
  {
    slug: 'introducing-k2volt',
    date: 'August 18, 2026',
    category: 'Company',
    title: 'Introducing K2VOLT: two decades of battery expertise, focused on energy storage',
    excerpt:
      'K2VOLT brings the battery-first engineering heritage of K2 Energy into a dedicated platform for residential, commercial, and grid-scale storage.',
    image: '/images/k2volt-utility.png',
    paragraphs: [
      'K2VOLT was created to focus proven battery experience on one of America’s most important infrastructure opportunities: storing energy where and when it is needed.',
      'As a K2 Energy brand, K2VOLT builds on experience that began with lithium iron phosphate cells and expanded through packs, modules, and custom high-performance systems. The new brand brings that foundation into connected stationary storage for homes, businesses, and the grid.',
      'The K2VOLT portfolio is organized around three application scales—residential, commercial and industrial, and utility—supported by a common approach to system intelligence, visibility, and lifecycle performance.',
    ],
  },
  {
    slug: 'battery-heritage-matters',
    date: 'July 24, 2026',
    category: 'Perspective',
    title: 'Why battery heritage matters in an energy-storage system',
    excerpt:
      'The best storage systems start with an understanding of how cells behave—not only how a finished enclosure looks on day one.',
    image: '/images/k2-energy-legacy-cell.png',
    paragraphs: [
      'Stationary energy storage is a system challenge, but every system outcome begins at the battery. Cell chemistry, thermal behavior, state estimation, pack design, and operating limits all shape real-world performance.',
      'K2 Energy’s work across cells, packs, modules, and demanding custom systems created a practical understanding of this relationship. K2VOLT carries that battery-first perspective into the architecture and operation of complete storage assets.',
      'That means treating hardware and controls as one system, designing for the actual operating environment, and maintaining visibility into the conditions that influence performance over time.',
    ],
  },
  {
    slug: 'one-platform-three-scales',
    date: 'June 12, 2026',
    category: 'Technology',
    title: 'One energy strategy, three scales of storage',
    excerpt:
      'Homes, commercial facilities, and grid assets have different operating needs—but they benefit from the same disciplined system thinking.',
    image: '/images/k2volt-commercial.png',
    paragraphs: [
      'A homeowner may prioritize backup and solar self-use. A facility may focus on demand management and continuity. A grid operator may need capacity, renewable integration, and portfolio-level availability.',
      'K2VOLT addresses those distinct requirements with purpose-built system configurations while maintaining a connected philosophy across the portfolio: modular hardware, clear operating intelligence, and a path to scale.',
      'The result is not one product stretched across every use case. It is one battery and controls foundation expressed through systems designed for the application they serve.',
    ],
  },
] as const;

export type Solution = (typeof solutions)[number];
export type NewsItem = (typeof news)[number];
