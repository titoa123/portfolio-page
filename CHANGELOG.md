# Changelog

## Ü12 – Projektarchiv ohne Sprünge

Die Auswahl aktualisiert Detailansicht und Projekthash und lässt den Fokus auf dem Listenlink. Zurück und Vorwärts stellen die Auswahl wieder her. Im einspaltigen Layout führt «Zum ausgewählten Projekt» gezielt zum Titel. Ohne JavaScript bleiben alle fünf Artikel über ihre Fragmentlinks erreichbar.

Alle fünf Texte bestimmen über gemeinsame Grid-Zeilen den Platz oberhalb des Grossbildes. Intrinsische Masse und responsive 3:2-Flächen reservieren den Platz für Grossbilder und Miniaturen. Die äusseren Studioflächen aller fünf WebPs laufen in den gemessenen Seitenhintergrund `#100e0c` aus. Die Bearbeitung verwendet ImageGen für die Randbereiche und das jeweilige Original für Motiv und Bodenkontakt.

Unter der Liste bedienen Start und Pause den Zehn-Sekunden-Rundgang. Balken und Wechsel verwenden denselben Endzeitpunkt. Manuelle Auswahl und Pause bleiben bestehen, bis Start aktiviert wird. Bei reduzierter Bewegung beginnt der Rundgang pausiert und lässt sich mit ruhendem Balken bewusst starten.

Lokale Abnahme am 27.11.2026 mit dem Ü11-Playwright-Aufbau unter Linux:

- Chromium 159.0.8154.6, Firefox 159.0 und WebKit 27.2 bei 320, 768, 1024 und 1440 CSS-Pixeln, jeweils 900 px hoch. Alle 60 Auswahlen zeigten genau das richtige Projekt, den passenden Hash und den Fokus auf dem Listenlink. Scrollposition, Archivüberschrift, Bildoberkante und Bildmasse blieben je Browser und Breite gleich. Kein horizontaler Überlauf. Firefox bei 320 px erreichte nach jedem der fünf Erstklicks ab frischem Laden 320/320 px für Client- und Scrollbreite.
- Grossbilder bei 320 und 1440 px sowie Desktop-Miniaturen aller fünf Motive in allen drei Engines visuell geprüft. Die Bildflächen massen bei den vier Breiten 288 × 192, 464 × 309,3, 640 × 426,7 und 704 × 469,3 px. Motive vollständig, Gehäusefüsse, Reflexe und vordere Brettkante sichtbar. Die mobilen Miniaturen bleiben ausgeblendet.
- Enter, wiederholte Auswahl, mobiler Detailsprung mit Fokus am Titel, Direktlink, Neuladen und Verlauf in allen drei Engines geprüft. Chromium zusätzlich mit Strg-Klick in neuem Tab, ohne JavaScript und mit emuliertem Touch geprüft. Bei 200 % Grundschrift passten alle fünf Textblöcke oberhalb der stabilen Bildfläche. Beim verzögerten Laden der Homelab-Datei blieben Bildanfang, Bildmasse und Position des folgenden Abschnitts gleich.
- Chromium in Echtzeit: Dashboard blieb nach manueller Wahl und Verlassen des Katalogs 20 s sichtbar. Nach Start war bei 9,6 s weiterhin Dashboard ausgewählt, nach 10,013 s erschien Escape the Tide. Fokus und Scrollposition blieben erhalten, der Hash war `#projekte` und die History-Länge blieb gleich.
- Explizite Pause, Start per Tastatur, Hover, Fokus, Rückkehr ins Sichtfeld sowie Aktivieren reduzierter Bewegung und bewusster Neustart mit ruhendem Balken geprüft. In einem tatsächlich verborgenen Chromium-Tab blieb die Auswahl über 10,5 s erhalten. Nach Rückkehr war sie nach 9,5 s noch gleich, nach 10,3 s erschien das nächste Projekt.
- Zusatzbefund im headless WebKit-Aufbau bei 320 px: Der separate Textlink aus «Skills» zu PlantBuddy hatte bereits auf `e017410` eine gemessene Höhe von 0 px. Sein Tastatursprung funktioniert, der Mausklick auf diesen externen Einstieg bleibt in diesem Aufbau offen. Alle fünf Links der Archivliste waren per Maus bedienbar.
- Offen bleiben echte Touch-Eingabe auf Hardware und Schritt 4.2, die separate manuelle Screenreader-Prüfung.

## Überarbeitung Ü11 – Integration und Dokumentation

README auf fünf Projekte und Rundgang aktualisiert, überholte CSS-Regeln für Filter und Karten entfernt. Unter /portfolio-page/ in QtWebEngine 5.15.2 (Chromium 83) alle fünf Projekte bei 320, 768, 1024 und 1440 px ausgewählt: passender Artikel sichtbar, kein horizontaler Dokumentüberlauf. Direktaufruf #dashboard und Wechsel von Escape the Tide zu PlantBuddy nach Neustart geprüft. Zusätzlich alle lokalen Ressourcenpfade, internen Sprungziele und WebP-Dateien geprüft.

Lokale Abnahme am 27.11.2026 mit Playwright 1.65.1 unter Linux (headless):

- Chromium 159.0.8154.6, Firefox 159.0 und WebKit 27.2: Bei 320, 768, 1024 und 1440 px liessen sich alle fünf Projekte per Klick auswählen. Jeweils genau der passende Artikel war sichtbar und der zugehörige Link als aktiv markiert.
- Chromium und WebKit blieben bei allen Breiten ohne horizontalen Dokumentüberlauf. In Firefox war das Dokument bei 320 px nach jeder der fünf Auswahlen 520 px breit. Der Überlauf war im zweiten Durchlauf reproduzierbar. Bei 768, 1024 und 1440 px trat er nicht auf.
- Sichtprüfung in allen drei Engines: Alle fünf Objektmotive waren in den Grossansichten bei 320 und 1440 px sowie in den fünf Desktop-Miniaturen vollständig sichtbar.
- Chromium bei 1440 px: Dashboard per Mausklick gewählt und den Zeiger aus dem Projektbereich bewegt. Nach 20 Sekunden war Dashboard weiterhin sichtbar. Nach Klick auf «Rundgang starten» wurde Dashboard nach 10,0003 Sekunden durch Escape the Tide ersetzt.

### Korrektur des Firefox-Überlaufs

Auf Stand `6b9fbf0` lag der Überlauf bereits vor dem ersten Klick vor. In Firefox 159.0 waren im ursprünglichen lokalen Testaufbau bei 320 CSS-px nur 288 px Inhaltsbreite verfügbar. Lange Wörter ohne innere Umbruchstelle bestimmten die Mindestbreite der Grid-Spalten. Die einzelne `1fr`-Spalte von `.skill-list` wurde bei automatischer Mindestbreite der Grid-Elemente 504 px breit. Ihre rechte Kante lag bei 16 + 504 = 520 px. Auch der Textblock im Einstieg reichte bis 496 px. Mit dem zusätzlichen Datenpfad der temporären Browserlaufzeit (`XDG_DATA_DIRS`) passte das ursprüngliche Layout in 320 px.

In `css/styles.css` erlaubt `overflow-wrap: anywhere` am Body einen Umbruch innerhalb eines Wortes, wenn es sonst zu breit wäre. Diese Umbruchstellen zählen bei der Berechnung der Mindestbreite.

| Firefox 159.0 bei 320 px | Vorher: clientWidth / scrollWidth | Nachher: clientWidth / scrollWidth |
|---|---|---|
| Vor der ersten Auswahl | 320 / 520 | 320 / 320 |
| Nach PlantBuddy, Homelab, Portal Islands, Dashboard und Escape the Tide (je einzeln gemessen) | 320 / 520 | 320 / 320 |

Nachprüfung mit Chromium 159.0.8154.6, Firefox 159.0 und WebKit 27.2 bei 320, 768, 1024 und 1440 CSS-px: In allen 60 Auswahlen war genau der passende Artikel sichtbar und der zugehörige Link aktiv. `clientWidth` und `scrollWidth` entsprachen jeweils der Viewportbreite. Die Sichtkontrolle aller fünf Grossansichten bei 320 und 1440 px sowie der fünf Miniaturen bei 1440 px zeigte in allen drei Engines vollständige Motive.

Schritt 4.2 bleibt für die separate Screenreader-Prüfung offen.

## Überarbeitung Ü10 – Automatischer Projektrundgang

Sichtbare Projekte wechseln alle zehn Sekunden. Manuelle Auswahl, Direktlinks und Tastaturfokus pausieren dauerhaft bis zum bewussten Neustart. Bei reduzierter Bewegung startet der Katalog pausiert.

## Überarbeitung Ü9 – Projektkatalog

Fünf Projekte mit direkter Auswahl, Objektbildern und stabilen Sprungzielen. Ohne JavaScript sind alle fünf Artikel lesbar. Der Kategorienfilter entfällt.

## Überarbeitung Ü8 – Grundlayout und Seiten

Start, Skills, Profil und Hobbys im Archivstil gestaltet. Aktiver Navigationspunkt beim Scrollen, bestehender Projektfilter und Sprungziele erhalten.

## Überarbeitung Ü7 – Projektgrafiken

Fünf vollständige Objektmotive als WebP für die gemeinsame Nutzung in Miniatur und Detail vorbereitet.

## 2026-11-25 – Arbeitspaket 4.1 – Browser-Kompatibilität

### Was

- Die Seite ist in drei Browser-Engines getestet: Chromium, Firefox und WebKit. Grundlage ist der lokale Stand nach Ü6 (`eac0c35`).
- Es wurde kein Darstellungs- oder Funktionsfehler der Seite gefunden. Code (`index.html`, `css/styles.css`, `js/main.js`) und README sind unverändert.
- Fehlschläge in den ersten Läufen gehen auf die Testumgebung oder auf zu frühe Messungen zurück. Sie sind unten unter «Befunde» einzeln erklärt.

### Getestete Browser und Engines

Alle Tests liefen lokal mit `http-server` (wie im README beschrieben) und Playwright 1.49.1 unter Linux, headless:

| Browser bzw. Engine | Version | Hinweis |
|---|---|---|
| Chromium | 131.0.6778.33 | Playwright-Build |
| Firefox | 132.0 | Playwright-Build |
| WebKit | 18.2 | Playwright-Build (WPE). Entspricht der Engine von Safari 18.2, ist aber kein Safari. |

Echtes Safari ist nicht verfügbar, weil die Testumgebung kein macOS oder iOS hat.

### Getestet

**Neue Testreihe für 4.1**, in jeder Engine bei 320, 768, 1024 und 1440 px, zusätzlich bei 375 × 700 px:

- **Laden und Darstellung:**
  - `styles.css` und `main.js` laden mit HTTP 200. CSS ist angewendet, und JavaScript läuft (Filter eingeblendet, Jahr im Footer).
  - Keine Konsolenfehler und keine fehlgeschlagenen Anfragen.
  - Kein horizontaler Überlauf.
  - Alle fünf Navigationslinks liegen im Fenster. Navigation und Kartentext haben mindestens 16 px.
  - Kopfzeile unter 768 px statisch, ab 768 px fixiert und höchstens 52 px hoch.
- **Karten:** Bei 1024 und 1440 px stehen beide Karten nebeneinander, bei 320 und 768 px untereinander. Nach dem Filtern nutzt die einzelne Karte die volle Rasterbreite, zum Beispiel 1088 px bei 1440 px.
- **Filter:**
  - Per Klick zeigen «Studium», «Praxis» und «Alle» die richtigen Karten.
  - Genau eine Schaltfläche hat `aria-pressed="true"`, und nur sie ist fett und unterstrichen.
  - Die Trefferzahl stimmt («1 von 2» bzw. «2 von 2 Projekten angezeigt»), auch ohne Überlauf nach dem Filtern.
- **Tastatur:**
  - Tab erreicht «Alle». Tab + Enter wählt «Studium», Tab + Leertaste «Praxis», Shift+Tab + Leertaste wieder «Alle».
  - Der Fokus bleibt auf der Schaltfläche, und der Fokusrahmen ist mindestens 2 px breit.
- **Fokusrahmen bei 375 × 700 px:** Tab und Shift+Tab über alle drei Filter-Schaltflächen. Der Rahmen liegt in allen drei Engines vollständig im Fenster.
- **Sprunglink:** Er wird mit dem ersten Tab sichtbar fokussiert. Enter setzt `#main` und den Fokus auf `main`.
- **Skills-Links:**
  - «Zum Projekt PlantBuddy» bei Filter «Praxis» und «Zum Projekt Homelab» bei Filter «Studium», je per Klick und per Enter.
  - Der Filter springt auf «Alle», das Fragment ist gesetzt, und die Karte liegt 16–18 px unter der Kopfzeile bzw. dem Fensterrand.
- **Direktaufruf in einem neuen Tab:** `#plantbuddy` und `#homelab` mit und ohne JavaScript. Das Ziel liegt 16–18 px unter der Kopfzeile bzw. dem Fensterrand, nie darunter.
- **Ohne JavaScript:**
  - Die Filterleiste ist verborgen, keine Schaltfläche sichtbar, beide Karten sichtbar, kein Überlauf.
  - Sprunglink und beide Skills-Links funktionieren, Ziele 16–18 px unter der Kopfzeile bzw. dem Fensterrand.
- **Sichtprüfung der Screenshots in Firefox und WebKit:**
  - ganze Seite bei 320 und 1440 px;
  - Filter «Studium» bei 1440 px;
  - Fokus auf «Studium» bei 375 × 700 px.

**Bestehende Testreihen aus Ü1 bis Ü5**, ohne Änderung an den Prüfungen in Firefox und WebKit wiederholt:

| Testreihe | Chromium (Ü5) | Firefox 132 | WebKit 18.2 |
|---|---|---|---|
| Neue Reihe 4.1 | 202/202 | 202/202 (2 Läufe) | 202/202 (2 Läufe) |
| Ü1 Kopfzeile, Tab/Shift+Tab, Sprünge | 1383/1383 | 1393/1393 | 1383/1383 in 1 von 3 Läufen, sonst 1381/1383 (Befund 2) |
| Ü2 PlantBuddy, Filter, Sprungziele | 144/144 | 144/144 | 141/144 (Befund 3) |
| Ü3 Navigation | 112/112 | 112/112 | 112/112 |
| Ü4 Texte, Links | 79/79 | 79/79 | 79/79 |
| Ü5 Layout, Fokusrahmen | 125/125 | 125/125 | 120/125 (Befund 4) |

In Firefox zählt die Ü1-Reihe 1393 Prüfungen. Nach dem letzten Link springt der Fokus dort nicht zum Sprunglink zurück, sondern bleibt headless auf «Zum Projekt Homelab». Dieser Link wird darum mehrfach gemessen. Die Tab-Reihenfolge ist in allen Engines gleich.

### Befunde

1. **Firefox ohne Schriften (Testumgebung):**
   - Im ersten Lauf zeigte Firefox bei 320 px 97 px horizontalen Überlauf. Zwischen 768 und 816 px brach die Kopfzeile auf zwei Zeilen um, mit 84 px Höhe.
   - Ursache: Die Content-Sandbox von Firefox blockiert den Zugriff auf die Schriften, die in dieser Testumgebung ausserhalb der Systemordner liegen. Ohne Schrift war jede Schriftfamilie doppelt so breit wie in Chromium.
   - Mit abgeschalteter Sandbox (`MOZ_DISABLE_CONTENT_SANDBOX=1`, nur für den Test) nutzt Firefox dieselbe Schrift wie Chromium, und alle Reihen bestehen. Kein Fehler der Seite.
2. **WebKit, Shift+Tab bei 1440 px:**
   - In einem von drei Ü1-Läufen lag «Zum Projekt PlantBuddy» bei der Messung oberhalb des Fensters.
   - Isoliert nachgestellt in 25 Durchläufen: einmal falsch bei einer Messung direkt nach dem Tastendruck, nach 500 ms immer vollständig sichtbar.
   - WebKit scrollt beim Fokus asynchron, die Ü1-Reihe misst ohne Wartezeit. Chromium und Firefox zeigten es in 25 Durchläufen nie.
   - Die Reihe 4.1 wartet, bis die Scrollposition stabil ist, und besteht.
3. **WebKit und Chromium, Direktaufruf mit Fragment:**
   - Beim Laden mit `#plantbuddy` scrollen beide Engines sanft (`scroll-behavior: smooth`). Die Ü2-Reihe misst schon nach 100 ms, dann liegt das Ziel noch 135–173 px zu tief.
   - Nach rund 400 ms liegt es bei 16–18 px. Mit `prefers-reduced-motion: reduce` springt die Seite sofort.
   - Firefox springt beim Laden ohne Animation. Kein Fehler.
4. **WebKit, Zeichen pro Zeile:**
   - WebKit berechnet `65ch` als 661,7 px statt 650 px, weil die Ziffer «0» in seiner Schriftmetrik etwas breiter ist.
   - Darum passt der PlantBuddy-Text bei 768 px und als gefilterte Einzelkarte bei 1440 px auf 3 statt 4 Zeilen, im Schnitt 75 Zeichen pro Zeile. Die Ü5-Reihe erwartet höchstens 70.
   - Die Begrenzung wirkt wie vorgesehen. Die Schwelle ist eine Faustregel, darum keine Änderung.

### Konzepte für die Prüfung

- **Browser-Engines:**
  - Chromium (Blink), Firefox (Gecko) und Safari (WebKit) rendern unabhängig voneinander.
  - Playwright-WebKit testet die Engine von Safari, aber nicht Safari selbst: Bedienoberfläche, macOS-Schriften und Einstellungen fehlen.
- **Einheit `ch`:** die Breite der Ziffer «0» der verwendeten Schrift. Sie hängt von Schrift und Engine ab.
- **Asynchrones Fokus-Scrollen und sanftes Scrollen:** Automatisierte Tests müssen warten, bis die Scrollposition stabil ist, sonst messen sie Zwischenstände.
- **Testumgebung vs. Seite:** Abweichungen erst auf ihre Ursache prüfen, bevor man den Code ändert. Hier lag sie bei den Schriften der Testumgebung und beim Messzeitpunkt.

### Offene Punkte

- **Echtes Safari auf macOS und iOS:** nicht geprüft. Zu beachten: Safari springt mit Tab standardmässig nicht zu Links, das braucht Option+Tab oder eine Einstellung. Ausserdem den Fokusrahmen und die Zeilenlänge mit der Systemschrift prüfen.
- **Desktop-Versionen von Firefox und Chrome:** nur die Playwright-Builds headless unter Linux mit DejaVu Sans geprüft, nicht mit den Systemschriften von Windows (Segoe UI) oder macOS.
- **Live-Seite:** In 4.1 nur lokal getestet. Der Commit ist nicht gepusht.
- **Manueller Screenreader-Test** (unter anderem die Ansage von `aria-pressed` und der Statusmeldung) folgt in Arbeitspaket 4.2.
- Unverändert offen aus Ü6: Textumbruch in «Hobbys», PlantBuddy-Inhalte, Studienbezeichnung und öffentlicher Kontaktweg.

## 2026-11-25 – Überarbeitung Ü6 – Dokumentation aktualisieren

### Was

- **README, Abschnitt «Technologien»:**
  - CSS: `scroll-margin-top` ersetzt durch `scroll-padding-top` für Sprungziele. Ergänzt: `position: sticky` gilt für die Kopfzeile ab 48rem, `repeat(auto-fit, minmax())` für die Projektkarten.
  - JavaScript: Das ES-Modul steuert den Projektfilter (`dataset`, `hidden`, `aria-pressed`, Statusmeldung mit `role="status"`) und die Jahresanzeige im Footer.
- **README, Abschnitt «Struktur»:** `js/main.js` heisst jetzt «JavaScript-Modul (Projektfilter, Jahr im Footer)».
- Kurze Gliederung, Live-Link, lokaler Startbefehl und relativer Link zum Changelog sind unverändert.
- **Changelog:** Erledigte offene Punkte in älteren Einträgen sind durchgestrichen und mit dem erledigenden Paket ergänzt. Historische Angaben und Testergebnisse sind unverändert.
- Code (`index.html`, `css/styles.css`, `js/main.js`) ist unverändert.

### Warum

- Die README beschrieb noch den Stand vor Arbeitspaket 3.2 und Ü1: kein Projektfilter, `scroll-margin-top` statt `scroll-padding-top`.
- Offene Punkte, die längst erledigt sind, verdecken die tatsächlich offenen.

### Veröffentlichung

- Laut Git-Stand sind die Commits von Ü1 bis Ü5 (`ccf899a` bis `e882dc0`) in `origin/main` enthalten, ebenso alle früheren Arbeitspakete. Die Tests in den Einträgen Ü1 bis Ü5 bleiben lokale Tests.
- Nach dem Push wurden die Testreihen aus Ü1 bis Ü5 gegen die Live-Seite ausgeführt, alle bestanden: Ü1 1383, Ü2 144, Ü3 112, Ü4 79, Ü5 125 Prüfungen.

### Getestet

- **Abgleich mit dem Code:**
  - `scroll-padding-top` steht in `css/styles.css` auf `html`, ab 48rem mit Kopfzeilenhöhe. `scroll-margin-top` kommt im Code nicht mehr vor.
  - `position: sticky` steht nur in der Media Query ab 48rem.
  - Das Kartenraster nutzt `repeat(auto-fit, minmax(min(100%, 24rem), 1fr))`.
  - `js/main.js` enthält den Filter mit `dataset.category`, `hidden`, `aria-pressed` und Statusmeldung. Das Element mit `role="status"` steht in `index.html`. Ausserdem setzt das Modul das Jahr im Footer.
- **Links:** Der relative Link `CHANGELOG.md` in der README zeigt auf eine vorhandene Datei. Das Changelog enthält keine relativen Links.
- `git diff --check` ohne Befund.
- Kein Browsertest, weil sich nur Dokumentation ändert.

### Offene Punkte

- **Hobbys:** Bei 1440 px steht wegen der 65ch-Grenze «gerne.» allein auf der zweiten Zeile. Der Text bleibt wie in Ü4 festgelegt.
- **PlantBuddy:** persönlicher Beitrag, Anforderungsbeispiel mit Prüfkriterium, veröffentlichbarer Beleg mit Freigabe des Teams. Siehe Ü2.
- **Profil:** genaue Studienbezeichnung nicht bestätigt, öffentlicher Kontaktweg fehlt. Siehe Ü3.
- **Bewusst nicht vereinheitlicht:** «Kundenbetreuer für Business Software» im Einstieg und «Kundenbetreuer Business Software» in «Über mich». Siehe Ü4.
- **Arbeitspaket 4:** Tests in Firefox und Safari sowie ein manueller Screenreader-Test, unter anderem die Ansage von `aria-pressed` und der Statusmeldung.

## 2026-11-23 – Überarbeitung Ü5 – Karten und Abstände abstimmen

### Was

- **Projektkarten:**
  - Das Raster nutzt `repeat(auto-fit, minmax(min(100%, 24rem), 1fr))`.
    - Ab rund 1024 px stehen beide Karten nebeneinander, darunter untereinander.
    - Nach dem Filtern nutzt die einzelne sichtbare Karte die volle Breite, ohne leere Spalte.
  - Die Klasse `card-case` mit `grid-column: 1 / -1` ist entfernt (HTML und CSS).
- **Einheitlicher Kartenkopf:**
  - Titel und Kategorie stehen enger zusammen (`--space-xs`), die Kurzbeschreibung folgt mit `--space-m`.
  - Das letzte Element einer Karte hat keinen Aussenabstand mehr, dadurch sind Innenabstand oben und unten gleich (je 33 px).
  - Die Karten einer Zeile werden gleich hoch, Karten untereinander dürfen unterschiedlich hoch sein.
- **Zeilenlänge:** Fliesstext in Projektkarten sowie in «Über mich» und «Hobbys» ist mit `max-inline-size: 65ch` begrenzt. Karten und Abschnitte bleiben breit.
- **Abstände:**
  - Der Einstieg hat unten nur noch `--space-m`. Der Abstand vom Knopf «Projekte ansehen» zur Überschrift «Projekte» ist dadurch kleiner: 48 px statt 96 px mobil, 80 px statt 128 px ab 768 px.
  - Neue Klasse `section-compact` für «Über mich» und «Hobbys»: ab 768 px Innenabstand `--space-l` (32 px) statt `--space-xl` (64 px).
- **Fokusrahmen der Filter-Schaltflächen:**
  - Der Rahmen liegt bei `:focus-visible` innen (`outline-offset: -3px`) statt 3 px ausserhalb.
  - Ein weisser Innenstreifen (`box-shadow: inset`) trennt ihn von der grünen Füllung der aktiven Auswahl.
  - Zusätzlich lässt `scroll-margin-block: var(--space-m)` etwas Luft zum Fensterrand, wenn der Browser beim Fokus scrollt.
- Texte und Filterlogik sind unverändert.

### Befund zum Fokusrahmen

- Nachgestellt bei 375 × 700 px vor der Änderung: Beim Vorwärts-Tabben lag die Unterkante aller drei Filter-Schaltflächen genau am Fensterrand (700 von 700 px). Der Fokusrahmen (3 px Breite plus 3 px Abstand) ragte 6 px darüber hinaus.
- Kein Container schneidet ab: Kein Vorfahre hat ein `overflow` ausser `visible`. Ursache ist der Fensterrand. Chromium scrollt beim Fokus nicht, solange die Schaltfläche selbst vollständig sichtbar ist, und berücksichtigt dabei weder den Rahmen ausserhalb noch `scroll-margin`.
- Varianten verglichen mit Fensterhöhen 560–760 px in 1-px-Schritten, Breite 375 und 768 px, Tab und Shift+Tab (je 603 Fokusschritte):

  | Variante | Abgeschnittene Fokusschritte bei Tab |
  |---|---|
  | alter Stand | 156 von 603, bis 7 px |
  | nur `scroll-margin` | 18 von 603, bis 6 px |
  | Rahmen innen plus `scroll-margin` | 0 |

  Bei Shift+Tab gab es in allen Varianten 0 abgeschnittene Schritte.

### Warum

- **Kartenraster:** Mit gleich aufgebauten Karten nebeneinander lassen sich die Projekte leichter vergleichen. Eine gefilterte Einzelkarte soll keine leere Spalte hinterlassen.
- **Zeilenlänge:** Zeilen mit über 100 Zeichen (vorher bis 112 in den Karten, 120 in «Über mich» bei 1440 px) sind schwer zu lesen.
- **Abstände:** Abschnitte mit einem Satz brauchen keine 64 px Innenabstand.
- **Fokusrahmen:** Ein Fokusindikator muss vollständig sichtbar sein. Liegt er innerhalb der Schaltfläche, ist er sichtbar, sobald die Schaltfläche es ist.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless):

- **Layout bei 320 × 800, 375 × 700, 767, 768 und 1440 px, jeweils in den Filteransichten «Alle», «Studium» und «Praxis»** (125 Prüfungen, alle bestanden):
  - Kein horizontaler Überlauf, Karten nie breiter als das Raster, Kartenabstände einheitlich (oben und unten je 33 px).
  - Höchstens 65–70 Zeichen pro Zeile in Karten und «Über mich», zum Beispiel bei 1440 px rund 45/47 Zeichen in den Karten und rund 60 in «Über mich».
  - Bei «Studium» und «Praxis» nutzt die einzelne Karte die volle Rasterbreite (1440 px: 1088 px).
- **Tastatur bei 320, 375 × 700 und 768 px:**
  - Tab und Shift+Tab erreichen alle drei Filter-Schaltflächen, und der Fokusrahmen liegt jeweils vollständig im sichtbaren Bereich, auch unter der fixierten Kopfzeile.
  - Enter auf «Studium» und Leertaste auf «Praxis» filtern korrekt, der Fokus bleibt auf der Schaltfläche.
  - Fokussierte, nicht aktive Schaltfläche (weiss mit orangem Rahmen) und aktive Auswahl (grün gefüllt, fett, unterstrichen, ohne Rahmen) unterscheiden sich.
- **Höhen-Sweep:** Ergebnisse siehe Befund oben, insgesamt 2412 Fokusschritte für die neue Lösung, keiner abgeschnitten.
- **Sichtprüfung:**
  - ganzseitiger Screenshot bei 1440 px;
  - Filterleiste bei 375 px mit Fokus auf einer nicht aktiven Schaltfläche;
  - Fokus auf der aktiven Schaltfläche «Alle» (oranger Rand, weisser Innenstreifen, grüne Füllung).
- **Regression:**
  - Ü1: 1383 Prüfungen, unter anderem Kopfzeile, Tab/Shift+Tab, Sprungziele und Projektlinks bei aktivem Filter.
  - Ü2: 144 Prüfungen, unter anderem beide Karten und Sprungziele ohne JavaScript bei 320, 768 und 1440 px.
  - Ü3: 112 Prüfungen.
  - Ü4: 79 Prüfungen, unter anderem Texte und Sprunglinks ohne JavaScript bei 320 px.
  - Alle bestanden.
- **Nicht geprüft:** Firefox, Safari, Screenreader (folgt in Arbeitspaket 4).

### Konzepte für die Prüfung

- **`repeat(auto-fit, minmax(min(100%, 24rem), 1fr))`:** responsives Raster ohne Media Query. `auto-fit` lässt leere Spuren wegfallen, `min(100%, …)` verhindert Überlauf auf schmalen Bildschirmen.
- **`max-inline-size: 65ch`:** begrenzt die Zeilenlänge relativ zur Schriftgrösse.
- **Fokus-Scrollen:** Browser scrollen fokussierte Elemente nur ins Bild, wenn ihr Rahmenkasten nicht sichtbar ist. Ein Fokusrahmen ausserhalb (`outline-offset` positiv) kann dabei abgeschnitten werden.
- **WCAG 2.2, 2.4.7 «Focus Visible»:** Der Fokus ist sichtbar und unterscheidet sich vom ausgewählten Zustand.

### Offene Punkte

- In «Hobbys» steht bei 1440 px wegen der 65ch-Grenze das Wort «gerne.» allein auf der zweiten Zeile. Der Text bleibt wie in Ü4 festgelegt.
- ~~Die README-Aktualisierung (Technologien und Struktur) folgt in Ü6.~~ Erledigt in Ü6.
- Die abschliessenden Tests in Firefox, Safari und mit Screenreader folgen in Arbeitspaket 4.

## 2026-11-23 – Überarbeitung Ü4 – Texte straffen

### Was

Fünf Texte angepasst. Die Projektbeschreibungen von PlantBuddy (Ü2) und Homelab bleiben unverändert.

- **Einstieg:** «Ich arbeite als Kundenbetreuer für Business Software. Hier zeige ich zwei Projekte aus Studium und Praxis: das App-Konzept PlantBuddy und mein Homelab.» Der Link «Projekte ansehen» bleibt.
- **Skill «Kundenbetreuung und Softwareverkauf»:** «Erfahrung in der Betreuung von Kundinnen und Kunden und im Verkauf von Software.»
- **Skill «Virtualisierung und Netzwerksegmentierung»:** «Praktische Erfahrung mit Proxmox und der Trennung von Netzbereichen im eigenen Homelab.»
- **Über mich:** «Ich komme aus dem kaufmännischen Bereich und arbeite heute als Kundenbetreuer Business Software bei der Informaticon AG.»
- **Hobbys:** «Im Nachwuchs der LV Thun war ich im Sprint aktiv. Heute wandere und reise ich gerne.»

### Warum

- Der alte Einstieg sprach von «baue eigene Projekte», obwohl PlantBuddy ein Konzept ist. «Segmentiertes Homelab» ging tiefer ins Setup als nötig. Der neue Einstieg sagt, was die Seite zeigt.
- Wiederholungen entfernt:
  - Der Skill zu Kundenbetreuung nannte die heutige Stelle, die schon in «Über mich» steht.
  - Der Skill zur Virtualisierung wiederholte den Homelab-Text fast wörtlich.
  - «Über mich» wiederholte Kundenbetreuung und Softwareverkauf aus den Skills.
- Der Hobbys-Satz liest sich flüssiger.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768 und 1440 px mit JavaScript sowie bei 320 px ohne JavaScript. Insgesamt 79 Prüfungen, alle bestanden:

- **Texte:** Alle fünf neuen Texte stimmen wörtlich. Die Projekttexte von PlantBuddy und Homelab sind unverändert. Die alten Formulierungen sind nicht mehr vorhanden, und nirgends steht ein Eszett.
- **Umbrüche und Lesbarkeit:** kein horizontaler Überlauf, kein Absatz breiter als sein Container, Lead weiterhin 18 px. Sichtprüfung des ganzseitigen Screenshots bei 320 px.

  | Breite | Einstieg | Skill Kundenbetreuung | Skill Virtualisierung | Über mich | Hobbys |
  |---|---|---|---|---|---|
  | 320 px | 6 Zeilen | 3 Zeilen | 4 Zeilen | 5 Zeilen | 3 Zeilen |
  | 768 px | 3 Zeilen | 3 Zeilen | 3 Zeilen | 2 Zeilen | 1 Zeile |
  | 1440 px | 3 Zeilen | 2 Zeilen | 2 Zeilen | 1 Zeile mit rund 120 Zeichen | 1 Zeile |
- **Einstiegsknopf:** «Projekte ansehen» per Klick und per Enter führt zu `#projekte`, 17–18 px unter der Kopfzeile bzw. dem Fensterrand.
- **Skills-Links:** «Zum Projekt PlantBuddy» und «Zum Projekt Homelab» führen zur jeweiligen Karte (16–18 px).
- **Filter:**
  - «Studium», «Praxis» und «Alle» zeigen die richtigen Karten mit passender Statusmeldung.
  - Bei aktivem Filter «Praxis» führt der Skills-Link zu PlantBuddy und blendet die Karte wieder ein.
- **Ohne JavaScript bei 320 px:**
  - Filter verborgen, beide Karten sichtbar.
  - Einstiegsknopf und Skills-Links springen korrekt.
  - Der Sprunglink setzt den Fokus auf `main`.
  - Alle fünf Navigationslinks führen zu ihrem Ziel.
- **Keine Browserfehler.**
- **Regression:** Testreihen aus Ü1 (1383 Prüfungen), Ü2 (144) und Ü3 (112), alle bestanden.
- **Nicht geprüft:** Firefox, Safari, Screenreader (folgt in Arbeitspaket 4).

### Konzepte für die Prüfung

- **Texte als Ganzes lesen:** Jede Aussage steht an einer Stelle; Skills verweisen auf Projekte, statt sie zu wiederholen.
- **Inklusive Sprache:** «Kundinnen und Kunden» statt der rein männlichen Form.

### Offene Punkte

- **Offene Profilangaben (unverändert aus Ü3):** genaue Studienbezeichnung und ein öffentlicher Kontaktweg.
- **Bewusst nicht vereinheitlicht:** Der Einstieg sagt «Kundenbetreuer für Business Software», «Über mich» «Kundenbetreuer Business Software». Beide Formulierungen sind so vorgegeben.
- **In Ü5 (Layout):** Erledigt in Ü5.
  - ~~Zeilenbreiten, zum Beispiel «Über mich» bei 1440 px mit rund 120 Zeichen in einer Zeile;~~
  - ~~Kartenlayout und Abstände;~~
  - ~~der um 7 px abgeschnittene Fokusrahmen der Filter-Schaltflächen bei 375 × 700 px.~~

## 2026-11-23 – Überarbeitung Ü3 – Kontakt und Profil bereinigen

### Was

- Ein für diese Seite bestätigter öffentlicher Kontaktweg liegt nicht vor. Deshalb sind der Abschnitt «Kontakt» (`#kontakt`) mit dem Satz «Ein beruflicher Profil-Link folgt in Kürze.» und der Navigationslink «Kontakt» gemeinsam entfernt.
- Die Meta-Beschreibung nennt «Kontakt» nicht mehr: «Portfolio von Alessandro: Projekte, Skills und Profil.»
- «Über mich» ist unverändert, weil die genaue Studienbezeichnung nicht bestätigt ist.
- Die Navigation hat jetzt fünf Einträge: Start, Projekte, Skills, Über mich, Hobbys. Letzter Abschnitt vor dem Footer ist «Hobbys».

### Warum

- Ein Abschnitt «Kontakt» ohne Kontaktweg verspricht etwas, das die Seite nicht einlöst.
- Ins Profil kommen nur bestätigte und freigegebene Angaben.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768 und 1440 px mit JavaScript sowie bei 320 px ohne JavaScript. Insgesamt 112 Prüfungen, alle bestanden:

- **Verweise:**
  - Die Navigation enthält genau Start, Projekte, Skills, Über mich und Hobbys.
  - Alle internen Links (`href="#…"`) zeigen auf eine vorhandene ID.
  - Keine externen Links.
  - Im HTML gibt es keinen Verweis mehr auf `kontakt`, auch in der Suche über `index.html`, `css/`, `js/` und `README.md`.
  - Im sichtbaren Text kommt «Kontakt» nicht mehr vor.
- **Tastatur:** Jeder Navigationslink ist per Tab erreichbar, sichtbar und hat einen Fokusrahmen. Enter setzt das passende Fragment und scrollt zum Ziel: Start, Projekte und Skills liegen 0–18 px unter der Kopfzeile bzw. dem Fensterrand. «Über mich» und «Hobbys» bleiben wegen des Seitenendes tiefer im Bild.
- **Ohne JavaScript bei 320 px:** Dieselben Navigationsprüfungen bestehen. Die Navigation bricht auf zwei Zeilen um und bleibt vollständig sichtbar (Sichtprüfung im Screenshot).
- **Übergang zum Footer:** «Hobbys» (Hintergrund `--color-bg-alt`) grenzt ohne Lücke an den Footer mit Trennlinie. Sichtprüfung bei 320 px mit und ohne JavaScript.
- **Ausserdem:** Überschriftenfolge ohne Sprünge, kein horizontaler Überlauf, keine Browserfehler und keine fehlgeschlagenen Anfragen.
- **Regression:**
  - Testreihe aus Ü1 ohne das entfernte Ziel `#kontakt`: 1383 Prüfungen, alle bestanden.
  - Testreihe aus Ü2: 144 Prüfungen, alle bestanden. Es sind weniger Prüfungen, weil die Überschrift «Kontakt» wegfällt.
- **Nicht geprüft:** Firefox, Safari, Screenreader (folgt in Arbeitspaket 4).

### Konzepte für die Prüfung

- **Keine toten Sprungziele:** Abschnitt und Navigationslink werden gemeinsam entfernt, danach wird nach Verweisen auf die alte ID gesucht.
- **Sequenzielle Fokusnavigation:** Tab folgt der Reihenfolge im DOM. Ein Sprung per Enter verschiebt den Startpunkt für den nächsten Tab.

### Offene Punkte

Fehlende Profilangaben. Sie werden erst ergänzt, wenn sie bestätigt und zur Veröffentlichung freigegeben sind, und ersetzen die entsprechenden offenen Punkte aus Arbeitspaket 1 und 2.3:

- **Öffentlicher Kontaktweg:** zum Beispiel ein beruflicher Profil-Link. Danach den Abschnitt «Kontakt» mit verständlichem Linktext und den Navigationslink wieder ergänzen.
- **Genaue Studienbezeichnung:** danach in «Über mich» ergänzen.

Weitere offene Punkte:

- Die README erwähnt keinen Kontaktabschnitt, dort ist nichts anzupassen. ~~Ihre Technologieliste wird in Überarbeitungspaket 5 aktualisiert.~~ Erledigt in Ü6.

## 2026-11-23 – Überarbeitung Ü2 – PlantBuddy auf belegte Inhalte kürzen

### Was

- Die PlantBuddy-Karte zeigt nur noch Titel, Label «Studienprojekt · Teamkonzept» und eine Kurzbeschreibung: «PlantBuddy entstand im Modul WPR1 als Teamkonzept für eine App, mit der WGs und Büros die gemeinsame Pflanzenpflege organisieren können. Im Team erarbeiteten wir den Projektauftrag, die Systemziele und die Grobanforderungen.»
- Entfernt sind:
  - die vier Unterabschnitte (Ausgangslage, Mein Beitrag, Von der Ausgangslage zur Anforderung, Ergebnis und Beleg);
  - die drei sichtbaren Platzhalter;
  - die Ankündigung des fehlenden Anforderungsbeispiels.
- Unverändert bleiben die ID `plantbuddy`, `data-category="studium"`, der Skills-Link «Zum Projekt PlantBuddy» und die Klasse `card-case`.
- In `css/styles.css` sind die dadurch ungenutzten Regeln entfernt: `.case-grid`, `.case-step` (auch in den Media Queries 48rem und 64rem) und `.placeholder`. `.card-case` bleibt, weil beide Karten sie nutzen. Das gemeinsame Kartenlayout folgt in Ü5.

### Warum

- Öffentlich sichtbare Platzhalter und ein angekündigtes, aber fehlendes Beispiel wirken unfertig.
- Die Karte zeigt nur, was belegt ist. Fehlende Inhalte werden erst ergänzt, wenn sie vorliegen und freigegeben sind.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768 und 1440 px, jeweils mit und ohne JavaScript. Insgesamt 150 Prüfungen, alle bestanden:

- **Inhalt:** Der Kurzbeschreibungstext stimmt wörtlich, Label und Kategorie sind unverändert, kein Platzhalter und keine Ankündigung mehr im Seitentext.
- **Überschriften:** genau eine `h1`, Folge ohne Sprünge (h1 → h2 → h3), keine `h4` mehr.
- **Lesbarkeit:** Text 16 px in der normalen Textfarbe.
  - Bei 320 px: 9 Zeilen mit rund 25 Zeichen, Kartenhöhe 413 px statt vorher 1734 px.
  - Bei 768 px: 3 Zeilen mit rund 75 Zeichen.
  - Bei 1440 px: 2 Zeilen mit rund 112 Zeichen.
  - Sichtprüfung der Screenshots bei 320 und 1440 px.
- **Kein horizontaler Überlauf** und keine Browserfehler.
- **Filter:**
  - «Studium» zeigt nur PlantBuddy, «Praxis» nur Homelab, «Alle» beide. `aria-pressed` und die Statusmeldung («1 von 2» bzw. «2 von 2 Projekten angezeigt») stimmen.
  - Bei aktivem Filter «Praxis» führt der Skills-Link zu PlantBuddy, per Klick und per Enter: Der Filter springt auf «Alle», die Karte ist sichtbar und liegt 16–18 px unter der Kopfzeile bzw. dem Fensterrand, das Fragment ist `#plantbuddy`.
- **Ohne JavaScript:** Filter verborgen, beide Karten sichtbar. `#plantbuddy` und `#homelab` sind per Direktaufruf und über die Skills-Links erreichbar (17–18 px Abstand).
- **Regression:** Die Testreihe aus Ü1 (Kopfzeile, Tab/Shift+Tab, Sprungziele) wurde erneut ausgeführt, 1390 Prüfungen, alle bestanden.
- **Nicht geprüft:** Firefox, Safari, Screenreader (folgt in Arbeitspaket 4).

### Konzepte für die Prüfung

- **Belegte Inhalte statt Platzhalter:** Öffentlich steht nur, was nachweisbar ist. Offenes wird intern im Changelog geführt.
- **Toten CSS-Code entfernen:** Regeln nur löschen, wenn kein Element sie mehr nutzt. Das ist hier per Suche nach den Klassennamen geprüft.

### Offene Punkte

Offene Inhalte zu PlantBuddy. Sie werden erst öffentlich, wenn sie vorliegen und freigegeben sind; sie ersetzen die offenen Punkte aus Arbeitspaket 2.1:

- **Persönlicher Beitrag:** welche Teile von Projektauftrag, Systemzielen oder Grobanforderungen ich im Team erarbeitet habe.
- **Anforderungsbeispiel mit Prüfkriterium:** eine dokumentierte Anforderung aus den Grobanforderungen mit dem zugrunde liegenden Bedarf und einem daraus abgeleiteten Prüfkriterium.
- **Veröffentlichbarer Beleg:** ein zur Veröffentlichung freigegebener Auszug aus den Projektunterlagen oder eine eigene Darstellung.

Weitere offene Punkte:

- ~~Bei 1440 px läuft die Kurzbeschreibung mit rund 112 Zeichen pro Zeile, und unter dem Text bleibt mehr Abstand als oben (Rand des letzten Absatzes). Das wird in Ü4/Ü5 (Layout) behoben.~~ Erledigt in Ü5 (65ch-Grenze, kein Aussenabstand am letzten Element).

## 2026-11-23 – Überarbeitung Ü1 – Mobile Kopfzeile und Sprungziele

### Was

- Die Kopfzeile scrollt unter 48rem (768 px) normal mit (`position: static`). Erst ab 48rem ist sie fixiert (`position: sticky`). Alle Navigationslinks bleiben auf jeder Breite sichtbar.
- Die Regeln `scroll-margin-top: 6rem` auf `section` und `.card` sind entfernt und durch `scroll-padding-top` auf `html` ersetzt, damit sich keine Abstände doppeln:
  - unter 48rem `1rem`, also nur etwas Luft über dem Ziel;
  - ab 48rem die Höhe der einzeiligen Kopfzeile (`--header-height: 3.25rem`) plus `1rem`.
- Es sind nur CSS-Regeln geändert. Texte, Projektkarten, Filter und JavaScript bleiben unverändert.

### Warum

- Bei 320 und 375 px war die fixierte Kopfzeile 122 px hoch, weil die Navigation auf zwei Zeilen umbricht. Beim Rückwärts-Tabben lagen die Links «Projekte ansehen» und «Zum Projekt PlantBuddy» samt Fokusrahmen teilweise darunter. Nach Sprüngen waren die oberen 25 px der Ziele verdeckt, weil der Sprungabstand von 96 px kleiner war als die Kopfzeile.
- Ab 576 px passt die Navigation hier einzeilig neben den Namen. Der Breakpoint liegt beim bestehenden Breakpoint 48rem, damit Reserve für breitere Systemschriften und eine grössere Standardschrift bleibt und kein neuer Breakpoint dazukommt.
- `scroll-padding-top` gilt für alle Sprungziele, auch für das Fokus-Scrollen per Tastatur, und funktioniert ohne JavaScript.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless). Insgesamt 1390 Prüfungen, alle bestanden:

- **Vorher gemessen:** Kopfzeile 122 px bei 320 und 375 px. Beim Rückwärts-Tabben war die Oberkante des Fokusrahmens bei «Zum Projekt PlantBuddy» 22 px und bei «Projekte ansehen» 16–17 px verdeckt. Sprungziele lagen 25 px unter der Kopfzeile. Bei 1440 px stand 46 px Lücke unter der 51 px hohen Kopfzeile.
- **Breitenscan 320–1920 px** in 4-px-Schritten:
  - kein horizontaler Überlauf, alle Navigationslinks innerhalb des Viewports;
  - unter 768 px ist die Kopfzeile statisch, ab 768 px fixiert, höchstens 52 px hoch, und der Sprungabstand ist grösser als die Kopfzeile.
- **Tastatur und Sprünge bei 320, 375, 767, 768 und 1440 px:**
  - Tab und Shift+Tab durch alle Links und Schaltflächen: Kein fokussiertes Element liegt unter der Kopfzeile. «Projekte ansehen» und «Zum Projekt PlantBuddy» sind samt Fokusrahmen vollständig sichtbar.
  - Der Sprunglink zum Hauptinhalt wird sichtbar fokussiert, und Enter setzt den Fokus auf `main`.
  - Navigation zu allen Abschnitten und die Skills-Links zu `#plantbuddy` und `#homelab`: Das Ziel liegt 16–18 px unter der Kopfzeile bzw. dem Fensterrand. Ausnahme sind die letzten Abschnitte, die wegen des Seitenendes tiefer stehen bleiben.
  - Filter «Praxis» bzw. «Studium» blendet die Zielkarte aus, danach Klick auf den Projektlink: Der Filter springt auf «Alle», die Karte ist sichtbar und liegt 16–18 px unter der Kopfzeile. Gleiches Ergebnis für `#homelab` über `location.hash` und für den Direktaufruf mit `#plantbuddy`.
- **Ohne JavaScript bei 320 und 1440 px:** Sprunglink, Navigation und Projektlinks springen mit demselben Abstand, kein Überlauf.
- **Sichtprüfung** der Screenshots bei 320 und 768 px nach dem Sprung zu `#plantbuddy`.
- **Nicht geprüft:** Firefox, Safari, Screenreader (folgt in Arbeitspaket 4).

### Konzepte für die Prüfung

- **`scroll-padding-top` und `scroll-margin-top`:** Das erste wirkt am Scroll-Container für alle Ziele, das zweite am einzelnen Ziel. Werden beide gesetzt, addieren sie sich.
- **`position: sticky` erst ab einem Breakpoint:** Auf schmalen Bildschirmen kostet eine fixierte Kopfzeile zu viel Platz.
- **WCAG 2.2, 2.4.11 «Focus Not Obscured (Minimum)»:** Fokussierte Elemente dürfen nicht von fixierten Inhalten verdeckt werden.
- **Breakpoints in `rem`:** Sie wachsen mit der eingestellten Standardschriftgrösse mit.

### Offene Punkte

- ~~Die README nennt unter «Technologien» noch `scroll-margin-top`. Das wird mit Überarbeitungspaket 5 (Dokumentation) angepasst.~~ Erledigt in Ü6.
- ~~Bei 375 px × 700 px schneidet der Fensterrand beim Tabben vorwärts den Fokusrahmen der Filter-Schaltflächen unten um 7 px ab, weil der Browser nur minimal scrollt. Die Schaltflächen bleiben sichtbar. Der Effekt bestand schon vorher und hängt nicht mit der Kopfzeile zusammen.~~ Erledigt in Ü5 (Fokusrahmen innen).

## 2026-11-20 – Arbeitspaket 3.2 – Projektfilter

### Was

- Label von PlantBuddy von «Teamkonzept · Fallbeispiel» zu «Studienprojekt · Teamkonzept» geändert; Homelab behält «Praxisprojekt».
- Im Projektbereich drei Filter-Schaltflächen «Alle», «Studium» und «Praxis» ergänzt (native `<button type="button">` in einer `role="group"` mit sichtbarer Beschriftung «Projekte filtern»). Standardmässig ist «Alle» aktiv.
- `js/main.js`: Der Filter liest `dataset.category` der Karten und blendet sie mit dem `hidden`-Attribut ein oder aus. `aria-pressed` zeigt den aktiven Filter an; ein Statusbereich (`role="status"`) meldet z. B. «1 von 2 Projekten angezeigt». Der Fokus bleibt auf der betätigten Schaltfläche.
- Der Filterbereich steht im HTML mit `hidden` und wird erst nach erfolgreicher Initialisierung eingeblendet. Ohne JavaScript sind keine Filter zu sehen und alle Karten sichtbar.
- Sprungziele: Führt ein interner Link (z. B. «Zum Projekt PlantBuddy») zu einer ausgeblendeten Karte, setzt ein Klick-Handler den Filter vor dem Sprung auf «Alle» zurück. Für Fragmente, die über die Adresszeile gesetzt werden, übernimmt das ein `hashchange`-Handler.
- CSS: globale Regel `[hidden] { display: none !important; }`, damit `display`-Regeln das Attribut nicht übersteuern. Aktiver Zustand mit Füllung, Unterstreichung und Fettschrift, damit er nicht nur über Farbe erkennbar ist. Schaltflächen mindestens 2.75rem hoch.

### Warum

- Mit einem Filter finden Besucherinnen und Besucher Projekte nach Kategorie; das sichtbare Label passt jetzt zur Filterbezeichnung «Studium».
- Native Schaltflächen sind ohne Zusatzaufwand per Tab, Enter und Leertaste bedienbar.
- Funktionslose Bedienelemente ohne JavaScript werden vermieden (Progressive Enhancement).
- Sprunglinks dürfen nicht auf ausgeblendete Inhalte führen.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless), Filter-Testreihe bei 320, 768 und 1920 px (72 Prüfungen, alle bestanden):

- Standardansicht: Filter sichtbar, «Alle» mit `aria-pressed="true"`, beide Karten sichtbar, Status «2 von 2 Projekten angezeigt», Statusbereich mit `role="status"`, neues PlantBuddy-Label.
- Klick auf «Studium», «Praxis» und zurück zu «Alle»: richtige Karte(n) sichtbar, ausgeblendete Karte mit `hidden` und `display: none`, `aria-pressed` und Status korrekt, Fokus bleibt auf der Schaltfläche, kein horizontales Scrollen.
- Aktiver Zustand ohne Farbe erkennbar: nur die aktive Schaltfläche ist unterstrichen und fett.
- Tastatur: Tab zu «Alle» mit sichtbarem Fokusrahmen, Tab + Enter auf «Studium», Tab + Leertaste auf «Praxis», Shift+Tab + Leertaste zurück auf «Alle».
- Skills-Links bei ausblendendem Filter, per Maus und per Tastatur (Tab + Enter): «Praxis» + «Zum Projekt PlantBuddy» und «Studium» + «Zum Projekt Homelab» setzen den Filter auf «Alle»; die Zielkarte ist sichtbar unter der Kopfzeile, das Fragment ist gesetzt.
- Fragment `#homelab` über `location.hash` bei aktivem Filter «Studium»: Filter wird zurückgesetzt, Karte sichtbar.
- Direktaufruf mit `#plantbuddy` und `#homelab`: beide Karten sichtbar, Ziel unter der Kopfzeile.
- Keine Browserfehler.
- Ohne JavaScript: Filterbereich verborgen, keine sichtbaren Schaltflächen, beide Karten sichtbar, Direktaufruf beider Fragmente funktioniert.
- Bestehende Testreihe erneut ausgeführt (143 Prüfungen, alle bestanden); die Tab-Prüfung zählt jetzt Links und sichtbare Schaltflächen (14 Tab-Stopps mit sichtbarem Fokus).
- Sichtprüfung der Filterleiste bei 768 px mit Fokus auf «Alle».
- Kein manueller Screenreader-Test; ob die Statusmeldung tatsächlich angesagt wird, ist ungeprüft.

### Konzepte für die Prüfung

- **`dataset` und `hidden`:** Kategorie aus `data-category` lesen, Sichtbarkeit über das `hidden`-Attribut steuern.
- **`aria-pressed`:** kennzeichnet Umschalt-Schaltflächen und ihren Zustand für Hilfstechnologien.
- **Live-Region (`role="status"`):** meldet Änderungen unaufdringlich, ohne den Fokus zu verschieben.
- **Event Delegation:** ein Listener auf dem Filterbereich bzw. dem Dokument statt eines Listeners pro Element.
- **Reihenfolge von Ereignissen:** Der `click`-Handler läuft vor dem Standard-Sprung des Links; `hashchange` deckt andere Wege ab.
- **Progressive Enhancement:** Filter erst nach erfolgreicher Initialisierung einblenden.
- **CSS-Spezifität und `!important`:** `[hidden]` sicher gegen `display`-Regeln durchsetzen.

### Offene Punkte

- Manueller Screenreader-Test (Ansage von `aria-pressed` und Statusmeldung) steht aus.
- Prüfung in weiteren Browsern (Firefox, Safari) steht aus.
- ~~README «Struktur»/«Technologien» erwähnt den Filter noch nicht – separat nachführen.~~ Erledigt in Ü6.

## 2026-11-20 – Arbeitspaket 3.1 – Projektkategorien vorbereiten

### Was

- Die beiden Projektkarten in `index.html` haben ein `data-category`-Attribut erhalten: PlantBuddy `data-category="studium"`, Homelab `data-category="praxis"`.
- Sichtbare Inhalte, Layout und CSS sind unverändert. Die Labels auf den Karten bleiben «Teamkonzept · Fallbeispiel» (PlantBuddy) und «Praxisprojekt» (Homelab).

### Warum

- `data-*`-Attribute speichern Zusatzinformationen direkt am HTML-Element, ohne die Darstellung oder die Semantik zu verändern.
- JavaScript kann den Wert über `element.dataset.category` lesen, CSS und `querySelectorAll` über den Attributselektor `[data-category="…"]`.
- Ein fester, maschinenlesbarer Wert ist für einen Filter zuverlässiger als der sichtbare Text, der sich ändern kann.
- Der JavaScript-Filter mit seinen Schaltflächen folgt in Arbeitspaket 3.2.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768 und 1920 px:

- Mit JavaScript: `document.getElementById('plantbuddy').dataset.category` ergibt `studium`, `…('homelab').dataset.category` ergibt `praxis`; `[data-category="studium"]` trifft nur PlantBuddy, `[data-category="praxis"]` nur Homelab.
- Mit und ohne JavaScript: beide Karten vorhanden, mit gesetztem Attribut und sichtbar (Breite und Höhe grösser als 0, nicht ausgeblendet).
- Bestehende Testreihe (143 Prüfungen, alle bestanden): u. a. führen die Skills-Links «Zum Projekt PlantBuddy» und «Zum Projekt Homelab» per Klick und per Tastatur, mit und ohne JavaScript, zu `#plantbuddy` bzw. `#homelab`; kein horizontales Scrollen; Überschriftenfolge ohne Sprünge.

### Konzepte für die Prüfung

- **`data-*`-Attribute und `dataset`:** `data-category` im HTML wird in JavaScript zu `element.dataset.category`.
- **Trennung von Inhalt und Logik:** Der Filter stützt sich auf Metadaten statt auf sichtbaren Text.
- **Progressive Enhancement:** Ohne JavaScript bleiben alle Karten sichtbar; der Filter in 3.2 ist eine Ergänzung.

### Offene Punkte

- ~~Filter und Schaltflächen folgen in Arbeitspaket 3.2.~~ Erledigt in Arbeitspaket 3.2.
- ~~Das sichtbare Label von PlantBuddy lautet «Teamkonzept · Fallbeispiel», nicht «Studienprojekt»; klären, ob es für den Filter angeglichen werden soll.~~ Erledigt in Arbeitspaket 3.2 (Label «Studienprojekt · Teamkonzept»).

## 2026-11-20 – Arbeitspaket 2.3 – Skills und Profil

### Was

- Skills präzisiert: Jeder Skill hat jetzt eine eigene Überschrift (`h3`) und eine kurze, konkrete Beschreibung.
  - **Kundenbetreuung und Softwareverkauf:** Erfahrung in der Kundenbetreuung und im Verkauf von Software, heute als Kundenbetreuer Business Software.
  - **Requirements Engineering:** im Team Grobanforderungen für ein App-Konzept erarbeitet; Link «Zum Projekt PlantBuddy» (`#plantbuddy`). Der persönliche Beitrag bleibt im Fallbeispiel offen.
  - **Virtualisierung und Netzwerksegmentierung:** eigene Dienste mit Proxmox betreiben und interne Dienste von öffentlich erreichbaren Gameservern trennen; Link «Zum Projekt Homelab» (`#homelab`). Bisher stand hier nur «Netzwerksegmentierung».
  - **Grundlagen in HTML, CSS und JavaScript:** mit diesem Portfolio als Beispiel (ohne Framework umgesetzt).
- Linktexte von «(siehe PlantBuddy)» / «(siehe Homelab)» zu «Zum Projekt PlantBuddy» / «Zum Projekt Homelab» geändert, damit sie auch ohne den umgebenden Text verständlich sind.
- CSS: Skills als Liste ohne Aufzählungszeichen, mobil untereinander und ab 48rem zweispaltig, jeweils als helle Kachel mit Akzentrand.
- «Über mich» und «Kontakt» geprüft und unverändert gelassen: «Über mich» enthält bereits die bestätigten Angaben (kaufmännischer Hintergrund, Erfahrung in Kundenbetreuung und Softwareverkauf, Kundenbetreuer Business Software bei der Informaticon AG). Der Kontaktbereich enthält nur Text und keinen funktionslosen Link.

### Warum

- Kurze, konkrete Skills mit Verweis auf ein Projekt sind glaubwürdiger als eine reine Stichwortliste.
- Es werden keine Erfahrungsjahre oder Kompetenzstufen genannt, weil dafür keine Belege vorliegen.
- Studienbezeichnung und Profil-Link sind im Projekt weiterhin nicht bestätigt und wurden deshalb nicht ergänzt.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768 und 1920 px, jeweils mit aktiviertem und deaktiviertem JavaScript (143 automatisierte Prüfungen, alle bestanden):

- Skills: 4 Einträge, bei 320 px untereinander, ab 768 px zweispaltig; Überschriften und Texte mindestens 16 px ohne Überlauf; keine Erfahrungsjahre, Stufen oder Prozentangaben im Text.
- Skills-Links per Maus (Klick) und per Tastatur (Tab bis zum Link, sichtbarer Fokusrahmen, Enter) mit und ohne JavaScript: «Zum Projekt PlantBuddy» führt zu `#plantbuddy`, «Zum Projekt Homelab» zu `#homelab`; der Kartentitel liegt jeweils sichtbar unter der fixierten Kopfzeile.
- Kontakt: kein Link im Abschnitt (kein funktionsloser Platzhalter).
- Überschriftenfolge h1 → h2 → h3 → h4 ohne Sprünge, genau ein `h1`; alle 11 Links per Tab erreichbar mit sichtbarem Fokus.
- Kein horizontales Scrollen; Prüfungen aus den Arbeitspaketen 1, 2.1 und 2.2 (PlantBuddy, Homelab, Navigation, Sprunglink, Laden von CSS/Modul, keine Browserfehler) weiterhin bestanden.
- Sichtprüfung des Skills-Bereichs bei 320 px (JS an), 768 px (JS an) und 1920 px (JS aus).
- Kein manueller Screenreader-Test.

### Konzepte für die Prüfung

- **Aussagekräftige Linktexte:** Ein Link soll auch ausserhalb des Satzes verständlich sein (z. B. in einer Linkliste eines Screenreaders).
- **Überschriften in Listeneinträgen:** `h3` pro Skill macht den Bereich per Überschriftennavigation zugänglich.
- **Belegte Aussagen:** Kompetenzen über konkrete Projekte belegen statt über Selbsteinschätzungen wie Stufen oder Jahre.
- **Interne Verlinkung mit Ankern:** Skills verweisen per Fragment-Link (`#id`) auf die passende Projektkarte; funktioniert ohne JavaScript.

### Offene Punkte

- **Beruflicher Profil-Link** (z. B. LinkedIn): nicht bestätigt – im Abschnitt Kontakt ergänzen, sobald er bestätigt ist.
- **Genaue Studienbezeichnung:** geht aus den Projektunterlagen nicht hervor – bei Bedarf in «Über mich» ergänzen.
- Manueller Screenreader-Test steht weiterhin aus.
- ~~Änderungen aus 2.1 bis 2.3 sind nur lokal committet und noch nicht veröffentlicht.~~ Erledigt: laut Git-Stand in `origin/main` enthalten (siehe Ü6).

## 2026-11-20 – Arbeitspaket 2.2 – Homelab-Fallbeispiel

### Was

- Homelab-Karte (`#homelab`) überarbeitet und für die öffentliche Seite auf einen kurzen Überblick vereinfacht: ein Absatz dazu, woran ich arbeite und welche Themen das Projekt abdeckt (Proxmox, Virtualisierung, Netzwerke, Datensicherung, Trennung von internen Diensten und öffentlich erreichbaren Gameservern).
- Vereinfachung: Eine erste Fassung (Commit 6a5cecd) enthielt die Unterabschnitte «Ausgangslage», «Architekturentscheidung», «Mein Beitrag» und «Ergebnis», eine vereinfachte Netzgrafik und zwei Platzhalter. Diese Teile wurden wieder entfernt, ebenso die nicht mehr verwendeten CSS-Regeln (Zonen-Grafik, `.case-step-wide`, Zonenfarben).
- Die Karte nutzt weiterhin `.card-case` und steht damit wie PlantBuddy über die volle Rasterbreite.
- Sprungziel `#homelab` und der Link aus dem Skills-Bereich bleiben unverändert.

### Warum

- Die öffentliche Portfolio-Seite soll einen kurzen Überblick über das Projekt geben. Technische Details zum eigenen Setup bleiben privat.
- Ein Überblick ohne Netzwerkaufbau braucht weder eine Architekturgrafik noch Platzhalter für Belege zur Netztrennung.

### Getestet

Lokal mit `http-server` und Playwright (Chromium, headless) bei 320, 768 und 1920 px, jeweils mit aktiviertem und deaktiviertem JavaScript (113 automatisierte Prüfungen, alle bestanden):

- Homelab-Karte: genau ein Absatz in 16 px ohne Textüberlauf, kein Element ragt über den Seitenrand, keine Grafik, keine Platzhalter und keine Unterabschnitte mehr; Text enthält Proxmox, Datensicherung und die Trennung von internen Diensten und öffentlich erreichbaren Gameservern; Karte über die volle Rasterbreite.
- Kein horizontales Scrollen auf der ganzen Seite.
- Überschriftenfolge h1 → h2 → h3 → h4 ohne Sprünge (h4 nur noch bei PlantBuddy), genau ein `h1`.
- Skills-Link «(siehe Homelab)» springt zu `#homelab`, der Kartentitel liegt sichtbar unter der fixierten Kopfzeile; ebenso «(siehe PlantBuddy)».
- PlantBuddy unverändert: Element-Screenshots bei 320 px (JS an), 768 px (JS an) und 1920 px (JS aus) sind byte-identisch mit den Aufnahmen vor der Überarbeitung; Prüfungen aus 2.1 bestanden.
- Prüfungen aus Arbeitspaket 1 (Laden von CSS/Modul, keine Browserfehler, Navigation, Sprunglink zum Hauptinhalt, Tastaturfokus) bestanden.
- Zugänglichkeit nur automatisiert mit Playwright geprüft: Überschriftenebenen und -reihenfolge aus dem DOM, Tab-Reihenfolge aller Links mit sichtbarem Fokusrahmen (mindestens 2 px Outline), Funktion der Sprunglinks per Tastatur und Darstellung ohne JavaScript. Ein manueller Test mit einem Screenreader wurde nicht durchgeführt.
- Sichtprüfung der gekürzten Homelab-Karte bei 320 px (JS an), 768 px (JS an) und 1920 px (JS aus).

### Konzepte für die Prüfung

- **Zielgruppengerechte Inhalte:** Eine öffentliche Seite zeigt Themen und Kompetenzen, nicht die Konfiguration der eigenen Infrastruktur.
- **Datensparsamkeit:** Keine Angaben zu Netzwerkaufbau, Adressen, Hostnamen oder Diensten des eigenen Setups veröffentlichen.
- **Netzwerksegmentierung (als Thema):** Interne Dienste und öffentlich erreichbare Dienste werden voneinander getrennt.
- **Wartbares CSS:** Nach dem Entfernen von Inhalten auch die ungenutzten Regeln und Variablen entfernen.

### Offene Punkte

- Ein manueller Screenreader-Test der Seite steht noch aus.
- PlantBuddy-Platzhalter aus 2.1 bleiben offen.
- ~~Änderungen aus 2.1 und 2.2 sind nur lokal committet und noch nicht veröffentlicht.~~ Erledigt: laut Git-Stand in `origin/main` enthalten (siehe Ü6).

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
- ~~Die Änderungen sind nur lokal committet und noch nicht auf GitHub Pages veröffentlicht.~~ Erledigt: laut Git-Stand in `origin/main` enthalten (siehe Ü6).

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
