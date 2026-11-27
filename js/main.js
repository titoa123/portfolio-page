// Aktualisiert das Jahr im Footer. Ohne JavaScript bleibt der statische Wert stehen.
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const projectLinks = [...document.querySelectorAll('.project-list a')];
const projectArticles = projectLinks.map(link => document.getElementById(link.hash.slice(1)));

const catalog = document.querySelector('#projekte');
const controls = catalog.querySelector('.tour-controls');
const control = controls.querySelector('button');
const bar = controls.querySelector('.tour-track span');
const jump = catalog.querySelector('.project-jump');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const interval = 10000;
let current = 0;

function projectIndex(hash) {
  return projectArticles.findIndex(article =>
    hash === '#' + article.id || hash === '#' + article.getAttribute('aria-labelledby'));
}

function selectProject(index) {
  current = index;
  projectArticles.forEach((article, i) => {
    article.inert = i !== index;
    if (i === index) projectLinks[i].setAttribute('aria-current', 'true');
    else projectLinks[i].removeAttribute('aria-current');
  });
  jump.hash = projectArticles[index].getAttribute('aria-labelledby');
}

const initial = projectIndex(location.hash);
catalog.querySelector('.project-details').classList.add('is-interactive');
selectProject(initial < 0 ? 0 : initial);
jump.hidden = false;

let reducedMotion = motion.matches;
let playing = initial < 0 && !reducedMotion;
let visible = false;
let hovering = false;
let focused = catalog.contains(document.activeElement);
let frame;
let deadline;

function tick(now) {
  if (now >= deadline) {
    selectProject((current + 1) % projectLinks.length);
    deadline = now + interval;
  }
  if (!reducedMotion) bar.style.transform = 'scaleX(' + ((deadline - now) / interval) + ')';
  frame = requestAnimationFrame(tick);
}

function scheduleTour() {
  cancelAnimationFrame(frame);
  control.textContent = playing ? 'Pause' : 'Start';
  control.setAttribute('aria-label', playing ? 'Rundgang pausieren' : 'Rundgang starten');
  if (!playing || !visible || hovering || focused || document.hidden) return;
  bar.style.transform = 'scaleX(1)';
  deadline = performance.now() + interval;
  frame = requestAnimationFrame(tick);
}

function pauseTour() {
  playing = false;
  scheduleTour();
}

if ('IntersectionObserver' in window) {
  controls.hidden = false;
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    scheduleTour();
  }).observe(catalog);
  catalog.addEventListener('pointerenter', event => {
    hovering = event.pointerType === 'mouse';
    scheduleTour();
  });
  catalog.addEventListener('pointerover', event => {
    if (event.pointerType === 'mouse' && !hovering && !control.contains(event.target)) {
      hovering = true;
      scheduleTour();
    }
  });
  catalog.addEventListener('pointerleave', () => {
    if (!hovering) return;
    hovering = false;
    scheduleTour();
  });
  catalog.addEventListener('focusin', () => {
    focused = true;
    scheduleTour();
  });
  catalog.addEventListener('focusout', event => {
    if (catalog.contains(event.relatedTarget)) return;
    focused = false;
    scheduleTour();
  });
  control.addEventListener('click', () => {
    playing = !playing;
    if (playing) {
      hovering = false;
      focused = false;
      if (projectIndex(location.hash) >= 0) {
        history.replaceState({ project: current }, '', '#' + catalog.id);
      }
    }
    scheduleTour();
  });
  document.addEventListener('visibilitychange', scheduleTour);
  motion.addEventListener('change', event => {
    reducedMotion = event.matches;
    if (reducedMotion) pauseTour();
  });
  scheduleTour();
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey ||
      event.metaKey || event.shiftKey || event.altKey) return;
  const index = projectIndex(link.hash);
  if (index < 0) return;
  const previous = current;
  pauseTour();
  selectProject(index);
  if (projectLinks.includes(link)) {
    event.preventDefault();
    link.focus({ preventScroll: true });
    if (link.hash !== location.hash) {
      history.replaceState({ ...history.state, project: previous }, '');
      history.pushState({ project: index }, '', link.hash);
    }
  }
});

window.addEventListener('popstate', event => {
  const index = projectIndex(location.hash);
  const restored = index >= 0 ? index : event.state?.project;
  if (restored !== undefined) {
    selectProject(restored);
    pauseTour();
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
