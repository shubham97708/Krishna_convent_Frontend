// Browsers suggest document.title (sanitized) as the default filename when a
// user does Print -> Save as PDF. Setting it here means TC/Character
// Certificate/Marksheet printouts save as "StudentName_Class.pdf" instead of
// the page's default title.
function sanitize(value) {
  return (value || "")
    .toString()
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "")
    .replace(/\s+/g, "_");
}

export function setPrintDocumentTitle(name, studentClass) {
  const label = [sanitize(name), sanitize(studentClass)].filter(Boolean).join("_");
  if (label) {
    document.title = label;
  }
}
