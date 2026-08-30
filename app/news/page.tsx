import type { Metadata } from 'next';
import { LatestNews, PageFrame, PageHero } from '../_components/site';

export const metadata: Metadata = {
  title: 'News, Research & K2 Energy Archive | K2VOLT',
  description: 'K2VOLT news plus researched K2 Energy milestones and source-linked archives from the United States and Australia.',
};

export default function NewsPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="News, research & archive"
        title={<>The K2 story,<br />still unfolding.</>}
        description="Current K2VOLT updates and a growing, source-linked record of K2 Energy development across the United States and Australia."
      />
      <section className="news-index">
        <div className="section-shell news-archive-intro">
          <div><p className="section-kicker">United States + Australia</p><h2>News with<br />historical context.</h2></div>
          <p>Our archive connects company announcements with original K2 sources, U.S. government program records, and verified Australian market updates. New material can be added as it is confirmed.</p>
        </div>
        <div className="section-shell news-archive-list"><LatestNews /></div>
      </section>
    </PageFrame>
  );
}
