# Victoria & Salem — Wedding Program Website

A beautiful React wedding program website built with the Purple · Lilac · Grey color palette from the invitation card.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation & Running

```bash
# 1. Navigate into the project folder
cd WeddingProgram

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open your browser at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

This generates a `dist/` folder you can deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

---

## 📁 Project Structure

```
WeddingProgram/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component + tab switcher
    ├── styles/
    │   └── global.css        # Design tokens & shared styles
    ├── data/
    │   └── programData.js    # All program items (edit here!)
    └── components/
        ├── Hero.jsx / .css        # Names, dates header
        ├── FamilyCard.jsx / .css  # Family introductions
        ├── ProgramSection.jsx / .css  # Order of service blocks
        └── Closing.jsx / .css     # Footer/RSVP section
```

## ✏️ Customizing Program Items

Edit `src/data/programData.js` to add, remove or reorder items for both the Traditional and Church wedding programs.

## 🎨 Colors

| Name  | Hex       |
|-------|-----------|
| Plum  | `#3d0a3f` |
| Magenta | `#c0369c` |
| Lilac | `#d4a8e0` |
| Grey  | `#8a8a9a` |

Change them in `src/styles/global.css` under `:root`.
