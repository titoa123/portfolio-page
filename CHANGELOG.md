# Changelog

## 2026-11-20 – Arbeitspaket 1 – Portfolio-Grundgerüst

### Was

- `index.html` (de-CH) mit den Abschnitten Start, Projekte, Skills, Über mich, Hobbys und Kontakt sowie einer Abschnittsnavigation erstellt.
- Projektkarten für PlantBuddy (Teamkonzept) und das Homelab (Proxmox, getrennte Netze) angelegt; Skills «Requirements Engineering» und «Netzwerksegmentierung» verlinken auf die passenden Projekte.
- `css/styles.css`: mobile-first Layout mit CSS-Variablen, umbrechender Navigation, Projektkarten ab 48rem nebeneinander, sichtbarem Fokus-Stil und Sprunglink.
- `js/main.js`: kleines ES-Modul, das das Jahr im Footer aktualisiert.
- README um lokalen Startbefehl und GitHub-Pages-Schritte ergänzt.

### Warum

- Eine lauffähige, responsive Startseite ist die Basis für alle weiteren Arbeitspakete.
- Ohne Framework und Build-Schritt bleibt die Seite einfach nachvollziehbar und direkt über GitHub Pages veröffentlichbar.
- Relative Pfade stellen sicher, dass die Seite auch unter dem Repositorypfad von GitHub Pages lädt.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768, 1024 und 1920 px, jeweils mit aktiviertem und deaktiviertem JavaScript (77 automatisierte Prüfungen, alle bestanden):

- Seite, Stylesheet und Modul werden mit HTTP 200 geladen; keine Konsolenfehler oder fehlgeschlagenen Requests.
- Kein horizontales Scrollen; Navigation läuft nicht über, sondern bricht um.
- Projektkarten bei 320 px untereinander, ab 768 px nebeneinander.
- Genau ein `h1`, Überschriftenfolge h1 → h2 → h3 ohne Sprünge.
- Alle internen Links haben ein Ziel; jeder Navigationslink springt zum Abschnitt, die Überschrift liegt nicht unter der fixierten Kopfzeile.
- Navigation und Inhalte funktionieren ohne JavaScript; mit JavaScript zeigt der Footer das aktuelle Jahr.
- Tastatur: erster Tab fokussiert den sichtbaren Sprunglink, Enter springt zu `#main`, nächster Tab landet auf «Projekte ansehen»; alle 11 Links sind per Tab erreichbar und haben einen sichtbaren Fokusrahmen.
- Dieselbe Testreihe unter einem Unterpfad (`/portfolio-page/`) wie bei GitHub Pages: alle Prüfungen bestanden.
- Sichtprüfung der Screenshots bei 320 und 1920 px sowie des Sprunglink-Fokus.

### Konzepte für die Prüfung

- **Semantisches HTML:** `header`, `nav`, `main`, `section`, `article`, `footer`; Abschnitte über `aria-labelledby` benannt.
- **Barrierefreiheit:** Sprunglink zum Hauptinhalt, `:focus-visible`-Stil, logische Überschriftenhierarchie, `lang="de-CH"`.
- **Mobile-first:** Grundstil für schmale Bildschirme, Erweiterung per `min-width`-Media-Query.
- **CSS-Variablen:** zentrale Designwerte (Farben, Abstände, Radius, Fokus) in `:root`.
- **Flexbox und Grid:** umbrechende Navigation mit `flex-wrap`, Projektkarten mit CSS Grid.
- **Progressive Enhancement:** Inhalte und Ankernavigation funktionieren ohne JavaScript; das Modul ergänzt nur das Footer-Jahr.
- **ES-Module:** `<script type="module">` wird automatisch verzögert ausgeführt.
- **Relative Pfade:** nötig für GitHub Pages unter einem Repositorypfad.

### Offene Punkte

- Beruflicher Profil-Link (z. B. LinkedIn) fehlt im Projekt – im Abschnitt Kontakt ergänzen, sobald bestätigt.
- Genaue Studienbezeichnung geht aus den Projektunterlagen nicht hervor – bei Bedarf in «Über mich» ergänzen.
- Persönliche Beiträge und veröffentlichbare Belege zu PlantBuddy und Homelab ergänzen.
- Prüfung in weiteren Browsern (Firefox, Safari) und mit einem Screenreader steht noch aus.
- Spätere Arbeitspakete: Projektfilter, API-Anbindung, ausführliche Projektbelege.
