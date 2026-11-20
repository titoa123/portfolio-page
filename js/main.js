// Aktualisiert das Jahr im Footer. Ohne JavaScript bleibt der statische Wert stehen.
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// Projektfilter: blendet Karten anhand von data-category ein und aus.
// Ohne JavaScript bleibt der Filterbereich verborgen und alle Karten sind sichtbar.
const FILTER_ALL = 'alle';

function initProjectFilter() {
  const container = document.querySelector('[data-project-filter]');
  const cards = [...document.querySelectorAll('.card-grid > [data-category]')];

  if (!container || cards.length === 0) {
    return;
  }

  const buttons = [...container.querySelectorAll('button[data-filter]')];
  const status = container.querySelector('[data-filter-status]');
  const total = cards.length;

  function applyFilter(value) {
    let shown = 0;

    for (const card of cards) {
      const visible = value === FILTER_ALL || card.dataset.category === value;
      card.hidden = !visible;
      if (visible) {
        shown += 1;
      }
    }

    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === value));
    }

    if (status) {
      status.textContent = `${shown} von ${total} Projekten angezeigt`;
    }
  }

  // Liegt das Sprungziel in einer ausgeblendeten Karte, zuerst den Filter zurücksetzen.
  function revealTarget(hash) {
    if (!hash || hash.length < 2) {
      return null;
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    const card = target && target.closest('[data-category]');

    if (card && card.hidden) {
      applyFilter(FILTER_ALL);
      return target;
    }

    return null;
  }

  container.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (button) {
      applyFilter(button.dataset.filter);
    }
  });

  // Läuft vor dem Standard-Sprung des Links (Maus und Enter-Taste lösen beide «click» aus).
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (link) {
      revealTarget(link.hash);
    }
  });

  // Für Fragmente, die auf anderem Weg gesetzt werden (z. B. Adresszeile).
  window.addEventListener('hashchange', () => {
    const target = revealTarget(window.location.hash);
    if (target) {
      target.scrollIntoView();
    }
  });

  applyFilter(FILTER_ALL);
  container.hidden = false;
}

initProjectFilter();
