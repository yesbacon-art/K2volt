import { news, solutions } from './_data/content';
import {
  Arrow,
  NewsCard,
  ProjectCTA,
  SiteFooter,
  SiteHeader,
  SolutionPreview,
} from './_components/site';

const k2Milestones = [
  {
    year: '2006',
    title: 'Battery engineering begins',
    copy: 'K2 Energy begins developing lithium iron phosphate cell technology in Nevada.',
  },
  {
    year: '2010–2025',
    title: 'From cells to complete systems',
    copy: 'Experience expands across packs, modules, high-performance systems, and demanding American applications.',
  },
  {
    year: 'Today',
    title: 'K2VOLT advances the legacy',
    copy: 'Twenty years of battery knowledge become a focused American platform for stationary energy storage.',
  },
];

const americanCommitments = [
  ['01', 'U.S. research & development', 'Advance battery systems, power electronics, controls, and energy intelligence for American operating needs.'],
  ['02', 'Advanced equipment manufacturing', 'Build energy-storage equipment and manufacturing capability that support a stronger domestic energy industry.'],
  ['03', 'Long-term American growth', 'Invest in partnerships, technical talent, and infrastructure that deepen K2VOLT’s role in America’s energy future.'],
] as const;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero">
        <img
          src="/images/k2volt-utility.png"
          alt="K2VOLT utility-scale energy storage connected to renewable generation"
        />
        <div className="home-hero-wash" aria-hidden="true" />
        <div className="section-shell home-hero-inner">
          <p className="eyebrow"><span /> A K2 Energy brand · Battery innovation since 2006</p>
          <h1>American energy storage.<br /><em>Built on proven battery science.</em></h1>
          <p>
            K2VOLT brings two decades of cell, pack, and system expertise into
            intelligent storage for homes, businesses, and the grid.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/solutions">Explore energy storage <Arrow /></a>
            <a className="button button-quiet" href="/heritage">Discover our heritage</a>
          </div>
        </div>
        <div className="home-proof">
          <div><strong>20+</strong><span>Years of battery expertise</span></div>
          <div><strong>03</strong><span>Purpose-built platforms</span></div>
          <div><strong>01</strong><span>Connected energy ecosystem</span></div>
        </div>
      </section>

      <section className="home-intro">
        <div className="section-shell home-intro-head">
          <div>
            <p className="section-kicker">Energy storage at every scale</p>
            <h2>From one home<br />to the power grid.</h2>
          </div>
          <div>
            <p>
              One battery heritage, expressed through three systems designed
              around the way energy is produced, managed, and used.
            </p>
            <a className="inline-link" href="/solutions">View all solutions <Arrow /></a>
          </div>
        </div>
        <div className="section-shell home-solutions">
          {solutions.map((solution) => <SolutionPreview solution={solution} key={solution.slug} />)}
        </div>
      </section>

      <section className="home-heritage">
        <div className="section-shell home-heritage-grid">
          <div className="home-heritage-number">
            <span>20+</span>
            <p>Years of battery engineering behind every K2VOLT system.</p>
          </div>
          <div className="home-heritage-copy">
            <img src="/images/k2-energy-logo.png" alt="K2 Energy" />
            <p className="section-kicker section-kicker-dark">The experience behind K2VOLT</p>
            <h2>New energy storage.<br />Proven battery DNA.</h2>
            <p>
              K2 Energy began developing lithium iron phosphate cells in Nevada
              in 2006 and expanded into packs, modules, and custom systems for
              demanding applications. K2VOLT advances that legacy into modern
              stationary energy storage.
            </p>
            <a className="inline-link inline-link-light" href="/heritage">Explore the K2 story <Arrow /></a>
          </div>
        </div>
        <div className="section-shell home-history-timeline" aria-label="K2 history milestones">
          {k2Milestones.map((milestone) => (
            <article key={milestone.year}>
              <time>{milestone.year}</time>
              <span />
              <h3>{milestone.title}</h3>
              <p>{milestone.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-american-future" id="american-future">
        <div className="section-shell american-future-head">
          <div>
            <p className="section-kicker">Built for America&apos;s energy future</p>
            <h2>Research here.<br />Build here.<br /><em>Grow here.</em></h2>
          </div>
          <div>
            <p className="american-future-lead">
              K2VOLT is an American pioneer in new-energy research,
              engineering, and energy-storage equipment manufacturing.
            </p>
            <p>
              Our long-term direction is clear: deepen technical capability,
              strengthen domestic manufacturing, and build enduring energy
              infrastructure across the United States.
            </p>
          </div>
        </div>
        <div className="section-shell american-commitments">
          {americanCommitments.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="section-shell american-future-link">
          <a className="inline-link" href="/company#american-future">Explore our American future <Arrow /></a>
        </div>
      </section>

      <section className="home-technology">
        <div className="section-shell home-technology-grid">
          <div>
            <p className="section-kicker">K2 Intelligence</p>
            <h2>Hardware and intelligence,<br />designed as one system.</h2>
          </div>
          <div className="technology-points">
            <article><span>01</span><h3>See clearly</h3><p>Energy flow, asset health, and performance in one operating view.</p></article>
            <article><span>02</span><h3>Act automatically</h3><p>Controls that respond to demand, solar production, tariffs, and priorities.</p></article>
            <article><span>03</span><h3>Scale confidently</h3><p>One connected philosophy from a single site to an energy portfolio.</p></article>
            <a className="inline-link" href="/technology">Explore the platform <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="home-news">
        <div className="section-shell section-heading-row">
          <div><p className="section-kicker">News & perspectives</p><h2>From K2VOLT.</h2></div>
          <a className="inline-link" href="/news">View all news <Arrow /></a>
        </div>
        <div className="section-shell news-grid">
          {news.slice(0, 3).map((item) => <NewsCard item={item} key={item.slug} />)}
        </div>
      </section>

      <ProjectCTA />
      <SiteFooter />
    </main>
  );
}
