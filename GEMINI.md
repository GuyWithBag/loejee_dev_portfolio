# Loejee Miguel L. Dulaugon - Dev Portfolio

A modern, responsive Bento-style portfolio built with React and Tailwind CSS v4.

## 🚀 Tech Stack
- **Framework:** React 19
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite 6
- **Language:** TypeScript

## 🎨 Design Features
- **Theme:** Primary Purple (#9333ea) and Accent Blue (#2563eb) with dark/light mode support.
- **Layout:** Responsive CSS Grid "Bento" layout with custom `2.5rem` corner radii.
- **Interactivity:**
  - Dynamic dark mode toggle.
  - Magnetic hover states on bento cards.
  - Custom bouncy animations and glassmorphism effects.
  - Keyboard-driven navigation (WASD/Arrows).

## 📁 Project Structure
- `src/App.tsx`: Main bento layout, navigation logic, and tile components.
- `src/components/DesignSystem.tsx`: Comprehensive visual identity and component guide.
- `src/index.css`: Tailwind v4 initialization, custom keyframes, and global styles.
- `src/data/`: Structured content for projects, skills, and bio.

## 🛠 Maintenance & Updates

### 1. Updating Content
To add or modify projects or skills, edit the files in `src/data/`. The UI will automatically reflect these changes.

### 2. Design System
The visual language is documented in the "Design System" view within the app. It covers colors, typography, grid logic, and interactive components.

### 3. Layout Grid
The grid is configured for 4 columns on desktop (`md:grid-cols-4`). Use `md:col-span-X` and `md:row-span-Y` on bento cards to control their size and hierarchy.

---
*Built with ❤️ using Gemini CLI.*
