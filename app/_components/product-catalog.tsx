'use client';

import Link from 'next/link';
import { useState } from 'react';
import { productCatalog } from '../_data/content';
import { productFamilies } from '../_data/products';

export function ProductCatalog() {
  const [family, setFamily] = useState('all');
  const [query, setQuery] = useState('');
  const search = query.trim().toLowerCase();
  const products = productCatalog.filter((product) =>
    (family === 'all' || product.category === family) &&
    `${product.name} ${product.spec} ${product.category}`.toLowerCase().includes(search));
  return <>
    <div className="catalog-controls">
      <label>Product family<select value={family} onChange={(event) => setFamily(event.target.value)}><option value="all">All products</option>{productFamilies.map((item) => <option key={item.category} value={item.category}>{item.label}</option>)}</select></label>
      <label>Search products or specifications<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try 261 kWh, 80 kW or Home" /></label>
    </div>
    <p className="catalog-count" role="status" aria-live="polite">{products.length} {products.length === 1 ? 'product' : 'products'}{family !== 'all' ? ` · ${family}` : ' across five families'}</p>
    {products.length ? <div className="product-catalog-grid">
      {products.map((product) => <Link href={`/products/${product.slug}`} className="product-catalog-card" key={product.slug}>
        <div className="product-catalog-image"><img src={product.image} alt={product.name} loading="lazy" decoding="async" width="800" height="800" /></div>
        <div className="product-catalog-copy"><p>{product.category}</p><h3>{product.name}</h3><small>{product.spec}</small><b>Explore product</b></div>
      </Link>)}
    </div> : <div className="catalog-empty"><h3>No matching products</h3><p>Try a different capacity, power rating or product family.</p><button type="button" className="button button-primary" onClick={() => { setFamily('all'); setQuery(''); }}>Reset filters</button></div>}
    <p className="catalog-disclaimer">Catalog configurations are a starting point for project discussions. Availability, certification, final specifications and market compatibility are confirmed for each project.</p>
  </>;
}
