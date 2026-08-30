import type { Metadata } from 'next';
import { Arrow, PageFrame, PageHero, ProjectCTA } from '../_components/site';

const milestones = [
  {
    year: '2006',
    region: 'United States',
    title: 'Founded in Henderson, Nevada',
    copy: 'K2 Energy begins with a team focused on lithium iron phosphate technology and completes early commercial builds of 18650 and 26650 energy cells.',
    source: ['K2 Energy — official history', 'https://k2energysolution.com/pages/about-us'],
  },
  {
    year: '2007–2008',
    region: 'United States',
    title: 'Commercial cells and early recognition',
    copy: 'Commercial power-cell platforms launch, Nevada technology organizations recognize the company, and K2 receives its first documented U.S. SBIR award for Army battery research.',
    source: ['U.S. SBIR — company portfolio', 'https://www.sbir.gov/portfolio/207156'],
  },
  {
    year: '2009–2010',
    region: 'United States',
    title: 'From cells to modular systems',
    copy: 'A Navy SBIR project applies K2’s LFP technology to modular energy storage. Company records also document EV programs, a U.S. Advanced Battery Consortium assessment, and growth beyond 40 employees.',
    source: ['U.S. SBIR — 2009 Navy award', 'https://www.sbir.gov/awards/63946'],
  },
  {
    year: '2011–2012',
    region: 'United States',
    title: 'Rapid growth and high-temperature cells',
    copy: 'K2 records worldwide workforce growth, recognition on the Inc. 500/5000, and the launch of a high-temperature energy-cell platform.',
    source: ['K2 Energy — official history', 'https://k2energysolution.com/pages/about-us'],
  },
  {
    year: '2013–2015',
    region: 'United States',
    title: 'Henderson expansion and defense programs',
    copy: 'A new Nevada headquarters opens. Federal records document advanced manufacturing and Navy cell work, while K2 announces a major NAVSEA high-discharge energy-storage system program.',
    source: ['K2 Energy — NAVSEA announcement', 'https://www.prnewswire.com/news-releases/k2-energy-solutions-to-supply-a-fully-self-contained-energy-storage-system-for-the-naval-sea-systems-navsea-electromagnetic-rail-gun-300015255.html'],
  },
  {
    year: '2016–2017',
    region: 'United States',
    title: 'R&D and large-format cell development',
    copy: 'K2’s published history records expanded domestic R&D and cell-production capability. A Navy Phase II award advances high-power, large-format LFP cell and thermal-management design.',
    source: ['U.S. SBIR — K2 portfolio', 'https://www.sbir.gov/portfolio/207156'],
  },
  {
    year: '2022',
    region: 'Australia',
    title: 'K2 enters the Australian market',
    copy: 'K2 Energy Australia records 2022 as its market entry, initially connecting the American battery story with portable power and products designed for camping and travel.',
    source: ['K2 Energy Australia — company history', 'https://k2energystore.com.au/'],
  },
  {
    year: '2023–2025',
    region: 'Australia',
    title: 'A broader Australian energy platform',
    copy: 'The Australian business expands across LFP batteries, power stations, RV and marine applications, off-grid systems, residential solar storage, installers, resellers, and approved battery products.',
    source: ['K2 Battery Australia — about the business', 'https://k2battery.com.au/about-us/'],
  },
  {
    year: '2026',
    region: 'United States',
    title: 'K2VOLT focuses the next chapter',
    copy: 'K2VOLT brings this cell-to-system experience into a dedicated stationary-storage platform for American homes, commercial and industrial facilities, and utility-scale infrastructure.',
    source: null,
  },
] as const;

const researchSources = [
  ['K2 Energy official history', 'Company milestones from 2006 through product and facility expansion.', 'https://k2energysolution.com/pages/about-us'],
  ['U.S. SBIR portfolio', 'Federal records for K2 Energy’s Army, Navy, and Defense Logistics Agency research awards.', 'https://www.sbir.gov/portfolio/207156'],
  ['K2 Energy Australia', 'The Australian market-entry account and current company positioning.', 'https://k2energystore.com.au/'],
  ['K2 Battery Australia news', 'Local product approvals, events, partners, and application updates.', 'https://k2battery.com.au/k2-news/'],
] as const;

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
      <section className="page-section page-section-dark heritage-regions">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker section-kicker-dark">Two active markets</p><h2>American roots.<br />An Australian chapter.</h2></div>
          <div><p>K2’s documented story begins with battery R&amp;D and manufacturing in Nevada. The Australian business records a 2022 market entry and today extends the platform across portable power, RV, off-grid, and residential storage applications.</p></div>
        </div>
        <div className="section-shell heritage-region-grid">
          <article><span>US</span><p>Origin · Engineering · Advanced systems</p><h3>United States</h3><p>Commercial cell platforms, federal R&amp;D programs, high-power modular systems, and the battery engineering foundation behind K2VOLT.</p></article>
          <article><span>AU</span><p>Market · Products · Partnerships</p><h3>Australia</h3><p>Portable and mobile power, LFP batteries, off-grid and home storage, plus a growing installer and reseller ecosystem.</p></article>
        </div>
      </section>
      <section className="page-section page-section-soft heritage-chronology">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Verified development record</p><h2>From 2006<br />to what comes next.</h2></div>
          <div><p>This timeline combines K2’s published company history with U.S. government award records and official Australian market updates. Each external milestone links to its underlying source.</p></div>
        </div>
        <div className="section-shell heritage-chronology-shell">
          <ol className="heritage-chronology-list">
            {milestones.map((item) => (
              <li key={`${item.year}-${item.title}`}>
                <div className="heritage-chronology-meta"><time>{item.year}</time><span>{item.region}</span></div>
                <div className="heritage-chronology-copy"><h3>{item.title}</h3><p>{item.copy}</p></div>
                <div className="heritage-chronology-source">
                  {item.source ? <a href={item.source[1]} target="_blank" rel="noreferrer">{item.source[0]} <Arrow /></a> : <span>K2VOLT company milestone</span>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="page-section heritage-sources">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Research library</p><h2>The record<br />behind the story.</h2></div>
          <div><p>These primary and company-published collections anchor the expanding K2 archive. Additional historical documents and news can be added as they are verified.</p></div>
        </div>
        <div className="section-shell heritage-source-grid">
          {researchSources.map(([title, copy, url], index) => (
            <a href={url} target="_blank" rel="noreferrer" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><Arrow />
            </a>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </PageFrame>
  );
}
