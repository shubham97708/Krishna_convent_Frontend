// Same reasoning as CharacterCertificate/printCertificateStyles.js: @page and
// bare html/body rules can't be scoped by a CSS selector, and this app bundles
// all CSS together, so anything put in a static stylesheet leaks into every
// other print template. This is injected only while a TC page is mounted and
// removed on unmount.
const STYLE_ID = "tcb-print-style";

const CSS = `
@media print {
  html,
  body {
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
    background: #ffffff !important;
  }

  .swal-overlay,
  .no-print {
    display: none !important;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  @page {
    size: A4;
    margin: 0;
  }
}
`;

export function addTcPrintStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
}

export function removeTcPrintStyles() {
  const style = document.getElementById(STYLE_ID);
  if (style) style.remove();
}
