import type { ReactNode } from 'react';
import Link from 'next/link';
import { news, solutions, type Solution } from '../_data/content';
import { NewsCard } from './news-card';
export { NewsCard } from './news-card';
export { SiteHeader } from './navigation';
import { SiteHeader } from './navigation';

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function BrandMark() {
  return (
    <span className="brand-picture" aria-label="K2VOLT">
      <img src="/images/k2volt-logo-official.png" alt="K2VOLT" />
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="K2VOLT home"><BrandMark /></Link>
          <p>A K2 Energy brand. American energy systems for a more resilient future.</p>
        </div>
        <div>
          <strong>Solutions</strong>
          <Link href="/products">Product catalog</Link>
          {solutions.map((solution) => (
            <Link href={`/solutions/${solution.slug}`} key={solution.slug}>{solution.label}</Link>
          ))}
        </div>
        <div>
          <strong>Company</strong>
          <Link href="/technology">Technology</Link>
          <Link href="/heritage">K2 History</Link>
          <Link href="/company">About K2VOLT</Link>
          <Link href="/company#american-future">U.S. Future</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-status">
          <span><i /> Battery innovation since 2006</span>
          <span>© 2026 K2VOLT · A K2 Energy brand</span>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></>;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className={`page-hero${image ? ' page-hero-image' : ''}`}>
      {image && <img src={image} alt={alt ?? ''} />}
      <div className="page-hero-wash" aria-hidden="true" />
      <div className="section-shell page-hero-inner">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function SolutionPreview({ solution }: { solution: Solution }) {
  return (
    <article className="solution-preview">
      <Link className="solution-preview-image" href={`/solutions/${solution.slug}`}>
        <img src={solution.image} alt={solution.alt} loading="lazy" decoding="async" />
      </Link>
      <div className="solution-preview-copy">
        <p>{solution.label}</p>
        <h3>{solution.name}</h3>
        <span>{solution.summary}</span>
        <Link className="inline-link" href={`/solutions/${solution.slug}`}>View system <Arrow /></Link>
      </div>
    </article>
  );
}

export function LatestNews() {
  return (
    <div className="news-grid">
      {news.map((item) => <NewsCard item={item} key={item.slug} />)}
    </div>
  );
}

export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="section-shell project-cta-inner">
        <p className="section-kicker">Start a conversation</p>
        <h2>Let&apos;s build what<br />powers next.</h2>
        <p>Tell us about your home, facility, charging, data-center, or grid project. We&apos;ll help you identify the right place to start.</p>
        <Link className="button button-primary" href="/contact">Talk to K2VOLT <Arrow /></Link>
      </div>
    </section>
  );
}
