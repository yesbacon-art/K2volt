import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { news } from '../../_data/content';
import { PageFrame } from '../../_components/site';
import { NewsCard } from '../../_components/news-card';
import { editorialContext } from '../../_data/editorial';

const origin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://www.k2volt.com';

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) return {};
  const image = new URL(item.image, origin).toString();
  return {
    title: `${item.title} | K2VOLT`,
    description: item.excerpt,
    openGraph: { title: item.title, description: item.excerpt, type: 'article', images: [{ url: image }] },
    twitter: { card: 'summary_large_image', title: item.title, description: item.excerpt, images: [image] },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const context = editorialContext(item);
  const related = news.filter(entry => entry.slug !== item.slug && editorialContext(entry).section === context.section).slice(0, 3);

  return (
    <PageFrame>
      <article className="editorial-article">
        <header className="section-shell editorial-article-header">
          <nav className="editorial-breadcrumb" aria-label="Breadcrumb"><Link href="/news">News &amp; research</Link><span>/</span><span>{item.category}</span></nav>
          <p className="section-kicker">{context.label}</p>
          <h1>{item.title}</h1>
          <p className="editorial-date">{context.dateLabel}: {item.date} · {item.region}</p>
        </header>
        <figure className={`section-shell editorial-article-image${item.image.includes('legacy-cell') ? ' editorial-product-image' : ''}`}>
          <img src={item.image} alt="" width="1200" height="800" decoding="async" />
          <figcaption>{context.imageNote}</figcaption>
        </figure>
        <div className="article-body">
        <p className="article-lead">{item.excerpt}</p>
        <aside className="editorial-context"><h2>Reading this record</h2><p>{context.note}</p></aside>
        {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {item.source ? (
          <aside className="article-source">
            <span>{context.section === 'regional' ? 'Archived reference link · availability pending' : 'Read the underlying source'}</span>
            <a href={item.source.url} target="_blank" rel="noreferrer">{item.source.label}</a>
          </aside>
        ) : null}
        <hr />
        <Link className="inline-link" href="/news">Back to all stories</Link>
        </div>
      </article>
      {related.length ? <section className="page-section page-section-soft"><div className="section-shell"><p className="section-kicker">Continue reading</p><h2>More from this chapter.</h2><div className="news-grid">{related.map(entry => <NewsCard key={entry.slug} item={entry} />)}</div></div></section> : null}
    </PageFrame>
  );
}
