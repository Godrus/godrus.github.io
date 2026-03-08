import React, { FC, ReactNode } from 'react';
import { Navbar } from './Navbar';
import stylesImport from './Layout.module.css';
import { SITE } from '@/shared/config/site';

const styles = stylesImport ?? ({} as Record<string, string>);
const mainLayoutClass = styles.mainLayout ?? 'main-layout';
const mainClass = styles.main ?? 'main';

interface MainLayoutProps {
  children: ReactNode;
  /** Текст в навбаре; по умолчанию SITE.name */
  navbarBrand?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  navbarBrand = SITE.name,
}) => (
  <div className={mainLayoutClass}>
    <Navbar brand={navbarBrand} brandHref={SITE.basePath} />
    <main className={mainClass}>
      {children}
    </main>
  </div>
);
