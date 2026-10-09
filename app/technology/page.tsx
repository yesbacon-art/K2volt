import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageHero, ProjectCTA } from '../_components/site';

const layers = [
  { number: '01', title: 'Battery systems', label: 'Energy capacity', copy: 'Define how much energy the application needs, how it will be used, and the battery operating conditions that matter at the site.', scope: ['Load profile and operating duration', 'Battery format and installation environment', 'Thermal design and operating limits'] },
  { number: '02', title: 'Power equipment', label: 'Electrical integration', copy: 'Match power-conversion and electrical equipment to the site’s loads, connection requirements, and operating objective.', scope: ['Required power and connection interfaces', 'Protection and interconnection requirements', 'Backup scope and commissioning responsibilities'] },
  { number: '03', title: 'Energy controls', label: 'Operating coordination', copy: 'Define the information, permissions, and asset interfaces needed to coordinate an energy system. Visibility and automation depend on the agreed integration.', scope: ['Available telemetry and supported asset interfaces', 'Dispatch objectives and control permissions', 'Network, cybersecurity and alarm ownership'] },
] as const;

const integration = [
  ['Site & electrical scope', 'Identify the load profile, available connection, installation environment, and operating priorities.'],
  ['Control & interface scope', 'Confirm asset compatibility, data availability, control permissions, and network responsibilities.'],
  ['Commissioning & lifecycle scope', 'Agree on testing, handover, alarm ownership, maintenance, and the support and warranty scope.'],
] as const;

export const metadata: Metadata = {
  title: 'System Architecture & Energy Controls | K2VOLT Technology',
  description: 'Explore K2VOLT’s battery, power-equipment and energy-control approach, with application-specific integration and project-planning requirements.',
};

export default function TechnologyPage() {
  return (
    <PageFrame><div className="technology-page">
      <PageHero
        eyebrow="Technology / System architecture"
        title={<>Energy is a system.<br /><em>Design it as one.</em></>}
        description="Battery capacity, power equipment and energy controls each have a role. Our approach starts by defining how those layers work together at the site."
        image="/images/visual-review/commercial.webp"
        alt="K2VOLT commercial energy storage system"
      />
      <nav className="section-shell product-section-nav" aria-label="Technology page sections"><a href="#architecture">System layers</a><a href="#energy-controls">K2 Energy OS</a><a href="#integration">Project integration</a></nav>
      <section className="page-section" id="architecture">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Three connected layers</p><h2>Capacity. Power.<br />Operating intelligence.</h2></div>
          <div><p>Begin with the application. Define energy needs, electrical requirements, and the operating scope together so the project can be configured around its actual conditions.</p><p className="technology-scope-note">An engineering approach—not a guarantee that every catalog item includes every function. Final capabilities are confirmed in the project specification.</p></div>
        </div>
        <div className="section-shell technology-layer-list">
          {layers.map(layer => <article key={layer.number}><span className="technology-layer-number">{layer.number}</span><div><p className="section-kicker">{layer.label}</p><h3>{layer.title}</h3><p>{layer.copy}</p></div><div className="technology-layer-scope"><h4>Define during project planning</h4><ul>{layer.scope.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}
        </div>
      </section>
      <section className="page-section page-section-soft" id="energy-controls">
        <div className="section-shell technology-controls-grid">
          <figure><img src="/images/refu-products/energy-os.webp" alt="Illustrative K2VOLT energy-control interface across desktop, laptop and tablet displays" width="1536" height="1024" loading="lazy" decoding="async" /><figcaption>Energy-control concept visualization · not a live dashboard or a guarantee of available features.</figcaption></figure>
          <div><p className="section-kicker">K2 Energy OS</p><h2>The operating layer.<br />Not another battery.</h2><p>The current catalog presents K2 Energy OS as energy-management and control software. Its role is to support asset visibility and operating coordination through the interfaces defined for the project.</p><p>It is not a standalone battery, UPS, or complete AIDC power module. Supported equipment, data points, control functions, and integration requirements must be confirmed separately.</p><Link className="inline-link" href="/products/energy-os">Explore K2 Energy OS</Link></div>
        </div>
      </section>
      <section className="page-section" id="integration"><div className="section-shell section-intro-grid"><div><p className="section-kicker">From concept to configuration</p><h2>Clear interfaces.<br />Clear responsibilities.</h2></div><div><p>Product selection is one part of a complete project. Define the electrical, software, and service boundaries before finalizing the configuration.</p><Link className="inline-link" href="/solutions">Explore application-specific planning</Link></div></div><div className="section-shell technology-integration-grid">{integration.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <ProjectCTA />
    </div></PageFrame>
  );
}
