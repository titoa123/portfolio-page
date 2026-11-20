# Changelog

## 2026-11-20 – Arbeitspaket 2.1 – PlantBuddy-Fallbeispiel

### Was

- Bestehende PlantBuddy-Karte (`#plantbuddy`) zu einem Fallbeispiel erweitert, gegliedert in «Ausgangslage», «Mein Beitrag», «Von der Ausgangslage zur Anforderung» und «Ergebnis und Beleg» (je `section` mit `h4` unter dem `h3` der Karte).
- Ausgangslage mit den belegten Angaben: Modul WPR1, Teamkonzept für eine App zur gemeinsamen Pflanzenpflege in WGs und Büros, Teamarbeit umfasste Projektauftrag, Systemziele und Grobanforderungen.
- Ergebnis als erarbeitetes App-Konzept beschrieben.
- Präzisierung nach Commit 423d11e: Die unbelegte Problembeschreibung («Wo sich mehrere Personen Pflanzen teilen, ist oft unklar, …») ist jetzt als Projektziel formuliert («PlantBuddy soll WGs und Büros dabei unterstützen, die Zuständigkeiten für die gemeinsame Pflanzenpflege zu organisieren.»). «Ergebnis der Teamarbeit ist ein erarbeitetes App-Konzept. Eine umgesetzte App gibt es nicht.» wurde zu «Im Modul WPR1 haben wir im Team ein App-Konzept erarbeitet.» zusammengefasst.
- Fehlende Inhalte als klar formulierte Platzhalter in normalem Text (`.placeholder`), ohne Links oder Bedienelemente.
- CSS: Fallbeispiel-Karte nutzt ab 48rem die volle Rasterbreite, Teilabschnitte zweispaltig; mobil alles untereinander. Stil für Platzhalter ergänzt.

### Warum

- Das Fallbeispiel soll zeigen, welches Problem PlantBuddy lösen sollte, welchen Beitrag ich geleistet habe und wie aus einem Bedarf eine überprüfbare Anforderung wird.
- Im Workspace liegen keine PlantBuddy-Unterlagen vor (weder Text- noch PDF-/Office-Dateien). Deshalb sind nur die gesicherten Angaben ausgeschrieben und alles Weitere als Platzhalter markiert, statt Inhalte zu erfinden.
- Die Karte bleibt das Sprungziel `#plantbuddy`, damit der Link aus dem Skills-Bereich weiterhin funktioniert.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768 und 1920 px, jeweils mit aktiviertem und deaktiviertem JavaScript (83 automatisierte Prüfungen, alle bestanden):

- Kein horizontales Scrollen; kein Element des Fallbeispiels ragt über den Seitenrand.
- Alle 3 Platzhalter sind vorhanden, mit 16 px Schriftgrösse und ohne Textüberlauf.
- Fallbeispiel-Abschnitte bei 320 px untereinander, ab 768 px zweispaltig; PlantBuddy-Karte ab 768 px über die volle Breite.
- Überschriftenfolge h1 → h2 → h3 → h4 ohne Sprünge, genau ein `h1`.
- Skills-Link «(siehe PlantBuddy)» springt zu `#plantbuddy`, der Kartentitel liegt sichtbar unter der fixierten Kopfzeile.
- Keine leeren Links; alle internen Sprungziele vorhanden.
- Bestehende Prüfungen aus Arbeitspaket 1 (Laden von CSS/Modul, keine Browserfehler, Navigation, Sprunglink zum Hauptinhalt, Tastaturfokus) weiterhin bestanden.
- Sichtprüfung der PlantBuddy-Karte bei 320 px (JS an), 768 px (JS an) und 1920 px (JS aus).

### Konzepte für die Prüfung

- **Requirements Engineering:** Abfolge Bedarf → Anforderung → Prüfkriterium; ein Prüfkriterium macht eine Anforderung überprüfbar.
- **Projektauftrag, Systemziele, Grobanforderungen:** Ergebnisse der frühen Projektphase, aus denen Anforderungen abgeleitet werden.
- **Semantisches HTML:** verschachtelte `section`-Elemente mit `aria-labelledby` innerhalb eines `article`; Überschriftenebenen folgen der Gliederung.
- **CSS Grid:** `grid-column: 1 / -1` lässt eine Karte das ganze Raster überspannen; verschachteltes Grid für die Teilabschnitte.
- **Ehrliche Dokumentation:** Fehlende Belege werden sichtbar als Platzhalter gekennzeichnet statt erfunden.

### Offene Punkte

- **Mein Beitrag:** persönlicher Beitrag im Team (z. B. welche Teile von Projektauftrag, Systemzielen oder Grobanforderungen) fehlt – Platzhalter «Mein konkreter Beitrag zum Projekt wird hier ergänzt.»
- **Anforderungsbeispiel:** eine dokumentierte Anforderung aus den Grobanforderungen (Wortlaut, ggf. ID aus den Unterlagen), der zugrunde liegende Bedarf und ein daraus abgeleitetes Prüfkriterium (als Vorschlag gekennzeichnet) fehlen – Platzhalter «Eine konkrete Anforderung mit zugehörigem Prüfkriterium wird hier ergänzt.»
- **Beleg:** ein zur Veröffentlichung freigegebener Auszug aus den Projektunterlagen oder eine eigene Darstellung fehlt – Platzhalter «Ein veröffentlichbarer Auszug aus den Projektunterlagen wird hier ergänzt.»
- Freigabe des Teams für die Veröffentlichung von Auszügen klären.
- Die Änderungen sind nur lokal committet und noch nicht auf GitHub Pages veröffentlicht.

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
