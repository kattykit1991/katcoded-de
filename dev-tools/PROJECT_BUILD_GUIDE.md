# 🗺️ PROJECT BUILD GUIDE · katcoded.de v0.1

> Meine Bauanleitung vom aktuellen Ziel zum funktionierenden DING™.  
> Mein Entwicklungsfahrplan für katcoded.de: konkrete Bauschritte, technische Spickzettel und Platz für neue Erkenntnisse. Die Code-Beispiele sind bewusst allgemeine Syntaxmuster – keine vorweggenommene Implementierung.

**Projekt:** katcoded.de · v0.1  
**Ordner:** `01_katcoded-de-v01`  
**Stack:** Next.js App Router · React · TypeScript · Tailwind CSS · Neon PostgreSQL · Cloudflare Workers  
**Mein Ziel:** Öffentliche Developer-Website + geschütztes Projekt-Dashboard für meine Projekte.  
**Stand:** Planung vor dem ersten Next.js-Setup · Alle Aufgaben noch offen.

**KAT-NOTIZ 👻** Das ist mein Bauplan, kein Pflichtenheft aus Stein. Wenn ich beim Entwickeln einen besseren Weg finde, dokumentiere ich die Entscheidung und passe die Route an. Das MVP bleibt trotzdem bewusst klein.

**Dokumentationsidee:** Dieser Guide liegt bewusst im Repository. Er hält meine geplante Reihenfolge und die verwendeten technischen Grundlagen nachvollziehbar fest – auch für Menschen, die das Projekt auf GitHub entdecken.

---

## 🧭 BUILD ROUTE

### 🌱 MVP · zuerst das Fundament

- [STAGE 01 · Projektgrundlage schaffen](#stage-01--projektgrundlage-schaffen)
- [STAGE 02 · Öffentliche Website aufbauen](#stage-02--öffentliche-website-aufbauen)
- [STAGE 03 · Projektdaten dauerhaft speichern](#stage-03--projektdaten-dauerhaft-speichern)
- [STAGE 04 · Admin-Bereich absichern](#stage-04--admin-bereich-absichern)
- [STAGE 05 · Projekte verwalten](#stage-05--projekte-verwalten)
- [STAGE 06 · Sichtbarkeit steuern](#stage-06--sichtbarkeit-steuern)
- [STAGE 07 · Testen und veröffentlichen](#stage-07--testen-und-veröffentlichen)

### 🌸 Bonus-Level · nur wenn das MVP steht

- [STAGE 08 · Aufgaben und Fortschritt (Bonus)](#stage-08--aufgaben-und-fortschritt-bonus)

**Leitplanken:** Die Stages folgen meiner geplanten Baureihenfolge, nicht einer unveränderlichen Architektur. Vor Authentifizierung, produktiven Datenänderungen und Deployment prüfe ich die aktuellen offiziellen Anleitungen. KATUARY bleibt ein eigenes Projekt. Die bestehende Domain, DNS-Einträge und E-Mail-Konfiguration fasse ich für dieses MVP nicht an.

---

# STAGE 01 · Projektgrundlage schaffen

## 🎯 ZIEL

Mein bestehender Projektordner bekommt ein funktionierendes Next.js-Grundgerüst. `dev-tools/`, `AGENTS.md` und `README.md` bleiben erhalten.

## 🔨 BAUEN

### 1 · Bestehenden Projektordner prüfen

- [ ] Vorhandenen Ordner `01_katcoded-de-v01` verwenden.
- [ ] Dateien und Unterordner ansehen.
- [ ] `dev-tools/`, `AGENTS.md`, `README.md` schützen.
- [ ] Prüfen, ob `package.json`/Git schon vorhanden sind.

#### 🧱 DAFÜR BRAUCHST DU · Terminal-Basics

```bash
pwd                 # Wo bin ich?
ls -la              # Auch versteckte Dateien anzeigen
find . -maxdepth 2 -type f | sort  # Dateien bis Ebene 2
```

**Was macht das?** `pwd` zeigt meinen aktuellen Ordner, `ls` listet die Inhalte und `find` liefert einen schnellen Überblick über vorhandene Dateien. Alle drei Befehle lesen nur. Vor größeren Setup-Änderungen sichere ich den Ordner.

### 2 · Next.js initialisieren

- [ ] Vorgehen für Initialisierung im **nicht leeren** Projektordner prüfen.
- [ ] Next.js, TypeScript und App Router einrichten.
- [ ] Tailwind und ESLint einrichten bzw. prüfen.
- [ ] Prüfen, dass vorhandene Dateien erhalten bleiben.
- [ ] Neue Abhängigkeiten und Konfigurationen ansehen.

#### 🧱 DAFÜR BRAUCHST DU · Projektgenerator

```bash
npx create-next-app@latest --help
```

**Was macht das?** `npx` startet das CLI-Paket, `--help` zeigt seine Optionen an – noch ohne ein Projekt anzulegen. **KAT-NOTIZ 👻:** Mein Ordner ist bereits mit `kat-create` angelegt. Deshalb prüfe ich zuerst den sicheren Initialisierungsweg; `.` als Ziel verwende ich nicht blind. Eine Möglichkeit ist, das Grundgerüst separat zu erzeugen und kontrolliert zu übernehmen. Meine DEV TOOLS werden nicht überschrieben.

#### 🧱 DAFÜR BRAUCHST DU · Wofür die Pakete da sind

- **Next.js:** Routing, Server-Rendering und Fullstack-Funktionen auf React-Basis.
- **TypeScript:** Typen prüfen, Fehler früher erkennen.
- **Tailwind:** Styling über Utility-Klassen.
- **ESLint:** Hinweise auf problematischen Code.

### 3 · Projektstruktur kennenlernen

- [ ] `src/app/` und App Router verstehen.
- [ ] `page.tsx` und `layout.tsx` unterscheiden.
- [ ] Server und Client Components unterscheiden.
- [ ] Generierte Dateien ansehen.

#### 🧱 DAFÜR BRAUCHST DU · Dateibasiertes Routing

```text
src/app/
├── layout.tsx       ← gemeinsamer Rahmen
├── page.tsx         ← Route /
└── example/
    └── page.tsx     ← Route /example
```

**Merken:** Ordner = URL-Segment, `page.tsx` = sichtbare Route, `layout.tsx` = gemeinsamer Rahmen für darunterliegende Seiten.

#### 🧱 DAFÜR BRAUCHST DU · Server vs. Client

```tsx
// Standardmäßig Server Component:
export default async function ExamplePage() {
  return <h1>Vom Server gerendert</h1>;
}
```

```tsx
"use client";
import { useState } from "react";

export function TinyCounter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Server Components können serverseitig Daten laden. Für `useState` und Klick-Handler braucht die interaktive Komponente `'use client'`. Client Components können trotzdem initial serverseitig vorgerendert werden.

### 4 · Entwicklungsumgebung starten

- [ ] Abhängigkeiten installieren, falls nötig.
- [ ] Entwicklungsserver starten.
- [ ] Startseite im Browser öffnen.
- [ ] Fehlermeldungen prüfen.
- [ ] Git-Status ansehen.

#### 🧱 DAFÜR BRAUCHST DU · npm und Git

```bash
npm install          # nur wenn Dependencies noch installiert werden müssen
npm run dev          # startet das Script "dev" aus package.json
git status           # zeigt lokale Änderungen
```

`npm run dev` ist für die Entwicklung; der Terminalprozess bleibt aktiv, bis er beendet wird. Die tatsächlich vorhandenen Scripts stehen in `package.json`.

## ✅ FERTIG, WENN

- [ ] Next.js läuft lokal und eine Seite ist im Browser sichtbar.
- [ ] TypeScript/App Router sind eingerichtet.
- [ ] DEV TOOLS sind erhalten.
- [ ] Keine blockierenden Setupfehler sind bekannt.

---

# STAGE 02 · Öffentliche Website aufbauen

## 🎯 ZIEL

Die öffentliche Website bekommt ihre ersten Seiten und eine Navigation. Für das spätere Dashboard entsteht zunächst nur ein ungefährlicher Platzhalter – ohne private Daten oder Schreibfunktionen.

## 🔨 BAUEN

### 1 · Öffentliche Seitenstruktur erstellen

- [ ] Startseite vorbereiten.
- [ ] Bereich zur Developer-Identität vorsehen.
- [ ] Projektübersicht vorbereiten.
- [ ] Navigation zwischen öffentlichen Seiten bauen.

#### 🧱 DAFÜR BRAUCHST DU · Routen

```text
src/app/
├── page.tsx
└── projects/
    └── page.tsx
```

```tsx
// Minimales Beispiel einer Seite
export default function ExamplePage() {
  return (
    <main>
      <h1>Beispielseite</h1>
    </main>
  );
}
```

Jede `page.tsx` exportiert eine React-Komponente als Standardexport.

#### 🧱 DAFÜR BRAUCHST DU · Navigation

```tsx
import Link from "next/link";

<Link href="/example">Zur Beispielseite</Link>;
```

**Was macht das?** `Link` verbindet interne Seiten. Die Zielroute muss existieren; externe Websites brauchen dagegen meist einen normalen Link.

### 2 · Dashboard-Struktur vorbereiten

- [ ] Route für Administration vorsehen.
- [ ] Leere Dashboard-Startansicht vorbereiten.
- [ ] Platz für Projektliste/Formulare planen.
- [ ] Navigation öffentlich/admin unterscheiden.

#### 🧱 DAFÜR BRAUCHST DU · Verschachtelte Layouts

```text
src/app/
├── layout.tsx
└── dashboard/
    ├── layout.tsx
    └── page.tsx
```

**KAT-NOTIZ 👻:** Ein `dashboard/layout.tsx` ist nur ein gemeinsamer visueller Rahmen – **keine Sicherheitsschranke**. Bis Stage 04 bleiben private Daten und Schreibfunktionen draußen.

### 3 · Gemeinsames Layout und Styling vorbereiten

- [ ] Header, Hauptinhalt und Navigation planen.
- [ ] Responsive Grundlayout erstellen.
- [ ] Farben, Typografie und Abstände festlegen.
- [ ] Developer-Identität als Designrichtung berücksichtigen.

#### 🧱 DAFÜR BRAUCHST DU · Semantisches HTML

```tsx
<div>
  <header>Beispielkopf</header>
  <main>Beispielinhalt</main>
  <footer>Beispielfuß</footer>
</div>
```

**Merken:** `header`, `main` und `footer` beschreiben die Aufgabe eines Seitenbereichs. Das ist besser verständlich und unterstützt Barrierefreiheit.

#### 🧱 DAFÜR BRAUCHST DU · Responsive Tailwind

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  <div>Erste Karte</div>
  <div>Zweite Karte</div>
</div>
```

**Was macht das?** `grid-cols-1` = eine Spalte auf kleinen Displays; `md:grid-cols-2` = ab dem konfigurierten `md`-Breakpoint zwei Spalten. `gap-4` schafft Abstand.

## ✅ FERTIG, WENN

- [ ] Startseite und Projektübersicht erreichbar sind.
- [ ] Dashboard-Platzhalter existiert.
- [ ] Navigation funktioniert.
- [ ] Layout auf schmalen und breiten Displays nutzbar ist.

---

# STAGE 03 · Projektdaten dauerhaft speichern

## 🎯 ZIEL

Serverseitiger Zugriff auf PostgreSQL; ein kleines Projekt-Datenmodell ist angelegt. **Neon-Projekt `katcoded-web` ist vorgesehen**, aber Verbindungsbibliothek/Schema noch nicht beschlossen.

## 🔨 BAUEN

### 1 · Datenbankgrundlage prüfen

- [ ] Neon-Projekt `katcoded-web` prüfen.
- [ ] Verbindungsmethode auswählen.
- [ ] Verbindungsdaten sicher als Umgebungsvariablen konfigurieren.
- [ ] Sicherstellen, dass DB-Code nur serverseitig läuft.

#### 🧱 DAFÜR BRAUCHST DU · Secrets und `.env`

```dotenv
# Beispiel – NIEMALS echte Zugangsdaten ins Repository kopieren
DATABASE_URL="<geheimer-verbindungsstring>"
```

```ts
// Serverkontext, schematisches Beispiel
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL fehlt");
```

`process.env` liest Umgebungsvariablen auf dem Server. Keine DB-Zugangsdaten in `NEXT_PUBLIC_*`, Browsercode oder Git. Lokale `.env`-Dateien müssen ignoriert werden; Cloudflare-Secrets separat setzen.

#### 🧱 DAFÜR BRAUCHST DU · Verbindungsmethoden

- **SQL-Treiber:** SQL-Abfragen direkt schreiben.
- **ORM/Query Builder:** Abfragen und Datenmodelle über Bibliothek strukturieren.
  Die Entscheidung richtet sich nach Kursstoff, Next.js-Version und Cloudflare-Workers-Kompatibilität. Nicht im Voraus festschreiben.

### 2 · Datenmodell planen

- [ ] Projekt-ID festlegen.
- [ ] Titel und Beschreibung definieren.
- [ ] Veröffentlichungsstatus festlegen.
- [ ] Weitere Felder nur bei tatsächlichem Bedarf aufnehmen.

#### 🧱 DAFÜR BRAUCHST DU · Datenmodell als Skizze

```text
Project
├── id            eindeutiger Schlüssel
├── title         Text, Pflichtfeld
├── description   Text
└── isPublished   true / false
```

Das ist **eine Denkstütze**, kein beschlossenes Schema. Ein eindeutiger Schlüssel erlaubt das gezielte Bearbeiten eines Datensatzes.

### 3 · Datenbankstruktur erstellen

- [ ] Tabellen/Migrationen nach gewählter Methode anlegen.
- [ ] Serverseitigen Lesezugriff testen.
- [ ] Serverseitigen Schreibzugriff testen.
- [ ] Fehlerfälle behandeln.

#### 🧱 DAFÜR BRAUCHST DU · SQL-Grundmuster

```sql
-- Beispielnamen, nicht das endgültige Schema
SELECT id, title FROM example_items;
INSERT INTO example_items (title) VALUES ('Test');
UPDATE example_items SET title = 'Neu' WHERE id = 1;
DELETE FROM example_items WHERE id = 1;
```

`SELECT` liest, `INSERT` erstellt, `UPDATE` ändert, `DELETE` entfernt. **Bei UPDATE/DELETE auf `WHERE` achten.** Für Werte aus Formularen parametrisierte Abfragen nutzen, nicht Strings zusammenkleben.

#### 🧱 DAFÜR BRAUCHST DU · Asynchrones Laden

```ts
async function readExample() {
  try {
    const result = await Promise.resolve(["Beispieldatensatz"]);
    return result;
  } catch (error) {
    console.error("Lesen fehlgeschlagen", error);
    return [];
  }
}
```

`await` wartet auf ein Promise; `try/catch` behandelt Fehler. Dieses Beispiel simuliert Daten, verbindet sich **nicht** mit Neon.

## ✅ FERTIG, WENN

- [ ] Serverseitige Verbindung funktioniert.
- [ ] Datenstruktur existiert.
- [ ] Testdaten lassen sich lesen und schreiben.
- [ ] Keine Secrets öffentlich sind.

---

# STAGE 04 · Admin-Bereich absichern

## 🎯 ZIEL

Nur berechtigte Personen dürfen Adminseiten und Schreibaktionen verwenden. **Authentifizierungslösung noch auswählen**; keine selbst erfundene Passwortverwaltung.

## 🔨 BAUEN

### 1 · Authentifizierung planen

- [ ] Geeignete, gepflegte Auth-Lösung auswählen.
- [ ] Admin-Konto/Identität festlegen.
- [ ] Sessions/Cookies verstehen.
- [ ] Secrets und Deployment-Kompatibilität prüfen.

#### 🧱 DAFÜR BRAUCHST DU · Authentifizierung vs. Autorisierung

```text
Authentifizierung: Wer bist du? (Login)
Autorisierung: Darfst du diese Aktion? (Admin-Recht)
```

Eine gültige Session allein bedeutet nicht automatisch Admin-Rechte. Passwörter niemals im Klartext speichern; bewährte Auth-Bibliotheken bevorzugen.

### 2 · Anmeldung umsetzen

- [ ] Login bereitstellen.
- [ ] Erfolg und Fehlschlag behandeln.
- [ ] Session serverseitig prüfen.
- [ ] Logout bereitstellen.

#### 🧱 DAFÜR BRAUCHST DU · Login-Fluss

```text
Login-Formular → Auth-Anbieter/Server
                      ↓
             Identität prüfen
                      ↓
              Session erstellen
                      ↓
             Adminbereich öffnen
```

Sessions werden üblicherweise über sichere Cookies verwaltet. Konkrete Implementierung richtet sich nach der ausgewählten Bibliothek.

#### 🧱 DAFÜR BRAUCHST DU · Serverprüfung (Pseudocode)

```ts
// Nur Konzept, keine echte Auth-Implementierung!
async function protectedExample() {
  const user = await getCurrentUser(); // Platzhalterfunktion
  if (!user || user.role !== "admin") {
    throw new Error("Nicht berechtigt");
  }
  // erst jetzt geschützte Arbeit ausführen
}
```

`getCurrentUser` existiert hier **nicht** – es zeigt, **wo** eine echte serverseitige Prüfung hingehört.

### 3 · Administrative Zugriffe schützen

- [ ] Dashboardseiten absichern.
- [ ] **Jede** Schreiboperation autorisieren.
- [ ] Unangemeldete Anfragen abweisen/umleiten.
- [ ] Öffentliche Datenzugriffe auf freigegebene Felder begrenzen.

#### 🧱 DAFÜR BRAUCHST DU · Sicherheitsgrenze

```text
❌ Button verstecken → kein Schutz
✅ Serverseitige Prüfung vor Lesen/Schreiben → Schutzgrenze
```

Auch Server Actions und Route Handler sind erreichbare Server-Endpunkte: Auth-Prüfung nicht nur im Seitenlayout durchführen.

## ✅ FERTIG, WENN

- [ ] Login/Logout funktionieren.
- [ ] Unberechtigte Adminseiten und Schreibzugriffe scheitern.
- [ ] Zugriffsschutz praktisch getestet ist.

---

# STAGE 05 · Projekte verwalten

## 🎯 ZIEL

Geschützte CRUD-Funktionen: Projekte anzeigen, anlegen, bearbeiten, löschen; Änderungen bleiben gespeichert.

## 🔨 BAUEN

### 1 · Projektübersicht im Dashboard erstellen

- [ ] Projekte serverseitig laden.
- [ ] Liste anzeigen.
- [ ] Leeren Zustand anzeigen.
- [ ] Lade- und Fehlerzustände behandeln.

#### 🧱 DAFÜR BRAUCHST DU · Listen rendern

```tsx
type Item = { id: string; title: string };
function ExampleList({ items }: { items: Item[] }) {
  if (items.length === 0) return <p>Noch keine Einträge.</p>;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

`map` macht aus Datensätzen UI-Elemente. `key` sollte stabil und eindeutig sein.

#### 🧱 DAFÜR BRAUCHST DU · Laden/Fehler

```text
Lädt → Daten da? → Liste
                ↳ leer → Leerzustand
Fehler → verständliche Meldung, keine Secrets
```

Next.js kann für Routen `loading.tsx` und `error.tsx` verwenden; ein `error.tsx` ist eine Client Component.

### 2 · Projekte anlegen

- [ ] Formular erstellen.
- [ ] Pflichtfelder festlegen.
- [ ] Serverseitig validieren.
- [ ] Speichern und Rückmeldung anzeigen.

#### 🧱 DAFÜR BRAUCHST DU · Formulare und `FormData`

```tsx
<form>
  <label htmlFor="example-title">Titel</label>
  <input id="example-title" name="title" required />
  <button type="submit">Speichern</button>
</form>
```

```ts
function readTitle(formData: FormData) {
  const value = formData.get("title");
  return typeof value === "string" ? value.trim() : "";
}
```

`name` verbindet das Eingabefeld mit `FormData`. HTML-`required` hilft im Browser, ersetzt **keine serverseitige Validierung**.

#### 🧱 DAFÜR BRAUCHST DU · Server Actions (Lernmuster)

```ts
"use server";

export async function exampleAction(formData: FormData) {
  const title = formData.get("title");
  if (typeof title !== "string" || !title.trim()) {
    return { error: "Titel fehlt" };
  }
  // Danach: Berechtigung prüfen + Datenbankoperation
  return { ok: true };
}
```

Eine Server Action läuft serverseitig. **Das Beispiel speichert nichts** und ist **nicht** ohne echte Auth-Prüfung als Adminaktion einsetzbar. Je nach Architektur zuerst Auth, dann validieren und speichern.

### 3 · Projekte bearbeiten

- [ ] Datensatz anhand seiner ID laden.
- [ ] Werte in Formular anzeigen.
- [ ] Änderungen validieren/speichern.
- [ ] Nach Reload kontrollieren.

#### 🧱 DAFÜR BRAUCHST DU · Update-Prinzip

```sql
UPDATE example_items
SET title = 'Überarbeiteter Titel'
WHERE id = 42;
```

Bei echten Benutzereingaben **parametrisierte** Queries verwenden. Prüfen, ob die ID existiert und die Person ändern darf.

### 4 · Projekte löschen

- [ ] Löschfunktion bereitstellen.
- [ ] Vorher Bestätigung verlangen.
- [ ] Serverseitig autorisieren.
- [ ] Datenbank und Ansicht aktualisieren.
- [ ] Fehler behandeln.

#### 🧱 DAFÜR BRAUCHST DU · Sicherheitsablauf

```text
Löschen klicken → bestätigen? → Server prüft Adminrecht
                                   ↓
                           Datensatz löschen
                                   ↓
                          Ansicht aktualisieren
```

Eine Bestätigungsdialogbox schützt vor Versehen, **nicht** vor unbefugten Anfragen. Die serverseitige Autorisierung bleibt Pflicht.

### 5 · Projektverwaltung prüfen

- [ ] Anlegen und Reload testen.
- [ ] Bearbeiten und Reload testen.
- [ ] Löschen und Reload testen.
- [ ] Ungültige Eingaben testen.
- [ ] Unberechtigte Änderungen testen.

#### 🧱 DAFÜR BRAUCHST DU · Testmatrix

| Aktion                   | Erwartung                             |
| ------------------------ | ------------------------------------- |
| Gültigen Titel speichern | Datensatz erscheint nach Reload       |
| Leeren Titel senden      | Verständlicher Fehler, kein Datensatz |
| Titel ändern             | Änderung bleibt nach Reload           |
| Löschen abbrechen        | Datensatz bleibt                      |
| Ohne Login ändern        | Server verweigert Aktion              |

## ✅ FERTIG, WENN

- [ ] CRUD vollständig funktioniert.
- [ ] Daten dauerhaft gespeichert sind.
- [ ] Servervalidierung und Autorisierung geprüft sind.

---

# STAGE 06 · Sichtbarkeit steuern

## 🎯 ZIEL

Nur ausdrücklich freigegebene Projekte erscheinen öffentlich. Standardmäßig bleibt ein neues Projekt **unveröffentlicht**.

## 🔨 BAUEN

### 1 · Veröffentlichungsstatus verwalten

- [ ] Statusfeld festlegen.
- [ ] Status im Dashboard anzeigen.
- [ ] Statusänderung ermöglichen.
- [ ] Änderung speichern.

#### 🧱 DAFÜR BRAUCHST DU · Boolean

```ts
const example = { title: "Beispiel", isPublished: false };
```

`false` = nicht öffentlich, `true` = öffentlich. Ein sicherer Default ist **nicht veröffentlicht**.

### 2 · Öffentliche Projektübersicht anbinden

- [ ] Veröffentlichte Projekte serverseitig laden.
- [ ] Nur freigegebene Datensätze anzeigen.
- [ ] Karten/Liste darstellen.
- [ ] Leerzustand anzeigen.

#### 🧱 DAFÜR BRAUCHST DU · Datenbankfilter

```sql
SELECT id, title, description
FROM example_projects
WHERE is_published = TRUE;
```

Dies ist ein **Schema-Beispiel**. Wichtig: **Auf dem Server filtern**, bevor private Daten an den Browser gehen; nicht erst alle Projekte laden und per CSS verstecken.

#### 🧱 DAFÜR BRAUCHST DU · Öffentliche Daten minimieren

```text
Öffentlich: Titel, freigegebene Beschreibung, ggf. Link
Privat: interne Notizen, Admin-Daten, Zugangsdaten
```

Ein Veröffentlichungsstatus allein bedeutet nicht, dass jedes Feld eines Datensatzes öffentlich sein sollte.

### 3 · Veröffentlichung überprüfen

- [ ] Unveröffentlichtes Projekt bleibt unsichtbar.
- [ ] Veröffentlichen macht es sichtbar.
- [ ] Zurücknehmen entfernt es wieder.
- [ ] Öffentliche Datenendpunkte geben keine privaten Daten preis.

#### 🧱 DAFÜR BRAUCHST DU · Sichtbarkeitstest

```text
Projekt A: isPublished = false → öffentlich NICHT vorhanden
Projekt B: isPublished = true  → öffentlich sichtbar
Projekt B wieder false         → öffentlich NICHT vorhanden
```

Auch direkte URLs und mögliche API-Routen prüfen. Bei gecachten Seiten sicherstellen, dass Änderungen zuverlässig sichtbar werden.

## ✅ FERTIG, WENN

- [ ] Veröffentlichen/Zurücknehmen funktionieren.
- [ ] Private Projekte und Felder nicht öffentlich abrufbar sind.
- [ ] Öffentliche Ansicht ohne Login funktioniert.

---

# STAGE 07 · Testen und veröffentlichen

## 🎯 ZIEL

MUSS-Anforderungen tatsächlich testen, MVP möglichst unter einer Testadresse bereitstellen. **Bestehende `katcoded.de`-Domain, DNS und E-Mail nicht verändern.**

## 🔨 BAUEN

### 1 · Anforderungen überprüfen

- [ ] FR001–FR007 einzeln prüfen.
- [ ] Tatsächliche Ergebnisse dokumentieren.
- [ ] Fehler korrigieren und erneut testen.
- [ ] Implementation/Review getrennt aktualisieren.

#### 🧱 DAFÜR BRAUCHST DU · Statusunterschied

```text
Implementation: Done   = Code ist umgesetzt
Review: Passed         = Verhalten wurde nachweislich geprüft
```

Nicht allein wegen eines erfolgreichen Builds alle FRs auf `Passed` setzen.

### 2 · Technische Qualitätsprüfung

- [ ] TypeScript/Build prüfen.
- [ ] ESLint ausführen.
- [ ] Responsive Ansichten testen.
- [ ] Formulare/Fehlerfälle prüfen.
- [ ] Auth und Veröffentlichungsfilter prüfen.
- [ ] Secrets und Git-Inhalte prüfen.

#### 🧱 DAFÜR BRAUCHST DU · Prüfkommandos

```bash
npm run          # zeigt verfügbare Scripts
npm run build    # Produktions-Build, falls Script vorhanden
npm run lint     # nur falls Script vorhanden
npx tsc --noEmit # TypeScript-Prüfung, falls passend eingerichtet
```

`npm run lint` ist **nicht in jedem Next.js-Projekt automatisch vorhanden**. Erst `package.json` prüfen.

#### 🧱 DAFÜR BRAUCHST DU · Browser-Check

```text
Desktop + Mobil
✓ Navigation
✓ Formulare
✓ Tastaturbedienung
✓ Fehlerhinweise
✓ Auth/Logout
✓ Veröffentlichung
```

Automatisierte Tests ergänzen manuelle Prüfung, ersetzen sie aber nicht vollständig.

### 3 · Deployment vorbereiten

- [ ] Aktuelle Next.js-Unterstützung für Cloudflare Workers prüfen.
- [ ] Geeigneten Adapter und Runtime-Einschränkungen klären.
- [ ] Secrets für Zielumgebung konfigurieren.
- [ ] Datenbankzugriff aus Workers prüfen.
- [ ] Testadresse planen.

#### 🧱 DAFÜR BRAUCHST DU · Lokal vs. Deployment

```text
Lokal: Next.js Dev Server → lokale Umgebungsvariablen
Online: Cloudflare Worker → Cloudflare-Secrets + erreichbare DB
```

Ein lokal funktionierender Node-Code läuft nicht zwangsläufig unverändert in der Workers-Runtime. **Aktuelle Anleitung:** Cloudflare Next.js Workers Guide (offizielle Dokumentation).

### 4 · Anwendung bereitstellen und testen

- [ ] Deployment durchführen.
- [ ] Öffentliche Testadresse prüfen.
- [ ] Login, CRUD und Veröffentlichung online testen.
- [ ] Probleme beheben und erneut deployen.

#### 🧱 DAFÜR BRAUCHST DU · Deployment-Check

```text
Build erfolgreich?
Testadresse erreichbar?
Secrets vorhanden?
DB erreichbar?
Login/Logout funktionsfähig?
Private Daten geschützt?
```

Keine echten Zugangsdaten in Logs oder Screenshots posten. DNS-Umschaltung der bestehenden Domain ist **nicht** Teil dieses Schritts.

### 5 · Projektstand dokumentieren

- [ ] `PROJECT_STATE.md` aktualisieren.
- [ ] Offene Probleme notieren.
- [ ] `PROJECT_REQUIREMENTS.md` anhand echter Tests aktualisieren.
- [ ] README bei Bedarf aktualisieren.

#### 🧱 DAFÜR BRAUCHST DU · Wiedereinstieg in drei Zeilen

```text
Stand: Stage 05, Projekt anlegen funktioniert lokal.
Offen: Fehlerbehandlung beim Speichern.
Nächster Schritt: Ungültige Eingaben testen.
```

Das ist nur ein **Beispiel**, kein tatsächlicher Projektstand.

## ✅ FERTIG, WENN

- [ ] Alle MUSS-FRs implementiert und geprüft sind.
- [ ] Keine kritischen Fehler offen sind.
- [ ] Lokal alles funktioniert.
- [ ] Online-Test erfolgt ist **oder** Deployment-Blocker dokumentiert ist.
- [ ] Projektstand nachvollziehbar ist.

---

# STAGE 08 · Aufgaben und Fortschritt (Bonus)

> 🌸 **OPTIONAL – NICHT für den MVP erforderlich.** Erst anfangen, wenn FR001–FR007 zuverlässig funktionieren und Zeit bleibt.

## 🎯 ZIEL

Aufgaben pro Projekt verwalten; Fortschritt automatisch berechnen und als Balken darstellen.

## 🔨 BAUEN

### 1 · Aufgabenmodell planen

- [ ] Aufgabenfelder definieren.
- [ ] Beziehung zum Projekt festlegen.
- [ ] Erledigt-Status vorsehen.
- [ ] Datenmodell ggf. erweitern.

#### 🧱 DAFÜR BRAUCHST DU · Eins-zu-viele

```text
Projekt 1 ── Aufgabe A
          ├─ Aufgabe B
          └─ Aufgabe C
```

Ein Projekt hat viele Aufgaben; jede Aufgabe verweist auf genau ein Projekt (z. B. über `project_id`).

### 2 · Aufgabenverwaltung erstellen

- [ ] Aufgaben anzeigen.
- [ ] Aufgaben anlegen.
- [ ] Erledigt/offen umschalten.
- [ ] Änderungen speichern.
- [ ] Optional Aufgaben löschen.

#### 🧱 DAFÜR BRAUCHST DU · Checkbox-Grundmuster

```tsx
"use client";
import { useState } from "react";

export function ExampleCheckbox() {
  const [done, setDone] = useState(false);
  return (
    <label>
      <input
        type="checkbox"
        checked={done}
        onChange={(event) => setDone(event.target.checked)}
      />
      Beispiel erledigt
    </label>
  );
}
```

`checked` wird von React gesteuert. **Dieses Beispiel speichert nicht in der Datenbank**; dafür wäre zusätzlich eine autorisierte Serveraktion nötig.

### 3 · Projektfortschritt berechnen

- [ ] Alle Aufgaben zählen.
- [ ] Erledigte Aufgaben zählen.
- [ ] Prozentwert berechnen.
- [ ] Fall „keine Aufgaben“ behandeln.
- [ ] Nach Änderungen neu berechnen.

#### 🧱 DAFÜR BRAUCHST DU · Prozentrechnung

```ts
function percentage(done: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((done / total) * 100);
}
// percentage(4, 5) → 80
```

Bei null Aufgaben vermeiden wir Division durch null. Ob die Oberfläche stattdessen „Noch keine Aufgaben“ zeigt, ist eine Designentscheidung.

### 4 · Fortschrittsanzeige erstellen

- [ ] Prozentwert anzeigen.
- [ ] Fortschrittsbalken ergänzen.
- [ ] Aktualisierung prüfen.
- [ ] Zugängliche Beschriftung sicherstellen.
- [ ] Optional öffentlich anzeigen.

#### 🧱 DAFÜR BRAUCHST DU · Semantischer Fortschrittsbalken

```tsx
<progress value={80} max={100} aria-label="Beispielfortschritt">80 %</progress>
<span>80 %</span>
```

Das native `<progress>`-Element transportiert die Bedeutung „Fortschritt“; der sichtbare Prozentwert hilft zusätzlich.

## ✅ FERTIG, WENN

- [ ] Aufgaben Projekten zugeordnet werden können.
- [ ] Statusänderungen gespeichert bleiben.
- [ ] Prozentrechnung korrekt ist.
- [ ] Balken und Prozentwert aktuell sind.
- [ ] Funktion tatsächlich geprüft ist.

---

## 🧭 KAT-REGELN FÜR DEN BAUPLAN

- BUILD ROUTE bleibt die schnelle Übersicht; Details stehen direkt beim jeweiligen Schritt.
- **Jeder Arbeitsschritt hat einen passenden 🧱 Lernbaustein** – Terminal, Konzept, Code, SQL oder Testbeispiel.
- **CODE-BAUSTEINE sind generische Lernmuster, keine fertigen Lösungen für das aktuelle Projekt.** Platzhalter und Pseudocode sind ausdrücklich gekennzeichnet.
- Der Guide ist eine Route, kein Vertrag. Bei neuen Erkenntnissen anpassen.
- MUSS-Anforderungen vor OPTIONAL. Stage 08 darf entfallen.
- **Implementation ≠ Review:** Nur tatsächlich überprüfte Ergebnisse als bestanden markieren.
- Keine Zugangsdaten in Git/Chat; administrative Zugriffe immer serverseitig prüfen.
- Bestehenden Projektordner und DEV TOOLS schützen.
- KATUARY bleibt ein eigenständiges Projekt; Integration nicht Teil dieses WBS-MVP.
- `PROJECT_REQUIREMENTS.md` beschreibt **was**; dieser Guide beschreibt **wie lernen und bauen**; `PROJECT_STATE.md` hält den aktuellen Wiedereinstieg fest.

---

> 👻 Part of **KAT · DEV TOOLS** · katcoded.de  
> See `DEV_TOOLS_README.md` for information about this toolkit.
