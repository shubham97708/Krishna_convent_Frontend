// @page and bare html/body selectors can't be scoped to one component --
// they apply document-wide. Since this app bundles all CSS together
// (Web/src/pages/agent-portal/dashboard/Marksheet/A4.css, tc.css, etc. all
// end up in the same stylesheet), putting a landscape @page rule in
// characterCertificate.css leaked into every other print template (TC,
// Marksheet), forcing their portrait-designed pages into landscape.
//
// Instead, this style tag is injected only while CharacterCertificate is
// mounted and removed on unmount, so it never affects other pages' prints.
const STYLE_ID = "cc-print-style";

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
    size: A4 landscape;
    margin: 0;
  }
}
`;

export function addCertificatePrintStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
}

export function removeCertificatePrintStyles() {
  const style = document.getElementById(STYLE_ID);
  if (style) style.remove();
}
