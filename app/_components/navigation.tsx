'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  ['/solutions', 'Solutions'], ['/products', 'Products'], ['/technology', 'Technology'],
  ['/heritage', 'K2 History'], ['/company', 'Company'], ['/news', 'News'],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="K2VOLT home" onClick={() => setOpen(false)}>
        <span className="brand-picture"><img src="/images/k2volt-logo-official.png" alt="K2VOLT" /></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([href, label]) => <Link key={href} href={href} aria-current={!href.includes('#') && pathname === href ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <button className="menu-toggle" type="button" ref={button} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={!href.includes('#') && pathname === href ? 'page' : undefined}>{label}</Link>)}
        <Link href="/company#store-network" onClick={() => setOpen(false)}>Future U.S. network</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Start a project</Link>
      </nav>
    </header>
  </>;
}
