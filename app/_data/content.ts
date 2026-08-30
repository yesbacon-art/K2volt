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
  {
    slug: 'ev-charging',
    label: 'EV Charging',
    name: 'K2 Charge',
    statement: 'Fast charging. Smarter infrastructure.',
    image: '/images/k2volt-ev-charging.png',
    alt: 'K2VOLT battery-integrated EV fast-charging infrastructure at an American commercial site',
    summary:
      'Battery-integrated charging infrastructure designed to support high-power EV charging, manage site demand, and create a more flexible path to electrification.',
    applications: ['Fleet and public charging', 'Battery-buffered fast charging', 'Solar and storage integration'],
    capabilities: [
      ['Charging and storage together', 'Coordinate charging equipment, battery storage, on-site generation, and the grid as one energy system.'],
      ['Smarter site demand', 'Use stored energy to reduce charging peaks and better align infrastructure with available electrical capacity.'],
      ['Built to expand', 'Deploy a modular platform that can grow with vehicle adoption, charging demand, and the needs of the site.'],
    ],
  },
  {
    slug: 'aidc-power',
    label: 'AIDC Power Modules',
    name: 'K2 AIDC',
    statement: 'Resilient power for intelligence at scale.',
    image: '/images/k2volt-aidc-power.png',
    alt: 'K2VOLT modular battery-backed power infrastructure for an American AI data center',
    summary:
      'Modular battery-backed power infrastructure for AI data centers, designed around high-density loads, operational continuity, and clear energy visibility.',
    applications: ['AI data-center continuity', 'High-density load support', 'On-site energy optimization'],
    capabilities: [
      ['Mission-critical architecture', 'Shape battery, power-conversion, and control layers around the continuity requirements of AI infrastructure.'],
      ['Modular power blocks', 'Scale through repeatable equipment modules that support phased deployment and evolving compute demand.'],
      ['Energy intelligence', 'Coordinate stored energy, facility demand, and available grid capacity through a connected operating layer.'],
    ],
  },
] as const;

export const news = [
  {
    slug: 'introducing-k2volt',
    date: 'August 18, 2026',
    category: 'Company',
    region: 'United States',
    title: 'Introducing K2VOLT: two decades of battery expertise, focused on energy storage',
    excerpt:
      'K2VOLT brings the battery-first engineering heritage of K2 Energy into a dedicated platform for residential, commercial, and grid-scale storage.',
    image: '/images/k2volt-utility.png',
    paragraphs: [
      'K2VOLT was created to focus proven battery experience on one of America’s most important infrastructure opportunities: storing energy where and when it is needed.',
      'As a K2 Energy brand, K2VOLT builds on experience that began with lithium iron phosphate cells and expanded through packs, modules, and custom high-performance systems. The new brand brings that foundation into connected stationary storage for homes, businesses, and the grid.',
      'The K2VOLT portfolio now spans five applications—residential, commercial and industrial, utility, EV charging, and AIDC power—supported by a common approach to system intelligence, visibility, and lifecycle performance.',
    ],
    source: null,
  },
  {
    slug: 'battery-heritage-matters',
    date: 'July 24, 2026',
    category: 'Perspective',
    region: 'United States',
    title: 'Why battery heritage matters in an energy-storage system',
    excerpt:
      'The best storage systems start with an understanding of how cells behave—not only how a finished enclosure looks on day one.',
    image: '/images/k2-energy-legacy-cell.png',
    paragraphs: [
      'Stationary energy storage is a system challenge, but every system outcome begins at the battery. Cell chemistry, thermal behavior, state estimation, pack design, and operating limits all shape real-world performance.',
      'K2 Energy’s work across cells, packs, modules, and demanding custom systems created a practical understanding of this relationship. K2VOLT carries that battery-first perspective into the architecture and operation of complete storage assets.',
      'That means treating hardware and controls as one system, designing for the actual operating environment, and maintaining visibility into the conditions that influence performance over time.',
    ],
    source: null,
  },
  {
    slug: 'one-platform-three-scales',
    date: 'June 12, 2026',
    category: 'Technology',
    region: 'United States',
    title: 'One energy strategy, three scales of storage',
    excerpt:
      'Homes, commercial facilities, and grid assets have different operating needs—but they benefit from the same disciplined system thinking.',
    image: '/images/k2volt-commercial.png',
    paragraphs: [
      'A homeowner may prioritize backup and solar self-use. A facility may focus on demand management and continuity. A grid operator may need capacity, renewable integration, and portfolio-level availability.',
      'K2VOLT addresses those distinct requirements with purpose-built system configurations while maintaining a connected philosophy across the portfolio: modular hardware, clear operating intelligence, and a path to scale.',
      'The result is not one product stretched across every use case. It is one battery and controls foundation expressed through systems designed for the application they serve.',
    ],
    source: null,
  },
  {
    slug: 'australia-pi-lv-cec-listing',
    date: 'July 15, 2025',
    category: 'Archive',
    region: 'Australia',
    title: 'Australia: Pi LV home-battery series added to the CEC approved list',
    excerpt:
      'K2 Battery Australia reported a second approved product family for the local market, strengthening its residential and off-grid storage offering.',
    image: '/images/k2volt-residential.png',
    paragraphs: [
      'K2 Battery Australia announced that the Pytes Pi LV series had been listed under the Clean Energy Council Battery Assurance Program in July 2025.',
      'The listing covered modular configurations from 5.12 kWh through 30.72 kWh and followed the earlier recognition of the E-BOX 48100R platform.',
      'For the Australian chapter of the K2 story, the milestone reflects a move beyond portable batteries into independently assessed residential and off-grid energy-storage systems.',
    ],
    source: {
      label: 'K2 Battery Australia — original announcement',
      url: 'https://k2battery.com.au/k2-news/pytes-pi-lv-series-now-listed-on-clean-energy-councils-approved-battery-list/',
    },
  },
  {
    slug: 'australia-rv-market-2025',
    date: 'February 27, 2025',
    category: 'Archive',
    region: 'Australia',
    title: 'Australia: K2 battery systems move further into the RV market',
    excerpt:
      'A 12V 100Ah K2 battery powered a new caravan hot-water system at the 2025 Victorian Caravan and Camping Supershow.',
    image: '/images/k2-energy-legacy-cell.png',
    paragraphs: [
      'At the 2025 Victorian Caravan and Camping Supershow, K2 Battery Australia displayed its 12V 100Ah LFP platform with Everything Caravans.',
      'The battery powered the ECP HotBox diesel hot-water system and highlighted built-in status display and Bluetooth communications for mobile-power applications.',
      'The event marked a practical step in K2’s Australian expansion across caravans, RVs, off-grid living, and distributed energy products.',
    ],
    source: {
      label: 'K2 Battery Australia — event report',
      url: 'https://k2battery.com.au/k2-news/k2-battery-powering-everything-caravans/',
    },
  },
  {
    slug: 'k2-arrives-australia-2022',
    date: '2022',
    category: 'Development',
    region: 'Australia',
    title: 'A new K2 chapter begins in Australia',
    excerpt:
      'K2’s Australian business traces its market entry to 2022, initially connecting the American battery heritage with portable and outdoor power products.',
    image: '/images/k2volt-residential.png',
    paragraphs: [
      'K2 Energy Australia’s official store records 2022 as the year the brand entered the Australian market.',
      'The initial offering focused on reliable portable power and tools for camping and travel, while the broader K2 Battery business developed LFP solutions for caravans, marine use, emergency power, and off-grid living.',
      'The Australian operation now describes a wider product and partner ecosystem spanning batteries, power stations, residential solar storage, technical support, installers, and resellers.',
    ],
    source: {
      label: 'K2 Energy Australia — company history',
      url: 'https://k2energystore.com.au/',
    },
  },
  {
    slug: 'us-navy-phase-two-cell-program-2017',
    date: '2017',
    category: 'R&D archive',
    region: 'United States',
    title: 'U.S. Navy Phase II program advances high-power large-format cells',
    excerpt:
      'A federal Phase II award extended K2 Energy’s work on high-power LFP cell designs and thermal management for demanding pulse-power use.',
    image: '/images/k2-energy-legacy-cell.png',
    paragraphs: [
      'The U.S. Small Business Innovation Research portfolio records a 2017 Navy Phase II award to K2 Energy Solutions for enhanced large-format cell designs.',
      'The program focused on a high-energy-density, high-power cylindrical cell using lithium iron phosphate chemistry with internal and external thermal-management approaches.',
      'It followed K2’s earlier Army, Navy, and Defense Logistics Agency projects, documenting a sustained U.S. research path from commercial cells to specialized high-power systems.',
    ],
    source: {
      label: 'U.S. SBIR — K2 Energy Solutions portfolio',
      url: 'https://www.sbir.gov/portfolio/207156',
    },
  },
  {
    slug: 'navsea-energy-storage-program-2015',
    date: 'January 5, 2015',
    category: 'Program archive',
    region: 'United States',
    title: 'K2 Energy selected for a high-power NAVSEA storage system',
    excerpt:
      'K2 Energy announced its role as the sole-source battery provider for an intermediate energy-storage system supporting the U.S. Navy railgun program.',
    image: '/images/k2volt-utility.png',
    paragraphs: [
      'In January 2015, K2 Energy Solutions announced receipt of the first order under a NAVSEA contract for an intermediate energy-storage battery system.',
      'The published contract framework covered design, engineering, and support for the storage system used to power capacitor-bank modules in the Navy’s electromagnetic railgun development program.',
      'The announcement connected K2’s Henderson engineering and manufacturing base with one of the period’s most demanding high-discharge energy-storage applications.',
    ],
    source: {
      label: 'K2 Energy Solutions release via PR Newswire',
      url: 'https://www.prnewswire.com/news-releases/k2-energy-solutions-to-supply-a-fully-self-contained-energy-storage-system-for-the-naval-sea-systems-navsea-electromagnetic-rail-gun-300015255.html',
    },
  },
  {
    slug: 'navy-modular-energy-storage-2009',
    date: 'July 16, 2009',
    category: 'R&D archive',
    region: 'United States',
    title: 'Early U.S. Navy award develops modular lithium-ion storage',
    excerpt:
      'A 2009 Navy SBIR project asked K2 Energy to design and fabricate a modular battery system based on its LFP technology and vehicle-system experience.',
    image: '/images/k2-energy-legacy-cell.png',
    paragraphs: [
      'The federal SBIR record documents a 2009 Phase I Navy award to K2 Energy Solutions for advanced lithium-ion modular energy-storage batteries.',
      'The project drew on modular systems the company had already developed for high-performance electric vehicles and applied its lithium iron phosphate platform to naval energy-storage requirements.',
      'Together with a 2008 Army award, this marks the beginning of a documented U.S. government R&D track that continued through later manufacturing and large-format cell programs.',
    ],
    source: {
      label: 'U.S. SBIR — 2009 Navy award record',
      url: 'https://www.sbir.gov/awards/63946',
    },
  },
] as const;

export type Solution = (typeof solutions)[number];
export type NewsItem = (typeof news)[number];
