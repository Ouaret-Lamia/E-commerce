import './langMenu.css';
import React, { useState } from 'react';

export default function SizeMenu() {
  const [selectedSize, setSelectedSize] = useState('All Sizes');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSize(selectedOption);
    // Here you would typically call a function to handle the selected size
  };

  return (
    <div className="size-dropdown">
      <select
        value={selectedSize}
        onChange={handleChange}
        className="dropdown-toggle"
      >
        <option value="All Sizes">All Sizes</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}
