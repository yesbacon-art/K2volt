'use client';

import { useState } from 'react';
import type { NewsItem } from '../_data/content';
import { filterStories, newsSections, type NewsSection } from '../_data/editorial';
import { NewsCard } from './news-card';
import { QuerySync, updateQuery } from './query-sync';

export function NewsArchive({ items }: { items: readonly NewsItem[] }) {
  const [urlQuery, setUrlQuery] = useState('');
  const params = new URLSearchParams(urlQuery);
  const section = newsSections.find(([value]) => value === params.get('section'))?.[0] ?? 'all';
  const query = params.get('q') ?? '';
  const search = query.trim().toLowerCase();
  const results = filterStories(items, section, query);
  function chooseSection(value: NewsSection) {
    setUrlQuery(updateQuery({ section: value === 'all' ? null : value }, 'push'));
  }
  return (
    <div className="news-library" id="archive">
      <QuerySync onChange={setUrlQuery} />
      <div className="news-library-controls">
        <div className="news-filters" role="group" aria-label="Filter stories by category">
          {newsSections.map(([value, label]) => (
            <button key={value} type="button" aria-pressed={section === value} onClick={() => chooseSection(value)}>{label}</button>
          ))}
        </div>
        <label className="news-search">Search the archive
          <input type="search" value={query} onChange={event => setUrlQuery(updateQuery({ q: event.target.value || null }))} placeholder="Topic, year or region" />
        </label>
      </div>
      <p className="news-result-count" aria-live="polite" aria-atomic="true">{results.length} {results.length === 1 ? 'story' : 'stories'}{search ? ` matching “${query.trim()}”` : ''}</p>
      {results.length ? <div className="news-grid">{results.map(item => <NewsCard key={item.slug} item={item} />)}</div> : (
        <div className="news-empty"><h3>No stories found.</h3><p>Try another topic or browse all categories.</p><button className="button button-quiet" type="button" onClick={() => setUrlQuery(updateQuery({ section: null, q: null }, 'push'))}>Reset filters</button></div>
      )}
    </div>
  );
}
