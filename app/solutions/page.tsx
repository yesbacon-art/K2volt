import type { Metadata } from 'next';
import { solutions } from '../_data/content';
import { PageFrame, PageHero, ProjectCTA, SolutionPreview } from '../_components/site';

export const metadata: Metadata = {
  title: 'Energy & Power Solutions | K2VOLT',
  description: 'Residential, commercial, utility-scale, EV charging, and AIDC power solutions from K2VOLT.',
};

export default function SolutionsPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Energy and power systems"
        title={<>Built for the way<br />energy works.</>}
        description="Purpose-built energy systems for American homes, businesses, charging infrastructure, AI data centers, and the modern power grid."
        image="/images/k2volt-utility.png"
        alt="K2VOLT energy systems across a renewable energy site"
      />
      <section className="page-section">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">One foundation, five applications</p><h2>The right system<br />for the application.</h2></div>
          <div><p>K2VOLT combines battery-first engineering, power electronics, modular system design, and connected controls in platforms shaped around each customer’s operating environment.</p></div>
        </div>
        <div className="section-shell home-solutions">
          {solutions.map((solution) => <SolutionPreview solution={solution} key={solution.slug} />)}
        </div>
      </section>
      <section className="page-section page-section-soft">
        <div className="section-shell">
          <p className="section-kicker">The K2VOLT approach</p>
          <h2>Storage designed as<br />a complete system.</h2>
          <div className="capability-grid">
            <article><span>01</span><h3>Battery expertise</h3><p>A design philosophy informed by two decades of work across cells, packs, modules, and high-performance systems.</p></article>
            <article><span>02</span><h3>Purpose-built hardware</h3><p>Configurations that reflect the scale, operating conditions, and priorities of each storage application.</p></article>
            <article><span>03</span><h3>Connected intelligence</h3><p>Controls and visibility that help each asset operate clearly, automatically, and confidently.</p></article>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </PageFrame>
  );
}
