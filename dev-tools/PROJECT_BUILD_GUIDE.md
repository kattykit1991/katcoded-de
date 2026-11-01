# 🗺️ PROJECT BUILD GUIDE · katcoded.de v0.1

> Meine Bauanleitung vom aktuellen Ziel zum funktionierenden DING™.  
> Mein Entwicklungsfahrplan für katcoded.de: konkrete Bauschritte, technische Spickzettel und Platz für neue Erkenntnisse. Die Code-Beispiele sind bewusst allgemeine Syntaxmuster – keine vorweggenommene Implementierung.

**Projekt:** katcoded.de · v0.1  
**Ordner:** `01_katcoded-de-v01`  

**Aktueller Stack:** Next.js App Router · React · TypeScript · CSS Modules · CUTE_COZY · Tailwind-Utilities im gemeinsamen Rahmen. OpenNext/Cloudflare-Tooling vorhanden; keine Datenbankanbindung.

**Mein Ziel:** Öffentliche Developer-Website v0.1; spätere private Projekt-/Roadmap-Verwaltung in der separaten Anwendung KATUARY, kein Website-Dashboard.

**Stand:** 01.11.2026 · fünf öffentliche Seiten lokal umgesetzt; Präsentation am 02.11.2026. Finale Build-, Git-/Asset- und Accessibility-Nachweise noch offen. Keine vollständige Release-Abnahme.

**KAT-NOTIZ 👻** Das ist mein Bauplan, kein Pflichtenheft aus Stein. Wenn ich beim Entwickeln einen besseren Weg finde, dokumentiere ich die Entscheidung und passe die Route an. Das MVP bleibt trotzdem bewusst klein.

**Dokumentationsidee:** Dieser Guide liegt bewusst im Repository. Er hält meine geplante Reihenfolge und die verwendeten technischen Grundlagen nachvollziehbar fest – auch für Menschen, die das Projekt auf GitHub entdecken.

---

## 🧭 BUILD ROUTE

### Gültigkeit nach der Scope-Entscheidung vom 01.11.2026

- **Stage 01:** technische Grundlage vorhanden; Verständnis-Lernziele nur durch Kat bestätigen.
- **Stage 02:** öffentliche Implementierung der fünf Seiten vorhanden. Dashboard-Platzhalter entfällt ausdrücklich. Layout-/Accessibility-Abnahme noch nicht umfassend abgeschlossen.
- **Stage 03–05:** ursprüngliche Datenbank-/Website-Admin-/CRUD-Route durch separate spätere KATUARY-Verwaltung ersetzt. Die Abschnitte und Lernbausteine bleiben historisch erhalten; offene Kästchen sind keine v0.1-To-dos und keine KATUARY-Implementierungsfreigabe.
- **Stage 06:** statischer `published`-Filter vorhanden; ein dynamischer Freigabeworkflow und private Datenhaltung bleiben später zu planen.
- **Stage 07:** aktuelle Route zum technischen Abschluss: finalen Build prüfen, Git-/Asset-Vollständigkeit herstellen lassen, Semantik und gezielte Tests abschließen. Kein automatischer Commit/Push/Deployment.
- **Stage 08:** frühere Bonusidee, kein Bestandteil von v0.1.

**Leseregel:** `[x]` = belegter Teilabschluss; `[ ]` = offen im jeweils angegebenen Scope; `[-]` = durch die Architekturentscheidung entfallen, ausdrücklich nicht implementiert. Historische Stages nicht als neue Arbeitsanweisung lesen. Requirements behalten ihre ursprünglichen IDs, aber heutige Gültigkeit steht in `PROJECT_REQUIREMENTS.md`.


### 🌱 Ursprüngliche Route · heutige Gültigkeit siehe oben

- [STAGE 01 · Projektgrundlage schaffen](#stage-01--projektgrundlage-schaffen)
- [STAGE 02 · Öffentliche Website aufbauen](#stage-02--öffentliche-website-aufbauen)
- [STAGE 03 · Projektdaten dauerhaft speichern](#stage-03--projektdaten-dauerhaft-speichern)
- [STAGE 04 · Admin-Bereich absichern](#stage-04--admin-bereich-absichern)
- [STAGE 05 · Projekte verwalten](#stage-05--projekte-verwalten)
- [STAGE 06 · Sichtbarkeit steuern](#stage-06--sichtbarkeit-steuern)
- [STAGE 07 · Testen und veröffentlichen](#stage-07--testen-und-veröffentlichen)

### 🌸 Historischer Bonus-Level · außerhalb v0.1

- [STAGE 08 · Aufgaben und Fortschritt (Bonus)](#stage-08--aufgaben-und-fortschritt-bonus)

**Leitplanken:** Die Stages folgen meiner geplanten Baureihenfolge, nicht einer unveränderlichen Architektur. Vor Authentifizierung, produktiven Datenänderungen und Deployment prüfe ich die aktuellen offiziellen Anleitungen. KATUARY bleibt ein eigenes Projekt. Die bestehende Domain, DNS-Einträge und E-Mail-Konfiguration fasse ich für dieses MVP nicht an.

---

# STAGE 01 · Projektgrundlage schaffen

**Historischer Nachweis · 31.10.2026:** Grundgerüst, DEV TOOLS, Git und lokale Laufzeit vorhanden; TypeScript und Produktionsbuild des damaligen Homepage-Stands erfolgreich, ESLint ohne Fehler. **Aktueller Abgleich · 01.11.:** Framework und Setup bestehen weiter; der finale Produktionsbuild ist inzwischen durch das gesperrte lokale Turbopack-Port-Binding blockiert (Stage 07). Offene Verständnis-Lernziele bleiben bis zu Kats Bestätigung offen; der damalige Initialisierungsweg wird nicht aus dem heutigen Code rekonstruiert.

## 🎯 ZIEL

Mein bestehender Projektordner bekommt ein funktionierendes Next.js-Grundgerüst. `dev-tools/`, `AGENTS.md` und `README.md` bleiben erhalten.

## 🔨 BAUEN

### 1 · Bestehenden Projektordner prüfen

- [x] Vorhandenen Ordner `01_katcoded-de-v01` verwenden.
- [x] Dateien und Unterordner ansehen.
- [x] `dev-tools/`, `AGENTS.md`, `README.md` schützen.
- [x] Prüfen, ob `package.json`/Git schon vorhanden sind.

#### 🧱 DAFÜR BRAUCHST DU · Terminal-Basics

```bash
pwd                 # Wo bin ich?
ls -la              # Auch versteckte Dateien anzeigen
find . -maxdepth 2 -type f | sort  # Dateien bis Ebene 2
```

**Was macht das?** `pwd` zeigt meinen aktuellen Ordner, `ls` listet die Inhalte und `find` liefert einen schnellen Überblick über vorhandene Dateien. Alle drei Befehle lesen nur. Vor größeren Setup-Änderungen sichere ich den Ordner.

### 2 · Next.js initialisieren

- [ ] Vorgehen für Initialisierung im **nicht leeren** Projektordner prüfen.
- [x] Next.js, TypeScript und App Router einrichten.
- [x] Tailwind und ESLint einrichten bzw. prüfen.
- [x] Prüfen, dass vorhandene Dateien erhalten bleiben.
- [x] Neue Abhängigkeiten und Konfigurationen ansehen.

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
- [x] Generierte Dateien ansehen.

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

- [x] Abhängigkeiten installieren, falls nötig.
- [x] Entwicklungsserver starten.
- [x] Startseite im Browser öffnen.
- [x] Fehlermeldungen prüfen.
- [x] Git-Status ansehen.

#### 🧱 DAFÜR BRAUCHST DU · npm und Git

```bash
npm install          # nur wenn Dependencies noch installiert werden müssen
npm run dev          # startet das Script "dev" aus package.json
git status           # zeigt lokale Änderungen
```

`npm run dev` ist für die Entwicklung; der Terminalprozess bleibt aktiv, bis er beendet wird. Die tatsächlich vorhandenen Scripts stehen in `package.json`.

## ✅ FERTIG, WENN

- [x] Next.js läuft lokal und eine Seite ist im Browser sichtbar.
- [x] TypeScript/App Router sind eingerichtet.
- [x] DEV TOOLS sind erhalten.
- [x] Keine blockierenden Setupfehler sind bekannt.

---

# STAGE 02 · Öffentliche Website aufbauen

**Implementierungsstand · 01.11.2026:** Homepage, Projektgalerie, About, Dev Tools und Roadmap sind lokal umgesetzt. Gemeinsame `SiteHeader`-/`SiteNavigation`-/`SiteFooter`-Komponenten und echte Next.js-Routen ersetzen die früheren unvollständigen Sprungmarken. Galerie mit statischen Projektdaten/Filtern/Detaildialog, About mit vier Abschnitten plus KI-Hinweis, Dev Tools mit Karten, Roadmap mit 13 statischen Aufgaben und Detail-Blerp. CSS Modules, CUTE_COZY-Tokens, lokale Fonts, gemeinsame Hero-Styles und KC-Favicon sind eingebunden.

**Behobener früherer Fehler:** CSS Modules sind in `next.config.ts` von der globalen Turbopack-CSS-Loader-Regel ausgenommen; dadurch funktionieren ihre Klassenexports. Dieser technische Teilabschluss bleibt bestehen. Der aktuelle Build-Umgebungsfehler hat eine andere Ursache.

**Prüfgrenze:** gezielte Safari-Prüfungen vorhanden, kein vollständiger Responsive-/Zoom-/Accessibility-Nachweis. Homepage hat noch ein zusätzliches `<main>` im Root-`<main>`. Die vier Homepage-Karten sind Themenbereiche mit Labels, keine eigenen Linkkarten. Die öffentliche Implementierung ist vorhanden; eine vollständige technische Abnahme bleibt offen.

## 🎯 ZIEL

Die fünf öffentlichen Seiten bilden die v0.1. **Kein Dashboard-Platzhalter mehr vorgesehen**: private Verwaltung soll später KATUARY übernehmen. Die ursprüngliche Teilaufgabe 2 bleibt unten ausschließlich historisch nachvollziehbar.

## 🔨 BAUEN

### 1 · Öffentliche Seitenstruktur erstellen

- [x] Startseite vorbereiten.
- [x] Bereich zur Developer-Identität vorsehen.
- [x] Projektübersicht vorbereiten.
- [x] Navigation zwischen öffentlichen Seiten bauen.

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

Jede `page.tsx` exportiert eine React-Komponente als Standardexport. **Im tatsächlichen Projekt enthält das Root-Layout bereits `<main>`; das generische Seitenbeispiel ist nicht als zweites verschachteltes `<main>` zu kopieren.** Die vorhandene Homepage-Verschachtelung ist als Nacharbeit im State dokumentiert.

#### 🧱 DAFÜR BRAUCHST DU · Navigation

```tsx
import Link from "next/link";

<Link href="/example">Zur Beispielseite</Link>;
```

**Was macht das?** `Link` verbindet interne Seiten. Die Zielroute muss existieren; externe Websites brauchen dagegen meist einen normalen Link.

### 2 · Dashboard-Struktur vorbereiten

> **Historisch / am 01.11.2026 ersetzt:** Nicht mehr für KATCODED.DE vorgesehen. Keine Route oder Platzhalter erstellen; spätere private Verwaltung in KATUARY. Der folgende Lernbaustein bleibt als ursprüngliche Planung erhalten.

- [-] ~~Route für Administration vorsehen.~~ Entfallen: private Verwaltung später in KATUARY.
- [-] ~~Leere Dashboard-Startansicht vorbereiten.~~ Entfallen: private Verwaltung später in KATUARY.
- [-] ~~Platz für Projektliste/Formulare planen.~~ Entfallen: private Verwaltung später in KATUARY.
- [-] ~~Navigation öffentlich/admin unterscheiden.~~ Entfallen: private Verwaltung später in KATUARY.

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

- [x] Header, Hauptinhalt und Navigation planen.
- [x] Responsive Grundlayout erstellen.
- [x] Farben, Typografie und Abstände festlegen.
- [x] Developer-Identität als Designrichtung berücksichtigen.

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

- [x] Startseite und Projektübersicht erreichbar sind.
- [-] ~~Dashboard-Platzhalter existiert.~~ Entfallen: private Verwaltung später in KATUARY.
- [x] Navigation funktioniert (fünf vorhandene Routen; `aria-current` im Code).
- [ ] Layout auf schmalen und breiten Displays vollständig abgenommen ist; gezielte Safari-Prüfungen vorhanden.

---

# STAGE 03 · Projektdaten dauerhaft speichern

> **Historischer Lernabschnitt · nicht v0.1:** Die ursprüngliche Website-Datenbank-/Admin-/CRUD-Architektur wurde am 01.11.2026 ersetzt. Keine dieser Implementierungen ist vorhanden oder jetzt freigegeben. KATUARY bleibt das separate spätere Verwaltungsprojekt; dessen Technik und Sicherheitskonzept sind noch zu entscheiden. Lernbeispiele und offene Kästchen bleiben zur Nachvollziehbarkeit erhalten.

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

> **Historischer Lernabschnitt · nicht v0.1:** Die ursprüngliche Website-Datenbank-/Admin-/CRUD-Architektur wurde am 01.11.2026 ersetzt. Keine dieser Implementierungen ist vorhanden oder jetzt freigegeben. KATUARY bleibt das separate spätere Verwaltungsprojekt; dessen Technik und Sicherheitskonzept sind noch zu entscheiden. Lernbeispiele und offene Kästchen bleiben zur Nachvollziehbarkeit erhalten.

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

> **Historischer Lernabschnitt · nicht v0.1:** Die ursprüngliche Website-Datenbank-/Admin-/CRUD-Architektur wurde am 01.11.2026 ersetzt. Keine dieser Implementierungen ist vorhanden oder jetzt freigegeben. KATUARY bleibt das separate spätere Verwaltungsprojekt; dessen Technik und Sicherheitskonzept sind noch zu entscheiden. Lernbeispiele und offene Kästchen bleiben zur Nachvollziehbarkeit erhalten.

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

**Teilstand · 01.11.2026:** `Project.published` und ein serverseitiger Filter vor Übergabe an die Galerie sind implementiert. Alle drei aktuellen Datensätze sind veröffentlicht; ein vollständiger Veröffentlichen-/Zurücknehmen-Test ist nicht dokumentiert. Kein Dashboard und keine Datenbank. Der unten beschriebene dynamische Verwaltungsablauf ist historische Planung bzw. später mit KATUARY neu zu planen; er ist keine v0.1-Pflicht.

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
- [x] Nur freigegebene Datensätze an die Galerie übergeben (`published`-Filter auf der Server-Seite; kein vollständiger Datenschutz-/Workflowtest).
- [x] Karten/Liste darstellen (Projektgalerie).
- [x] Leerzustand anzeigen (in `ProjectGallery` implementiert; Verhalten noch gezielt prüfen).

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

**Prüfstand · 01.11.2026:** TypeScript und ESLint im unmittelbar vorangegangenen finalen Asset-Auftrag erfolgreich; eine bekannte `no-img-element`-Warnung im unveränderten Designsystem-Beispiel. Der letzte Next-Produktionsbuild scheitert umgebungsbedingt am lokalen Port-Binding von Turbopack (`Operation not permitted`). Der erfolgreiche Build vom 31.10. betraf nur den damaligen Homepage-Stand. Kein aktueller OpenNext-Build oder Online-/Workers-Test. Frühere Veröffentlichung laut Kat ist historisch, keine Freigabe des finalen Arbeitsstands.

**Checkpoint offen:** Die vier ursprünglichen Homepage-WebPs sind bereits in `680e2fa` versioniert. Inzwischen sind 60 weitere importierte Registry-Assets (15 WebP, 45 SVG) ignoriert/unversioniert; spätere Source-Dateien sind ebenfalls noch nicht vollständig committed. Vollständigen Stand gezielt prüfen, keine pauschalen Assetverzeichnisse hinzufügen. Dieser Dokumentationsauftrag verändert weder Ignore-Regeln noch Git-Index.

## 🎯 ZIEL

Den aktuellen öffentlichen v0.1-Scope prüfen und für die Präsentation am 02.11.2026 nachvollziehbar dokumentieren. **Keine Admin-/CRUD-/DB-Prüfung für eine nicht implementierte Website-Verwaltung verlangen.** Keine neue Änderung an bestehender Domain, DNS oder E-Mail. Deployment nur nach separater Freigabe.

## 🔨 BAUEN

### 1 · Anforderungen überprüfen

- [ ] Für v0.1 gültige Anforderungen FR001 und den statischen Teil von FR006 vollständig prüfen; FR002–FR005/FR007 gemäß dokumentierter Scope-Entscheidung einordnen.
- [x] Tatsächliche Ergebnisse und Prüflücken dokumentieren (01.11.2026).
- [ ] Fehler korrigieren und erneut testen.
- [x] Implementation/Review und heutige Gültigkeit getrennt aktualisieren (01.11.2026).

#### 🧱 DAFÜR BRAUCHST DU · Statusunterschied

```text
Implementation: Done   = Code ist umgesetzt
Review: Passed         = Verhalten wurde nachweislich geprüft
```

Nicht allein wegen eines erfolgreichen Builds alle FRs auf `Passed` setzen.

### 2 · Technische Qualitätsprüfung

- [x] TypeScript prüfen (letzter erfolgreicher Lauf 01.11.2026).
- [ ] Produktionsbuild des finalen Stands erfolgreich bestätigen; aktueller Versuch umgebungsbedingt blockiert.
- [x] ESLint ausführen.
- [ ] Responsive Ansichten vollständig abnehmen; gezielte Safari-Prüfungen vorhanden, Textzoom/Cross-Browser noch offen.
- [ ] Vorhandene Filter, Leerzustände und Dialog-Fehlerfälle gezielt prüfen; keine Eingabe-/Adminformulare in v0.1.
- [ ] Statischen Veröffentlichungsfilter gezielt prüfen. Auth gehört nicht zu v0.1.
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

> Vorhanden sind `open-next.config.ts`, `wrangler.jsonc` und npm-Skripte, Workername/Self-Reference `katcoded-de`. Aktuellen Workers-Build und Laufzeit separat prüfen. Die folgenden ursprünglichen DB-/Secret-Aufgaben gelten nur bei einem später tatsächlich beschlossenen Bedarf; v0.1 benötigt keine DB-/Auth-Zugangsdaten.

- [ ] Aktuelle Next.js-Unterstützung für Cloudflare Workers prüfen.
- [x] Geeigneten Adapter und Runtime-Einschränkungen klären.
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

- [x] Früheres Deployment laut Kat erfolgt (historisch; nicht der finale aktuelle Stand).
- [ ] Öffentliche Testadresse prüfen.
- [ ] Fünf öffentliche Seiten, Filter, Dialoge, Bilder und Favicon online testen; Login/CRUD entfallen für v0.1.
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

- [x] `PROJECT_STATE.md` aktualisieren. (Dokumentationsabgleich 01.11.2026.)
- [x] Offene Probleme notieren. (Dokumentationsabgleich 01.11.2026.)
- [x] `PROJECT_REQUIREMENTS.md` anhand von Code, Scope-Entscheidung und belegtem Prüfstand aktualisieren; Prüflücken ausdrücklich offen lassen.
- [x] README bei Bedarf aktualisieren. (Dokumentationsabgleich 01.11.2026.)

#### 🧱 DAFÜR BRAUCHST DU · Wiedereinstieg in drei Zeilen

```text
Stand: Stage 05, Projekt anlegen funktioniert lokal.
Offen: Fehlerbehandlung beim Speichern.
Nächster Schritt: Ungültige Eingaben testen.
```

Das ist nur ein **Beispiel**, kein tatsächlicher Projektstand.

## ✅ FERTIG, WENN

- [ ] Alle für v0.1 weiterhin gültigen Anforderungen implementiert und geprüft sind; historische MUSS-Marker nicht als aktuelle Pflichten lesen.
- [ ] Keine kritischen Fehler offen sind.
- [ ] Lokal alles funktioniert.
- [ ] Online-Test erfolgt ist **oder** Deployment-Blocker dokumentiert ist.
- [x] Projektstand nachvollziehbar dokumentiert ist (01.11.2026).

---

# STAGE 08 · Aufgaben und Fortschritt (Bonus)

> 🌸 **Historische Bonusidee – nicht für v0.1 erforderlich oder umgesetzt.** Die alte Voraussetzung „erst FR001–FR007“ ist durch die Scope-Entscheidung ersetzt. Aufgabenbearbeitung und automatische Fortschrittsbalken nicht mit dem vorhandenen statischen Roadmap-Board verwechseln. Spätere Priorisierung mit Kat; keine Implementierungsfreigabe.

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
- Aktuell gültige v0.1-Anforderungen vor späteren Optionen; ursprüngliche Admin-MUSS-Marker sind historisch. Stage 08 bleibt außerhalb v0.1.
- **Implementation ≠ Review:** Nur tatsächlich überprüfte Ergebnisse als bestanden markieren.
- Keine Zugangsdaten in Git/Chat; administrative Zugriffe immer serverseitig prüfen.
- Bestehenden Projektordner und DEV TOOLS schützen.
- KATUARY bleibt ein eigenständiges Projekt; Integration nicht Teil dieses WBS-MVP.
- `PROJECT_REQUIREMENTS.md` beschreibt **was**; dieser Guide beschreibt **wie lernen und bauen**; `PROJECT_STATE.md` hält den aktuellen Wiedereinstieg fest.

---

> 👻 Part of **KAT · DEV TOOLS** · katcoded.de  
> See `DEV_TOOLS_README.md` for information about this toolkit.
