# Loejee Miguel L. Dulaugon - Dev Portfolio

A modern, responsive Bento-style portfolio built with React and Tailwind CSS v4.

## 🚀 Tech Stack
- **Framework:** React 19
- **Styling:** Tailwind CSS v4 (with custom `@theme` configuration)
- **Build Tool:** Vite 8
- **Language:** TypeScript

## 🎨 Design Features
- **Theme:** Pastel Green (Primary) with dark/light mode support.
- **Layout:** Responsive CSS Grid "Bento" layout.
- **Interactivity:**
  - Dynamic dark mode toggle.
  - Smooth hover states on bento cards.
  - Animated background gradients.

## 📁 Project Structure
- `src/App.tsx`: Main bento layout and tile components.
- `src/index.css`: Tailwind v4 initialization and custom theme variables.
- `src/assets/hero.png`: Profile image used in the hero tile.

## 🛠 Maintenance & Updates

### 1. Updating Projects
To add or modify projects, edit the "Project" tiles in `src/App.tsx`. You can wrap any content in the `<BentoCard>` component.

### 2. Customizing Colors
Tailwind v4 theme variables are defined in `src/index.css` under the `@theme` block:
```css
@theme {
  --color-pastel-green-50: #f0fdf4;
  /* ... other shades ... */
}
```

### 3. Adding New Tiles
The grid is configured for 4 columns on desktop (`md:grid-cols-4`). Use `md:col-span-X` and `md:row-span-Y` on `<BentoCard>` to control its size.

---
*Built with ❤️ using Gemini CLI.*
