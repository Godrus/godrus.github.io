import { Card } from "@/shared/ui/Card";
import React from "react";
import { Link } from "react-router-dom";

interface IMenuItem {
  title: string;
  path: string;
  external?: boolean;
}

export const HomePage: React.FC = () => {
  const menuItems: IMenuItem[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
    { title: "GRStream", path: "/GRStream/", external: true },
  ];

  return (
    <div className="HomePage">
      <div className="menu">
        {menuItems.map((item, index) => {
          const card = (
            <Card
              key={index}
              id={item.path}
              title={item.title}
              text={item.title}
              svgPath=""
            />
          );
          return item.external ? (
            <a key={index} href={item.path} style={{ textDecoration: "none" }}>
              {card}
            </a>
          ) : (
            <Link key={index} to={item.path} style={{ textDecoration: "none" }}>
              {card}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
