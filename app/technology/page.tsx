import type { Metadata } from 'next';
import { PageFrame, PageHero, ProjectCTA } from '../_components/site';

export const metadata: Metadata = {
  title: 'K2 Intelligence | Energy Systems Technology | K2VOLT',
  description: 'Connected controls and system intelligence for K2VOLT storage, charging, and AIDC power infrastructure.',
};

export default function TechnologyPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="K2 Intelligence"
        title={<>Battery expertise.<br /><em>System intelligence.</em></>}
        description="K2VOLT connects purpose-built storage hardware with an operating layer designed to make energy assets clearer, more responsive, and easier to scale."
        image="/images/k2volt-commercial.png"
        alt="K2VOLT commercial energy storage system"
      />
      <section className="page-section">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker">One operating philosophy</p><h2>From the battery<br />to the portfolio.</h2></div>
          <div><p>The K2 story started at the cell. K2 Intelligence extends that understanding through the complete asset—bringing energy flow, system condition, operating priorities, and performance into one connected experience.</p></div>
        </div>
        <div className="section-shell capability-grid">
          <article><span>01</span><h3>Real-time visibility</h3><p>Understand energy flow, availability, system health, and performance without losing the operational context.</p></article>
          <article><span>02</span><h3>Automated optimization</h3><p>Respond to load, solar production, tariffs, and site priorities through coordinated system controls.</p></article>
          <article><span>03</span><h3>Portfolio-ready operation</h3><p>Apply a consistent operating approach to one asset, one facility, or a growing network of storage systems.</p></article>
        </div>
      </section>
      <section className="page-section page-section-dark">
        <div className="section-shell section-intro-grid">
          <div><p className="section-kicker section-kicker-dark">Complete system thinking</p><h2>Hardware and controls,<br />designed together.</h2></div>
          <div><p style={{ color: '#9db3be' }}>A storage system performs as one asset, so K2VOLT treats battery behavior, power conversion, thermal management, controls, and operating intelligence as connected parts of the same design.</p></div>
        </div>
      </section>
      <ProjectCTA />
    </PageFrame>
  );
}
