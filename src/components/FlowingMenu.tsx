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
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (activeItem === index) {
      // If clicking the same item, start collapse animation
      setActiveItem(null);
      // Wait for collapse animation to finish before removing content
      setTimeout(() => {
        setExpandedItem(null);
      }, 500); // Match this with the CSS transition duration
    } else {
      // If clicking a different item, immediately show new content
      setActiveItem(index);
      setExpandedItem(index);
    }
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
            {expandedItem === idx && (
              <div className={`menu__content ${activeItem === idx ? 'expanded' : ''}`}>
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
