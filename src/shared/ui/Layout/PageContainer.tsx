import React, { FC, ReactNode } from 'react';
import stylesImport from './Layout.module.css';

const styles = stylesImport ?? ({} as Record<string, string>);
const pageContainerClass = styles.pageContainer ?? 'page-container';

interface PageContainerProps {
  children: ReactNode;
  /** Дополнительный класс для контейнера */
  className?: string;
}

export const PageContainer: FC<PageContainerProps> = ({ children, className }) => (
  <div className={[pageContainerClass, className].filter(Boolean).join(' ')}>
    {children}
  </div>
);
