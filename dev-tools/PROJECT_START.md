# 🌱 PROJECT START

> Der kurze Startpunkt für DAS DING™.
> Hier wird geklärt, was ich bauen will, warum ich es bauen will und was für das aktuelle Ziel erstmal draußen bleibt.

**Abgleich:** 01.11.2026 · Präsentationsversion v0.1 für Montag, 02.11.2026.

---

## 💡 THE THING™

**Was baue ich?**

Ich entwickle mit Next.js, React und TypeScript **katcoded.de**, meine öffentliche Developer-Website.

Die Website stellt mich als angehende Softwareentwicklerin vor und zeigt ausgewählte Projekte, meinen Lernweg, meine Developer Tools und eine öffentliche Roadmap. Die fünf Seiten sind im lokalen Arbeitsstand umgesetzt.

**Aktuelle Architekturentscheidung:** Ein privates Admin-Dashboard innerhalb von KATCODED.DE ist nicht mehr vorgesehen. Langfristig soll meine eigenständige private Anwendung **KATUARY** Projekte und Roadmap-Aufgaben verwalten. KATCODED.DE zeigt später ausschließlich ausdrücklich freigegebene öffentliche Informationen an. Die Verbindung ist nicht Teil von v0.1.

---

## ✨ WHY

**Warum will oder muss ich das bauen?**

Ich möchte mit **katcoded.de** eine eigene öffentliche Präsenz als Softwareentwicklerin aufbauen, auf der ich meine Entwicklung, meine Fähigkeiten und meine Projekte zeigen kann.

Die Website soll langfristig mit mir wachsen und nicht nur ein einmaliges Portfolio-Projekt bleiben. Die spätere Pflege über KATUARY soll möglich werden, ohne eine zweite private Verwaltung in der Website aufzubauen.

Gleichzeitig nutze ich das Projekt im Rahmen meiner Weiterbildung bei der WBS CODING SCHOOL, um praktische Erfahrungen mit **Next.js, React, TypeScript, Komponenten, responsiven Oberflächen und zugänglichen Interaktionen** zu sammeln. Serverseitige Datenverarbeitung und Datenbanken bleiben spätere Lernfelder; sie sind hier noch nicht implementiert.

Mir ist wichtig, etwas Eigenes zu entwickeln, das ich nach der Weiterbildung tatsächlich weiterverwenden und ausbauen kann.

---

## 🎯 CURRENT GOAL

**Was ist das aktuelle Ziel, das ich erreichen will?**

Die funktional weitgehend fertige öffentliche **v0.1** für die Präsentation am **02.11.2026** nachvollziehbar dokumentieren und die verbleibenden technischen Prüflücken klar benennen.

**Im lokalen Arbeitsstand vorhanden:**

- Homepage mit persönlicher Vorstellung und vier Themenkarten.
- Projektgalerie mit statischen Daten, Kategorie-Filtern und Detaildialog.
- About-Seite mit vier persönlichen Abschnitten und KI-Transparenzhinweis.
- Dev-Tools-Seite mit Werkzeugen und Developer Environment.
- Statisches Kanban-Board mit 13 Aufgaben und Detaildialog.
- Gemeinsame Navigation und Footer, CUTE_COZY-Styling, lokale Schriften und KC-Favicon.

**Technische Grundlage:** Next.js App Router, React, TypeScript, CSS Modules und CUTE_COZY. Tailwind CSS ist für bestehende Layout-/Navigationsklassen tatsächlich eingebunden. OpenNext-/Wrangler-Dateien sind vorhanden; der aktuelle lokale Stand ist dadurch nicht automatisch online geprüft.

**Noch abzusichern:** Produktionsbuild ohne die aktuelle Port-Binding-Beschränkung, vollständiger Git-/Asset-Checkpoint und gezielte Accessibility-/Semantikprüfung. Der genaue Prüfstand steht in `PROJECT_STATE.md`.

---

## 🚫 NOT NOW

**Was gehört ausdrücklich noch nicht zum aktuellen Ziel?**

- **Datenbank, API, Authentifizierung und Synchronisierung:** In v0.1 nicht implementiert. Die frühere Neon-Auswahl ist keine bestehende Anbindung und keine neue verbindliche Integrationsentscheidung.
- **KATUARY-Integration:** Spätere Verbindung zwischen privater Verwaltung und ausschließlich freigegebenen öffentlichen Website-Daten; Schnittstelle und Datenvertrag noch festzulegen.
- **Verwaltung im Browser:** Kein Login, Admin-Dashboard, CRUD, Bearbeiten oder Drag & Drop in KATCODED.DE.
- **Umfangreiche Projektverwaltung:** Komplexe Aufgabenplanung, Abhängigkeiten, Meilensteine und Auswertungen sind kein v0.1-Auftrag.
- **Community-Funktionen:** Kommentare, Interaktionen und weitere Besucherfunktionen bleiben Ideen.
- **Pixelbabie Secrets:** Kleine interaktive Easter Eggs mit Plöpp, Floof und Nibbs bleiben geparkt.
- **Weitere persönliche Website-Bereiche:** Keine zusätzlichen Seiten oder Funktionen für den Präsentationsabschluss.
- **Automatische Fortschrittsberechnung:** Das frühere optionale Wunschfeature gehört nicht zum aktuellen v0.1-Umfang.

Diese Ideen werden nicht automatisch zu Anforderungen. Neue Schritte werden erst nach bewusster Entscheidung priorisiert.

---

## 🕰️ HISTORISCHE AUSGANGSIDEE

Die ursprüngliche Planung verband die öffentliche Website mit einem geschützten Projekt-Dashboard, Login, CRUD und Neon PostgreSQL. Ein Neon-Projekt `katcoded-web` war laut damaliger Dokumentation vorbereitet; ein aktueller externer Zustand wurde nicht geprüft.

**Diese Architektur wurde am 01.11.2026 durch Kats Entscheidung ersetzt:** private Verwaltung in KATUARY, öffentliche Anzeige in KATCODED.DE. Die ursprünglichen Anforderungs-IDs und Lernbausteine bleiben in Requirements und Build Guide nachvollziehbar erhalten. Sie sind keine noch abzuarbeitenden v0.1-Pflichten.

Das bestehende Next.js-Projekt nicht erneut initialisieren. Vorhandene DEV TOOLS und individuelle Dateien erhalten.

---

> 👻 Part of **KAT · DEV TOOLS** · katcoded.de  
> See `DEV_TOOLS_README.md` for information about this toolkit.
