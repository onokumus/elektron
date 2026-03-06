# Elektron Admin Layout

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

#### NPM

```bash
npm install elektron
```

#### Deno

```ts
// Option 1: JSR (Recommended)
import { initSidebar } from "jsr:@onokumus/elektron"

// Option 2: ESM CDN
import { initSidebar } from "https://esm.sh/elektron"

// Option 3: Direct from GitHub
import { initSidebar } from "https://raw.githubusercontent.com/onokumus/elektron/master/mod.ts"

initSidebar()
```

#### CDN

Use it directly via CDN:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/elektron/lib/elektron.css">

<!-- UMD (Universal) -->
<script src="https://cdn.jsdelivr.net/npm/elektron/lib/elektron.umd.cjs"></script>

<!-- ESM (Modern) -->
<script type="module">
  import { initSidebar } from 'https://cdn.jsdelivr.net/npm/elektron/lib/elektron.js';
  initSidebar();
</script>
```
---

## Usage

### With npm

#### With precompiled CSS (no Tailwind required)

```js
import 'elektron/style.css'
```

Or in your CSS file:

```css
@import "elektron/style.css";
```

---

#### With Tailwind CSS v4

Do **not** import the precompiled CSS. Instead, point Tailwind at elektron's source so it scans and compiles the classes together with your own:

In your CSS file:

```css
@import "tailwindcss";
@source "../node_modules/elektron/src";
@import "elektron/source";

@theme {
  /* override elektron's theme variables if needed */
  --font-sans: "Your Font", sans-serif;
  --color-bg-main: #0f0f0f;
}
```

This way there are no duplicate styles — everything is compiled in a single pass.

---

### Via CDN (jsDelivr / unpkg)

No build step required. Add the precompiled CSS directly to your HTML:

#### jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/elektron/lib/elektron.css">
```

#### unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/elektron/lib/elektron.css">
```

For a specific version:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/elektron@0.8.3/lib/elektron.css">
<link rel="stylesheet" href="https://unpkg.com/elektron@0.8.3/lib/elektron.css">
```

---

## JavaScript

### With npm

```js
import { initSidebar } from 'elektron'

initSidebar()
```

With custom options:

```js
initSidebar({
  sidebarId: 'my-sidebar',
  toggleId: 'my-toggle',
  backdropId: 'my-backdrop'
})
```

### With Deno

```ts
// JSR (Recommended)
import { initSidebar } from "jsr:@onokumus/elektron"

// Or ESM CDN
import { initSidebar } from "https://esm.sh/elektron"

initSidebar()
```

With custom options:

```ts
initSidebar({
  sidebarId: 'my-sidebar',
  toggleId: 'my-toggle',
  backdropId: 'my-backdrop'
})
```

### Via CDN (jsDelivr / unpkg)

```html
<script type="module">
  import { initSidebar } from 'https://cdn.jsdelivr.net/npm/elektron/lib/elektron.js'
  initSidebar()
</script>
```

Or with unpkg:

```html
<script type="module">
  import { initSidebar } from 'https://unpkg.com/elektron/lib/elektron.js'
  initSidebar()
</script>
```

### `initSidebar(options?)`

| Option | Type | Default | Description |
|---|---|---|---|
| `sidebarId` | `string` | `"sidebar"` | `id` of the sidebar element |
| `toggleId` | `string` | `"sidebar-toggle"` | `id` of the button that opens/closes the sidebar |
| `backdropId` | `string` | `"sidebar-backdrop"` | `id` of the backdrop overlay element |

The function returns a cleanup function that removes all event listeners — useful for SPA frameworks:

```js
const cleanup = initSidebar()

// later, when component is destroyed
cleanup()
```

---

## CSS Variables (Theme)

You can override elektron's default theme by redefining these variables:

```css
@theme {
  --color-bg-main: #050505;
  --color-bg-card: #0a0a0a;
  --color-brand-primary: #ffffff;
  --color-brand-secondary: #71717a;
  --color-brand-muted: #3f3f46;
  --color-titanium: #e2e2e2;
  --color-platinum: #f5f5f5;
  --color-slate-metal: #1e1e20;
  --color-border-subtle: rgba(255, 255, 255, 0.03);
  --color-border-active: rgba(255, 255, 255, 0.08);
}
```

CDN users can override via plain CSS:

```css
:root {
  --color-bg-main: #0f0f0f;
  --color-brand-primary: #e0e0e0;
}
```

---

## HTML Structure

```html
<div class="elk-app">
  <div class="elk-wrap">
    <div class="elk-grain-overlay"></div>
    <div class="elk-backdrop"></div>

    <aside class="elk-sidebar">
      <header>
        <div class="elk-logo">
          <img src="logo.svg" alt="Logo" />
        </div>
        <span class="elk-title">My App</span>
      </header>
    </aside>

    <main class="elk-main">
      <header class="elk-main-header">
        <!-- top bar -->
      </header>
      <div class="elk-main-content">
        <!-- page content -->
      </div>
    </main>
  </div>
</div>
```

---

## 🗿 Design Philosophy: "Technical Prestige"

Elektron is not just a tool; it's an asset to be proud of. Our design principles are rooted in a synthesis of modern software excellence:

- **Space as Luxury:** We utilize generous macro-spacing (`p-8`) to give every data point its own stage, avoiding clutter and favoring focus.
- **Editorial Typography:** We use light weights and wide letter-spacing (`tracking-widest`) in headers to establish authority and a high-end feel.
- **Titanium & Slate Palette:** Moving away from vibrant colors, we embrace industrial luxury with Titianium Gray, Platinum, and Brushed Steel tones.
- **Materiality:** A subtle film grain texture is layered over the interface to break digital coldness and provide a tactile, physical feel.
- **Fluid Motion:** Interactions are heavy and fluid, using `cubic-bezier` transitions for a substantial and controlled experience.

---

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

MIT © [onokumus](https://github.com/onokumus)