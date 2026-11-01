# 📋 PROJECT REQUIREMENTS

> Was muss DAS DING™ erfüllen – und was wurde tatsächlich überprüft?
> Anforderungen, Implementierung und Review bleiben getrennt.

---

## 🎯 PURPOSE

Hier stehen die Anforderungen dieses Projekts: **Was muss am Ende funktionieren oder erfüllt sein?**

Die Tabelle zeigt getrennt, ob eine Anforderung bereits **umgesetzt** und ob sie anschließend tatsächlich **geprüft** wurde.

<!--
Falls eine Aufgabenstellung bereits Requirements oder IDs (z. B. FR001) vorgibt:
- Originalformulierungen und Kennzeichnungen möglichst unverändert übernehmen.
- Keine neuen Anforderungen dazuerfinden.
- Wenn noch keine Requirements existieren, können sie später ergänzt werden.
- Die Platzhalterzeile unten durch echte Anforderungen ersetzen oder entfernen.
-->

## 📌 REQUIREMENTS

**Gültigkeitsstand · 01.11.2026:** Die IDs und fachlichen Originalformulierungen bleiben zur Nachvollziehbarkeit erhalten. Die bisherigen `[MUSS]`-/`[OPTIONAL]`-Marker stammen aus der ursprünglichen Dashboard-Planung. Sie machen ersetzte Anforderungen nicht erneut zu v0.1-Pflichten.

Kat hat den Scope ausdrücklich geändert: KATCODED.DE ist die öffentliche Leseansicht; private Projekt- und Roadmap-Verwaltung soll später die separate Anwendung **KATUARY** übernehmen. Keine Datenbank, Authentifizierung, API oder Synchronisierung in v0.1 implementiert. Keine konkrete spätere Technologie durch diesen Abgleich festgelegt.

| ID | Ursprüngliche Anforderung | Heutige Gültigkeit / Entscheidung | Implementation | Review |
| --- | --- | --- | --- | --- |
| FR001 | **[MUSS]** Die öffentliche Website zeigt meine Developer-Identität und ausgewählte Projekte. | v0.1 | Done | Teilreview |
| FR002 | **[MUSS]** Der Verwaltungsbereich ist durch eine Anmeldung vor unberechtigtem Zugriff geschützt. | Internes Dashboard verworfen; spätere KATUARY-Zuständigkeit | Nicht in v0.1 | Nicht implementiert |
| FR003 | **[MUSS]** Im Dashboard können neue Projekte angelegt werden. | Ersetzt durch spätere KATUARY-Verwaltung | Nicht in v0.1 | Nicht implementiert |
| FR004 | **[MUSS]** Im Dashboard können bestehende Projektinformationen bearbeitet werden. | Ersetzt durch spätere KATUARY-Verwaltung | Nicht in v0.1 | Nicht implementiert |
| FR005 | **[MUSS]** Projektinformationen werden dauerhaft in einer Datenbank gespeichert und können erneut abgerufen werden. | Spätere Datenversorgung; konkrete Technik offen | Nicht in v0.1 | Keine DB-Anbindung |
| FR006 | **[MUSS]** Für jedes Projekt kann festgelegt werden, ob es auf der öffentlichen Website sichtbar ist. Nicht freigegebene Projekte bleiben öffentlich unsichtbar. | v0.1: statischer Filter; später Freigabe über KATUARY | Teilweise | Code geprüft; Workflow offen |
| FR007 | **[MUSS]** Projekte können im Dashboard nach einer Bestätigung gelöscht werden. | Ersetzt durch spätere KATUARY-Verwaltung | Nicht in v0.1 | Nicht implementiert |
| FR008 | **[OPTIONAL]** Innerhalb eines Projekts können Aufgaben angelegt und als erledigt markiert werden. | Spätere Option; kein Website-Editor vorgesehen | Nicht in v0.1 | Nicht implementiert |
| FR009 | **[OPTIONAL]** Der Projektfortschritt wird anhand erledigter Aufgaben automatisch berechnet und als Fortschrittsbalken angezeigt. | Spätere Option, noch nicht beauftragt | Nicht in v0.1 | Nicht implementiert |

<!--
VORGESCHLAGENE STATUSWERTE – im Pilot noch nicht endgültig standardisiert:

Implementation:
- Open: Noch nicht begonnen.
- In Progress: In Bearbeitung.
- Done: Implementierung abgeschlossen; sagt noch nichts über den Review aus.

Review:
- Not Reviewed: Noch keine Prüfung durchgeführt.
- In Review: Prüfung läuft.
- Passed: Tatsächlich geprüft; Anforderung erfüllt.
- Changes Required: Prüfung hat Korrekturbedarf ergeben.

Andere Zwischenstände bei Bedarf klar benennen; keine künstlichen Häkchen setzen.
-->

---

## 🔎 REVIEW NOTES

Kurze Notizen **nur dann ergänzen, wenn tatsächlich eine Prüfung stattgefunden hat**. Keine leeren Review-Protokolle für jede Anforderung nötig.

### Abgleich · 01.11.2026

- **FR001 — für v0.1 umgesetzt:** fünf öffentliche Seiten `/`, `/projects`, `/about`, `/dev-tools`, `/roadmap`; gemeinsame Navigation und Footer. Die Galerie zeigt drei ausgewählte Projekte, bietet Kategorienfilter und Projekt-Details; About, Dev Tools und Roadmap ergänzen die Developer-Identität. Code geprüft. Fokussierte Safari-Sichtprüfungen aus den vorangegangenen Aufträgen liegen vor; keine vollständige funktionale/Accessibility-Abnahme, deshalb kein pauschales `Passed`.
- **FR002–FR004, FR007 — ursprüngliche Website-Admin-Architektur ersetzt:** kein Website-Login oder Dashboard gefordert bzw. implementiert. Spätere Verwaltungsabläufe sind in KATUARY zu planen; die ursprünglichen Sicherheits- und CRUD-Ziele sind nicht als erledigt markiert und keine automatisch freigegebenen KATUARY-Requirements.
- **FR005 — später vorgesehen:** `src/data/projects.ts` enthält statische Daten, Roadmap-Aufgaben stehen in der Server-Seite. Keine Datenbankbibliothek/Verbindung im Anwendungscode. Die frühere Neon-Planung ist historisch, keine bestehende Integration.
- **FR006 — teilweise erfüllt:** `Project.published` ist vorhanden; `src/app/projects/page.tsx` filtert auf dem Server, bevor Daten an `ProjectGallery` gehen. Alle drei vorhandenen Datensätze tragen aktuell `published: true`. Kein Test mit einem echten unveröffentlichten Datensatz und kein Laufzeit-Freigabe-/Zurücknahme-Workflow dokumentiert. Statische Daten werden im Quellcode gepflegt. Daten in einem öffentlichen Repository sind nicht privat, auch wenn ein UI-Filter sie ausblendet.
- **FR008–FR009 — nicht für v0.1:** das Kanban-Board ist eine öffentliche statische Übersicht mit 13 Aufgaben und Details. Es ermöglicht weder Aufgabenbearbeitung noch Speicherung, Projektzuordnung mit CRUD oder automatische Fortschrittsberechnung. Die optionalen Wünsche bleiben spätere, bewusst zu priorisierende Ideen.

### Zusätzlicher tatsächlich vorhandener v0.1-Umfang

Projekt- und Roadmap-Detaildialoge sind interaktiv; Roadmap-Spalten scrollen innerhalb eines gemeinsamen Boards horizontal. CSS Modules verwenden CUTE_COZY-Tokens, lokale Fonts und bestehende Assets. Hero-Accessoires stimmen mit den vier Homepage-Karten überein. Der Footer und die About-Seite enthalten sichtbare KI-Transparenzhinweise; KC-Favicon vorhanden. Dies dokumentiert vorhandene Umsetzung und erfindet keine neuen Anforderungen oder IDs.

### Prüfnachweise und offene Abnahme

- Letzter TypeScript- und ESLint-Lauf am 01.11.2026 im finalen Asset-Auftrag erfolgreich; bekannte Warnung im unveränderten Designsystem-Beispiel. Im reinen Dokumentationsauftrag nicht erneut ausgeführt.
- Der letzte Produktionsbuild der finalen v0.1 scheiterte am umgebungsbedingt gesperrten Port-Binding von Turbopack. Der erfolgreiche Build des damaligen Homepage-Stands vom 31.10. ist nur historischer Nachweis.
- Safari-Prüfungen waren gezielt auf Seiten, Header-/Footer-/Hero-Darstellung, Roadmap-Dialoginteraktionen und Favicon begrenzt. Vollständige Filter-/Dialog-Testmatrix, Screenreader, Textzoom, physischer Touch und WCAG-2.2-AA-Abnahme bleiben offen.
- Aktueller Git-/Asset-Checkpoint ist unvollständig: 60 importierte Designassets noch ignoriert/unversioniert; lokal keine fehlenden geprüften Asset-Dateien. Auf `/` bestehen verschachtelte `<main>`-Landmarks. Details und nächste Schritte in `PROJECT_STATE.md`.
- Keine aktuelle Online-/Cloudflare-Prüfung oder Kursabnahme dieses geänderten Scopes behauptet.

**Historischer Abgleich vom 31.10.:** Damals waren nur Homepage-Karten vorhanden; Projektübersicht und echte Routennavigation fehlten. Dieser Implementierungsbefund ist überholt. Der frühere Vier-WebP-Checkpoint wurde später als `680e2fa` abgeschlossen; inzwischen sind zusätzliche Assets hinzugekommen. Die Original-IDs bleiben erhalten, aber die damalige Aussage „alle FRs offen“ beschreibt nicht mehr den heutigen öffentlichen v0.1-Scope.

<!--
BEISPIELSTRUKTUR (kein echtes Review-Ergebnis):

### [ID]
- Geprüft: [Code / Verhalten / Tests / Anforderungen]
- Ergebnis: [Beobachtungen und Nachweise]
- Korrekturen / Follow-up: [Was ist noch offen?]

Falls die Prüfung Probleme findet, den Review nicht als Passed markieren.
Nach einer Korrektur erneut prüfen, bevor Passed eingetragen wird.
-->

---

## 🧭 KAT-REGELN FÜR REQUIREMENTS

- **Implementation ≠ Review.** Fertig programmiert ist nicht automatisch erfolgreich geprüft.
- **Nur belegte Ergebnisse eintragen.** Keine bestandenen Tests oder Reviews behaupten, die nicht durchgeführt wurden.
- **Requirements originalgetreu halten.** Die Datei beschreibt _was_, nicht die ausführliche Schrittfolge zur Umsetzung.
- **Keine doppelte Projektpflege.** Entwicklungsschritte gehören in `PROJECT_BUILD_GUIDE.md`; der aktuelle Wiedereinstiegsstand in `PROJECT_STATE.md`.
- **Kompakt bleiben.** Akzeptanzkriterien, Testdetails oder weitere Abschnitte nur ergänzen, wenn das Projekt sie wirklich braucht.
- **Keine zusätzlichen Agentenregeln.** Zuständigkeiten und Schreibrechte regelt `AGENTS.md`.

---

> 👻 Part of **KAT · DEV TOOLS** · katcoded.de  
> Diese Vorlage wird als Pilot erprobt und darf nach praktischer Nutzung weiterentwickelt werden.
