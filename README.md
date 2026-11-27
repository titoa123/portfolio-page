# Portfolio – Alessandro

Persönliches Portfolio für das Modul Web Engineering an der BFH, umgesetzt mit HTML, CSS und JavaScript ohne Framework und ohne Build-Schritt.

Im Projektarchiv lassen sich PlantBuddy, Homelab, Portal Islands, Dashboard und Escape the Tide direkt auswählen und über eigene Sprungziele verlinken. Ohne JavaScript sind alle fünf Projektartikel untereinander lesbar.

Der Rundgang wechselt alle zehn Sekunden zum nächsten Projekt. Solange der Mauszeiger im Projektbereich liegt, der Bereich ausser Sicht ist oder der Tab im Hintergrund liegt, ruht der Timer. Eine manuelle Auswahl, ein Projekt-Direktlink oder Tastaturfokus im Projektbereich pausiert den Rundgang bis zum nächsten Klick auf «Rundgang starten». Dann beginnt ein volles Zehn-Sekunden-Intervall. Bei reduzierter Bewegung startet der Rundgang pausiert.

[Live-Seite auf GitHub Pages](https://titoa123.github.io/portfolio-page/)

## Technologien

- **HTML** gliedert die Seite in Start, Projekte, Skills, Über mich und Hobbys. Ein Sprunglink führt direkt zum Hauptinhalt.
- **CSS** ordnet die Projektauswahl auf schmalen Bildschirmen über der Detailansicht an. Ab 48rem stehen Auswahl und Detail nebeneinander, und die Auswahlliste zeigt Miniaturen. Sichtbare Fokusrahmen unterstützen die Tastaturbedienung.
- **JavaScript** steuert als ES-Modul die Projektauswahl und den Rundgang, markiert den aktiven Navigationsabschnitt und aktualisiert die Jahreszahl im Footer.
- **GitHub Pages** veröffentlicht die statischen Dateien aus dem Stammverzeichnis von `main`.

## Struktur

```text
index.html         Startseite mit allen Abschnitten und Projektartikeln
css/styles.css     Layout, Typografie, Fokus und Bilddarstellung
js/main.js         Projektauswahl, Rundgang, Navigation und Jahresanzeige
assets/projekte/   Fünf WebP-Motive für Miniaturen und Grossansichten
assets/seiten/     Bilder für Start, Profil und Hobbys
CHANGELOG.md       Änderungen und Prüfergebnisse pro Arbeitspaket
README.md          Projektübersicht
```

Die Ressourcenpfade sind relativ, damit die Seite auch unter dem GitHub-Pages-Pfad `/portfolio-page/` lädt.

## Lokal starten

Mit Node.js und npm im Repository-Stamm einen HTTP-Server starten:

```bash
npx http-server -p 8080 -c-1
```

Danach <http://localhost:8080/> im Browser öffnen.

## Fortschritt

Das Redesign bis Ü11 ist integriert. Projektauswahl und Dokumentbreite wurden in Chromium, Firefox und WebKit bei 320, 768, 1024 und 1440 px geprüft. Die separate Screenreader-Prüfung in Schritt 4.2 ist offen. Einzelheiten stehen im [Changelog](CHANGELOG.md).
