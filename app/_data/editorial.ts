import type { NewsItem } from './content';

export const newsSections = [
  ['all', 'All stories'],
  ['company', 'Company'],
  ['perspectives', 'Perspectives'],
  ['research', 'U.S. research archive'],
  ['regional', 'Australian references'],
] as const;

export type NewsSection = (typeof newsSections)[number][0];

export function filterStories(items: readonly NewsItem[], section: NewsSection, query: string) {
  const search = query.trim().toLowerCase();
  return items.filter(item =>
    (section === 'all' || editorialContext(item).section === section) &&
    (!search || `${item.title} ${item.excerpt} ${item.date} ${item.region}`.toLowerCase().includes(search))
  );
}

export function editorialContext(item: NewsItem) {
  if (item.region === 'Australia') return {
    section: 'regional' as const,
    label: 'Regional reference · under review',
    dateLabel: 'Reference year / date',
    note: 'The original Australian page is currently unavailable for review. Its claims and relationship to U.S. K2 Energy are not independently confirmed here. This entry does not establish K2VOLT product approval or a corporate relationship.',
    imageNote: 'Illustrative image · not a photograph of the historical Australian event or product.',
  };
  if (item.source?.url.includes('sbir.gov')) return {
    section: 'research' as const,
    label: 'U.S. government research record',
    dateLabel: 'Historical award date / year',
    note: 'This is a historical research award to K2 Energy Solutions. It is not evidence of a completed deployment, current procurement, government endorsement, or certification of a K2VOLT product.',
    imageNote: 'Illustrative K2 Energy product image · not a photograph of the awarded research system.',
  };
  if (item.source?.url.includes('leg.state.nv.us')) return {
    section: 'research' as const,
    label: 'Nevada legislative meeting record',
    dateLabel: 'Historical record date',
    note: 'This archive summarizes a company presentation recorded in Nevada legislative meeting minutes. Project descriptions refer to development work reported at that time, not verified completed installations.',
    imageNote: 'Illustrative K2 Energy product image · not an image from the legislative meeting.',
  };
  if (item.source) return {
    section: 'research' as const,
    label: 'Historical company announcement',
    dateLabel: 'Original announcement date',
    note: 'This article summarizes K2 Energy Solutions’ historical company release. It does not imply a present-day K2VOLT contract or endorsement. Read the original release for its full context.',
    imageNote: 'K2VOLT concept visualization · not the historical NAVSEA system.',
  };
  return {
    section: item.category === 'Company' ? 'company' as const : 'perspectives' as const,
    label: item.category === 'Company' ? 'K2VOLT company update' : 'K2VOLT editorial perspective',
    dateLabel: 'Published',
    note: 'Company and editorial content describes K2VOLT’s positioning and system approach. Product availability, technical specifications, and project scope must be confirmed for each application.',
    imageNote: 'K2VOLT illustrative brand imagery.',
  };
}
