import { productCatalog } from './content';
import { getProductDetails, type Product } from './products';
import { parseComparison } from './product-selection';
import { absoluteSiteUrl } from './metadata';
import type { InquiryValues } from './inquiry';

const applicationBySolution: Record<string, string> = {
  residential: 'Home energy storage',
  'commercial-industrial': 'Commercial & industrial storage',
  'utility-scale': 'Utility-scale storage',
  'ev-charging': 'EV charging',
  'aidc-power': 'AIDC power & energy controls',
};

export function getInquiryProducts(params: URLSearchParams): Product[] {
  const product = productCatalog.find(item => item.slug === params.get('product'));
  if (product) return [product];
  return parseComparison(params.get('compare')).map(id => productCatalog.find(item => item.slug === id)!);
}

export function getInquiryApplication(products: readonly Product[]) {
  return products.length ? applicationBySolution[getProductDetails(products[0]).solution] ?? '' : '';
}

export function getInquiryHref(products: readonly Product[]) {
  const ids = parseComparison(products.map(item => item.slug).join(','));
  if (!ids.length) return '/contact#project-inquiry';
  const params = new URLSearchParams(ids.length === 1 ? { product: ids[0] } : { compare: ids.join(',') });
  return `/contact?${params}#project-inquiry`;
}

export function getComparisonHref(products: readonly Product[]) {
  const ids = parseComparison(products.map(item => item.slug).join(','));
  if (!ids.length) return '/products/';
  const product = productCatalog.find(item => item.slug === ids[0])!;
  const params = new URLSearchParams({ family: getProductDetails(product).solution, compare: ids.join(',') });
  return `/products/?${params}#comparison`;
}

export function buildInquiryDraft(values: InquiryValues, products: readonly Product[]) {
  return {
    subject: `K2VOLT inquiry — ${products.length > 1 ? `${products.length} catalog configurations` : values.product || values.application}`,
    body: [
      `Name: ${values.name}`, `Email: ${values.email}`, `Company: ${values.company || 'Not specified'}`,
      `Project location: ${values.location}`, `Application: ${values.application}`, `Timeline: ${values.timeline}`,
      '', 'Products under consideration:',
      ...(products.length ? products.flatMap(product => [
        `- ${product.name} — ${product.spec}`,
        `  ${absoluteSiteUrl(`/products/${product.slug}/`)}`,
      ]) : ['Please recommend a system.']),
      ...(products.length > 1 ? ['', `Catalog comparison: ${absoluteSiteUrl(getComparisonHref(products))}`,
        'These are alternative configurations for discussion, not a combined system design.'] : []),
      '', 'Project brief:', values.brief,
      '', 'Listed catalog values and final project compatibility require confirmation.',
    ].join('\n'),
  };
}
