import React, { FC } from 'react';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import stylesImport from './Layout.module.css';

const styles = stylesImport ?? ({} as Record<string, string>);
const navbarClass = styles.navbar ?? 'navbar';
const navbarBrandClass = styles.navbarBrand ?? 'navbar-brand';
const navbarEndClass = styles.navbarEnd ?? 'navbar-end';

interface NavbarProps {
  brand: string;
  /** URL логотипа/бренда (внутренний путь или внешний) */
  brandHref?: string;
}

export const Navbar: FC<NavbarProps> = ({ brand, brandHref = '/' }) => (
  <nav className={navbarClass} aria-label="Главное меню">
    <a className={navbarBrandClass} href={brandHref}>
      {brand}
    </a>
    <div className={navbarEndClass}>
      <ThemeToggle />
    </div>
  </nav>
);
