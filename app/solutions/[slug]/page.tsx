import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { solutions } from '../../_data/content';
import { Arrow, PageFrame, PageHero, ProjectCTA } from '../../_components/site';

const origin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://k2volt-energy.yesbacon130976.chatgpt.site';

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return {};
  const image = new URL(solution.image, origin).toString();
  return {
    title: `${solution.name} | ${solution.label} Energy Storage | K2VOLT`,
    description: solution.summary,
    openGraph: { title: `${solution.name} | K2VOLT`, description: solution.summary, images: [{ url: image, alt: solution.alt }] },
    twitter: { card: 'summary_large_image', title: `${solution.name} | K2VOLT`, description: solution.summary, images: [image] },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <PageFrame>
      <PageHero
        eyebrow={`${solution.label} energy storage`}
        title={<>{solution.name}<br /><em>{solution.statement}</em></>}
        description={solution.summary}
        image={solution.image}
        alt={solution.alt}
      />
      <section className="page-section">
        <div className="section-shell split-section">
          <img src={solution.image} alt={solution.alt} />
          <div className="split-section-copy">
            <p className="section-kicker">Designed for the application</p>
            <h2>{solution.statement}</h2>
            <p>{solution.summary}</p>
            <ul className="application-list">
              {solution.applications.map((application) => <li key={application}>{application}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="page-section page-section-soft">
        <div className="section-shell">
          <p className="section-kicker">System capabilities</p>
          <h2>Confidence built<br />into every layer.</h2>
          <div className="capability-grid">
            {solution.capabilities.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <a className="inline-link" href="/solutions">View all energy-storage systems <Arrow /></a>
        </div>
      </section>
      <ProjectCTA />
    </PageFrame>
  );
}
