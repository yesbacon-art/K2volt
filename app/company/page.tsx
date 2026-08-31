import type { Metadata } from 'next';
import { PageFrame, PageHero, ProjectCTA } from '../_components/site';

const futurePriorities = [
  ['01', 'Research in America', 'Develop next-generation storage systems, controls, and operating intelligence around American customers and grid conditions.'],
  ['02', 'Manufacturing capability', 'Expand the equipment, supplier, and production ecosystem needed to manufacture advanced storage, charging, and AIDC power solutions in the United States.'],
  ['03', 'Enduring energy investment', 'Build long-term partnerships and infrastructure that strengthen American resilience, industry, and energy independence.'],
] as const;

const storeModel = [
  ['01', 'Sales', 'Explore residential storage, commercial systems, charging equipment, and integrated power solutions in one destination.'],
  ['02', 'Solutions', 'Work with K2VOLT specialists to shape a system around the site, load profile, resilience goals, and future growth.'],
  ['03', 'Service', 'Coordinate installation, commissioning, maintenance, and lifecycle care through a connected local service experience.'],
  ['04', 'Support', 'Access product guidance, operating insight, upgrades, and dependable assistance throughout the system life.'],
] as const;

const leadershipTeam = [
  {
    number: '01',
    function: 'Executive leadership',
    role: 'President & Chief Executive Officer',
    bio: 'Guides K2VOLT’s long-term strategy, American market development, and commitment to dependable energy infrastructure.',
    image: '/images/leadership/ceo-test.jpg',
  },
  {
    number: '02',
    function: 'Technology leadership',
    role: 'Chief Technology Officer',
    bio: 'Leads battery-system architecture, energy intelligence, product engineering, and the next generation of storage innovation.',
    image: '/images/leadership/cto-test.jpg',
  },
  {
    number: '03',
    function: 'Operations leadership',
    role: 'Chief Operating Officer',
    bio: 'Builds the operating, manufacturing, quality, and supply capabilities required to deliver at every scale.',
    image: '/images/leadership/coo-test.jpg',
  },
  {
    number: '04',
    function: 'Commercial leadership',
    role: 'Vice President, Business Development',
    bio: 'Develops strategic partnerships and connects K2VOLT solutions with residential, commercial, and utility customers.',
    image: '/images/leadership/business-development-test.jpg',
  },
] as const;

export const metadata: Metadata = {
  title: 'About K2VOLT | American Energy Infrastructure Company',
  description: 'K2VOLT is an American-owned K2 Energy brand focused on storage, charging, and AIDC power infrastructure.',
};

export default function CompanyPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="About K2VOLT"
        title={<>American energy.<br /><em>Ready for more.</em></>}
        description="K2VOLT is an American-owned energy company built to turn proven battery knowledge into dependable storage, charging, and mission-critical power infrastructure."
        image="/images/k2volt-utility.png"
        alt="K2VOLT energy storage infrastructure in the United States"
      />
      <section className="page-section">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Our company</p><h2>A focused mission.<br />A proven foundation.</h2></div>
          <div><p>K2VOLT is the energy-infrastructure brand of K2 Energy. We connect two decades of battery experience with modern power electronics and energy management for American homes, businesses, charging networks, AI data centers, and the grid.</p></div>
        </div>
        <div className="section-shell capability-grid">
          <article><span>01</span><h3>Battery-first thinking</h3><p>Our system philosophy begins with cell behavior, safety, durability, and real-world operating conditions.</p></article>
          <article><span>02</span><h3>Intelligence included</h3><p>Controls and operating visibility are designed as part of the storage system—not added as an afterthought.</p></article>
          <article><span>03</span><h3>Built to keep growing</h3><p>A modular approach helps customers expand as energy needs, applications, and opportunities evolve.</p></article>
        </div>
      </section>
      <section className="page-section page-section-dark">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker section-kicker-dark">What we are here to do</p><h2>Make stored energy<br />more useful.</h2></div>
          <div><p style={{ color: '#9db3be' }}>We design integrated energy systems that help customers strengthen resilience, electrify transportation, support high-density computing, manage power costs, and build a more flexible grid.</p></div>
        </div>
      </section>
      <section className="page-section company-leadership" id="leadership">
        <div className="section-shell leadership-heading">
          <div>
            <p className="section-kicker">Leadership</p>
            <h2>Built by people<br />who think long term.</h2>
          </div>
          <p>Four disciplines work as one leadership team—connecting company direction, technology, operations, and customer growth around a clear American energy mission.</p>
        </div>
        <div className="section-shell leadership-grid">
          {leadershipTeam.map((leader) => (
            <article className="leadership-card" key={leader.number}>
              <div className="leadership-card-top">
                <span className="leadership-number">{leader.number}</span>
                <span className="leadership-status">Fictional test portrait</span>
              </div>
              <div className="leadership-portrait">
                <img src={leader.image} alt={`Fictional test portrait for ${leader.role}`} width="900" height="900" loading="lazy" decoding="async" />
              </div>
              <p className="leadership-function">{leader.function}</p>
              <h3>{leader.role}</h3>
              <p className="leadership-bio">{leader.bio}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section company-store-network" id="store-network">
        <div className="section-shell company-store-heading">
          <div>
            <p className="section-kicker section-kicker-dark">Future U.S. retail &amp; service network</p>
            <h2>Power, experienced<br />in person.</h2>
          </div>
          <div>
            <p className="company-store-lead">K2VOLT envisions a nationwide network of energy experience and service centers—an American power-industry interpretation of the 4S model.</p>
            <p>Each location is intended to bring product discovery, system planning, installation coordination, and long-term service together for homeowners, businesses, fleets, and energy partners.</p>
          </div>
        </div>
        <div className="section-shell company-store-visual">
          <figure>
            <img src="/images/k2volt-us-store-network-concept.png" alt="Concept visualization of a future K2VOLT energy experience and service center in the United States" width="2048" height="1536" loading="lazy" decoding="async" />
            <figcaption>Concept visualization · Proposed K2VOLT U.S. energy experience and service center</figcaption>
          </figure>
          <aside>
            <p>Long-term U.S. ambition</p>
            <strong>100</strong>
            <span>potential energy experience and service locations</span>
            <small>This is a forward-looking network goal. Expansion would be phased over time and shaped by market demand, partners, and local development.</small>
          </aside>
        </div>
        <div className="section-shell company-store-model">
          {storeModel.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section company-future" id="american-future">
        <div className="section-shell company-future-intro">
          <div>
            <p className="section-kicker">The next American energy chapter</p>
            <h2>Deep roots.<br />A long horizon.</h2>
          </div>
          <div>
            <p className="company-future-lead">K2VOLT is an American pioneer in new-energy research and advanced storage, charging, and AIDC power-equipment manufacturing.</p>
            <p>We are committed to deepening our presence in the United States—advancing technology, strengthening domestic manufacturing capability, and helping build the energy systems America will depend on for decades.</p>
          </div>
        </div>
        <div className="section-shell capability-grid company-future-grid">
          {futurePriorities.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </PageFrame>
  );
}
