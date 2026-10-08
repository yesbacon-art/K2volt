import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { productCatalog } from '../../_data/content';
import { getProductDetails } from '../../_data/products';
import { PageFrame } from '../../_components/site';
import { PrintButton } from '../../_components/print-button';

export function generateStaticParams() { return productCatalog.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);
  if (!product) return {};
  return { title: `${product.name} | ${product.spec} | K2VOLT`, description: getProductDetails(product).description, alternates: { canonical: `/products/${slug}/` } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);
  if (!product) notFound();
  const details = getProductDetails(product);
  const related = productCatalog.filter((item) => item.category === product.category && item.slug !== slug).slice(0, 3);
  return <PageFrame>
    <section className="product-detail">
      <nav className="section-shell product-breadcrumb" aria-label="Breadcrumb"><Link href="/products">Products</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav>
      <div className="section-shell product-detail-grid">
        <div className="product-detail-image"><img src={product.image} alt={`${product.name} — K2VOLT`} width="800" height="800" /></div>
        <div><p className="section-kicker">{product.category}</p><h1>{product.name}</h1><p className="product-detail-spec">{product.spec}</p><p>{details.description}</p>
          <div className="product-actions"><Link className="button button-primary" href={`/contact?product=${product.slug}`}>Discuss this product</Link><PrintButton /></div>
          <p className="product-availability">Project configuration · Confirm availability and market compatibility with K2VOLT.</p>
        </div>
      </div>
    </section>
    <section className="page-section page-section-soft product-spec-section" id="specifications">
      <div className="section-shell product-information-grid"><div><p className="section-kicker">Product overview</p><h2>Configuration<br />at a glance.</h2><p className="product-information-note">These values reflect the current product catalog. This overview is not a certified technical datasheet.</p></div>
        <div><table className="specification-table"><caption className="sr-only">{product.name} catalog specifications</caption><tbody>{details.rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table><p className="product-information-note">Detailed electrical ratings, dimensions, operating conditions, certifications and warranty terms are supplied after the configuration and destination market are confirmed.</p></div>
      </div>
    </section>
    <section className="page-section product-planning">
      <div className="section-shell product-information-grid"><div><p className="section-kicker">Application planning</p><h2>Define the right<br />fit for your site.</h2><Link className="inline-link" href={`/solutions/${details.solution}`}>Explore the application</Link></div>
        <div><h3>Potential applications</h3><ul className="product-list">{details.applications.map((item) => <li key={item}>{item}</li>)}</ul><h3>What we need to plan your project</h3><ul className="product-list">{details.requirements.map((item) => <li key={item}>{item}</li>)}</ul><p className="product-information-note">Backup operation, system integration and service coverage depend on the final system design. Discuss installation, commissioning, support and warranty scope before ordering.</p></div>
      </div>
    </section>
    {related.length ? <section className="page-section page-section-soft related-section"><div className="section-shell"><p className="section-kicker">Within the family</p><h2>Explore other configurations.</h2><div className="related-product-grid">{related.map((item) => <Link href={`/products/${item.slug}`} className="related-product" key={item.slug}><img src={item.image} alt={item.name} loading="lazy" /><h3>{item.name}</h3><p>{item.spec}</p><span>Explore product</span></Link>)}</div></div></section> : null}
  </PageFrame>;
}
