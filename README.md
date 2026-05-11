# Hack2Skill Assignment: Frontend Hackathon Landing Page

This repository contains the frontend assignment for the Hack2Skill hackathon landing page. The objective was to build a highly interactive, responsive, and visually premium landing page **strictly using Vanilla web technologies** (HTML5, CSS3, and JavaScript) without relying on any external frameworks, libraries, or build tools.

## 🚀 Tech Stack
- **Semantic HTML5:** Structured, accessible, and SEO-friendly markup.
- **CSS3:** Custom properties (variables) for design tokens, Flexbox/Grid layouts, glassmorphism effects, and pure CSS `@keyframes` animations (no external animation libraries used).
- **Vanilla JavaScript (ES6+):** For DOM manipulation, mobile navbar toggling, custom accordion logic, horizontal drag-to-scroll, and scroll-triggered reveals using `IntersectionObserver`.

## 📁 File Structure

```text
frontend-hackathon-page/
├── index.html       # The main entry point containing all semantic markup
├── styles.css       # Complete global stylesheet, design tokens, and animations
├── script.js        # All custom interactive logic and dynamic rendering
├── favicon.svg      # Tab icon
└── assets/          # Directory containing all optimized images and SVGs
    ├── challenges/  # Images for the challenge accordion
    ├── hackathon/   # Additional hackathon graphics
    └── ...          # Hero background, character images, logos, etc.
```

## ✨ Key Features
1. **Zero Dependencies:** No React, Vite, or Tailwind CSS. Completely native code.
2. **Dynamic Rendering:** Content like Challenges, Timelines, and FAQs are rendered dynamically via JavaScript arrays to keep the HTML clean and maintainable.
3. **Scroll Animations:** Native `IntersectionObserver` fades and slides elements into view as the user scrolls down the page.
4. **Responsive Layouts:** A mobile-first approach ensuring perfect scaling across all devices, with dedicated mobile and desktop views for complex elements like the Timeline and Hero section.
5. **Interactive UI:**
   - Smooth horizontal drag-scrolling for the desktop timeline.
   - Click-to-expand accordion challenges.
   - Floating astronaut and orbital ring keyframe animations.

## ⚙️ How to Run
Since this is a zero-dependency vanilla project, there is no setup required:
1. Clone the repository.
2. Open `index.html` directly in any modern web browser.
3. Alternatively, use VS Code's **Live Server** extension for hot-reloading during development.
