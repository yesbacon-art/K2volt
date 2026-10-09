'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { getProductDetails, type Product } from '../_data/products';

export function ProductComparison({ products, onRemove, onClear }: {
  products: Product[];
  onRemove: (slug: string) => void;
  onClear: () => void;
}) {
  useEffect(() => {
    if (window.location.hash === '#comparison') document.getElementById('comparison')?.scrollIntoView();
  }, []);
  const details = products.map(getProductDetails);
  const extraLabels = [...new Set(details.flatMap(item => item.extra ? [item.extra[0]] : []))];
  const rows = [
    { label: 'Equipment format', values: details.map(item => item.format) },
    { label: 'Listed energy capacity', values: details.map(item => item.energy ?? (item.solution === 'aidc-power' ? 'Not applicable — software' : 'Not listed — confirm')) },
    { label: 'Listed power', values: details.map(item => item.power ?? (item.solution === 'aidc-power' ? 'Not applicable — software' : 'Not listed — confirm')) },
    ...extraLabels.map(label => ({ label, values: details.map(item => item.extra?.[0] === label ? item.extra[1] : 'Not listed — confirm') })),
  ];
  return <section className="product-comparison" id="comparison" aria-labelledby="comparison-title">
    <div className="comparison-heading"><div><p className="section-kicker">Your shortlist</p><h2 id="comparison-title">Compare configurations.</h2></div><button type="button" className="button button-quiet" onClick={onClear}>Clear selection</button></div>
    {products.length < 2 ? <p className="comparison-guidance">Select one more product from the same family to compare. You can select up to three.</p> : null}
    <div className="comparison-table-scroll" role="region" aria-label="Product comparison table; scroll horizontally on smaller screens" tabIndex={0}>
      <table className="comparison-table"><caption className="sr-only">Listed catalog configurations; not certified technical specifications</caption><thead><tr><th scope="col">Catalog configuration</th>{products.map(product => <th scope="col" key={product.slug}><img src={product.image} alt="" width="240" height="180" loading="lazy" decoding="async" /><Link href={`/products/${product.slug}`}>{product.name}</Link><button type="button" onClick={() => onRemove(product.slug)} aria-label={`Remove ${product.name} from comparison`}>Remove</button></th>)}</tr></thead><tbody>
        {rows.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={products[index].slug}>{value}</td>)}</tr>)}
        <tr><th scope="row">Project planning</th>{details.map((item, index) => <td key={products[index].slug}><ul>{item.requirements.map(requirement => <li key={requirement}>{requirement}</li>)}</ul></td>)}</tr>
        <tr><th scope="row">Technical documentation</th>{products.map(product => <td key={product.slug}>Dimensions, detailed ratings, certifications and warranty terms require confirmation.<Link className="inline-link" href={`/products/${product.slug}#documentation`}>Review documentation scope</Link></td>)}</tr>
        <tr><th scope="row">Next step</th>{products.map(product => <td key={product.slug}><Link className="inline-link" href={`/contact?product=${product.slug}`}>Discuss {product.name}</Link></td>)}</tr>
      </tbody></table>
    </div>
    <p className="comparison-disclaimer">Listed capacity is not a guarantee of usable energy, runtime or delivered performance. Compare within one family, then confirm the electrical, installation and service scope for your project.</p>
  </section>;
}
