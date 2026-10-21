const siteOrigin = 'https://www.k2volt.com';

export function absoluteSiteUrl(path: string) {
  return new URL(path, siteOrigin).toString();
}

export function canonicalUrl(path: string) {
  const url = new URL(path, siteOrigin);
  const pathname = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
  return new URL(pathname, siteOrigin).toString();
}
