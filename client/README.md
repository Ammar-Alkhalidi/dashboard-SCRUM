## Design & Structure Guidelines

### Projektstruktur

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

### Struktur- und Design-Richtlinien

#### 1. Views & Komponenten
- Jede View wird in einem eigenen Ordner innerhalb von `src/Views/` gespeichert.
- Der View-Ordner enthält eine Hauptkomponente mit dem Namen der View (z. B. `Dashboard.jsx`). Diese wird in der `react-router`-Konfiguration als Route gerendert.
- View-spezifische Komponenten kommen in den `Components/`-Unterordner der jeweiligen View.

#### 2. Layout-Komponenten
- Globale UI-Elemente wie Navigation oder Header werden im `src/Layout/`-Ordner gespeichert.
- Jede Layout-Komponente hat eine `.jsx`-Datei für die Logik und eine `.css`-Datei für das Styling.
- Beispiel: `SideNav.jsx` und `SideNav.css` befinden sich beide im `Layout/`-Ordner.

#### 3. Styles & CSS
- Jede View hat eine eigene `.css`-Datei für spezifische Styles (z. B. `Dashboard.css`).
- View-spezifische Komponenten können eigene CSS-Dateien in `Components/css/` haben.
- Globale Styles kommen in `index.css`.

#### 4. Daten & Assets
- Statische Assets (z. B. Bilder, Icons) werden in `src/assets/` gespeichert.
- Daten oder statische JSON-Dateien werden in `src/data/` gespeichert.

### Best Practices
✅ **Modularität**: Trenne Layout- und View-spezifische Komponenten sauber.
✅ **Wiederverwendbarkeit**: Falls eine Komponente mehrfach verwendet wird, sollte sie in `Layout/` oder einem eigenen `src/components/`-Ordner gespeichert werden.
✅ **Konsistente Namensgebung**: Verwende klare und einheitliche Namen für Dateien und Ordner.
✅ **CSS-Scopes beachten**: Vermeide globale Styles, wenn möglich.

Falls neue Views oder Komponenten hinzugefügt werden, halte dich an diese Struktur, um die Codebase sauber und wartbar zu halten! 🚀