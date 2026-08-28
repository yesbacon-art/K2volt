import type { ReactNode } from 'react';
import { news, solutions, type NewsItem, type Solution } from '../_data/content';

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function BrandMark() {
  return (
    <span className="brand-picture" aria-label="K2VOLT">
      <img src="/images/k2volt-logo-official.png" alt="K2VOLT" />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="K2VOLT home">
        <BrandMark />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/solutions">Energy Storage</a>
        <a href="/technology">Technology</a>
        <a href="/heritage">K2 Heritage</a>
        <a href="/company">Company</a>
        <a href="/news">News</a>
      </nav>
      <a className="nav-cta" href="/contact">
        Talk to K2VOLT <Arrow />
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <a href="/" aria-label="K2VOLT home"><BrandMark /></a>
          <p>A K2 Energy brand. American energy storage for a more resilient future.</p>
        </div>
        <div>
          <strong>Energy Storage</strong>
          {solutions.map((solution) => (
            <a href={`/solutions/${solution.slug}`} key={solution.slug}>{solution.label}</a>
          ))}
        </div>
        <div>
          <strong>Company</strong>
          <a href="/technology">Technology</a>
          <a href="/heritage">K2 Heritage</a>
          <a href="/company">About K2VOLT</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>
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
  return <main><SiteHeader />{children}<SiteFooter /></main>;
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
      <a className="solution-preview-image" href={`/solutions/${solution.slug}`}>
        <img src={solution.image} alt={solution.alt} />
      </a>
      <div className="solution-preview-copy">
        <p>{solution.label}</p>
        <h3>{solution.name}</h3>
        <span>{solution.summary}</span>
        <a className="inline-link" href={`/solutions/${solution.slug}`}>View system <Arrow /></a>
      </div>
    </article>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="news-card">
      <a className="news-card-image" href={`/news/${item.slug}`}>
        <img src={item.image} alt="" />
      </a>
      <p>{item.category} · {item.date}</p>
      <h3><a href={`/news/${item.slug}`}>{item.title}</a></h3>
      <span>{item.excerpt}</span>
      <a className="inline-link" href={`/news/${item.slug}`}>Read article <Arrow /></a>
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
        <p>Tell us about your home, facility, or energy project. We&apos;ll help you identify the right place to start.</p>
        <a className="button button-primary" href="/contact">Talk to K2VOLT <Arrow /></a>
      </div>
    </section>
  );
}
