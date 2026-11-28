# Portfolio – Alessandro

Persönliches Portfolio für das Modul Web Engineering an der BFH, umgesetzt mit HTML, CSS und JavaScript ohne Framework und ohne Build-Schritt.

Im Projektarchiv lassen sich PlantBuddy, Homelab, Portal Islands, Dashboard und Escape the Tide direkt auswählen und über eigene Sprungziele verlinken. Ohne JavaScript sind alle fünf Projektartikel untereinander lesbar.

Der Rundgang zeigt jedes Projekt zehn Sekunden lang. Hover und blosser Tastaturfokus lassen ihn weiterlaufen. Wer einen Projektlink anklickt oder mit Enter aktiviert, wählt das Projekt aus und pausiert den Rundgang dauerhaft. Auch «Pause» hält ihn an. Erst «Start» beginnt ein volles neues Intervall. Ausserhalb des Sichtfelds oder bei verborgenem Tab ruht der Timer. Bei einem Projekt-Direktlink oder reduzierter Bewegung startet der Rundgang pausiert.

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

Das Projektarchiv aus Ü12 und die anschliessenden Korrekturen sind integriert. Projektauswahl und Dokumentbreite wurden in Chromium, Firefox und WebKit bei 320, 768, 1024 und 1440 px geprüft. Offen sind die manuelle Screenreader-Prüfung in Schritt 4.2 und der Test auf echter Touch-Hardware. Einzelheiten stehen im [Changelog](CHANGELOG.md).
