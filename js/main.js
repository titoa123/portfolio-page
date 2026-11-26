// Aktualisiert das Jahr im Footer. Ohne JavaScript bleibt der statische Wert stehen.
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const projectLinks = [...document.querySelectorAll('.project-list a')];
const projectArticles = projectLinks.map(link => document.getElementById(link.hash.slice(1)));

function selectProject(hash) {
  const selected = projectLinks.findIndex(link => link.hash === hash);
  if (selected < 0) return false;
  projectLinks.forEach((link, index) => {
    projectArticles[index].hidden = index !== selected;
    if (index === selected) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  return true;
}

// Vor dem nativen Sprung auch ein momentan verborgenes Ziel einblenden.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (link && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    selectProject(link.hash);
  }
});
window.addEventListener('hashchange', () => {
  if (selectProject(location.hash)) document.querySelector(location.hash).scrollIntoView();
});
if (!selectProject(location.hash)) selectProject(projectLinks[0].hash);

// Der oberste erreichte Abschnitt bestimmt die aktive Navigation.
const sectionLinks = [...document.querySelectorAll('.nav-list a')];
const sections = sectionLinks.map(link => document.querySelector(link.hash));
function updateNavigation() {
  const boundary = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 2;
  let current = 0;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= boundary) current = index;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
    current = sections.length - 1;
  }
  sectionLinks.forEach((link, index) => {
    if (index === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
