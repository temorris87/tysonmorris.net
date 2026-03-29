export function setYear(elementId = 'year') {
  const el = document.getElementById(elementId);
  if (el) el.textContent = new Date().getFullYear();
}
