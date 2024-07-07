import React, { useState } from 'react';
import { product } from './../../data'
import NavBar from './../../components/NavBar/navBar'
import Header from '../../components/Product Header/header'
import Products from '../../components/Products/productList'

export default function Jacket() {
  const [changedColor, setChangedColor] = useState('All Colors');

  const handleColorChange = (color) => {
    setChangedColor(color);
  }

  const prod = product.filter(item => 
    item.type === "jacket" && (changedColor === 'All Colors' || item.color === changedColor)
  );
  const allColors = ['All Colors', ...new Set(product.filter(item => item.type === "jacket").map(item => item.color))];

  return (
    <div>
      <NavBar />
      <Header 
        title={"JACKETS"} 
        clr={allColors} 
        onColorSelect={handleColorChange}
      />
      <Products product={prod} />
    </div>
  )
}