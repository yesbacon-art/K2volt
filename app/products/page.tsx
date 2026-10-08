import type { Metadata } from 'next';
import { PageFrame } from '../_components/site';
import { ProductCatalog } from '../_components/product-catalog';

export const metadata: Metadata = {
  title: 'Product Catalog | Storage, Charging & Energy Controls | K2VOLT',
  description: 'Explore K2VOLT home batteries, commercial storage cabinets, grid-scale BESS, DC chargers and energy controls. Find configurations by product family and specifications.',
  alternates: { canonical: '/products/' },
};
export default function ProductsPage() {
  return <PageFrame><section className="catalog-page"><div className="section-shell"><p className="section-kicker">The K2VOLT portfolio</p><div className="catalog-page-heading"><h1>Find your<br />energy system.</h1><p>Explore the current catalog by application, capacity or power. Every project starts with the right configuration.</p></div><ProductCatalog /></div></section></PageFrame>;
}
