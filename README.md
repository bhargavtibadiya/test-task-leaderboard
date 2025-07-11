# 🏆 Modern Leaderboard Component

A beautiful, responsive, and highly customizable leaderboard UI built with React, TypeScript, Tailwind CSS, and Framer Motion. Perfect for hackathons, competitions, SaaS dashboards, or any app that needs a premium leaderboard experience.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/        # App header with theme toggle
│   ├── Footer/        # App footer with social links
│   └── Leaderboard/   # Main leaderboard component
├── data/
│   └── sampleUsers.ts # Example user data
├── hooks/
│   └── useTheme.ts    # Custom hook for dark/light mode
├── types/
│   └── leaderboard.ts # TypeScript types
├── App.tsx            # App layout
├── main.tsx           # Entry point
├── index.css          # Tailwind base
```

---

## ⚡ Prerequisites

- **Node.js** v18 or newer
- **npm** v9 or newer (or `yarn`/`pnpm`)
- Modern browser (Chrome, Firefox, Edge, Safari)

---

## 🚀 Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview production build**
   ```bash
   npm run preview
   ```

---

## ✨ Features

- **Top 10 Leaderboard** with single-column grid
- **Podium Highlighting** for top 3 users
- **Dark/Light Mode** with system preference & toggle
- **Responsive**: Mobile to desktop
- **Framer Motion Animations**
- **Glassmorphism & Gradients**
- **Accessible & Keyboard-friendly**
- **Easy Customization** (colors, layout, data)

### Details
- **Header**: Branding + theme toggle
- **Footer**: Social links, credits
- **Leaderboard**: Animated, accessible, customizable
- **TypeScript**: Full type safety
- **CSS Modules**: No style conflicts
- **ARIA & Semantic HTML**: Screen reader support
- **Performance**: Lazy image loading, hardware-accelerated animations

---

## 🛠 Usage Example

```tsx
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Leaderboard } from './components/Leaderboard';
import { useTheme } from './hooks/useTheme';
import { sampleUsers } from './data/sampleUsers';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Leaderboard 
          users={sampleUsers}
          title="🏆 Global Championship"
          maxUsers={10}
        />
      </main>
      <Footer />
    </div>
  );
}
```

---

## 🧩 Data & Types

```typescript
// src/types/leaderboard.ts
export interface User {
  id: string;
  name: string;
  score: number;
  avatarUrl?: string;
}

export interface LeaderboardProps {
  users: User[];
  title?: string;
  maxUsers?: number;
}
```

---

## 🎨 Customization

- **Colors & Gradients**: Edit CSS variables in `Leaderboard.module.css`:
  ```css
  :root {
    --accent-color: #your-color;
    --gradient-primary: linear-gradient(135deg, #color1, #color2);
  }
  ```
- **Animation Timing**: Change `itemVariants` in `Leaderboard.tsx` for speed/easing.
- **Layout**: Tweak grid/flex in CSS modules for custom layouts.
- **Theme**: Uses CSS custom properties and a custom hook for dark/light mode.

---

## 🛡️ Accessibility & Performance

- **Semantic HTML** and ARIA labels
- **Keyboard navigation** for all interactive elements
- **WCAG-compliant color contrast**
- **Lazy loading** for avatars
- **Efficient rendering** with React and Framer Motion

---

## 🧑‍💻 Development & Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview build
- `npm run lint` — Lint code with ESLint

---

## 🙏 Credits

- **Design**: Modern glassmorphism & UI trends
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts Outfit](https://fonts.google.com/specimen/Outfit)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 📄 License

MIT License — Free for personal and commercial use. 