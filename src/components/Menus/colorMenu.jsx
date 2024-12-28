import './langMenu.css';
import React, { useState } from 'react';

export default function ColorMenu({ colors = [], onColorSelect }) {
  const [selectedColor, setSelectedColor] = useState('All Colors');

  // Filter out any undefined or null values
  const validColors = colors.filter((color) => color);

  const handleChange = (event) => {
    const colorName = event.target.value;
    setSelectedColor(colorName);
    onColorSelect(colorName); // Call the passed function with the selected color
  };

  return (
    <div className="language-dropdown">
      <select
        value={selectedColor}
        onChange={handleChange}
        className="dropdown-toggle"
      >
        {/* <option value="All Colors">All Colors</option> */}
        {validColors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}
