import type { Metadata } from 'next';
import { PageFrame } from '../_components/site';
import { NewsArchive } from '../_components/news-archive';
import { news } from '../_data/content';

export const metadata: Metadata = {
  title: 'News, Research & K2 Energy Archive | K2VOLT',
  description: 'K2VOLT updates, energy perspectives, and source-linked K2 Energy research history, with Australian references clearly distinguished.',
};

export default function NewsPage() {
  return (
    <PageFrame>
      <section className="editorial-index-header section-shell">
        <p className="section-kicker">Journal / Research / Archive</p>
        <h1>Energy moves forward.<br /><em>So does the story.</em></h1>
        <div className="editorial-index-intro"><p>Ideas shaping the next energy chapter, with a documented look at the battery engineering behind it.</p><p>Company updates, government research records, and regional references are labeled separately. Historical dates are not new product announcements.</p></div>
      </section>
      <section className="news-index" aria-label="News and research library">
        <div className="section-shell">
          <NewsArchive items={[...news].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))} />
        </div>
      </section>
    </PageFrame>
  );
}
