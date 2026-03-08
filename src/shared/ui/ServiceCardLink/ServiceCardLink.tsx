import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/shared/ui/Card';
import type { MenuItem } from '@/shared/config/site';
import stylesImport from './ServiceCardLink.module.css';

const styles = stylesImport ?? ({} as Record<string, string>);
const linkClass = styles.link ?? 'service-card-link';

interface ServiceCardLinkProps {
  item: MenuItem;
}

/** Карточка-ссылка на сервис: внутренняя (Link) или внешняя (a). Один компонент — DRY. */
export const ServiceCardLink: FC<ServiceCardLinkProps> = ({ item }) => {
  const card = (
    <Card
      id={item.path}
      title={item.title}
      text={item.title}
      iconSrc={item.icon}
    />
  );

  if (item.external) {
    return (
      <a href={item.path} className={linkClass} role="listitem">
        {card}
      </a>
    );
  }

  return (
    <Link to={item.path} className={linkClass} role="listitem">
      {card}
    </Link>
  );
};
