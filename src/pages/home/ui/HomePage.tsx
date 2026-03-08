import React, { FC, useMemo } from 'react';
import { MainLayout, PageContainer } from '@/shared/ui/Layout';
import { ServiceCardLink } from '@/shared/ui/ServiceCardLink';
import { MENU_ITEMS } from '@/shared/config/site';
import stylesImport from './HomePage.module.css';

// Защита от undefined при некорректной загрузке CSS-модуля (webpack cache и т.д.)
const styles = stylesImport ?? ({} as Record<string, string>);
const rootClass = styles.root ?? 'home-page-root';
const gridClass = styles.grid ?? 'home-page-grid';

export const HomePage: FC = () => {
  const items = useMemo(() => [...MENU_ITEMS], []);

  return (
    <MainLayout>
      <PageContainer>
        <section
          className={rootClass}
          aria-label="Список сервисов"
        >
          <div className={gridClass} role="list">
            {items.map((item) => (
              <ServiceCardLink key={item.path} item={item} />
            ))}
          </div>
        </section>
      </PageContainer>
    </MainLayout>
  );
};
