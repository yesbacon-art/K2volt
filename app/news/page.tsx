import type { Metadata } from 'next';
import { LatestNews, PageFrame, PageHero } from '../_components/site';

export const metadata: Metadata = {
  title: 'News & Perspectives | K2VOLT',
  description: 'Company news, battery perspectives, and energy-storage insights from K2VOLT.',
};

export default function NewsPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="News & perspectives"
        title={<>Ideas and updates<br />from K2VOLT.</>}
        description="Company announcements, battery perspectives, and practical thinking about the future of energy storage."
      />
      <section className="news-index">
        <div className="section-shell"><LatestNews /></div>
      </section>
    </PageFrame>
  );
}
