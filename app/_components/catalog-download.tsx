'use client';

export function CatalogDownload({ filename, content }: { filename: string; content: string }) {
  function download() {
    const url = URL.createObjectURL(new Blob([content], {type: 'text/plain;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <button type="button" className="button button-quiet" onClick={download}>Download catalog overview (.txt)</button>;
}
