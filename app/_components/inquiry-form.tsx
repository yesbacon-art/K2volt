'use client';

import { useState, type FormEvent } from 'react';
import { productCatalog } from '../_data/content';
import { inquiryFields, inquiryValidationOrder, validateInquiry, type InquiryErrors, type InquiryValues } from '../_data/inquiry';
import { QuerySync } from './query-sync';

export function InquiryForm() {
  const [urlQuery, setUrlQuery] = useState('');
  const requested = new URLSearchParams(urlQuery).get('product');
  const selected = productCatalog.find(item => item.slug === requested);
  return <><QuerySync onChange={setUrlQuery} /><InquiryFields key={selected?.slug ?? 'general'} initialProduct={selected?.name ?? ''} /></>;
}

function InquiryFields({ initialProduct }: { initialProduct: string }) {
  const [product, setProduct] = useState(initialProduct);
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const [notice, setNotice] = useState('');
  const [errors, setErrors] = useState<InquiryErrors>({});
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const input = Object.fromEntries(inquiryFields.map((field) => [field, String(formData.get(field) ?? '')])) as InquiryValues;
    const { values, errors: nextErrors } = validateInquiry(input);
    setErrors(nextErrors);
    const firstError = inquiryValidationOrder.find((field) => nextErrors[field]);
    if (firstError) {
      setDraft(null);
      setNotice('');
      const field = event.currentTarget.elements.namedItem(firstError);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    const value = (name: keyof InquiryValues) => values[name];
    setDraft({ subject: `K2VOLT inquiry — ${value('product') || value('application')}`, body: [
      `Name: ${value('name')}`, `Email: ${value('email')}`, `Company: ${value('company') || 'Not specified'}`,
      `Project location: ${value('location')}`, `Application: ${value('application')}`,
      `Product: ${value('product') || 'Please recommend a system'}`, `Timeline: ${value('timeline')}`,
      '', 'Project brief:', value('brief'),
    ].join('\n') });
    setNotice('Your draft is ready. It has not been sent. Open your email app or copy the draft to send it to hello@k2volt.com.');
  }
  function change(event: FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).name;
    const field = inquiryValidationOrder.find((item) => item === name);
    if (field) setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setDraft(null);
    setNotice('');
  }
  async function copy() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(`To: hello@k2volt.com\nSubject: ${draft.subject}\n\n${draft.body}`); setNotice('Draft copied. Paste it into your email and send it to hello@k2volt.com.'); }
    catch { setNotice('Copy is unavailable in this browser. Select and copy the draft below.'); }
  }
  return <div className="inquiry-panel">
    <p className="section-kicker">Project inquiry</p><h2>Start with your site.</h2>
    <p className="inquiry-intro">Prepare a project brief for our team. You will review and send it using your own email app.</p>
    <form onSubmit={prepare} onChange={change} noValidate>
      {Object.keys(errors).length ? <p className="inquiry-error-summary" role="alert">Please correct the highlighted fields. Your inquiry draft has not been prepared or sent.</p> : null}
      <div className="inquiry-fields">
        <label>Your name<input name="name" autoComplete="name" required maxLength={120} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'inquiry-name-error' : undefined} />{errors.name ? <span id="inquiry-name-error" className="inquiry-field-error">{errors.name}</span> : null}</label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'inquiry-email-error' : undefined} />{errors.email ? <span id="inquiry-email-error" className="inquiry-field-error">{errors.email}</span> : null}</label>
        <label>Company <span>(optional)</span><input name="company" autoComplete="organization" maxLength={160} /></label>
        <label>Project location<input name="location" placeholder="City, state / country" required maxLength={160} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? 'inquiry-location-error' : undefined} />{errors.location ? <span id="inquiry-location-error" className="inquiry-field-error">{errors.location}</span> : null}</label>
        <label>Application<select name="application" required defaultValue="" aria-invalid={Boolean(errors.application)} aria-describedby={errors.application ? 'inquiry-application-error' : undefined}><option value="" disabled>Select an application</option><option>Home energy storage</option><option>Commercial & industrial storage</option><option>Utility-scale storage</option><option>EV charging</option><option>AIDC power & energy controls</option><option>Distribution / partnership</option></select>{errors.application ? <span id="inquiry-application-error" className="inquiry-field-error">{errors.application}</span> : null}</label>
        <label>Product<select name="product" value={product} onChange={(event) => setProduct(event.target.value)}><option value="">Help me choose</option>{productCatalog.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label>
        <label>Project timeline<select name="timeline" defaultValue="Exploring options"><option>Exploring options</option><option>Within 3 months</option><option>3–12 months</option><option>More than 12 months</option></select></label>
        <label className="inquiry-brief">Tell us about your project<textarea name="brief" rows={5} required minLength={10} maxLength={3000} placeholder="Power or capacity needs, backup duration, site requirements and your main objectives." aria-invalid={Boolean(errors.brief)} aria-describedby={errors.brief ? 'inquiry-brief-error' : undefined} />{errors.brief ? <span id="inquiry-brief-error" className="inquiry-field-error">{errors.brief}</span> : null}</label>
      </div>
      <p className="inquiry-privacy">This form prepares an email draft only. Your information is not submitted to a website server or saved by this page. Sending takes place in your email service.</p>
      <button type="submit" className="button button-primary">Prepare inquiry</button>
    </form>
    <p className="inquiry-status" role="status" aria-live="polite">{notice}</p>
    {draft ? <section className="inquiry-draft" aria-label="Prepared inquiry">
      <h3>Review your inquiry</h3><p>To: hello@k2volt.com</p><label>Email subject<input readOnly value={draft.subject} /></label><label>Email draft<textarea readOnly rows={12} value={draft.body} /></label>
      <div className="draft-actions"><a className="button button-primary" href={`mailto:hello@k2volt.com?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email app</a><button className="button button-quiet" type="button" onClick={copy}>Copy draft</button></div>
      <p>If your email app does not open, copy this draft into your preferred email service. This page cannot confirm delivery.</p>
    </section> : null}
  </div>;
}
