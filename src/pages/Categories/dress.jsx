import React, { useState } from 'react';
import { product } from './../../data'
import NavBar from './../../components/NavBar/navBar'
import Header from '../../components/Product Header/header'
import Products from '../../components/Products/productList'

export default function Dress() {
  const [changedColor, setChangedColor] = useState('All Colors');

  const handleColorChange = (color) => {
    setChangedColor(color);
  }

  const prod = product.filter(item => 
    item.type === "dress" && (changedColor === 'All Colors' || item.color === changedColor)
  );

  const allColors = ['All Colors', ...new Set(product.filter(item => item.type === "dress").map(item => item.color))];

  return (
    <div>
      <NavBar />
      <Header 
        title={"DRESSES"} 
        clr={allColors} 
        onColorSelect={handleColorChange}
      />
      <Products product={prod} />
    </div>
  )
}