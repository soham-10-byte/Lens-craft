# 🎨 Lens Craft

Lens Craft is a premium, high-fidelity visual gallery application built on **React**, **Vite**, and **Tailwind CSS**. It connects to the public **Lorem Picsum API** to fetch and display high-resolution creative assets inside a stunning, modern dark-themed grid with advanced pagination features.

---

## ✨ Features

- **Dynamic API Fetching:** Fully integrated with the Lorem Picsum photos list endpoint using **Axios**.
- **Premium Glassmorphic Design:** Sleek dark-mode interface powered by custom CSS and Tailwind CSS classes, featuring deep backdrop blurs, subtle borders, and smooth hover scales.
- **Advanced Pagination Panel:** Features interactive page pill selectors (1–10) and responsive circular `Prev` & `Next` controls that adapt to navigation limits.
- **Fluid Layout & Animations:** A fully responsive CSS Grid layout that displays cards uniformly across devices, with micro-animations like card vertical translation (`hover:-translate-y-1`) and image-zoom effects.
- **Custom Google Typography:** Custom import and setup for the modern **Plus Jakarta Sans** typeface.

---

## 🛠️ Tech Stack

- **Core Framework:** React 18+ (utilizing `useState` & `useEffect` hooks)
- **Styling Engine:** Tailwind CSS v4 (native nesting, modern CSS color-mix, variables)
- **HTTP Client:** Axios
- **Build Tooling:** Vite (ultra-fast Hot Module Replacement)
- **Fonts:** Google Fonts (*Plus Jakarta Sans*)

---

## 📂 Project Structure

```text
gallery-project/
├── index.html              # Entry HTML with custom font preconnects
├── package.json            # Configuration and script dependencies
├── vite.config.js          # Vite custom build settings
├── public/                 # Favicon and static assets
└── src/
    ├── main.jsx            # Application entry point
    ├── App.jsx             # Main logic, state container, and layout grid
    ├── index.css           # Global styles and tailwind imports
    ├── components/
    │   └── Card.jsx        # Reusable photographer image-card component
    └── assets/             # Brand logos and styling SVGs
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v16.x or newer) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/soham-10-byte/Lens-craft.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd Lens-craft
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local address (typically `http://localhost:5173`).

---

## 📦 Production Build

To generate a fully optimized build of the project ready for hosting:

```bash
npm run build
```

This compiles your code into the `dist/` directory, minifying assets and Javascript for optimal performance.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
