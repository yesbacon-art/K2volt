import type { MetadataRoute } from 'next';
import { news, productCatalog, solutions } from './_data/content';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = 'https://www.k2volt.com';
  const pages = ['', '/solutions', '/products', '/technology', '/heritage', '/company', '/news', '/contact', ...solutions.map((item) => `/solutions/${item.slug}`), ...productCatalog.map((item) => `/products/${item.slug}`), ...news.map((item) => `/news/${item.slug}`)];
  return pages.map((path) => ({ url: `${origin}${path}/` }));
}
