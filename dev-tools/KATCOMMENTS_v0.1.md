# 👻💜 KATCOMMENTS™ v0.1
## Kats persönlicher Code-Kommentarstil für Codex

### 🎯 Ziel

Schreibe Code-Kommentare so, dass Kat ihren Code auch nach Monaten noch lesen, verstehen und selbstständig weiterentwickeln kann.

Die Kommentare sollen technische Zusammenhänge verständlich erklären und gleichzeitig Kats persönlichen, lockeren, manchmal herrlich chaotischen Sprachstil widerspiegeln.

**Grundidee: Verständlicher Code mit Persönlichkeit. Kein trockenes Entwicklerhandbuch und keine künstliche Comedyshow.**

---

## 1. 👻 Schreibstil

- Sprache: Deutsch. Technische Bezeichner und Fachbegriffe dürfen Englisch bleiben.
- Locker, direkt, persönlich und natürlich.
- Anschauliche Erklärungen statt unnötiger Fachsprache.
- Gelegentlich kleine Scherze, spontane Bemerkungen, `xD` oder Emojis.
- Blerps, Bums, Kram, Dingens, rausfischen, reinstopfen, wegfuttern und ähnliche Formulierungen sind willkommen, wenn sie natürlich passen.
- Kleine dramatische Ausrufe und Großbuchstaben sind ausdrücklich erlaubt.
- Nicht jeder Kommentar muss lustig sein.
- Humor darf technische Genauigkeit niemals ersetzen.

**Schreibe wie eine verständliche, leicht chaotische Notiz von Kat an ihr zukünftiges Ich.**

## 2. 💜 Die richtige Ausführlichkeit

Die Ausführlichkeit richtet sich nach der Schwierigkeit des Codes und danach, was Kat gerade lernt.

### Kleine Alltags-Blerps

Bei einfachen Abläufen reichen kurze, lockere Kommentare.

```js
// gespeicherte movieblerps wieder aus dem localStorage rausfischen

// verhindert NaN-Gremlins wenn noch gar keine Habits existieren

// alten timer puttemachen damit nicht tausend timer rumspuken
```

### Lernfreundliche Erklärungen

Wenn neue Konzepte, Methoden oder Zusammenhänge vorkommen, darf es ausführlicher werden.

Erkläre möglichst:

- Was passiert hier?
- Warum brauchen wir das?
- Wie funktioniert der verwendete Mechanismus?
- Was würde ohne diese Lösung passieren?

Beispiel:

```ts
// ========================================
// SAVEGAME-BLERPS RETTEN 💾
// ========================================

// React merkt sich unsere Daten im State.
// ABER: Nach einem Reload wäre dieser Bums erstmal weg.
//
// Deshalb speichern wir die Liste zusätzlich im localStorage.
//
// KLEINER SPICKZETTEL:
// JSON.stringify verwandelt unser Array in einen String,
// weil localStorage keine Arrays direkt speichern kann.
//
// JSON.parse macht später wieder ein Array daraus.
// Natürlich nur, wenn der gespeicherte Text gültiges JSON ist.
//
// Future-Kat soll schließlich nicht jedes Mal
// ihre ganze Sammlung neu zusammenklicken müssen. xD
```

### Größere technische Spickzettel

Bei komplizierter Logik, Fehlerbehandlung, Datenflüssen oder ungewöhnlichen Entscheidungen sind auch ausführlichere Kommentare ausdrücklich erwünscht.

Erkläre die wichtigen Schritte, Abhängigkeiten und möglichen Stolperfallen.

Nicht künstlich kürzen, wenn dadurch hilfreiches Verständnis verloren geht.

## 3. 🌸 Abschnittsüberschriften

Für größere Codebereiche dürfen auffällige, verspielte Überschriften verwendet werden.

Beispiele aus Kats bisheriger Kommentarsprache:

```js
// ========================================
// JOURNAL MOVIEBLERPS AUS DEM KELLER HOLEN
// ========================================

// ========================================
// MOVIE CARDS HIER. JETZT. DANKE.
// ========================================

// ========================================
// --TABLE FLIP-- CARD FLIP AHOOOY
// ========================================
```

Diese Überschriften sollen beim Navigieren in längeren Dateien helfen.

Nicht jede kleine Funktion braucht einen eigenen riesigen Kommentarblock.

## 4. 🩷 Humor und Persönlichkeit

Humor darf spontan, albern, trocken oder leicht genervt sein.

Typische Beispiele:

```js
// formular würde sonst die komplette seite neu laden
// NEIN DANKE
```

```js
// Hier kommt später der fancy Detail-Blerps hin.
//
// ABER NICHT JETZT.
// Erstmal soll die normale Version funktionieren. xD
```

```js
// Wenn die API wieder irgendwelchen Unsinn zurückgibt,
// fangen wir das hier ab, bevor die ganze App umkippt.
```

Wichtig:

- Keine erzwungenen Witze.
- Nicht jedes Objekt als Blerps bezeichnen.
- Emojis nur gelegentlich.
- Fachbegriffe nicht durch Fantasiewörter ersetzen, wenn dadurch die Erklärung unklar wird.
- Humor muss zur Situation passen.

## 5. 📚 Lernen gehört ausdrücklich dazu

Kat nutzt ihre Projekte auch, um Programmierung besser zu verstehen.

Deshalb darf Codex technische Begriffe direkt im Code erklären.

Beispiel:

```tsx
// Reacts kleines Merkkästchen:
// useState merkt sich den aktuellen Wert zwischen den Rendern.
//
// Der Setter aktualisiert den State und sorgt dafür,
// dass React die betroffene Oberfläche neu berechnet.
//
// Wichtig: Den State nicht einfach selbst verändern.
// React soll schon mitbekommen, dass wir was geändert haben. xD
```

Bei neuen Konzepten lieber eine verständliche zusätzliche Erklärung geben als kommentarlos voraussetzen, dass Kat alles bereits kennt.

Bei bekannten, offensichtlichen Abläufen dagegen nicht unnötig ausschweifen.

## 6. ⚠️ Wichtige technische Regeln

- Kommentare müssen zum tatsächlichen Code passen.
- Keine erfundenen Begründungen oder historischen Entscheidungen.
- Unbekannte Gründe als unbekannt kennzeichnen.
- Besonders das **Warum** erklären, wenn es nicht offensichtlich ist.
- Kritische Reihenfolgen, Seiteneffekte, Sonderfälle und Fehlerbehandlungen verständlich dokumentieren.
- Vorhandene sinnvolle Kommentare respektieren.
- Veraltete Kommentare bei passenden Codeänderungen aktualisieren.
- Kein Kommentar-Spam bei selbsterklärenden Zeilen.
- Dokumentationsformate wie JSDoc, TSDoc und Docstrings korrekt verwenden.
- Notwendige Lizenzhinweise, Tool-Direktiven und maschinell ausgewertete Kommentare nicht spielerisch umschreiben.
- Keine Funktionslogik verändern, wenn ausschließlich Kommentare beauftragt wurden.

## 7. 🧠 Kommentierungsintensität

**Standard: Ausgewogen und lernfreundlich**

Kurze Kommentare bei einfachen Abläufen. Ausführlichere Erklärungen bei schwierigen Stellen und neu eingeführten Konzepten.

**Auf ausdrücklichen Wunsch: Lernmodus**

Mehr technische Hintergründe, Zusammenhänge, kleine Spickzettel und hilfreiche Beispiele. Auch grundlegende Konzepte dürfen erklärt werden.

**Auf ausdrücklichen Wunsch: Kompaktmodus**

Wenige, gezielte Kommentare für wichtige Entscheidungen, Sonderfälle und Stolperfallen.

Diese Modi sind keine starren Kommentarformate, sondern steuern lediglich die Ausführlichkeit.

## 8. 👻 Anwendung durch Codex

Wenn Kat Code schreiben, verändern oder kommentieren lässt:

1. Prüfe, wo Kommentare wirklich hilfreich sind.
2. Verwende bevorzugt den bestehenden Kommentarstil des Projekts.
3. Ergänze KATCOMMENTS im angemessenen Umfang.
4. Erkläre unbekannte oder komplexe Konzepte lernfreundlich.
5. Bewahre Kats natürliche Sprache und Humor.
6. Überfrachte den Code nicht mit Kommentarblöcken.
7. Achte darauf, dass Future-Kat die technischen Zusammenhänge nachvollziehen kann.

Bei einem ausdrücklichen KATCOMMENTS-Durchgang darf die Kommentierung ausführlicher ausfallen, ohne die Programmlogik zu verändern.

---

## 💜 KATCOMMENTS™ – Das wichtigste Prinzip

**Future-Kat soll ihren Code öffnen und denken:**

„AAAAAAH, DESWEGEN HAB ICH DAS SO GEMACHT!“

Und gelegentlich:

„AHAHAHAHA WELCHER BLERPS HAT DAS GESCHRIEBEN?!“

Aber niemals:

„...okay, und was macht dieser Kram jetzt eigentlich?“ 😭

**Verständlichkeit zuerst. Persönlichkeit immer. Blerps nach Bedarf. 👻💜**
