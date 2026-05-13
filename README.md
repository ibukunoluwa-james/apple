# Apple iPhone 15 Pro Website Clone

A recreation of Apple's iPhone 15 Pro marketing page, built with React and Vite. The site features scroll-triggered animations, a video carousel synced to a progress indicator, and an interactive 3D iPhone model the user can rotate and view in different colors and sizes.

## Tech Stack

- **React 18** + **Vite** — UI and dev tooling
- **GSAP** (`gsap`, `@gsap/react`) — scroll and timeline animations
- **Three.js** with **@react-three/fiber** and **@react-three/drei** — 3D iPhone model rendering
- **Tailwind CSS** — styling

## Sections

- `Navbar` — Apple-style top navigation
- `Hero` — animated hero with the iPhone 15 Pro headline
- `Highlights` — video carousel walking through feature highlights
- `Model` — interactive 3D iPhone viewer (color and size selection)
- `Features` — scroll-driven feature showcase
- `Chip` — A17 Pro chip section
- `Footer`

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints to the terminal.

## Scripts

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — produce a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Credits

Built as a learning project following the JavaScript Mastery Apple website tutorial. All Apple trademarks, product imagery, and marketing copy belong to Apple Inc. and are used here for educational purposes only.
