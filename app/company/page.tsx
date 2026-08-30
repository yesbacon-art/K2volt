import type { Metadata } from 'next';
import { PageFrame, PageHero, ProjectCTA } from '../_components/site';

const futurePriorities = [
  ['01', 'Research in America', 'Develop next-generation storage systems, controls, and operating intelligence around American customers and grid conditions.'],
  ['02', 'Manufacturing capability', 'Expand the equipment, supplier, and production ecosystem needed to manufacture advanced energy-storage solutions in the United States.'],
  ['03', 'Enduring energy investment', 'Build long-term partnerships and infrastructure that strengthen American resilience, industry, and energy independence.'],
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
  title: 'About K2VOLT | American Energy Storage Company',
  description: 'K2VOLT is an American-owned K2 Energy brand focused on intelligent stationary energy storage.',
};

export default function CompanyPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="About K2VOLT"
        title={<>American energy.<br /><em>Ready for more.</em></>}
        description="K2VOLT is an American-owned energy-storage company built to turn proven battery knowledge into dependable power at every scale."
        image="/images/k2volt-utility.png"
        alt="K2VOLT energy storage infrastructure in the United States"
      />
      <section className="page-section">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Our company</p><h2>A focused mission.<br />A proven foundation.</h2></div>
          <div><p>K2VOLT is the stationary energy-storage brand of K2 Energy. We connect two decades of battery experience with modern energy management so American families, businesses, and power operators can decide when and how their energy works.</p></div>
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
          <div><p style={{ color: '#9db3be' }}>We design energy-storage systems that help customers strengthen resilience, use renewable energy more effectively, manage power costs, and support a more flexible grid.</p></div>
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
      <section className="page-section company-future" id="american-future">
        <div className="section-shell company-future-intro">
          <div>
            <p className="section-kicker">The next American energy chapter</p>
            <h2>Deep roots.<br />A long horizon.</h2>
          </div>
          <div>
            <p className="company-future-lead">K2VOLT is an American pioneer in new-energy research and energy-storage equipment manufacturing.</p>
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
