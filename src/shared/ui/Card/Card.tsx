import React from "react";
import css from "./Card.module.css";

interface ICardProps {
  id: string;
  title: string;
  text?: string;
  svgPath: string;
  viewBox?: string;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<ICardProps> = ({ id, title, text = '', svgPath, viewBox = '0 0 16 16', onClick, className = '' }) => {
  console.log('css', css);
  return (
    <div className={css.card} onClick={onClick}>
      {svgPath && (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" className="neo-svg" viewBox={viewBox}>
          <path d={svgPath} />
        </svg>
      )}
      <div className={css?.cardBody || ''}>
        <h6 className={css?.cardTitle || ''}>{title}</h6>
        {text && (<p className={css?.cardText || ''}>{text}</p>)}
      </div>
    </div>
  );
};