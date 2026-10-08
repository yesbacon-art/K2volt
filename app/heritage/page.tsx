import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageHero, ProjectCTA } from '../_components/site';

const nevadaRecord = 'https://www.leg.state.nv.us/App/InterimCommittee/REL/Document/17343';
const portfolio = 'https://www.sbir.gov/portfolio/207156';
const navseaRelease = 'https://www.prnewswire.com/news-releases/k2-energy-solutions-to-supply-a-fully-self-contained-energy-storage-system-for-the-naval-sea-systems-navsea-electromagnetic-rail-gun-300015255.html';

const milestones = [
  { year: '2006', kind: 'Founding · recorded in 2010', title: 'Henderson, Nevada. The starting point.', copy: 'Nevada legislative minutes record K2’s founding in Henderson in 2006.', source: ['Nevada Legislature', nevadaRecord], article: 'nevada-engineering-foundation-2010' },
  { year: '2008', kind: 'Government research record', title: 'Early high-rate cell research', copy: 'K2’s first recorded SBIR award: Army Phase I research into high-rate 18650 cells.', source: ['U.S. SBIR portfolio', portfolio], article: 'army-cell-research-2008' },
  { year: '2009', kind: 'Government research record', title: 'A modular storage research program', copy: 'Navy Phase I research applies vehicle-battery experience to modular storage.', source: ['U.S. SBIR award record', 'https://www.sbir.gov/awards/63946'], article: 'navy-modular-energy-storage-2009' },
  { year: '2010', kind: 'Legislative meeting record', title: 'A broader development agenda', copy: 'A legislative presentation describes development of a 1 MWh battery, a cell laboratory, and large-format cells—not completed installations.', source: ['Nevada Legislature', nevadaRecord], article: 'nevada-engineering-foundation-2010' },
  { year: '2014', kind: 'Government research record', title: 'Manufacturing-process research', copy: 'DLA Phase I research investigates a process intended to eliminate volatile organic compounds.', source: ['U.S. SBIR portfolio', portfolio], article: 'manufacturing-process-research-2014' },
  { year: '2015', kind: 'Company-published announcement', title: 'High-power systems enter the archive', copy: 'K2 announces a first order for an intermediate storage system in NAVSEA’s railgun development program.', source: ['K2 release / PR Newswire', navseaRelease], article: 'navsea-energy-storage-program-2015' },
  { year: '2017', kind: 'Government research record', title: 'Large-format cell development', copy: 'A Navy Phase II award concerns high-power LFP cells and thermal-management research.', source: ['U.S. SBIR portfolio', portfolio], article: 'us-navy-phase-two-cell-program-2017' },
  { year: 'Today', kind: 'K2VOLT brand direction', title: 'The next energy chapter', copy: 'K2VOLT focuses that battery-first perspective on storage, EV charging, and AIDC power. Future facilities and service networks remain development goals.', source: null, article: 'introducing-k2volt' },
] as const;

const researchSources = [
  ['Nevada legislative record', '2010 meeting minutes documenting a company presentation and the 2006 founding account.', nevadaRecord],
  ['U.S. SBIR portfolio', 'Federal award records covering Army, Navy, and DLA research.', portfolio],
  ['2009 modular-storage award', 'The individual Navy Phase I award, abstract, and historical schedule.', 'https://www.sbir.gov/awards/63946'],
  ['2015 K2 company release', 'K2 Energy Solutions’ own announcement, distributed through PR Newswire.', navseaRelease],
] as const;

export const metadata: Metadata = {
  title: 'K2 Energy Heritage | K2VOLT',
  description: 'Explore K2 Energy’s Nevada origins and documented U.S. battery research through a source-linked historical timeline.',
};

export default function HeritagePage() {
  return (
    <PageFrame>
      <PageHero eyebrow="K2 Energy heritage" title={<>Twenty years of<br /><em>battery thinking.</em></>} description="An American battery story, traced through historical records—not just a list of dates." image="/images/k2-energy-legacy-cell.webp" alt="Legacy K2 Energy lithium iron phosphate battery" />
      <section className="page-section">
        <div className="section-shell split-section">
          <img src="/images/k2-energy-legacy-cell.webp" alt="Legacy K2 Energy battery product" width="1536" height="1024" loading="lazy" decoding="async" />
          <div className="split-section-copy">
            <img className="heritage-page-logo" src="/images/k2-energy-logo.png" alt="K2 Energy" />
            <p className="section-kicker">The experience behind K2VOLT</p><h2>From cell behavior<br />to system thinking.</h2>
            <p>Understanding the battery is the starting point: its chemistry, thermal behavior, operating limits, and relationship with the complete system.</p>
            <p>K2VOLT brings that perspective to a portfolio spanning homes, businesses, the grid, electric mobility, and AI infrastructure.</p>
            <Link className="inline-link" href="/products">Explore the K2VOLT portfolio</Link>
          </div>
        </div>
      </section>
      <section className="page-section page-section-soft heritage-chronology" id="timeline">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Documented U.S. chronology</p><h2>A foundation<br />built over time.</h2></div>
          <div><p>Government records, historical company announcements, and K2VOLT’s current direction are identified separately. Research awards describe funded development—not product certification, completed deployments, or present-day government endorsement.</p></div>
        </div>
        <div className="section-shell heritage-chronology-shell">
          <ol className="heritage-chronology-list">
            {milestones.map(item => <li key={item.year}>
              <div className="heritage-chronology-meta"><time>{item.year}</time><span>{item.kind}</span></div>
              <div className="heritage-chronology-copy"><h3>{item.title}</h3><p>{item.copy}</p><Link className="inline-link" href={`/news/${item.article}`}>Read the archive</Link></div>
              <div className="heritage-chronology-source">{item.source ? <a href={item.source[1]} target="_blank" rel="noreferrer">{item.source[0]}</a> : <span>Brand direction · not a historical award</span>}</div>
            </li>)}
          </ol>
        </div>
      </section>
      <section className="page-section heritage-regional-context">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Australian research context</p><h2>A regional archive.<br />Clearly distinguished.</h2></div>
          <div><p>Previously collected Australian references remain available in the news library. Some original pages are unavailable, and the relationship of those businesses to U.S. K2 Energy is not independently established by the accessible sources.</p><p>These references are separated from the verified U.S. chronology and must not be used as K2VOLT product approvals or evidence of a corporate relationship.</p><Link className="inline-link" href="/news?section=regional#archive">Browse regional references</Link></div>
        </div>
      </section>
      <section className="page-section page-section-soft heritage-sources">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">Research library</p><h2>The record<br />behind the story.</h2></div>
          <div><p>Read the underlying material in its original context. New milestones can be added as supporting documents become available.</p></div>
        </div>
        <div className="section-shell heritage-source-grid">{researchSources.map(([title, copy, url], index) => <a href={url} target="_blank" rel="noreferrer" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></a>)}</div>
      </section>
      <ProjectCTA />
    </PageFrame>
  );
}
