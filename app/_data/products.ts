import { productCatalog } from './content';

export type Product = (typeof productCatalog)[number];
export const productFamilies = [
  { category: 'Residential storage', label: 'Home & portable', solution: 'residential' },
  { category: 'Commercial & industrial', label: 'Commercial & industrial', solution: 'commercial-industrial' },
  { category: 'Utility-scale storage', label: 'Utility storage', solution: 'utility-scale' },
  { category: 'EV charging', label: 'EV charging', solution: 'ev-charging' },
  { category: 'AIDC power', label: 'Energy intelligence', solution: 'aidc-power' },
] as const;

const configurations: Record<Product['slug'], { energy?: string; power?: string; format: string; extra?: [string, string] }> = {
  'home-1': { energy: '1.0 kWh', format: 'Portable power station', extra: ['Battery chemistry', 'LiFePO₄'] },
  'home-2': { energy: '2.0 kWh', format: 'Portable home backup' },
  'home-3': { energy: '3.0 kWh', format: 'Portable home backup' },
  'home-5': { energy: '5.12 kWh', format: 'Modular home battery' },
  'home-16': { energy: '16 kWh', format: 'Scalable home storage' },
  'business-112': { energy: '112.53 kWh', power: '50 kW', format: 'C&I storage cabinet' },
  'business-261': { energy: '261 kWh', power: '125 kW', format: 'C&I storage cabinet' },
  'business-522': { energy: '522 kWh', power: '250 kW', format: 'C&I storage cabinet' },
  'grid-5': { energy: '5.016 MWh', format: 'Containerized BESS', extra: ['Cooling architecture', 'Liquid-cooled'] },
  'charge-60': { power: '60 kW', format: 'DC charging equipment', extra: ['Connector configuration', 'Dual connector'] },
  'charge-80': { power: '80 kW', format: 'DC charging equipment', extra: ['Connector configuration', 'Dual connector'] },
  'charge-120': { power: '120 kW', format: 'DC charging equipment', extra: ['Connector configuration', 'Dual connector'] },
  'energy-os': { format: 'Energy management & control software' },
};

const familyDescriptions = {
  'Residential storage': {
    description: 'Explore portable backup and home-battery formats, then define the right configuration around your household loads and installation.',
    applications: ['Household backup planning', 'Solar-storage system planning', 'Portable power needs'],
    requirements: ['Essential loads and expected backup duration', 'Solar inverter and electrical-system compatibility', 'Indoor or outdoor installation requirements'],
  },
  'Commercial & industrial': {
    description: 'Cabinet-format storage for commercial and industrial energy projects. Match the listed power and energy configuration to your facility’s load profile.',
    applications: ['Peak-demand management', 'On-site solar integration', 'Facility resilience planning'],
    requirements: ['Interval load data and electricity tariffs', 'Site interconnection and operating priorities', 'Space, access, fire-safety and commissioning requirements'],
  },
  'Utility-scale storage': {
    description: 'A liquid-cooled storage block for larger energy projects. System integration, usable energy and site requirements are defined during project engineering.',
    applications: ['Renewable-energy integration', 'Capacity and dispatch planning', 'Multi-block storage projects'],
    requirements: ['Required plant power and discharge duration', 'Grid interconnection and dispatch requirements', 'Civil works, safety design and lifecycle service scope'],
  },
  'EV charging': {
    description: 'Dual-connector DC charging equipment for site-based charging projects. Connector standards and electrical integration need to be confirmed for the destination market.',
    applications: ['Commercial charging locations', 'Fleet charging planning', 'Storage-integrated charging projects'],
    requirements: ['Vehicle connector standards and charging demand', 'Available electrical capacity and tariff structure', 'Site layout, accessibility and network requirements'],
  },
  'AIDC power': {
    description: 'An energy-control software layer for coordinating assets and operating visibility. This is not a standalone battery, UPS or complete data-center power module.',
    applications: ['Energy-asset visibility', 'Site operating coordination', 'AI infrastructure energy planning'],
    requirements: ['Asset interfaces and available telemetry', 'Operating objectives and control permissions', 'Cybersecurity, network and integration requirements'],
  },
};

export function getProductDetails(product: Product) {
  const configuration = configurations[product.slug];
  const family = productFamilies.find((item) => item.category === product.category)!;
  const rows: [string, string][] = [['Product', product.name], ['Product family', product.category], ['Format', configuration.format]];
  if (configuration.energy) rows.push(['Listed energy capacity', configuration.energy]);
  if (configuration.power) rows.push(['Listed power', configuration.power]);
  if (configuration.extra) rows.push(configuration.extra);
  return { ...familyDescriptions[product.category], ...configuration, rows, solution: family.solution };
}
