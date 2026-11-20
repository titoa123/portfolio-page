# Portfolio – Alessandro

Persönliches Portfolio für das Modul Web Engineering an der BFH, umgesetzt mit HTML, CSS und JavaScript ohne Framework und ohne Build-Schritt.

Live-Seite: <https://titoa123.github.io/portfolio-page/>

## Technologien

- **HTML:** semantische Struktur (`header`, `nav`, `main`, `section`, `article`, `footer`), Sprache `de-CH`, Sprunglink zum Hauptinhalt
- **CSS:** mobile-first mit Media Queries (`min-width`), CSS-Variablen, CSS Grid, Flexbox mit `flex-wrap`, `clamp()` für Schriftgrössen, `position: sticky`, `scroll-margin-top`, `:focus-visible` und `prefers-reduced-motion`
- **JavaScript:** ein ES-Modul (`<script type="module">`), das das Jahr im Footer aktualisiert; Inhalte und Navigation funktionieren auch ohne JavaScript
- **Hosting:** GitHub Pages (Branch `main`, Ordner `/`)

## Struktur

```
index.html        Startseite mit allen Abschnitten
css/styles.css    Stylesheet (mobile-first, CSS-Variablen)
js/main.js        JavaScript-Modul (Jahr im Footer)
CHANGELOG.md      Änderungsprotokoll pro Arbeitspaket
README.md         Projektübersicht
```

Alle Pfade sind relativ, damit die Seite auch unter dem GitHub-Pages-Pfad `/portfolio-page/` lädt.

## Lokal starten

Im Repository-Stamm einen lokalen HTTP-Server starten (ES-Module laden nicht über `file://`):

```bash
npx http-server -p 8080 -c-1
```

Danach <http://localhost:8080/> im Browser öffnen.

## Fortschritt

Die Änderungen pro Arbeitspaket stehen im [CHANGELOG.md](CHANGELOG.md).
