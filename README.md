# godrus.github.io

1. Init
npm init -y

2. GH Pages

3. React + Typescipt + SCSS
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom

---

## Деплой на GitHub Pages

Сайт отдаётся **с ветки `gh-pages`** (не с `main`).

**Настройка:** в репозитории **Settings → Pages → Build and deployment**:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / **(root)**

При пуше в `main` запускается workflow **Deploy to GitHub Pages**: собирается этот сайт + раздел GRStream из репозитория [Godrus/GRStream](https://github.com/Godrus/GRStream), результат пушится в ветку `gh-pages`.
