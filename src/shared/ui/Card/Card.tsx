import React from "react";
import styles from "./Card.module.css";

interface ICardProps {
  id: string;
  title: string;
  text?: string;
  svgPath: string;
  viewBox?: string;
  onClick?: () => void;
  className?: string;
}

// Защита от undefined при неработающих CSS-модулях (fallback на обычные имена классов)
const s = styles ?? ({} as Record<string, string>);
const cn = (name: string, fallback: string) => s[name] ?? fallback;

export const Card: React.FC<ICardProps> = ({ id, title, text = '', svgPath, viewBox = '0 0 16 16', onClick, className = '' }) => {
  return (
    <div className={cn('card', 'card')} onClick={onClick}>
      {svgPath && (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" className="neo-svg" viewBox={viewBox}>
          <path d={svgPath} />
        </svg>
      )}
      <div className={cn('cardBody', 'card-body')}>
        <h6 className={cn('cardTitle', 'card-title')}>{title}</h6>
        {text && <p className={cn('cardText', 'card-text')}>{text}</p>}
      </div>
    </div>
  );
};