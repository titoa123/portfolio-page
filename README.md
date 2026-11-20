# portfolio-page

Persönliches Portfolio (EWEB) mit HTML, CSS und JavaScript – ohne Framework und ohne Build-Schritt.

## Struktur

```
index.html        Startseite mit allen Abschnitten
css/styles.css    Stylesheet (mobile-first, CSS-Variablen)
js/main.js        JavaScript-Modul (Jahr im Footer)
CHANGELOG.md      Änderungsprotokoll pro Arbeitspaket
```

Alle Pfade sind relativ, damit die Seite auch unter einem GitHub-Pages-Repositorypfad
(z. B. `https://<benutzer>.github.io/portfolio-page/`) lädt.

## Lokal starten

Im Repository-Stamm einen lokalen HTTP-Server starten (ES-Module laden nicht über `file://`):

```bash
npx http-server -p 8080 -c-1
```

Alternativ mit Python:

```bash
python3 -m http.server 8080
```

Danach <http://localhost:8080/> im Browser öffnen.

## Veröffentlichen mit GitHub Pages

1. Änderungen committen und auf `main` pushen: `git push origin main`
2. Auf GitHub im Repository **Settings → Pages** öffnen.
3. Unter **Build and deployment** als Source **Deploy from a branch** wählen.
4. Branch **main** und Ordner **/ (root)** auswählen und speichern.
5. Nach dem Deployment (Tab **Actions**, «pages build and deployment») ist die Seite unter
   `https://<benutzer>.github.io/portfolio-page/` erreichbar.
6. Die URL in einem privaten Browserfenster ohne Anmeldung prüfen.
