import Link from 'next/link';
import type { NewsItem } from '../_data/content';
import { editorialContext } from '../_data/editorial';

export function NewsCard({ item }: { item: NewsItem }) {
  const context = editorialContext(item);
  return (
    <article className="news-card">
      <Link className="news-card-image" href={`/news/${item.slug}`} aria-label={`Read: ${item.title}`}>
        <img src={item.image} alt="" loading="lazy" decoding="async" width="1200" height="800" />
      </Link>
      <p>{item.region} · {item.date}</p>
      <h3><Link href={`/news/${item.slug}`}>{item.title}</Link></h3>
      <span>{item.excerpt}</span>
      <p className="news-source-kind">{context.label}</p>
      <Link className="inline-link" href={`/news/${item.slug}`}>Read article</Link>
    </article>
  );
}
