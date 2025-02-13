# Design & Structure Guidelines

## Projektstruktur

Die Projektstruktur folgt einem modularen Ansatz, um eine klare Trennung zwischen Layout, Views und spezifischen Komponenten zu gewährleisten:

```
.
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── data
│   ├── index.css
│   ├── Layout
│   │   ├── Layout.jsx
│   │   ├── SideNav.css
│   │   ├── SideNav.jsx
│   │   ├── TopNav.css
│   │   └── TopNav.jsx
│   ├── main.jsx
│   └── Views
│       └── Dashboard
│           ├── Components
│           │   ├── css
│           │   └── GraphComponent.jsx
│           ├── Dashboard.css
│           └── Dashboard.jsx
└── vite.config.js
```

## Struktur- und Design-Richtlinien

### 1. Views & Komponenten
- Jede View wird in einem eigenen Ordner innerhalb von `src/Views/` gespeichert.
- Der View-Ordner enthält eine Hauptkomponente mit dem Namen der View (z. B. `Dashboard.jsx`). Diese wird in der `react-router`-Konfiguration als Route gerendert.
- View-spezifische Komponenten kommen in den `Components/`-Unterordner der jeweiligen View.

### 2. Layout-Komponenten
- Globale UI-Elemente wie Navigation oder Header werden im `src/Layout/`-Ordner gespeichert.
- Jede Layout-Komponente hat eine `.jsx`-Datei für die Logik und eine `.css`-Datei für das Styling.
- Beispiel: `SideNav.jsx` und `SideNav.css` befinden sich beide im `Layout/`-Ordner.

### 3. Styles & CSS
- Jede View hat eine eigene `.css`-Datei für spezifische Styles (z. B. `Dashboard.css`).
- View-spezifische Komponenten können eigene CSS-Dateien in `Components/css/` haben.
- **Globale Styles kommen in `index.css`.**

### 4. Daten & Assets
- Statische Assets (z. B. Bilder, Icons) werden in `src/assets/` gespeichert.
- Daten oder statische JSON-Dateien werden in `src/data/` gespeichert.

## Best Practices
- ✅ **Modularität**: Trenne Layout- und View-spezifische Komponenten sauber.
- ✅ **Wiederverwendbarkeit**: Falls eine Komponente mehrfach verwendet wird, sollte sie in `Layout/` oder einem eigenen `src/components/`-Ordner gespeichert werden.
- ✅ **Konsistente Namensgebung**: Verwende klare und einheitliche Namen für Dateien und Ordner.
- ✅ **CSS-Scopes beachten**: Vermeide globale Styles, wenn möglich.

---

## 🖌️ Global Styles Guide

Globale Styles werden in der Datei `src/index.css` definiert und sollten nur grundlegende Layout- und Farbdefinitionen enthalten. Komponenten sollten ihre eigenen Styles in separaten `.css`-Dateien verwalten.

### 1. Basis-Styles
Die Grundstile für das Projekt beinhalten die folgenden Reset- und Standardwerte:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Diese sorgen für eine einheitliche Basis, indem sie Standardabstände und Box-Sizing global setzen.

### 2. Farbvariablen
Die Farben des Projekts werden als CSS-Variablen in `:root` definiert:

```css
:root {
  /* Colors */
  --main-bg: #ffffff;
  --sec-bg: #f5f6fa;
  --accent: #4880ff;
  --text-col: rgb(32, 34, 36);
  --text-light: rgba(32, 34, 36, 0.5);
}
```

Diese können dann in CSS-Regeln verwendet werden, um Konsistenz im Design zu gewährleisten:

```css
body {
  font-family: "SF Pro Display", sans-serif;
  color: var(--text-col);
}
```

### 3. Container-Styles
Ein allgemeiner `container`-Style sorgt für eine einheitliche visuelle Darstellung:

```css
.container {
  background-color: var(--main-bg);
  border-radius: 14px;
}
```

### 4. Empfehlungen
- **Kein direktes Styling von HTML-Tags (z. B. `h1, p`) in `index.css`, um Kollisionen zu vermeiden.**
- **Vermeide zu viele globale Styles und arbeite mit `class`-basierten Regeln.**
- **Verwende `:root`-Variablen für Farben und Abstände, um einheitliche Styles zu gewährleisten.**

Falls neue Styles hinzugefügt werden, sollten sie konsistent mit den bestehenden globalen Variablen und Regeln sein. 🚀