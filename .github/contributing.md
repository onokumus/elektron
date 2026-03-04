# Contributing to Elektron

First and foremost, thank you! We appreciate your interest in contributing to Elektron. Your time is valuable, and your contributions help make this project a premium experience for everyone.

---

## 🗿 Our Philosophy: Technical Prestige

When contributing to Elektron, please keep our core design principles in mind. We aim for a "Technical Prestige" aesthetic:
- **Minimalism & Depth:** Use glassmorphism and subtle borders.
- **Precision:** Pay attention to spacing (macro-spacing like `p-8`) and typography.
- **Industrial Luxury:** Favor our Titanium and Slate color palette.

For more details, please see our [Design Principles](GEMINI.md).

---

## 🛠 Development Workflow

### Prerequisites
- Node.js (Latest LTS recommended)
- NPM

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development
Run the development server to see changes in real-time:
```bash
npm run dev
```

### Build Processes
Elektron supports two build modes:
- **App Mode (Demo):** Generates the `index.html` and assets for GitHub Pages.
  ```bash
  npm run build
  ```
- **Library Mode (NPM):** Generates the UMD and ESM bundles for the package.
  ```bash
  npm run build:lib
  ```

---

## 🤝 How to Contribute

### Reporting Bugs
- Check if the issue has already been reported.
- Be descriptive: include version, environment, and clear steps to reproduce.
- Provide error logs or screenshots if applicable.

### Pull Requests
1. **Branching:** Create a descriptive branch name (e.g., `feat/new-sidebar-effect` or `fix/toggle-issue`).
2. **Quality:** Ensure your code follows TypeScript best practices and uses Tailwind CSS 4 variables.
3. **Commit Messages:** Use clear, concise commit messages.
4. **Testing:** Verify your changes in both `dev` mode and after running `build`.

---

## 📄 License

By contributing, you agree that your contributions will be licensed under its [MIT License](LICENSE).
