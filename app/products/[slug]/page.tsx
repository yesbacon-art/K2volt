import { notFound } from 'next/navigation';
import { productCatalog } from '../../_data/content';
import { PageFrame } from '../../_components/site';

export function generateStaticParams() { return productCatalog.map((product) => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);
  if (!product) notFound();
  return <PageFrame><section className="product-detail"><div className="section-shell product-detail-grid"><div className="product-detail-image"><img src={product.image} alt={`${product.name} K2VOLT`} /></div><div><p className="section-kicker">{product.category}</p><h1>{product.name}</h1><p className="product-detail-spec">{product.spec}</p><p>K2VOLT energy platform engineered for dependable American homes, businesses, and infrastructure. Configuration, certification, and availability are confirmed for each project and market.</p><a className="inline-link" href="/contact">Talk to K2VOLT ↗</a></div></div></section></PageFrame>;
}
