import type { Metadata } from 'next';
import { Arrow, PageFrame, PageHero } from '../_components/site';
import { InquiryForm } from '../_components/inquiry-form';

export const metadata: Metadata = {
  title: 'Contact K2VOLT | Start an Energy Project',
  description: 'Talk to K2VOLT about energy storage, EV charging, or AIDC power infrastructure.',
};

export default function ContactPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Contact K2VOLT"
        title={<>Let&apos;s build what<br /><em>powers next.</em></>}
        description="Tell us about your home, facility, or energy project. We’ll help you identify the right system and the right place to start."
      />
      <section className="page-section">
        <div className="section-shell contact-layout">
          <div>
            <div className="contact-details">
            <div><span>General inquiries</span><a href="mailto:hello@k2volt.com">hello@k2volt.com</a></div>
            <div><span>Project inquiries</span><a href="mailto:hello@k2volt.com?subject=K2VOLT%20Energy%20Infrastructure%20Project">Start an energy project <Arrow /></a></div>
            <div><span>Applications</span><p>Residential · Commercial &amp; Industrial · Utility Scale · EV Charging · AIDC Power</p></div>
            <div><span>Company</span><p>K2VOLT · A K2 Energy brand · United States</p></div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </PageFrame>
  );
}
