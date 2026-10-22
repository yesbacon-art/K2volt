'use client';

import Link from 'next/link';
import { useState } from 'react';
import { productCatalog } from '../_data/content';
import { canCompareProduct, getProductDetails, productFamilies, type Product } from '../_data/products';
import { ProductComparison } from './product-comparison';
import { changeComparison, parseComparison } from '../_data/product-selection';
import { QuerySync, updateQuery } from './query-sync';
import { getInquiryHref } from '../_data/project-inquiry';

export function ProductCatalog() {
  const [urlQuery, setUrlQuery] = useState('');
  const [notice, setNotice] = useState<{ query: string; message: string } | null>(null);
  const comparisonNotice = notice?.query === urlQuery ? notice.message : '';
  function setComparisonNotice(message: string) {
    setNotice({ query: new URLSearchParams(window.location.search).toString(), message });
  }
  const params = new URLSearchParams(urlQuery);
  const family = productFamilies.find(item => item.solution === params.get('family'))?.category ?? 'all';
  const query = params.get('q') ?? '';
  const shortlist = parseComparison(params.get('compare')).filter(id => family === 'all' || productCatalog.find(item => item.slug === id)?.category === family);
  function updateShortlist(ids: string[]) {
    setUrlQuery(updateQuery({ compare: ids.length ? ids.join(',') : null }));
  }
  function toggleComparison(product: Product) {
    const change = changeComparison(shortlist, product);
    updateShortlist(change.ids);
    setComparisonNotice(change.notice);
  }
  const compared = shortlist.map(id => productCatalog.find(item => item.slug === id)).filter((item): item is Product => Boolean(item));
  function chooseFamily(value: string) {
    const selected = productFamilies.find(item => item.category === value);
    const resetComparison = selected && compared.some(item => item.category !== selected.category);
    setUrlQuery(updateQuery({ family: selected?.solution ?? null, ...(resetComparison ? { compare: null } : {}) }, 'push'));
    setComparisonNotice(resetComparison ? 'Comparison cleared so you can choose configurations in this family.' : '');
  }
  const search = query.trim().toLowerCase();
  const products = productCatalog.filter((product) =>
    (family === 'all' || product.category === family) &&
    `${product.name} ${product.spec} ${product.category}`.toLowerCase().includes(search));
  const selectedFamily = productFamilies.find(item => item.category === family);
  const representative = productCatalog.find(item => item.category === family);
  const guidance = representative ? getProductDetails(representative) : null;
  const singleConfiguration = representative && !canCompareProduct(representative);
  return <>
    <QuerySync onChange={setUrlQuery} />
    <div className="catalog-family-index" role="group" aria-label="Browse product families">
      <button type="button" aria-pressed={family === 'all'} onClick={() => chooseFamily('all')}><span>Portfolio</span><strong>All systems</strong><small>{productCatalog.length} configurations</small></button>
      {productFamilies.map(item => <button key={item.category} type="button" aria-pressed={family === item.category} onClick={() => chooseFamily(item.category)}><span>{item.category === 'AIDC power' ? 'AIDC controls' : item.category}</span><strong>{item.label}</strong><small>{productCatalog.filter(product => product.category === item.category).length} {productCatalog.filter(product => product.category === item.category).length === 1 ? 'configuration' : 'configurations'}</small></button>)}
    </div>
    <div className="catalog-controls">
      <label>Product family<select value={family} onChange={(event) => chooseFamily(event.target.value)}><option value="all">All products</option>{productFamilies.map((item) => <option key={item.category} value={item.category}>{item.label}</option>)}</select></label>
      <label>Search products or specifications<input type="search" value={query} onChange={(event) => setUrlQuery(updateQuery({ q: event.target.value || null }))} placeholder="Try 261 kWh, 80 kW or Home" /></label>
    </div>
    {selectedFamily && guidance ? <aside className="catalog-family-guidance"><div><p className="section-kicker">{selectedFamily.label}</p><p>{guidance.description}</p></div><Link className="inline-link" href={`/solutions/${selectedFamily.solution}`}>Explore the application</Link></aside> : null}
    <p className="catalog-count" role="status" aria-live="polite">{products.length} {products.length === 1 ? 'product' : 'products'}{family !== 'all' ? ` · ${family}` : ' across five families'}</p>
    <div className="catalog-compare-tools"><p>{singleConfiguration ? 'One configuration is currently listed in this family. Discuss your site requirements to define the right project scope.' : 'Select two or three products within one family to compare their listed configurations.'}</p>{compared.length ? <a className="inline-link" href="#comparison">View {canCompareProduct(compared[0]) ? 'comparison' : 'configuration'} · {compared.length} selected</a> : null}</div>
    {compared.length ? <div className="catalog-shortlist" aria-label="Selected configurations"><div>{compared.map(item => <button key={item.slug} type="button" onClick={() => { updateShortlist(shortlist.filter(id => id !== item.slug)); setComparisonNotice(`${item.name} removed from comparison.`); }} aria-label={`Remove ${item.name} from comparison`}>{item.name}<span aria-hidden="true">×</span></button>)}</div><div className="shortlist-actions"><button className="shortlist-clear" type="button" onClick={() => { updateShortlist([]); setComparisonNotice('Comparison selection cleared.'); }}>Clear selection</button><Link className="button button-primary" href={getInquiryHref(compared)}>Discuss {compared.length > 1 ? 'these configurations' : 'this configuration'} <span aria-hidden="true">↗</span></Link></div></div> : null}
    <p className="comparison-status" role="status" aria-live="polite">{comparisonNotice}</p>
    {products.length ? <div className="product-catalog-grid">
      {products.map((product) => { const details = getProductDetails(product); return <article className="product-catalog-card" key={product.slug}><Link href={`/products/${product.slug}`} className="product-catalog-link">
        <div className="product-catalog-image"><img src={product.image} alt={product.name} loading="lazy" decoding="async" width="800" height="800" /></div>
        <div className="product-catalog-copy"><p>{product.category}</p><h3>{product.name}</h3><small>{details.format}</small><dl className="catalog-product-metrics">{details.energy ? <div><dt>Listed energy</dt><dd>{details.energy}</dd></div> : null}{details.power ? <div><dt>Listed power</dt><dd>{details.power}</dd></div> : null}{!details.energy && !details.power ? <div><dt>Product type</dt><dd>Control software</dd></div> : null}</dl><b>View specifications &amp; applications</b></div>
      </Link><div className="catalog-card-actions">{canCompareProduct(product) ? <button type="button" aria-pressed={shortlist.includes(product.slug)} onClick={() => toggleComparison(product)} aria-label={`${shortlist.includes(product.slug) ? 'Remove' : 'Add'} ${product.name} ${shortlist.includes(product.slug) ? 'from' : 'to'} comparison`}>{shortlist.includes(product.slug) ? 'Selected for comparison' : 'Add to comparison'}</button> : <Link className="catalog-project-link" href={`/contact?product=${product.slug}`}>Discuss this configuration <span aria-hidden="true">↗</span></Link>}</div></article>; })}
    </div> : <div className="catalog-empty"><h3>No matching products</h3><p>Try a different capacity, power rating or product family.</p><button type="button" className="button button-primary" onClick={() => { setUrlQuery(updateQuery({ family: null, q: null }, 'push')); setComparisonNotice(''); }}>Reset filters</button></div>}
    <p className="catalog-disclaimer">Catalog configurations are a starting point for project discussions. Availability, certification, final specifications and market compatibility are confirmed for each project.</p>
    {compared.length ? <ProductComparison products={compared} onRemove={slug => { updateShortlist(shortlist.filter(id => id !== slug)); setComparisonNotice('Product removed from comparison.'); }} onClear={() => { updateShortlist([]); setComparisonNotice('Comparison selection cleared.'); }} /> : null}
  </>;
}
