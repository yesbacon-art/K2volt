import { news, solutions } from './_data/content';
import Link from 'next/link';
import {
  NewsCard,
  ProjectCTA,
  SiteFooter,
  SiteHeader,
  SolutionPreview,
} from './_components/site';

export default function Home() {
  return (
    <><SiteHeader /><main id="main-content" className="home-refined" tabIndex={-1}>

      <section className="home-hero">
        <img
          src="/images/k2volt-utility.webp"
          alt="K2VOLT energy storage concept with renewable generation"
          fetchPriority="high"
        />
        <div className="home-hero-wash" aria-hidden="true" />
        <div className="section-shell home-hero-inner">
          <p className="eyebrow"><span /> A K2 Energy brand · Battery innovation since 2006</p>
          <h1>Energy.<br /><em>Ready for what’s next.</em></h1>
          <p>
            Battery heritage meets a new generation of storage, charging and
            energy systems for America.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">Explore products</Link>
            <Link className="button button-quiet" href="/contact">Plan a project</Link>
          </div>
        </div>
        <div className="home-proof">
          <div><strong>2006</strong><span>K2 Energy’s battery roots</span></div>
          <div><strong>05</strong><span>Energy applications</span></div>
          <div><strong>U.S.</strong><span>Long-term market focus</span></div>
        </div>
      </section>

      <section className="home-intro">
        <div className="section-shell home-intro-head">
          <div>
            <p className="section-kicker">One portfolio. Different demands.</p>
            <h2>From the home<br />to the grid.</h2>
          </div>
          <div>
            <p>
              Find an energy system around your application—home backup,
              facility energy management, large-scale storage, EV charging or AI infrastructure.
            </p>
            <Link className="inline-link" href="/products">Browse the product catalog</Link>
          </div>
        </div>
        <div className="section-shell home-solutions">
          {solutions.map((solution) => <SolutionPreview solution={solution} key={solution.slug} />)}
        </div>
      </section>

      <section className="home-heritage">
        <div className="section-shell home-heritage-grid">
          <div className="home-heritage-number">
            <span>2006</span>
            <p>Where the K2 Energy battery story began.</p>
          </div>
          <div className="home-heritage-copy">
            <img src="/images/k2-energy-logo.png" alt="K2 Energy" loading="lazy" />
            <p className="section-kicker section-kicker-dark">The experience behind K2VOLT</p>
            <h2>Battery science.<br />An enduring foundation.</h2>
            <p>
              K2 Energy’s roots in Henderson, Nevada span lithium iron phosphate
              cells, battery modules and demanding energy-system research.
              Explore the source-linked milestones behind that experience.
            </p>
            <Link className="inline-link inline-link-light" href="/heritage">Explore K2 history</Link>
          </div>
        </div>
      </section>

      <section className="home-technology">
        <div className="section-shell home-technology-grid">
          <div>
            <p className="section-kicker">A system-level approach</p>
            <h2>Power hardware.<br />Operating intelligence.</h2>
            <p className="refined-section-lead">Start with the battery. Plan the power conversion, controls and site integration around the way the system will operate.</p>
          </div>
          <div className="technology-points">
            <article><span>01</span><h3>Battery systems</h3><p>Capacity and power configurations matched to the application.</p></article>
            <article><span>02</span><h3>Energy visibility</h3><p>A connected view of assets and operating priorities.</p></article>
            <article><span>03</span><h3>Project integration</h3><p>Site requirements, compatibility and service scope defined together.</p></article>
            <Link className="inline-link" href="/technology">Explore our approach</Link>
          </div>
        </div>
      </section>

      <section className="home-network-preview"><div className="section-shell home-network-grid"><img src="/images/k2volt-us-store-network-concept.webp" alt="Concept of a future K2VOLT U.S. energy experience and service center" loading="lazy" width="2048" height="1536" /><div><p className="section-kicker">Our American horizon</p><h2>Closer to the people<br />who use energy.</h2><p>Our long-term ambition is a U.S. network of energy experience and service centers, bringing product discovery, project planning and lifecycle support closer to customers.</p><p className="network-planning-note">Concept visualization · A future network plan, not an existing store count.</p><Link className="inline-link" href="/company#store-network">Discover the U.S. network vision</Link></div></div></section>

      <section className="home-news">
        <div className="section-shell section-heading-row">
          <div><p className="section-kicker">News & perspectives</p><h2>Inside K2VOLT.</h2></div>
          <Link className="inline-link" href="/news">View news and archives</Link>
        </div>
        <div className="section-shell news-grid">
          {news.slice(0, 3).map((item) => <NewsCard item={item} key={item.slug} />)}
        </div>
      </section>

      <ProjectCTA />
    </main><SiteFooter /></>
  );
}
