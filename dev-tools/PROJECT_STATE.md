# 🎮 PROJECT STATE

> Mein Savegame für dieses Projekt.
> **Wo bin ich? Was funktioniert schon? Was ist offen? Was kommt als Nächstes?**

**Stand:** 01.11.2026 · lokaler Arbeitsstand · Präsentation am Montag, 02.11.2026.

---

## 🎯 CURRENT GOAL

**KATCODED.DE v0.1: öffentliche Präsentationsversion funktional weitgehend fertig.**

Alle fünf Hauptseiten sind vorhanden. Der aktuelle Auftrag schließt ausschließlich die Dokumentation ab; er gibt keine Codeänderung, keinen Commit, Push oder ein Deployment frei.

**Scope-Entscheidung von Kat:** Kein privates Admin-Dashboard in KATCODED.DE. Die spätere Projekt- und Roadmap-Verwaltung gehört in die separate private Anwendung **KATUARY**. Die Website soll ausschließlich ausdrücklich freigegebene öffentliche Daten anzeigen. Aktuell sind diese Daten statisch im Quellcode hinterlegt. Datenbank, Authentifizierung, API und Synchronisierung sind nicht implementiert.

**Stage-Einordnung:** Stage 01 technisch abgeschlossen. Die öffentliche Implementierung aus Stage 02 ist vorhanden; der frühere Dashboard-Platzhalter ist ausdrücklich entfallen. Vollständige responsive/Accessibility-Abnahme und Release-Nachweise bleiben offen. Die alten Backend-/Admin-Stages sind keine v0.1-Pflichten mehr.

---

## 📍 CURRENT STATE

### Fertig umgesetzt · lokaler Quellcode

| Bereich | Tatsächlicher Umfang |
| --- | --- |
| `/` | `HomeHero` und vier `HomeCard`-Themenkarten; Texte, Kategorien und dekorative Bilder über `HomeCards`. Kategorien sind Labels, Karten sind keine Navigationslinks. |
| `/projects` | Drei öffentliche Projektdatensätze aus `src/data/projects.ts`, Filter „Alle“, „Web Apps“, „CLI Tools“, „Lernprojekte“, kompakte Technologien-Badges und native Detaildialoge. Ein über die Kartenfläche gelegter semantischer Button öffnet den Dialog. |
| `/about` | Vier vollständige persönliche Abschnitte mit abwechselnden Bildpositionen; zusätzlicher kompakter KI-Transparenzhinweis unterhalb dieser vier Abschnitte. |
| `/dev-tools` | Drei Developer-Tools-Karten, nicht interaktive Markdown-Dateibadges, Statusangaben, bestehender kat-create-GitHub-Link sowie drei Environment-Karten. |
| `/roadmap` | 13 statische Aufgaben in vier Pastellspalten; gemeinsamer Board-Container, Mindestbreite 264 px pro Spalte, ausschließlich boardinternes horizontales Scrollen. Titelbuttons mit maximal zwei Zeilen öffnen den Detail-Blerp mit Titel, Status, Kategorie und Beschreibung. Keine Bearbeitung. |
| Gemeinsamer Rahmen | `SiteHeader`, `SiteNavigation`, `SiteFooter`; Next.js-Links zu allen fünf Routen; aktive Navigation mit `aria-current="page"`, Mint-Hervorhebung und Fokuszuständen. Header und Footer verwenden den Creme–Rosa–Lavendel-Verlauf. |
| Branding und Transparenz | Unverändertes Wortlogo; KC-Favicon mit türkiser Brille, ICO 16/32/48 px; sichtbarer KI-Hinweis im Footer und ausführlicher auf About. |
| Unterseiten-Heros | Einheitliche Sparkles-Eyebrows. Jeweils exakt dieselben `homeImages` wie in der passenden Homepage-Karte: Notizbuch, Laptop, Katzentasse, Bücherstapel; dekorativ mit `alt=""`. |

Die Roadmap-Inhalte beschreiben teils zukünftige Arbeit. Ein Eintrag „Datenbankanbindung“ unter „Geplant“ ist kein Beleg einer bestehenden Datenbank. Die Statusangaben der Projekt- und Roadmap-Daten wurden bei diesem Dokumentationsabgleich nicht verändert.

### Bestehende Komponentenstruktur

| Datei / Ordner | Zuständigkeit |
| --- | --- |
| `src/app/layout.tsx` | Globaler Seitenrahmen, Metadaten, Token-/CSS-Import, Skip-Link und gemeinsamer Hauptbereich. |
| `src/components/layout/` | `SiteHeader`, kleine Client-Navigation mit `usePathname`, zentraler Footer mit CSS Module. |
| `src/app/page.tsx`, `src/components/home/` | Homepage-Zusammensetzung, Hero, Karteninhalte und wiederverwendbare Kartenstruktur; drei CSS Modules. |
| `src/app/projects/`, `src/components/projects/` | Server-Seite mit Veröffentlichungsfilter, Client-Galerie mit Filter-/Auswahlstate, Karten und `ProjectModal`; jeweilige CSS Modules. |
| `src/types/project.ts`, `src/data/projects.ts` | Projekt-Typ und statische Datensätze; keine Datenbank. |
| `src/app/about/`, `src/components/about/` | About-Seite, wiederverwendbare `AboutSection` mit bestehenden Props, CSS Modules. |
| `src/app/dev-tools/`, `src/components/dev-tools/` | Dev-Tools-Inhalte und `DevToolCard`, CSS Modules. |
| `src/app/roadmap/page.tsx` | Server-Komponente und einzige Quelle der statischen Roadmap-Aufgaben. |
| `src/components/roadmap/` | `RoadmapBoard` hält Auswahlstate, `RoadmapItem` rendert Titelbutton und gemeinsame Typen, `RoadmapModal` behandelt Details und Dialoginteraktionen; drei CSS Modules. |
| `src/lib/images.ts` | `homeImages`, `pageImages`, `aboutImages`, `accessoryImages`; bestehende statische Bildimporte. |
| `src/lib/icons.ts` | `uiIcons` mit 50 SVG-Imports einschließlich currentColor-Varianten. |
| `design-system/CUTE_COZY/` | Bestehende Tokens, lokale Fonts, Wortlogo, Icons und Illustrationen. |

Die drei neu ergänzten Unterseiten-Heros verwenden CSS-Modules-`composes` aus `src/app/projects/page.module.css` für Eyebrow, Layout und Bildbegrenzung. Bei einer späteren Änderung der Referenzklasse die vier Heros gemeinsam prüfen; keine neue Komponentenarchitektur erforderlich.

### Technische Entscheidungen

- **CSS Modules bleiben die Hauptform des Komponentenstylings.** Tailwind CSS 4.3.3 ist tatsächlich installiert und im gemeinsamen Rahmen/der Navigation sowie über `globals.css` eingebunden. Kein Widerspruch zwischen beiden Ansätzen.
- **CUTE_COZY – Pink First, Cozy Always:** `tokens.css` ist in `layout.tsx` importiert; Aktivierung über `kat-ui` und `data-kat-theme="cozy"`. Lokale Quicksand-/Nunito-Schriften und vorhandene Farb-, Rahmen-, Radius-, Schatten- und Fokus-Tokens werden verwendet.
- **Behobene CSS-Modules-Ursache:** Die globale Turbopack-Regel `"*.css"` mit `as: "*.css"` erfasste früher auch `.module.css`; dadurch fehlten Klassenexports und Klassenattribute. `next.config.ts` schließt `.module.css` über `condition: { not: { path: "*.module.css" } }` aus dieser Regel aus. Die native CSS-Module-Verarbeitung bleibt erhalten. Dieser behobene Fehler ist vom aktuellen umgebungsbedingten Build-Abbruch zu unterscheiden.
- Statische Next-Image-Importe liefern Bildmaße. CSS begrenzt die Darstellung mit `height: auto` und `object-fit: contain`; Hero-Accessoires maximal 180 px, Homepage-Kartenbilder maximal 128 px. Die vier About-Bilder behalten ihre bestehenden beschreibenden Alt-Texte; eine vollständige Bewertung aller Bildalternativen steht noch aus.
- **Veröffentlichungsfilter:** `src/app/projects/page.tsx` filtert `published` vor der Übergabe an die Client-Galerie. Alle drei aktuellen Datensätze sind öffentlich. Keine Laufzeit-Verwaltungsoberfläche, kein getesteter Entwurfs-/Freigabeworkflow und keine Geheimhaltungsgarantie für Daten in öffentlichen Source-Dateien.
- **Dialoge:** Beide Details verwenden `showModal()`. Der Roadmap-Dialog ergänzt Schließen-Button, Escape, echten Hintergrundklick, Öffnungsfokus und Rückkehrfokus; seine Tab-Behandlung ist auf den aktuell einzigen Dialogbutton zugeschnitten. Der Projekt-Dialog besitzt Schließen/Escape und einen optionalen GitHub-Link; kein gleichwertiger Backdrop-Handler vorhanden.
- **KATUARY:** Spätere private Verwaltung außerhalb dieser Website. Datenvertrag, Veröffentlichung, Feldauswahl, Transport, Berechtigungen und Aktualisierung sind noch zu planen; keine konkrete Datenbank- oder API-Technologie neu beschlossen.
- `references/` bleibt ignorierte lokale Designreferenz, keine aktive Route und kein Veröffentlichungsbestandteil.
- **Cloudflare-Vorbereitung im Repository:** OpenNext-Konfiguration, Wrangler und npm-Skripte existieren; Worker und `WORKER_SELF_REFERENCE` heißen `katcoded-de`. `cacheComponents`/`partialPrefetching` sind nicht aktiviert. Die frühere Workers-Korrektur und Veröffentlichung wurden im Verlauf von Kat bestätigt. Kein aktueller Workers-/Online-Nachweis des finalen Arbeitsstands.

### Verifizierter Tech-Stack · 01.11.2026

Next.js **16.4.3**, React/React DOM **19.3.0**, TypeScript **5.9.3**, Tailwind CSS **4.3.3**, CSS Modules; installiertes Deployment-Tooling OpenNext Cloudflare **1.20.14** und Wrangler **4.155.0**. Lokale Umgebung: Node.js **24.19.0**, npm **12.1.0**.

### Prüfstand und seine Grenzen

| Prüfung | Tatsächlicher Nachweis |
| --- | --- |
| TypeScript | Im unmittelbar vorangegangenen finalen Asset-Auftrag am 01.11.2026: `./node_modules/.bin/tsc --noEmit --incremental false`, Exit 0. Für den reinen Dokumentationsauftrag nicht erneut ausgeführt. |
| ESLint | Im selben Asset-Auftrag: `npm run lint`, Exit 0; eine bekannte Warnung `@next/next/no-img-element` in `design-system/CUTE_COZY/examples/react.jsx:13`. |
| Next-Produktionsbuild | Letzter Versuch am 01.11.2026 abgebrochen: Turbopack kann einen lokalen Port nicht öffnen (`Operation not permitted`, beim Verarbeiten von `globals.css`). Umgebungsproblem; erfolgreicher Build des finalen Stands weiterhin offen. Keine Workarounds/Konfigurationsänderungen. |
| Safari · Seitendarstellung | Im bisherigen v0.1-Verlauf alle fünf Hauptseiten lokal aufgerufen. Vier Unterseiten-Heros mit proportionalen Bildern bei Desktop/Mobil geprüft; frühere Feinschliffprüfung bei 320/1440 px. Nach abschließender Bildzuordnung alle vier Bilder erneut sichtbar; nur Referenzen geändert, CSS unverändert. |
| Safari · Roadmap | Frühere fokussierte Prüfungen bei 320/768/1280/1440 px; letzte Spalte bei 320 px vollständig erreichbar. Öffnen per Maus/Enter, Schließen per Button/Escape/Hintergrund, Fokusbindung und Rückkehrfokus geprüft. Kein physischer Touch-Nachweis. |
| Safari · Footer/Favicon | Footer auf allen fünf Seiten vorhanden, KI-Hinweis sichtbar; About/Footer bei 320/768/1440 px geprüft. Neues KC-ICO direkt ausgeliefert und im Website-Tab sichtbar. |
| Quellcode-/Dokumentationsabgleich | In diesem Auftrag: acht angeforderte Dokumente gelesen; Routen, Daten, Komponenten, Paketversionen, Konfiguration und Git-Asset-Bestand geprüft. Keine neuen Browser-/Funktionstests und kein neuer Build. |

**Nicht belegt:** vollständige Cross-Browser-Matrix, Screenreader, physisches Touch-Wischen, umfassender Textzoom-/Reflow-/Kontrasttest, vollständige WCAG-2.2-AA-Konformität, automatisierte Ende-zu-Ende-Suite und aktuelle Online-/Workers-Laufzeit. Die Projektfilter und Projekt-Dialoge sind implementiert; eine vollständige dokumentierte Testmatrix ist noch offen.

**Historisch:** Am 31.10.2026 wurde ein erfolgreicher Next-Build des damaligen Homepage-Kartenstands dokumentiert. Das ist kein erfolgreicher Build der später ergänzten fünfseitigen v0.1. Die frühere Aussage „keine Buildbeschränkung mehr“ gilt nicht für den aktuellen Lauf.

---

## ➡️ NEXT STEP

### Vor der Präsentation / technischer Abschluss

1. Den finalen Stand in einer lokalen Umgebung ohne die Port-Binding-Beschränkung bauen; Ergebnis festhalten. Kein automatisches Deployment daraus ableiten.
2. Für einen später ausdrücklich freigegebenen Git-Checkpoint alle benötigten Source-/Asset-Dateien gezielt reviewen. **Noch kein Commit/Push durch diesen Auftrag.**
3. Die verschachtelten `<main>`-Elemente der Homepage mit Kat gezielt korrigieren und danach die Landmark-/Tastaturprüfung wiederholen. Hier nur dokumentiert, kein Quellcode geändert.
4. Die fünf Routen, Filter und beide Dialoge vor der Präsentation kurz durchgehen; aktuelle Online-Version bei Bedarf separat verifizieren. Prüflücken nicht als erledigt markieren.

### Wiedereinstieg nach der Präsentation

Zuerst mit Kat die Ergebnisse der Präsentation und die offenen technischen Prüfungen durchgehen. Danach einen überschaubaren nächsten Schritt wählen: Accessibility-/Semantikabschluss oder Planung der KATUARY-Datenschnittstelle. Keine automatische Fortsetzung der alten Admin-/Neon-Stages und keine neue Feature-Freigabe durch diese Dokumentation.

---

## 🐛 KNOWN PROBLEMS

- **Frischer Checkout noch nicht abgesichert:** Git-Branch `main`, letzter Commit `680e2fa` (`feat: style homepage cards and update project docs`). Die spätere fünfseitige Implementierung liegt teilweise geändert/unversioniert im Arbeitsbaum. GitHub-Inhalt nicht erneut online verglichen.
- **Asset-Übergabe:** 72 statische Bild-/Icon-/Font-Dateireferenzen geprüft; alle lokal vorhanden. Davon **60 Dateien ignoriert und unversioniert: 15 WebP und 45 SVG** aus den Registries. Die vier Homepage-WebP-Dateien sind inzwischen versioniert; der alte Vier-Bilder-Blocker ist überholt. Vor einem neuen Checkout/Build müssen auch die neu hinzugekommenen Imports enthalten sein. Keine `.gitignore`- oder Indexänderung in diesem Auftrag.
- **Semantik der Homepage:** `src/app/layout.tsx` enthält `<main id="inhalt">`, `src/app/page.tsx` ein weiteres `<main>`. Dieses verschachtelte Haupt-Landmark ist tatsächlich noch vorhanden. Kein Fehlerbehebungsauftrag durch die Dokumentation.
- **Produktionsbuild:** aktueller Umgebungsblocker und fehlender endgültiger Build-Nachweis, siehe Prüfstand.
- **Lint:** eine unveränderte Warnung im lokalen Designsystem-Beispiel; keine TypeScript-/ESLint-Fehler im letzten Testlauf.
- **Sicherheits-/Dependency-Review:** Früher von Kat gemeldete vier High-Warnungen in der OpenNext-Dev-Kette, null bei `npm audit --omit=dev`; historischer Befund, am 01.11. nicht erneut auditiert. Keine Updates oder `audit fix` ausgeführt.
- **Keine aktuelle Release-Aussage:** Frühere Cloudflare-Veröffentlichung ist kein Nachweis, dass der finale lokale Stand online ist oder unter einer bestimmten URL aktuell fehlerfrei läuft.

---

## 🐇 PARKED SIDEQUESTS

**Nicht automatisch Teil von v0.1:** Community-/Kommentarfunktionen, Besucherinteraktionen, Pixelbabie Secrets/Easter Eggs, weitere Portfolio-Funktionen, Design-Themes, Projekt-Updates und Statistiken.

**Spätere technische Möglichkeiten:** KATUARY-Verbindung mit expliziter Freigabe öffentlicher Daten; gegebenenfalls Aufgaben-/Fortschrittsansichten. Private Verwaltung bleibt in KATUARY. Weitergehende Features erst nach bewusster Entscheidung.

Persönliche Brainblerps bleiben in `NOTES.md`; die Ideensammlung wird nicht als feste Anforderung behandelt.

---

## 🧹 CLEANUP LATER

- Nach Präsentation Accessibility und Cross-Browser-Prüfung systematisch abschließen; keine vollständige WCAG-Freigabe behaupten.
- Beim Umordnen von Homepage-Karten die über `nth-child` zugeordneten Farben mitprüfen.
- Nach Git-/Asset-Review einen frischen Checkout inklusive aller nötigen Runtime-Dateien testen; keine pauschale Aufnahme des vollständigen Assetpacks.
- Deployment- und Dependency-Prüfungen gezielt erneuern, wenn ein separater Release-Auftrag vorliegt.
- README, State und Requirements bei einem tatsächlich geänderten Funktions-/Prüfstand gemeinsam konsistent halten; keine parallele `PROJECT_README.md` anlegen.

---

## 🧠 IMPORTANT CONTEXT

### 1 · Projekt und Lernen

`katcoded.de` ist Teil meiner Developer-Identität KATCODED und meines Software-Engineering-Lernwegs an der WBS CODING SCHOOL. Die ursprüngliche Projektidee wurde laut bisheriger Dokumentation mit Dozent Stephan besprochen. Die spätere Scope-Änderung ist Kats Entscheidung; eine erneute externe Kursabnahme wird nicht behauptet.

Kat bleibt die Programmiererin. Kleine Komponenten, verständliche Props und ausgelagerte Styles erhalten. Die Regeln in `AGENTS.md` und Kats Kommentarstil in `KATCOMMENTS_v0.1.md` gelten weiter.

### 2 · Historische Entscheidungen erhalten

- Stage 01: mit `kat-create` angelegten Ordner geschützt, Next.js eingerichtet, Paketname korrigiert, vorbereitete README wiederhergestellt und Git-Grundlage angelegt.
- Frühe Deployment-Arbeit: OpenNext-/Wrangler-Vorbereitung, Worker-Namensabgleich auf `katcoded-de`, Cache-Components-/Runtime-Problem im Verlauf behandelt. Nicht erneut als aktuelle Online-Prüfung ausgeben.
- Homepage-Karten-Checkpoint am 31.10.: CSS-Modules-Korrektur und vier WebP-Dateien in Commit `680e2fa`; frühere Referenz auf `197fc29` war ein älterer Checkpoint.
- Ursprünglich geplanter Admin-/CRUD-/Neon-MVP am 01.11. durch **öffentliche Website + spätere separate KATUARY-Verwaltung** ersetzt. Neon-Projekt `katcoded-web` war laut alter Planung vorbereitet; externer Zustand ungeprüft, keine Anbindung im Code.

### 3 · Projekt, Domain und Daten schützen

Das bestehende Next.js-Projekt nicht neu initialisieren. DEV TOOLS und individuelle Dateien erhalten. Keine Cloudflare-/DNS-/E-Mail-Änderung durch einen Dokumentations- oder Stylingauftrag. Keine privaten Daten oder Secrets in statischen Projektdatensätzen, Git oder Browsercode ablegen.

Der spätere öffentliche KATUARY-Datenvertrag muss freigegebene Datensätze **und Felder** begrenzen. Die heutige `published`-Filterung ersetzt keine Authentifizierung oder private Datenhaltung.

### 4 · Dokumentation und aktueller Savepoint

- `README.md`: öffentliche englische Beschreibung der tatsächlichen v0.1.
- `PROJECT_START.md`: aktueller Scope und historische Ausgangsidee.
- `PROJECT_REQUIREMENTS.md`: ursprüngliche IDs plus heutige Gültigkeit und Erfüllungsstand.
- `PROJECT_BUILD_GUIDE.md`: aktuelle Route und ausdrücklich markierte historische Lernstages.
- `NOTES.md`: persönliche Ideen, unverändert erhalten.
- `DEV_TOOLS_README.md`, `KATCOMMENTS_v0.1.md`: allgemeines Toolkit/Kommentarregeln, geprüft und unverändert erhalten.

**Savepoint 01.11.2026:** fünf öffentliche Seiten und UI-Details lokal umgesetzt; TypeScript/Lint zuletzt bestanden. Finaler Produktionsbuild umgebungsbedingt offen, Git-/Asset-Übergabe und Accessibility-Nacharbeit noch erforderlich. Dokumentationsabschluss ist keine vollständige technische Release-Abnahme.

**Dieser Auftrag:** ausschließlich bestehende Markdown-Dateien aktualisiert; kein Code, Styling, Asset, Konfiguration, Commit, Push oder Deployment.

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
