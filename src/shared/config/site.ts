/**
 * Конфигурация сайта и навигации.
 * Единственный источник правды для пунктов меню и метаданных.
 */

export const SITE = {
  name: 'Сервисы',
  /** Корень для внутренней навигации (React Router) */
  basePath: '/',
} as const;

export interface MenuItem {
  title: string;
  path: string;
  /** Внешняя ссылка (другой домен или приложение) — рендерим <a>, иначе <Link> */
  external?: boolean;
  /** Путь к иконке (файл в public), например /assets/svg/diagram-2.svg */
  icon?: string;
}

export const MENU_ITEMS: readonly MenuItem[] = [
  { title: 'GRStream', path: '/GRStream/', external: true, icon: '/assets/svg/diagram-2.svg' },
];
