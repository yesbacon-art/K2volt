'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type QuerySyncProps = { onChange: (query: string) => void };

function QueryObserver({ onChange }: QuerySyncProps) {
  const query = useSearchParams().toString();
  useEffect(() => onChange(query), [query, onChange]);
  return null;
}

// Keep catalog and archive HTML prerendered; only the URL observer needs Suspense.
export function QuerySync(props: QuerySyncProps) {
  return <Suspense fallback={null}><QueryObserver {...props} /></Suspense>;
}

export function updateQuery(changes: Record<string, string | null>, mode: 'push' | 'replace' = 'replace') {
  const url = new URL(window.location.href);
  for (const [key, value] of Object.entries(changes)) {
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  if (url.href !== window.location.href) {
    // Next copies its internal state itself. Passing that state back skips URL synchronization.
    if (mode === 'push') window.history.pushState(null, '', url);
    else window.history.replaceState(null, '', url);
  }
  return url.searchParams.toString();
}
