import React from "react";
import styles from "./Card.module.css";

interface ICardProps {
  id: string;
  title: string;
  text?: string;
  /** URL иконки (файл в public), например /assets/svg/diagram-2.svg */
  iconSrc?: string;
  onClick?: () => void;
  className?: string;
}

// Защита от undefined при неработающих CSS-модулях (fallback на обычные имена классов)
const s = styles ?? ({} as Record<string, string>);
const cn = (name: string, fallback: string) => s[name] ?? fallback;

export const Card: React.FC<ICardProps> = ({
  id,
  title,
  text = '',
  iconSrc,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={[cn('card', 'card'), className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {iconSrc && (
        <span
          className={cn('cardIcon', 'card-icon')}
          style={{
            maskImage: `url(${iconSrc})`,
            WebkitMaskImage: `url(${iconSrc})`,
          }}
          role="img"
          aria-hidden
        />
      )}
      <div className={cn('cardBody', 'card-body')}>
        <h6 className={cn('cardTitle', 'card-title')}>{title}</h6>
        {text && <p className={cn('cardText', 'card-text')}>{text}</p>}
      </div>
    </div>
  );
};