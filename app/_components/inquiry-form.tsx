'use client';

import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { productCatalog } from '../_data/content';
import { inquiryFields, inquiryValidationOrder, validateInquiry, type InquiryErrors, type InquiryValues } from '../_data/inquiry';
import { buildInquiryDraft, getComparisonHref, getInquiryApplication, getInquiryProducts } from '../_data/project-inquiry';
import type { Product } from '../_data/products';
import { QuerySync } from './query-sync';

export function InquiryForm() {
  const [urlQuery, setUrlQuery] = useState('');
  const products = getInquiryProducts(new URLSearchParams(urlQuery));
  return <><QuerySync onChange={setUrlQuery} /><InquiryFields key={products.map(item => item.slug).join(',') || 'general'} initialProducts={products} /></>;
}

function InquiryFields({ initialProducts }: { initialProducts: Product[] }) {
  const multiple = initialProducts.length > 1;
  const [product, setProduct] = useState<string>(initialProducts[0]?.name ?? '');
  const selectedProducts = multiple ? initialProducts : productCatalog.filter(item => item.name === product);
  const [application, setApplication] = useState(getInquiryApplication(initialProducts));
  const [applicationEdited, setApplicationEdited] = useState(false);
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const [notice, setNotice] = useState('');
  const [errors, setErrors] = useState<InquiryErrors>({});
  const copyVersion = useRef(0);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    copyVersion.current += 1;
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
    setDraft(buildInquiryDraft(values, selectedProducts));
    setNotice('Your draft is ready. It has not been sent. Open your email app or copy the draft to send it to hello@k2volt.com.');
  }
  function change(event: FormEvent<HTMLFormElement>) {
    copyVersion.current += 1;
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
    const version = ++copyVersion.current;
    try {
      await navigator.clipboard.writeText(`To: hello@k2volt.com\nSubject: ${draft.subject}\n\n${draft.body}`);
      if (version === copyVersion.current) setNotice('Draft copied. Paste it into your email and send it to hello@k2volt.com.');
    } catch {
      if (version === copyVersion.current) setNotice('Copy is unavailable in this browser. Select and copy the draft below.');
    }
  }
  return <div className="inquiry-panel" id="project-inquiry" tabIndex={-1}>
    <p className="section-kicker">Project inquiry</p><h2>Start with your site.</h2>
    <p className="inquiry-intro">Prepare a project brief for our team. You will review and send it using your own email app.</p>
    {selectedProducts.length ? <aside className="inquiry-selection" aria-labelledby="inquiry-selection-title">
      <div className="inquiry-selection-heading"><h3 id="inquiry-selection-title">{multiple ? `${selectedProducts.length} configurations to discuss` : 'Your selected configuration'}</h3><Link href={getComparisonHref(selectedProducts)}>{multiple ? 'Edit comparison' : 'View in catalog'} <span aria-hidden="true">↗</span></Link></div>
      <ul>{selectedProducts.map(item => <li key={item.slug}><img src={item.image} alt="" width="64" height="64" decoding="async" /><div><Link href={`/products/${item.slug}`}>{item.name}</Link><p>{item.spec}</p></div></li>)}</ul>
      <p>{multiple ? 'Your complete shortlist will be included in one email draft. These are alternatives to discuss, not a combined system.' : 'The model, listed catalog values and product link will be included in your draft.'}</p>
      {multiple ? <small>Changing the comparison starts a new project brief.</small> : null}
    </aside> : null}
    <form onSubmit={prepare} onChange={change} noValidate>
      {Object.keys(errors).length ? <p className="inquiry-error-summary" role="alert">Please correct the highlighted fields. Your inquiry draft has not been prepared or sent.</p> : null}
      <div className="inquiry-fields">
        <label>Your name<input name="name" autoComplete="name" required maxLength={120} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'inquiry-name-error' : undefined} />{errors.name ? <span id="inquiry-name-error" className="inquiry-field-error">{errors.name}</span> : null}</label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'inquiry-email-error' : undefined} />{errors.email ? <span id="inquiry-email-error" className="inquiry-field-error">{errors.email}</span> : null}</label>
        <label>Company <span>(optional)</span><input name="company" autoComplete="organization" maxLength={160} /></label>
        <label>Project location<input name="location" placeholder="City, state / country" required maxLength={160} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? 'inquiry-location-error' : undefined} />{errors.location ? <span id="inquiry-location-error" className="inquiry-field-error">{errors.location}</span> : null}</label>
        <label>Application<select name="application" required value={application} onChange={event => { setApplication(event.target.value); setApplicationEdited(true); }} aria-invalid={Boolean(errors.application)} aria-describedby={errors.application ? 'inquiry-application-error' : undefined}><option value="" disabled>Select an application</option><option>Home energy storage</option><option>Commercial & industrial storage</option><option>Utility-scale storage</option><option>EV charging</option><option>AIDC power & energy controls</option><option>Distribution / partnership</option></select>{errors.application ? <span id="inquiry-application-error" className="inquiry-field-error">{errors.application}</span> : null}</label>
        {multiple ? <div className="inquiry-product-summary"><span>Products</span><p>{selectedProducts.length} configurations selected above</p><input type="hidden" name="product" value={selectedProducts.map(item => item.name).join(', ')} /></div> : <label>Product<select name="product" value={product} onChange={event => { const name = event.target.value; setProduct(name); if (!applicationEdited) setApplication(getInquiryApplication(productCatalog.filter(item => item.name === name))); }}><option value="">Help me choose</option>{productCatalog.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label>}
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
