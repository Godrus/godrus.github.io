/**
 * Тема оформления: светлая/тёмная.
 * Синхронизация с document.documentElement[data-theme] и localStorage по аналогии со старым main.js.
 */

export type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

function getRoot(): HTMLElement {
  return document.documentElement;
}

/** Применить тему к документу (переменные CSS уже заданы в style.css по [data-theme="dark"]). */
export function applyTheme(theme: Theme): void {
  getRoot().setAttribute('data-theme', theme);
}

/** Прочитать сохранённую тему из localStorage. */
export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return null;
}

/** Установить тему и сохранить в localStorage. */
export function setTheme(theme: Theme): void {
  applyTheme(theme);
  localStorage.setItem(THEME_KEY, theme);
}

/** Инициализация при загрузке: применить сохранённую тему до первого рендера (избежать мелькания). */
export function initTheme(): void {
  const saved = getStoredTheme();
  if (saved) {
    applyTheme(saved);
  }
}
