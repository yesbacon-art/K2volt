import type { Metadata } from 'next';
import { Arrow, PageFrame, PageHero, ProjectCTA } from '../_components/site';

export const metadata: Metadata = {
  title: 'K2 Energy Heritage | K2VOLT',
  description: 'K2VOLT carries forward two decades of K2 Energy battery engineering experience.',
};

export default function HeritagePage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="K2 Energy heritage"
        title={<>Twenty years of<br /><em>battery engineering.</em></>}
        description="K2VOLT is the stationary energy-storage chapter of a battery story that began in Nevada in 2006."
        image="/images/k2-energy-legacy-cell.png"
        alt="K2 Energy lithium iron phosphate battery from the company product heritage"
      />
      <section className="page-section">
        <div className="section-shell split-section">
          <img src="/images/k2-energy-legacy-cell.png" alt="Legacy K2 Energy lithium iron phosphate battery" />
          <div className="split-section-copy">
            <img className="heritage-page-logo" src="/images/k2-energy-logo.png" alt="K2 Energy" />
            <p className="section-kicker">The experience behind K2VOLT</p>
            <h2>A new chapter in<br />a proven story.</h2>
            <p>K2 Energy began developing commercial lithium iron phosphate cells and expanded into packs, modules, and custom high-performance battery systems serving demanding applications.</p>
            <p>That cell-to-system perspective now informs K2VOLT’s approach to residential, commercial, industrial, and utility-scale stationary storage.</p>
            <a className="inline-link" href="https://k2energysolutions.com/" target="_blank" rel="noreferrer">Visit K2 Energy <Arrow /></a>
          </div>
        </div>
      </section>
      <section className="page-section page-section-soft">
        <div className="section-shell">
          <p className="section-kicker">From cells to energy systems</p>
          <h2>Experience that<br />kept expanding.</h2>
          <div className="capability-grid">
            <article><span>2006–2007</span><h3>Commercial cell platforms</h3><p>Early commercial development of cylindrical lithium-ion cells establishes the company’s battery foundation.</p></article>
            <article><span>2010–2016</span><h3>Advanced systems</h3><p>Programs expand across electric mobility, marine power, modular high-voltage systems, and U.S. Navy development.</p></article>
            <article><span>2026</span><h3>K2VOLT</h3><p>Two decades of battery knowledge become a dedicated energy-storage brand for homes, businesses, and the grid.</p></article>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </PageFrame>
  );
}
