'use client';

import { useEffect, useState } from 'react';
import type { NewsItem } from '../_data/content';
import { filterStories, newsSections, type NewsSection } from '../_data/editorial';
import { NewsCard } from './news-card';

export function NewsArchive({ items }: { items: readonly NewsItem[] }) {
  const [section, setSection] = useState<NewsSection>('all');
  const [query, setQuery] = useState('');
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('section');
    const matched = newsSections.find(([value]) => value === requested);
    if (matched) setSection(matched[0]);
  }, []);
  const search = query.trim().toLowerCase();
  const results = filterStories(items, section, query);
  function chooseSection(value: NewsSection) {
    setSection(value);
    const url = new URL(window.location.href);
    if (value === 'all') url.searchParams.delete('section');
    else url.searchParams.set('section', value);
    window.history.replaceState(null, '', url);
  }
  return (
    <div className="news-library" id="archive">
      <div className="news-library-controls">
        <div className="news-filters" role="group" aria-label="Filter stories by category">
          {newsSections.map(([value, label]) => (
            <button key={value} type="button" aria-pressed={section === value} onClick={() => chooseSection(value)}>{label}</button>
          ))}
        </div>
        <label className="news-search">Search the archive
          <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Topic, year or region" />
        </label>
      </div>
      <p className="news-result-count" aria-live="polite" aria-atomic="true">{results.length} {results.length === 1 ? 'story' : 'stories'}{search ? ` matching “${query.trim()}”` : ''}</p>
      {results.length ? <div className="news-grid">{results.map(item => <NewsCard key={item.slug} item={item} />)}</div> : (
        <div className="news-empty"><h3>No stories found.</h3><p>Try another topic or browse all categories.</p><button className="button button-quiet" type="button" onClick={() => { setQuery(''); chooseSection('all'); }}>Reset filters</button></div>
      )}
    </div>
  );
}
