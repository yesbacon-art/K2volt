import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { news } from '../../_data/content';
import { Arrow, PageFrame } from '../../_components/site';

const origin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://k2volt-energy.yesbacon130976.chatgpt.site';

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

  return (
    <PageFrame>
      <section className="article-hero">
        <img src={item.image} alt="" />
        <div className="article-hero-wash" aria-hidden="true" />
        <div className="section-shell article-hero-inner">
          <p className="eyebrow"><span /> {item.category}</p>
          <h1>{item.title}</h1>
          <p className="article-hero-meta">{item.region} · {item.date} · K2VOLT</p>
        </div>
      </section>
      <article className="article-body">
        <p className="article-lead">{item.excerpt}</p>
        <hr />
        {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {item.source ? (
          <aside className="article-source">
            <span>Original source</span>
            <a href={item.source.url} target="_blank" rel="noreferrer">{item.source.label} <Arrow /></a>
          </aside>
        ) : null}
        <hr />
        <Link className="inline-link" href="/news">Back to news <Arrow /></Link>
      </article>
    </PageFrame>
  );
}
