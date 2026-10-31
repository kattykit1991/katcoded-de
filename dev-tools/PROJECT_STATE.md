# 🎮 PROJECT STATE

> Mein Savegame für dieses Projekt.
> Wenn ich nach einer Pause zurückkomme, soll ich hier schnell sehen:
> **Wo bin ich? Was funktioniert schon? Was ist offen? Was kommt als Nächstes?**

---

## 🎯 CURRENT GOAL

**STAGE 02 · Öffentliche Website aufbauen — in Arbeit (31.10.2026).**

Stage 01 ist abgeschlossen. Die Startseite ist in kleine Komponenten aufgeteilt; die vier Themenkarten enthalten Texte, dekorative WebP-Bilder und Kategorien als reine Labels. Das CUTE_COZY-Kartenstyling und die CSS-Modules-Korrektur wurden lokal erfolgreich geprüft.

**Aktueller Fokus:** Dokumentierten Checkpoint vorbereiten. Noch keinen Commit oder Push ausführen. Vor einem späteren Commit muss die Aufnahme der vier benötigten WebP-Dateien geklärt werden: Sie sind lokal vorhanden, werden aber noch ignoriert.

**Stage 02 ist nicht abgeschlossen:** Eine echte Projektübersicht, funktionierende Abschnittsziele der Navigation und ein Dashboard-Platzhalter fehlen. Die vollständige responsive und Accessibility-Prüfung steht aus.

---

## 📍 CURRENT STATE

**Was funktioniert bereits? Was ist nachweislich fertig oder getestet?**

### Projektgrundlage

- [x] Projektverzeichnis mit `kat-create` angelegt.
- [x] KAT DEV TOOLS im Projektverzeichnis vorhanden.
- [x] `PROJECT_START.md` ausgefüllt.
- [x] `PROJECT_REQUIREMENTS.md` ausgefüllt.
- [x] `PROJECT_BUILD_GUIDE.md` vorbereitet.
- [x] Next.js 16.4.3 mit React 19.3.0, TypeScript und App Router initialisiert.
- [x] Tailwind CSS 4 und ESLint eingerichtet; Konfigurationen geprüft.
- [x] Entwicklungsserver und Homepage unter `localhost:3000` im vorangegangenen Korrekturlauf tatsächlich in Safari geprüft; Kat hat die Karten ebenfalls bestätigt.
- [x] Paketname in `package.json` und beiden Namensfeldern von `package-lock.json`: `katcoded-de-v01`; keine Dependency-Änderungen.
- [x] Vorbereitete `PROJECT_README.md` vollständig und bytegleich in `README.md` umbenannt; nur eine README vorhanden.
- [x] Git-Repository auf `main`; bestehender Remote `origin` und bisheriger Checkpoint `197fc29` vorhanden. Aktueller Kartenstand noch nicht committed.
- [x] `.gitignore` geprüft: `node_modules/`, `.next/`, `.env`, lokale `.env`-Varianten und `.DS_Store` werden ignoriert.
- [x] `AGENTS.md`, README und vorhandene DEV TOOLS erhalten. In diesem Dokumentationsauftrag werden nur State, Build Guide und Requirements aktualisiert.
- [x] Eigene Homepage mit Hero-Grundgerüst und vier wiederverwendbaren Themenkarten umgesetzt; kein Next.js-Demoinhalt mehr.

### Homepage · umgesetzte Meilensteine

- **Fertig umgesetzt und lokal geprüft:** vier Karten „Meine Projekte“, „Dev Tools“, „Über mich“, „Roadmap“ mit bestehenden Texten, Bildern und jeweils drei nicht interaktiven Kategorie-Labels.
- **Fertig umgesetzt und lokal geprüft:** CUTE_COZY-Flächen, Rahmen, Rundungen, Schatten und Typografie über vorhandene Tokens; Gestaltung in zwei CSS Modules.
- **Fertig behoben:** fehlende CSS-Module-Klassen durch die Turbopack-Regel; Details unter „Technische Entscheidungen“.
- **Umgesetzt, aber nicht vollständig geprüft:** responsives Kartenraster (eine Spalte, ab 48rem zwei, ab 80rem vier), umbrechende Badges, begrenzte Bilder und reduzierte Hover-Bewegung. Die Safari-Sichtprüfung zeigte vier gestaltete Karten im Zweispaltenraster; nicht alle Breiten, Zoomstufen oder assistiven Technologien sind geprüft.
- **In Arbeit:** öffentliche Website gemäß Stage 02 und FR001. Die Themenkarte „Meine Projekte“ ist noch keine Übersicht konkreter Projekte.
- **Geplant:** weitere öffentliche Projektansichten, Dashboard-Platzhalter, Datenbank, Authentifizierung, CRUD und Veröffentlichungssteuerung.

### Bestehende Komponentenstruktur

| Datei | Zuständigkeit |
| --- | --- |
| `src/app/page.tsx` | Setzt `HomeHero` und `HomeCards` zusammen. |
| `src/components/home/HomeHero.tsx` | Kurze Begrüßung und Einführung; im Kartenauftrag unverändert. |
| `src/components/home/HomeCards.tsx` | Texte, Kategorien und Bildzuordnung der vier Karten. |
| `src/components/home/HomeCard.tsx` | Wiederverwendbare Struktur; Props `title`, `description`, `image`, `categories`; dekoratives Next-Image und semantische Kategorienliste. |
| `src/lib/images.ts` | Zentrale statische Importe der vier lokalen WebP-Dateien. |
| `src/components/home/HomeCard.module.css` | Kartenfläche, Text-/Bildanordnung, Bildbegrenzung, Badges und Hover. |
| `src/components/home/HomeCards.module.css` | Raster, Breakpoints, Außenabstände und Farben nach Kartenreihenfolge. |
| `src/app/layout.tsx` | Gemeinsamer Rahmen, Navigation, Metadaten, Token-Import und Footer-Platzhalter. |

### Technische Entscheidungen

- Bestehende Komponentenverantwortlichkeiten erhalten; kein Zusammenführen, keine zusätzliche Bibliothek und keine neue Route für das Kartenstyling.
- CUTE_COZY – **Pink First, Cozy Always**. `design-system/CUTE_COZY/tokens.css` ist bereits über `layout.tsx` eingebunden, aktiv über `kat-ui` und `data-kat-theme="cozy"`. Lokale Quicksand-/Nunito-Schriften, Pastellfarben, Textfarben, Karten-/Pill-Radien, Rahmen, Schatten und Bewegungsdauer werden wiederverwendet; das Designsystem bleibt unverändert.
- Tailwind CSS **4.3.3** bleibt für den bestehenden Rahmen erhalten. Kartenstyling liegt für die Lesbarkeit überwiegend in CSS Modules.
- **Turbopack-Ursache:** Die Regel `"*.css"` mit `as: "*.css"` erfasste auch `.module.css` und behandelte sie als gewöhnliches CSS. Dadurch fehlten die Klassenexports; `styles.card`/`styles.image` führten zu keinen Klassenattributen im HTML. `next.config.ts` schließt CSS Modules nun über `condition: { not: { path: "*.module.css" } }` von dieser Loader-Regel aus. Native CSS-Module-Verarbeitung bleibt erhalten; globale Tailwind-Verarbeitung bleibt bestehen.
- Statische Bildimporte liefern Maße; `height: auto`, `object-fit: contain` und `max-width: 8rem` begrenzen die Bilder ohne Beschnitt oder Verzerrung. `alt=""` entspricht ihrer dekorativen Funktion. Kategorien bleiben `ul`/`li`, ohne Fake-Links oder Buttons.
- `references/` ist ausschließlich lokale Designreferenz und bleibt aus Git ausgeschlossen. `references/homepage-prototype.tsx` ist keine aktive Homepage.
- OpenNext-/Wrangler-Konfiguration besteht bereits; Worker und Self-Reference heißen `katcoded-de`. `cacheComponents` und `partialPrefetching` sind nach dem früheren Workers-Laufzeitproblem nicht aktiviert. Kein erneuter Cloudflare-Test oder Deployment in diesem Auftrag.

### Prüfstand · 31.10.2026

- **TypeScript erneut bestanden:** `./node_modules/.bin/tsc --noEmit --incremental false` — Exit 0.
- **ESLint erneut bestanden:** `npm run lint` — Exit 0; eine bekannte Warnung `@next/next/no-img-element` in der unveränderten lokalen Assetpack-Datei `design-system/CUTE_COZY/examples/react.jsx:13`.
- **Produktionsbuild erneut bestanden:** `npm run build` — Exit 0 mit erweiterten lokalen Prozess-/Portrechten. Route `/` statisch generiert; keine Projekt- oder Dashboard-Route vorhanden. Kein OpenNext-Build in diesem Dokumentationsauftrag.
- **Laufzeitnachweis aus dem unmittelbar vorangegangenen Korrekturlauf:** Safari auf `localhost:3000` zeigte alle vier gestalteten Karten; Inspector zeigte generierte CSS-Module-Klassen und für das erste Bild berechnete 128 × 128 Pixel. Produktions-HTML enthielt Klassen für alle vier Karten/Bilder und passende Selektoren im erzeugten CSS. Diese Browserprüfung wurde für die reine Dokumentationsänderung nicht wiederholt.
- **Nicht vollständig geprüft:** Smartphone-/Tablet-/Desktop-Matrix, Browserzoom/Textvergrößerung, Screenreader, vollständige Tastaturprüfung und WCAG 2.2 AA. Keine umfassende Konformitätsaussage.
- **Git und Diff geprüft:** `main` mit bestehendem `origin/main`; Kartenänderungen lokal, zusätzlich neue CSS Modules und `src/lib/images.ts`. Keine Konfliktmarkierungen oder Whitespace-Fehler im geprüften Diff. Vier neue Laufzeitbilder sind noch ignoriert — frischer Checkout dieses Arbeitsstands deshalb noch nicht abgesichert.
- **Historischer Setupbefund eingeordnet:** Der am 29.10. noch offene Produktionsbuild ist inzwischen erfolgreich. Die damaligen Font-/Sandbox-Probleme sind kein aktueller Build-Blocker. Lokale Fonts sind vorhanden.

Verständnis-Lernziele im Build Guide werden nicht aus vorhandenem Code abgeleitet. Ein funktionierendes Kartenlayout erfüllt weder die gesamte Stage 02 noch die vollständige FR001.

### Projektziel

`katcoded.de v0.1` wird die erste funktionierende Version meiner persönlichen Developer-Website.

Die Anwendung verbindet eine öffentliche Portfolio-Website mit einer geschützten Projektverwaltung.

**MVP-Funktionen:**

- Öffentliche Startseite mit Developer-Informationen.
- Öffentliche Übersicht ausgewählter Projekte.
- Geschützter Admin-Bereich mit Login.
- Projekte erstellen, bearbeiten und löschen.
- Projektdaten dauerhaft in einer Datenbank speichern.
- Projekte gezielt veröffentlichen oder als Entwurf behalten.

**Optional bei ausreichender Zeit:**

- Projektaufgaben verwalten.
- Projektfortschritt anhand erledigter Aufgaben darstellen.

### Technischer Stand

**Eingerichtet / vorgesehen:**

- Framework: Next.js 16.4.3 mit App Router (eingerichtet)
- Sprache: TypeScript (eingerichtet und geprüft)
- Styling: Tailwind CSS 4.3.3 und CSS Modules; CUTE_COZY integriert, Karten gestaltet
- Datenbank: Neon PostgreSQL
- Deployment: Cloudflare Workers mit OpenNext; bestehende Konfiguration, frühere Veröffentlichung laut Kat erfolgt

**Bereits vorbereitet:**

- Neon-Projekt `katcoded-web` in der Region Frankfurt.
- Bestehendes lokales Projektverzeichnis.
- Projektanforderungen und Build Guide.

**Noch nicht umgesetzt:**

- Datenbankverbindung.
- Datenbankschema.
- Authentifizierung und Zugriffsschutz.
- Admin-Dashboard.
- Projektverwaltung.
- Öffentliche Projektansichten.
- Vollständige Online-Prüfung des aktuellen Kartenstands und später des MVP.

**Noch offen:**

- Konkrete Authentifizierungslösung festlegen.

---

## ➡️ NEXT STEP

**Was mache ich als Nächstes?**

### STAGE 02 · Öffentliche Website aufbauen

**Zuerst den Checkpoint vervollständigen:** Aufnahme der vier benötigten WebP-Dateien in Git gezielt mit Kat klären. Die aktuelle Ignore-Regel lässt sie nicht zu; in diesem Auftrag bleibt sie unverändert. Danach vollständigen Commitumfang prüfen und erst bei erneuter Freigabe committen/pushen.

**Nächster Entwicklungsschritt:** Mit Kat die fehlenden Ziele der vorhandenen Navigation abstimmen. Laut Build Guide stehen danach die konkrete Projektübersicht und die übrige öffentliche Seitenstruktur an, anschließend der Dashboard-Platzhalter. Keine neuen Routen oder Inhalte sind durch diese Dokumentation freigegeben.

**Weiter prüfen:** schmale und breite Ansichten, Textzoom und Accessibility. CUTE_COZY bleibt die bestätigte Designrichtung; Hero und Footer sind noch einfache Grundgerüste.

---

## 🐛 KNOWN PROBLEMS

**Was funktioniert noch nicht richtig oder verhält sich komisch?**

- **Checkpoint-Blocker:** Die vier in `src/lib/images.ts` importierten WebP-Dateien sind lokal vorhanden, aber nicht versioniert und werden ignoriert. Eine reine Aufnahme der TS-/CSS-Dateien wäre unvollständig.
- **Navigation:** `#home`, `#projekte`, `#dev-tools`, `#ueber-mich`, `#roadmap` haben in den aktuellen Komponenten keine passenden IDs. Der Logo-Link `/` und der Skip-Link `#inhalt` haben vorhandene Ziele; die komplette Navigation ist nicht als fertig zu bewerten.
- **Semantik:** `layout.tsx` enthält `<main id="inhalt">`, `page.tsx` ein weiteres `<main>`; verschachtelte Hauptbereiche sind offen zu prüfen und mit Kat gezielt zu korrigieren. Keine Codeänderung in diesem Auftrag.
- **Bekannte Warnung:** ESLint im unveränderten Assetpack-Beispiel (siehe Prüfstand); keine TypeScript- oder Buildfehler.
- **Prüflücken:** vollständige Responsive-/Accessibility-Prüfung und aktueller Cloudflare-Laufzeitnachweis fehlen. Der erfolgreiche Next-Build allein belegt keine Workers-Laufzeit.
- **Historische Dependency-Warnungen:** Kat meldete zuvor vier High-Warnungen in der OpenNext-Dev-Abhängigkeitskette und null mit `npm audit --omit=dev`. In diesem Auftrag nicht erneut auditiert; kein aktueller Audit-Nachweis und keine Updates.

---

## 🐇 PARKED SIDEQUESTS

**Was möchte ich vielleicht machen, aber NICHT jetzt?**

### Erweiterungen außerhalb des MVP

- Kommentarfunktionen für Projekte.
- Community-Funktionen und Interaktionen.
- Erweiterte öffentliche Projektinformationen.
- Zusätzliche Portfolio-Funktionen.
- Kleine Easter Eggs und persönliche Website-Details.

### Spätere technische Möglichkeiten

- Verbindung mit KATUARY, falls dafür später ein konkreter Anwendungsfall entsteht.
- Weitere Verwaltungsfunktionen für eigene Entwicklungsprojekte.
- Zusätzliche Auswertungen und Projektstatistiken.

**Wichtig:**

Diese Ideen gehören nicht automatisch zum Umfang von `katcoded.de v0.1`.

Neue Funktionen werden erst nach bewusster Entscheidung in die Projektplanung aufgenommen.

---

## 🧹 CLEANUP LATER

**Was funktioniert, sollte aber später noch aufgeräumt oder verbessert werden?**

- Die README wurde auf ausdrücklichen Wunsch inhaltlich vollständig erhalten. Sie enthält deshalb noch alte Planungsangaben (Framework noch nicht initialisiert / Entwicklung nicht begonnen). Eine inhaltliche Aktualisierung bleibt separat offen.
- Build Guide und Requirements sind jetzt anhand des Codes abgeglichen. Offene Lernziele und vollständige Stage-Abschlüsse nicht mit abgeschlossenen technischen Teilaufgaben verwechseln.
- Kartenfarben werden in `HomeCards.module.css` über die Reihenfolge zugeordnet; beim späteren Umordnen die Farbreihenfolge bewusst mitprüfen.

---

## 🧠 IMPORTANT CONTEXT

**Was darf Future-Kat beim Wiedereinstieg auf keinen Fall vergessen?**

### 1 · Projektkontext

`katcoded.de` ist Teil meiner Developer-Identität KATCODED.

Die Website soll langfristig mehr sein als ein statisches Portfolio. Für `v0.1` konzentriere ich mich jedoch auf eine funktionierende, überschaubare Grundlage.

Das Projekt entsteht im Rahmen meiner Weiterbildung im Software Engineering bei der WBS CODING SCHOOL.

Die Projektidee wurde mit meinem Dozenten Stephan besprochen und als Kursprojekt akzeptiert.

### 2 · MVP vor Erweiterungen

Der erste Meilenstein ist eine funktionierende Anwendung mit:

- öffentlicher Website,
- geschütztem Admin-Bereich,
- persistenter Projektverwaltung,
- kontrollierter Veröffentlichung.

Optionale Funktionen dürfen die Fertigstellung des MVP nicht blockieren.

### 3 · Bestehendes Projektverzeichnis schützen

Das Projekt wurde bereits mit meinem eigenen CLI-Tool `kat-create` angelegt.

Im Projektverzeichnis befinden sich wichtige DEV TOOLS und Projektdokumente.

**Deshalb:**

Das Next.js-Grundgerüst ist bereits integriert; keine erneute Initialisierung über das bestehende Verzeichnis ausführen.

Vorhandene Dateien und Ordner dürfen nicht versehentlich überschrieben werden.

### 4 · Deployment und Domain

Cloudflare Workers mit OpenNext ist eingerichtet; eine frühere Veröffentlichung wurde von Kat bestätigt. Der aktuelle lokale Kartenstand wurde noch nicht veröffentlicht.

Die Anwendung kann zunächst über eine `workers.dev`-Adresse erreichbar gemacht werden.

Die bestehende Domain `katcoded.de` und ihre E-Mail-Konfiguration sollen vorerst unverändert bleiben.

### 5 · Datenbank und Sicherheit

Das Neon-Projekt `katcoded-web` ist vorbereitet.

Die Datenbankanbindung muss noch implementiert werden.

Datenbank-Zugangsdaten gehören ausschließlich in geeignete Umgebungsvariablen und niemals ins öffentliche GitHub-Repository.

Der Admin-Bereich benötigt eine echte serverseitige Zugriffskontrolle.

Ein versteckter Navigationslink allein ist keine Zugriffssicherung.

### 6 · Dokumentation und Arbeitsweise

Die KAT DEV TOOLS bilden die Grundlage für meine Projektdokumentation.

**Wichtige Dateien:**

- `PROJECT_START.md` → Projektidee und Zielsetzung.
- `PROJECT_REQUIREMENTS.md` → Funktionale Anforderungen.
- `PROJECT_BUILD_GUIDE.md` → Technischer Entwicklungsfahrplan mit Lernbausteinen.
- `PROJECT_STATE.md` → Aktueller Projektstand und nächster Schritt.
- `NOTES.md` → Lose Gedanken und technische Zwischennotizen.

Der Build Guide ist ein Entwicklungsfahrplan und darf bei Bedarf angepasst werden.

Diese PROJECT STATE ist ein Savegame, kein tägliches Protokoll.

### 7 · Aktueller Savepoint

**Status:** Stage 01 abgeschlossen; Stage 02 in Arbeit. Karten mit Bildern, Labels und CUTE_COZY-CSS-Modules gestaltet und in Safari geprüft. TypeScript, ESLint und Produktionsbuild erfolgreich; Warnung und Prüflücken siehe oben.

**Nächster Meilenstein:** Vollständigen Git-Checkpoint einschließlich der vier noch ignorierten Laufzeitbilder vorbereiten; anschließend offene Navigationsziele/Projektübersicht mit Kat abstimmen.

### Vorgesehener Umfang des nächsten Checkpoints

Noch keine Dateien gestaged. Nach Klärung der Bildaufnahme gehören sachlich zusammen:

- `next.config.ts` — CSS-Modules-Korrektur.
- `src/components/home/HomeCard.tsx` und `HomeCards.tsx` — vorhandene Bild-/Kategorien-Props und Styling-Anbindung.
- `src/components/home/HomeCard.module.css` und `HomeCards.module.css` — ausgelagertes Styling.
- `src/lib/images.ts` — Bildimporte.
- `dev-tools/PROJECT_STATE.md`, `PROJECT_BUILD_GUIDE.md`, `PROJECT_REQUIREMENTS.md` — dieser Dokumentationsabgleich.
- Die vier benötigten Dateien unter `design-system/CUTE_COZY/assets/cozy-originals/pixelkat/accessories/`: `49-cozy-notebook.webp`, `48-sticker-laptop.webp`, `06-cozy-cat-mug.webp`, `52-book-stack.webp`. Derzeit ignoriert; Aufnahme noch klären.
- Eine dafür gegebenenfalls gezielte `.gitignore`-Anpassung ist erst nach Klärung vorzubereiten und wurde hier nicht vorgenommen.

`references/`, Original-Assetarchive, lokale Umgebungsdateien und generierte Builddateien gehören nicht in den Checkpoint. Unveränderte Dateien wie `page.tsx`, `HomeHero.tsx` und `layout.tsx` brauchen keine neue Änderung.

**Grenzen dieses Savepoints:** Nur State, Build Guide und Requirements aktualisiert. Keine Code-/Styling-/Konfigurationsänderungen, kein Commit, Push oder Deployment. Lokale Designreferenzen bleiben lokal.

---

<!--
KAT-REGELN FÜR PROJECT STATE

- PROJECT_STATE ist ein SAVEGAME, kein Tagebuch.
- Die Datei darf ausführlich sein, wenn das beim Wiedereinstieg hilft.
- Sie muss nicht nach jeder kleinen Änderung aktualisiert werden.
- Gute Savepoint-Momente sind z. B.:
  - vor einer längeren Pause
  - am Ende eines Arbeitstags
  - nach einem größeren Meilenstein
  - wenn sich Ziel oder Projektstand deutlich verändert haben
- Bestehende relevante Informationen bleiben erhalten; veraltete Informationen werden aktualisiert oder entfernt.
- Keine erfundenen Fortschritte: Nur festhalten, was wirklich umgesetzt, geprüft oder bewusst entschieden wurde.
- Ein Agent darf beim Formulieren/Aktualisieren helfen, aber Kat liefert bzw. bestätigt den tatsächlichen Projektkontext.
- Start mit EINER PROJECT_STATE.md. Keine zusätzlichen BUGS-, SIDEQUESTS-, CLEANUP- oder DECISIONS-Dateien erzeugen, solange dafür kein echter Bedarf entsteht.
-->

---

> 👻 Part of **KAT · DEV TOOLS** · katcoded.de  
> See `DEV_TOOLS_README.md` for information about this toolkit.
