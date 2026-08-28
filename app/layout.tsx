import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      'https://k2volt-energy.yesbacon130976.chatgpt.site',
  ),
  title: 'K2VOLT | Energy Storage for a Smarter Future',
  description:
    'American-owned energy storage for homes, commercial and industrial facilities, and utility-scale projects.',
  icons: {
    icon: '/k2volt-logo.png',
  },
  openGraph: {
    title: 'K2VOLT | Power That Keeps Life Moving',
    description:
      'Intelligent energy storage for American homes, businesses, and the grid.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'K2VOLT energy storage — Power that keeps life moving.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K2VOLT | Power That Keeps Life Moving',
    description:
      'Intelligent energy storage for American homes, businesses, and the grid.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
