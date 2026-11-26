# Portfolio – Alessandro

Persönliches Portfolio für das Modul Web Engineering an der BFH, umgesetzt mit HTML, CSS und JavaScript ohne Framework und ohne Build-Schritt.

## Projektarchiv

PlantBuddy, Homelab, Portal Islands, Dashboard und Escape the Tide lassen sich direkt auswählen. Auf schmalen Bildschirmen steht die Auswahl über der Beschreibung. Ohne JavaScript sind alle fünf Projektartikel unter ihren eigenen Sprungzielen lesbar.

Der sichtbare Katalog wechselt alle zehn Sekunden zum nächsten Projekt. Eine manuelle Wahl, ein Direktlink oder Tastaturfokus pausiert den Rundgang. «Rundgang starten» beginnt ein volles Intervall. Hover, Hintergrundtab und ein Katalog ausserhalb des Sichtfelds unterbrechen den Timer. Bei reduzierter Bewegung startet der Rundgang pausiert.

## Aufbau

- `index.html` enthält alle fünf Bereiche und die Projektartikel.
- `css/styles.css` gestaltet Navigation, Layout, Fokus und Bilddarstellung.
- `js/main.js` steuert Auswahl, Rundgang, aktive Navigation und Jahresanzeige.
- `assets/projekte/` enthält die fünf WebP-Motive für Miniaturen und Detailansicht. Die übrigen Illustrationen stehen unter `assets/seiten/`.

GitHub Pages veröffentlicht den Stand auf `main` unter [portfolio-page](https://titoa123.github.io/portfolio-page/). Relative Ressourcenpfade unterstützen diesen Unterordner.

## Lokal starten

Im Repository-Stamm einen lokalen HTTP-Server starten (ES-Module laden nicht über `file://`):

```bash
npx http-server -p 8080 -c-1
```

Danach <http://localhost:8080/> im Browser öffnen.

## Fortschritt

Die Änderungen pro Arbeitspaket stehen im [CHANGELOG.md](CHANGELOG.md).
