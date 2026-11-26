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

const catalog = document.querySelector('#projekte');
const control = catalog.querySelector('.tour-control');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const directEntry = selectProject(location.hash);
if (!directEntry) selectProject(projectLinks[0].hash);

let playing = !motion.matches && !directEntry && !catalog.contains(document.activeElement);
let visible = false;
let hovering = false;
let timer;

function scheduleTour() {
  clearTimeout(timer);
  control.textContent = playing ? 'Rundgang pausieren' : 'Rundgang starten';
  if (!playing || !visible || document.hidden || hovering) return;
  timer = setTimeout(() => {
    const current = projectArticles.findIndex(article => !article.hidden);
    selectProject(projectLinks[(current + 1) % projectLinks.length].hash);
    scheduleTour();
  }, 10000);
}

function pauseTour() {
  playing = false;
  scheduleTour();
}

if ('IntersectionObserver' in window) {
  control.hidden = false;
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    scheduleTour();
  }).observe(catalog);
  catalog.addEventListener('pointerenter', event => {
    hovering = event.pointerType === 'mouse';
    scheduleTour();
  });
  catalog.addEventListener('pointerleave', () => {
    hovering = false;
    scheduleTour();
  });
  // Beim Mausklick auf Pause kommt focusin vor click. Die beabsichtigte
  // Aktion deshalb vor dem Fokuswechsel festhalten.
  let pointerAction;
  control.addEventListener('pointerdown', () => { pointerAction = !playing; });
  control.addEventListener('pointercancel', () => { pointerAction = undefined; });
  catalog.addEventListener('focusin', pauseTour);
  control.addEventListener('click', event => {
    playing = event.detail && pointerAction !== undefined ? pointerAction : !playing;
    pointerAction = undefined;
    if (playing) hovering = false;
    scheduleTour();
  });
  document.addEventListener('visibilitychange', scheduleTour);
  motion.addEventListener('change', () => {
    if (motion.matches) pauseTour();
  });
  scheduleTour();
}

// Vor dem nativen Sprung auch ein momentan verborgenes Ziel einblenden.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (link && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    if (selectProject(link.hash)) pauseTour();
  }
});
window.addEventListener('hashchange', () => {
  if (selectProject(location.hash)) {
    pauseTour();
    document.querySelector(location.hash).scrollIntoView();
  }
});


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
