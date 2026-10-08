import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { solutions } from '../../_data/content';
import { productCatalog } from '../../_data/content';
import { getProductDetails, productFamilies } from '../../_data/products';
import { PageFrame, PageHero, ProjectCTA } from '../../_components/site';

const origin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://www.k2volt.com';

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return {};
  const image = new URL(solution.image, origin).toString();
  return {
    title: `${solution.name} | ${solution.label} Solutions | K2VOLT`,
    description: solution.summary,
    openGraph: { title: `${solution.name} | K2VOLT`, description: solution.summary, images: [{ url: image, alt: solution.alt }] },
    twitter: { card: 'summary_large_image', title: `${solution.name} | K2VOLT`, description: solution.summary, images: [image] },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  const family = productFamilies.find(item => item.solution === solution.slug)!;
  const products = productCatalog.filter(product => product.category === family.category);
  const guidance = getProductDetails(products[0]);

  return (
    <PageFrame>
      <PageHero
        eyebrow={`${solution.label} solutions`}
        title={<>{solution.name}<br /><em>{solution.statement}</em></>}
        description={solution.summary}
        image={solution.image}
        alt={solution.alt}
      />
      <nav className="section-shell product-section-nav" aria-label="Solution page sections"><a href="#priorities">Operating priorities</a><a href="#capabilities">System approach</a><a href="#configurations">Product configurations</a><a href="#site-planning">Site planning</a></nav>
      <section className="page-section" id="priorities">
        <div className="section-shell solution-priorities">
          <div><p className="section-kicker">Start with the application</p><h2>Define what the<br />system needs to do.</h2><p className="refined-section-lead">{guidance.description}</p></div>
          <ol>{solution.applications.map((application, index) => <li key={application}><span>0{index + 1}</span><h3>{application}</h3></li>)}</ol>
        </div>
      </section>
      <section className="page-section page-section-soft" id="capabilities">
        <div className="section-shell">
          <p className="section-kicker">System capabilities</p>
          <h2>Confidence built<br />into every layer.</h2>
          <div className="capability-grid">
            {solution.capabilities.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <Link className="inline-link" href="/solutions">View all K2VOLT systems</Link>
        </div>
      </section>
      <section className="page-section" id="configurations">
        <div className="section-shell">
          <p className="section-kicker">Explore the portfolio</p>
          <h2>{solution.slug === 'aidc-power' ? 'The energy-control layer.' : 'Products for this application.'}</h2>
          {solution.slug === 'aidc-power' ? <p className="refined-section-lead">The current catalog lists K2 Energy OS software. Battery, UPS, power-conversion and complete AIDC power-module configurations require separate engineering confirmation.</p> : null}
          <div className="related-product-grid">
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} className="related-product" key={product.slug}><img src={product.image} alt={product.name} width="800" height="800" loading="lazy" decoding="async" /><h3>{product.name}</h3><p>{product.spec}</p><span>Explore product</span></Link>
            ))}
          </div>
          <Link className="inline-link family-return-link" href={`/products?family=${solution.slug}`}>Browse this product family</Link>
        </div>
      </section>
      <section className="page-section page-section-soft" id="site-planning"><div className="section-shell solution-priorities"><div><p className="section-kicker">Before configuration</p><h2>Start with the<br />right site information.</h2><p className="refined-section-lead">A useful first conversation connects the operating objective with the conditions at the site.</p><Link className="inline-link family-return-link" href={`/contact?product=${products[0].slug}`}>Discuss a starting configuration</Link></div><ol className="solution-requirements">{guidance.requirements.map((requirement, index) => <li key={requirement}><span>0{index + 1}</span><p>{requirement}</p></li>)}</ol></div></section>
      <ProjectCTA />
    </PageFrame>
  );
}
