import React, { useState } from "react";
import "./FlowingMenu.css";

interface MenuItemProps {
  link: string;
  text: string;
  content?: React.ReactNode;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <div key={idx} className="menu-item-container">
            <div 
              className={`menu__item ${activeItem === idx ? 'active' : ''}`}
              onClick={() => handleItemClick(idx)}
            >
              <a 
                className="menu__item-link" 
                href={item.link}
                onClick={(e) => e.preventDefault()}
              >
                {item.text}
              </a>
            </div>
            {activeItem === idx && (
              <div className="menu__content">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default FlowingMenu;
