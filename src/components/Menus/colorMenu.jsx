import './langMenu.css'
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io'; // For the dropdown arrow

export default function ColorMenu({ colors = [], onColorSelect }){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('All Colors'); 

  // Filter out any undefined or null values
  const validColors = colors.filter(color => color);

  const colorOptions = [
    ...validColors.map(color => ({ name: color }))
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectColor = (colorName) => {
    setSelectedColor(colorName);
    setIsOpen(false);
    onColorSelect(colorName);  // Call the passed function with the selected color
    // Here you would typically call a function to filter by color
  };

  return (
    <div className="language-dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <span>{selectedColor}</span>
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {colorOptions.map((color) => (
            <li key={color.name} onClick={() => selectColor(color.name)}>
              {color.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};