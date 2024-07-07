import React from 'react';
import './navBar.css'
import { MdSearch } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Languages from '../Menus/langMenu'

function navBar(){
    return(
        <div className='navBarDiv'>
            <div className="search">
                <Languages/>
                <label htmlFor="search">
                    <input type="text" placeholder='Search'/>
                    <MdSearch/>
                </label>
            </div>
            <div className="logo">
                <h1>FITTING</h1>
            </div>
            <div className="nav">
                <div id="regis">REGISTER</div>
                <div id="signIn">SIGN IN</div>
                <AiOutlineShoppingCart className='navCart'/>
            </div>
        </div>
    );
}

export default navBar;