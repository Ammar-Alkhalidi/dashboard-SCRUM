## 🚀 Kollaborativer GitHub-Workflow

### **🛠️ Einrichtung & Klonen des Repos**
1. Repository klonen:
   ```sh
   git clone <REPO-URL>
   ```
2. In das Projektverzeichnis wechseln:
   ```sh
   cd <PROJEKT-NAME>
   ```
3. Die neuesten Änderungen von `main` abrufen:
   ```sh
   git pull origin main
   ```

---

### **🌱 Branching & Arbeiten an Features**
#### **Branch-Namenskonventionen:**
- `feature/<feature-name>` → Neue Features
- `fix/<bug-description>` → Bugfixes
- `refactor/<component-or-section>` → Code-Refactoring
- `hotfix/<critical-bug>` → Kritische Fehlerbehebungen
- `data/<branch-name>` → Für API abfragen / react context

#### **Einen neuen Branch erstellen:**
1. Zu `main` wechseln und aktualisieren:
   ```sh
   git checkout main
   git pull origin main
   ```
2. Einen neuen Branch erstellen und wechseln:
   ```sh
   git checkout -b feature/<feature-name>
   ```
3. Am Feature arbeiten und Änderungen committen:
   ```sh
   git add .
   git commit -m "Feature: <kurze Beschreibung>"
   ```
4. Den Branch auf GitHub hochladen:
   ```sh
   git push origin feature/<feature-name>
   ```

---

### **🔄 Den eigenen Branch aktuell halten**
1. Sicherstellen, dass man sich auf dem eigenen Feature-Branch befindet:
   ```sh
   git checkout feature/<feature-name>
   ```
2. Die neuesten Änderungen von `main` abrufen und mergen:
   ```sh
   git fetch origin
   git merge origin/main
   ```
   - Falls Konflikte auftreten, diese manuell lösen und anschließend committen.

---

### **📌 Einen Pull Request (PR) erstellen**
1. Auf GitHub einen PR vom eigenen Branch in `main` öffnen.
2. Einen klaren Titel und eine Beschreibung hinzufügen.
3. Eine Code-Review von einem Teammitglied anfordern.
4. Feedback umsetzen und notwendige Änderungen vornehmen.
5. Nach der Genehmigung den **PR mergen**.
6. Den Feature-Branch löschen (lokal & remote):
   ```sh
   git branch -d feature/<feature-name>
   git push origin --delete feature/<feature-name>
   ```

---

### **✅ Best Practices**
✔️ PRs **klein und fokussiert** halten (ein Feature oder Fix pro PR).<br>
✔️ **Aussagekräftige Commit-Nachrichten** schreiben.<br>
✔️ **Code-Reviews nutzen**, um Code-Qualität zu sichern.<br>
✔️ Vor dem Pushen **Tests ausführen** (falls vorhanden).<br>
✔️ Immer mit **`main` synchronisieren**, bevor eine neue Aufgabe begonnen wird.<br>

---

### **📌 Wichtige Git-Befehle auf einen Blick**
| Aktion | Befehl |
|--------|---------|
| Repository klonen | `git clone <REPO-URL>` |
| Neuen Branch erstellen | `git checkout -b feature/<name>` |
| Branch wechseln | `git checkout <branch>` |
| Änderungen zum Commit hinzufügen | `git add .` |
| Änderungen committen | `git commit -m "Nachricht"` |
| Branch pushen | `git push origin <branch>` |
| Neueste Updates abrufen | `git fetch origin` |
| `main` in Branch mergen | `git merge origin/main` |
| Branch löschen (lokal) | `git branch -d <branch>` |
| Branch löschen (remote) | `git push origin --delete <branch>` |

🚀 Viel Erfolg beim Coden!
