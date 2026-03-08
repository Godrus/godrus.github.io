import { useCallback, useEffect, useState } from 'react';
import type { Theme } from './theme';
import { applyTheme, getStoredTheme, setTheme as persistTheme } from './theme';

/** Текущая тема и переключатель. Синхронизирует состояние с document и localStorage. */
export function useTheme(): { theme: Theme; setTheme: (next: Theme) => void; toggleTheme: () => void } {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme() ?? 'light';
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    persistTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return { theme, setTheme, toggleTheme };
}
