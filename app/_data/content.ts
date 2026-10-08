export const solutions = [
  {
    slug: 'residential',
    label: 'Residential',
    name: 'K2 Home',
    statement: 'Whole-home energy confidence.',
    image: '/images/k2volt-residential.webp',
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
    image: '/images/k2volt-commercial.webp',
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
    image: '/images/k2volt-utility.webp',
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
    image: '/images/k2volt-ev-charging.webp',
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
    image: '/images/k2volt-aidc-power.webp',
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

export const productCatalog = [
  { slug: 'home-1', category: 'Residential storage', name: 'K2 Home 1.0', spec: '1.0 kWh portable LiFePO₄ power station', image: '/images/refu-products/volta-1.webp' },
  { slug: 'home-2', category: 'Residential storage', name: 'K2 Home 2.0', spec: '2.0 kWh portable home backup', image: '/images/refu-products/portable-2kwh.webp' },
  { slug: 'home-3', category: 'Residential storage', name: 'K2 Home 3.0', spec: '3.0 kWh portable home backup', image: '/images/refu-products/home-3.webp' },
  { slug: 'home-5', category: 'Residential storage', name: 'K2 Home 5', spec: '5.12 kWh modular home battery', image: '/images/refu-products/home-5.webp' },
  { slug: 'home-16', category: 'Residential storage', name: 'K2 Home 16', spec: '16 kWh scalable home storage', image: '/images/refu-products/home-16.webp' },
  { slug: 'business-112', category: 'Commercial & industrial', name: 'K2 Business 112', spec: '50 kW / 112.53 kWh C&I cabinet', image: '/images/refu-products/pro-112.webp' },
  { slug: 'business-261', category: 'Commercial & industrial', name: 'K2 Business 261', spec: '125 kW / 261 kWh C&I cabinet', image: '/images/refu-products/pro-261.webp' },
  { slug: 'business-522', category: 'Commercial & industrial', name: 'K2 Business 522', spec: '250 kW / 522 kWh C&I cabinet', image: '/images/refu-products/pro-522.webp' },
  { slug: 'grid-5', category: 'Utility-scale storage', name: 'K2 Grid 5', spec: '5.016 MWh liquid-cooled BESS', image: '/images/refu-products/grid-5.webp' },
  { slug: 'charge-60', category: 'EV charging', name: 'K2 Charge 60', spec: '60 kW dual-connector DC charger', image: '/images/refu-products/charger-60.webp' },
  { slug: 'charge-80', category: 'EV charging', name: 'K2 Charge 80', spec: '80 kW dual-connector DC charger', image: '/images/refu-products/charger-80.webp' },
  { slug: 'charge-120', category: 'EV charging', name: 'K2 Charge 120', spec: '120 kW dual-connector DC charger', image: '/images/refu-products/charger-120.webp' },
  { slug: 'energy-os', category: 'AIDC power', name: 'K2 Energy OS', spec: 'Connected energy control layer for AI infrastructure', image: '/images/refu-products/energy-os.webp' },
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
    image: '/images/k2volt-utility.webp',
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
    image: '/images/k2-energy-legacy-cell.webp',
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
    image: '/images/k2volt-commercial.webp',
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
    title: 'Australian home-battery listing reference: review pending',
    excerpt:
      'An archived Australian product-listing reference remains available here for context while its original source and approval scope are reviewed.',
    image: '/images/k2volt-residential.webp',
    paragraphs: [
      'This reference was originally catalogued as a July 2025 Australian announcement about the Pytes Pi LV battery series. The original page could not be retrieved during the latest archive review, so its listing claims are not presented here as verified facts.',
      'Before relying on an approval claim, confirm the exact manufacturer, model, listing period, and installation conditions in the relevant Australian product register.',
      'This is a regional reference, not a K2VOLT product announcement. It does not establish approval of K2VOLT equipment or a verified corporate relationship between the Australian business and U.S. K2 Energy.',
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
    title: 'Australian RV event reference: review pending',
    excerpt:
      'A previously catalogued Australian caravan-event report is retained as a regional reference, with original-source verification pending.',
    image: '/images/k2-energy-legacy-cell.webp',
    paragraphs: [
      'The archived link relates to an Australian report associated with Everything Caravans and the 2025 Victorian Caravan and Camping Supershow. The original report is currently unavailable for review.',
      'Specific battery ratings, partner participation, and demonstration details should be checked against the original report before being used in customer materials.',
      'The entry is kept for research continuity. It is not presented as evidence of a K2VOLT event, deployment, or Australian expansion.',
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
    title: 'Australian market-entry reference: review pending',
    excerpt:
      'A 2022 market-entry reference is preserved while the Australian company history and its relationship to U.S. K2 Energy are confirmed.',
    image: '/images/k2volt-residential.webp',
    paragraphs: [
      'This entry was previously associated with a 2022 Australian market-entry account. The linked store currently opens a password page rather than an accessible company-history page.',
      'Until the underlying material is available, neither the entry date nor a corporate relationship to U.S. K2 Energy is treated as independently verified on this website.',
      'The historical URL is retained so the entry can be updated when source documents become available. It is intentionally separated from the verified U.S. chronology.',
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
    image: '/images/k2-energy-legacy-cell.webp',
    paragraphs: [
      'SBIR records a 2017 Navy Phase II award for large-format, high-power LFP cell development and thermal management.',
      'The award documents a research objective, not a completed system deployment.',
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
    image: '/images/k2volt-utility.webp',
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
    image: '/images/k2-energy-legacy-cell.webp',
    paragraphs: [
      'A Navy Phase I award began on July 16, 2009, for modular lithium-ion battery research.',
      'Its proposed system drew on K2’s high-performance electric-vehicle battery experience. This record describes research, not a current K2VOLT Navy installation.',
    ],
    source: {
      label: 'U.S. SBIR — 2009 Navy award record',
      url: 'https://www.sbir.gov/awards/63946',
    },
  },
  {
    slug: 'nevada-engineering-foundation-2010',
    date: 'April 20, 2010',
    category: 'Historical record',
    region: 'United States',
    title: 'A Nevada record connects K2’s 2006 founding with early grid-storage research',
    excerpt: 'Legislative meeting minutes preserve an early account of K2 Energy’s Henderson origins and battery-development work.',
    image: '/images/k2-energy-legacy-cell.webp',
    paragraphs: [
      'Nevada legislative minutes record a company presentation identifying K2’s founding in Henderson in 2006.',
      'The presentation described development of a 1 MWh grid-storage battery, a cell-research laboratory, and large-format cells. These were reported development activities—not verified completed installations.',
    ],
    source: { label: 'Nevada Legislature — April 20, 2010 meeting minutes', url: 'https://www.leg.state.nv.us/App/InterimCommittee/REL/Document/17343' },
  },
  {
    slug: 'army-cell-research-2008',
    date: '2008',
    category: 'R&D archive',
    region: 'United States',
    title: 'K2’s first recorded SBIR award: high-rate cell research for the Army',
    excerpt: 'The federal portfolio identifies 2008 as K2 Energy Solutions’ first SBIR award year.',
    image: '/images/k2-energy-legacy-cell.webp',
    paragraphs: ['The Army Phase I project examined high-energy-density, high-rate 18650 cells. It is an early documented research milestone, not a K2VOLT product certification.'],
    source: { label: 'U.S. SBIR — K2 Energy Solutions portfolio', url: 'https://www.sbir.gov/portfolio/207156' },
  },
  {
    slug: 'manufacturing-process-research-2014',
    date: '2014',
    category: 'R&D archive',
    region: 'United States',
    title: 'Manufacturing-process research becomes part of the K2 archive',
    excerpt: 'A 2014 Defense Logistics Agency award records research into battery-manufacturing processes.',
    image: '/images/k2-energy-legacy-cell.webp',
    paragraphs: ['A DLA Phase I project studied a manufacturing process intended to eliminate volatile organic compounds. The award records the research objective; it does not verify commercial implementation.'],
    source: { label: 'U.S. SBIR — K2 Energy Solutions portfolio', url: 'https://www.sbir.gov/portfolio/207156' },
  },
] as const;

export type Solution = (typeof solutions)[number];
export type NewsItem = (typeof news)[number];
