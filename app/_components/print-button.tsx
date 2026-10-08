'use client';
export function PrintButton() {
  return <button className="button button-quiet" type="button" onClick={() => window.print()}>Save product overview as PDF</button>;
}
