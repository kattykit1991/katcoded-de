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

| ID    | Requirement                                                                                                                                                      | Implementation | Review       |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| FR001 | **[MUSS]** Die öffentliche Website zeigt meine Developer-Identität und ausgewählte Projekte.                                                                     | Open           | Not Reviewed |
| FR002 | **[MUSS]** Der Verwaltungsbereich ist durch eine Anmeldung vor unberechtigtem Zugriff geschützt.                                                                 | Open           | Not Reviewed |
| FR003 | **[MUSS]** Im Dashboard können neue Projekte angelegt werden.                                                                                                    | Open           | Not Reviewed |
| FR004 | **[MUSS]** Im Dashboard können bestehende Projektinformationen bearbeitet werden.                                                                                | Open           | Not Reviewed |
| FR005 | **[MUSS]** Projektinformationen werden dauerhaft in einer Datenbank gespeichert und können erneut abgerufen werden.                                              | Open           | Not Reviewed |
| FR006 | **[MUSS]** Für jedes Projekt kann festgelegt werden, ob es auf der öffentlichen Website sichtbar ist. Nicht freigegebene Projekte bleiben öffentlich unsichtbar. | Open           | Not Reviewed |
| FR007 | **[MUSS]** Projekte können im Dashboard nach einer Bestätigung gelöscht werden.                                                                                  | Open           | Not Reviewed |
| FR008 | **[OPTIONAL]** Innerhalb eines Projekts können Aufgaben angelegt und als erledigt markiert werden.                                                               | Open           | Not Reviewed |
| FR009 | **[OPTIONAL]** Der Projektfortschritt wird anhand erledigter Aufgaben automatisch berechnet und als Fortschrittsbalken angezeigt.                                | Open           | Not Reviewed |

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
