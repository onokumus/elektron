# Elektron Admin Dashboard

Elektron is a premium, minimalist admin dashboard designed with "Technical Prestige" in mind. Built with Vite, TypeScript, and Tailwind CSS, it offers a sophisticated interface that balances functionality with aesthetic excellence.

---

## ✨ Features

- **Technical Prestige:** Inspired by Linear and Vercel aesthetics - deep blacks, thin borders, and high-contrast typography.
- **Glassmorphism:** Elegant use of background blurs and translucent layers for depth.
- **Editorial Typography:** Lightweight fonts and wide tracking for an authoritative, premium feel.
- **Micro-animations:** Fluid transitions and subtle hover effects for a responsive user experience.
- **Ultra-Responsive:** Optimized for all screen sizes with a smart sidebar and layout system.

## 🚀 Getting Started

### Installation

Install Elektron via NPM:

```bash
npm install elektron
```

Or use it directly via CDN:

```html
<!-- UMD (Universal) -->
<script src="https://cdn.jsdelivr.net/npm/elektron/dist/elektron.umd.cjs"></script>

<!-- ESM (Modern) -->
<script type="module">
  import { initSidebar } from 'https://cdn.jsdelivr.net/npm/elektron/dist/elektron.js';
</script>
```

### Basic Usage

1. **Include Styles:**

   **For Bundlers (Vite, Webpack, etc.):**
   ```javascript
   import 'elektron/style';
   ```

   **Via HTML (Legacy/CDN):**
   ```html
   <link rel="stylesheet" href="node_modules/elektron/dist/elektron.css">
   ```

2. **Structure Your HTML:**
   ```html
   <div class="elk-wrap">
     <div id="sidebar-backdrop" class="elk-backdrop"></div>
     
     <aside id="sidebar" class="elk-sidebar">
       <!-- Sidebar Content -->
     </aside>

     <main class="elk-main">
       <header class="elk-main-header">
         <button id="sidebar-toggle">Toggle</button>
       </header>
       <div class="elk-main-content">
         <!-- Page Content -->
       </div>
     </main>
   </div>
   ```

3. **Initialize in JavaScript:**
   ```javascript
   import { initSidebar } from 'elektron';

   // Initialize sidebar functionality
   initSidebar({
     sidebarId: 'sidebar',
     toggleId: 'sidebar-toggle',
     backdropId: 'sidebar-backdrop'
   });
   ```

## 🗿 Design Philosophy: "Technical Prestige"

Elektron is not just a tool; it's an asset to be proud of. Our design principles are rooted in a synthesis of modern software excellence:

- **Space as Luxury:** We utilize generous macro-spacing (`p-8`) to give every data point its own stage, avoiding clutter and favoring focus.
- **Editorial Typography:** We use light weights and wide letter-spacing (`tracking-widest`) in headers to establish authority and a high-end feel.
- **Titanium & Slate Palette:** Moving away from vibrant colors, we embrace industrial luxury with Titianium Gray, Platinum, and Brushed Steel tones.
- **Materiality:** A subtle film grain texture is layered over the interface to break digital coldness and provide a tactile, physical feel.
- **Fluid Motion:** Interactions are heavy and fluid, using `cubic-bezier` transitions for a substantial and controlled experience.

---

## 🎨 Styling

Elektron uses Tailwind CSS 4. If you are using Tailwind, you can extend your theme with Elektron's premium color palette:

```css
@theme {
  --color-bg-main: #050505;
  --color-titanium: #e2e2e2;
  --color-platinum: #f5f5f5;
  --color-slate-metal: #1e1e20;
}
```

## 🛠 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📄 License

MIT © [ono](https://github.com/ono)
