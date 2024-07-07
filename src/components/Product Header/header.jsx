import React, { useState } from 'react';
import './header.css';
import Colors from '../Menus/colorMenu';
import Sizes from '../Menus/sizeMenu';
import New from '../Menus/newMenu';

export default function Header({ title, clr = [], onColorSelect }) {
  return (
    <div>
        <h1 className='categTitle'>{title}</h1>
        <div className="filters">
          <div className="prodFilter">
            <h3>Filter products: </h3>
            <Colors colors={clr} onColorSelect={onColorSelect} />
            <Sizes/>
          </div>
          <div className="prodFilter">
            <h3>Filter products: </h3>
            <New/>
          </div>
        </div>
    </div>
  )
}
