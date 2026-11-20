// Aktualisiert das Jahr im Footer. Ohne JavaScript bleibt der statische Wert stehen.
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
