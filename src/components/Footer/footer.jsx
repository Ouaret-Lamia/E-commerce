import './footer.css'
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='logoInfo'>
                <h1>FITTING</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores illo maiores rerum dolorem dolor amet voluptatibus enim officia alias. Dolorem ducimus expedita ipsam sed error! Minima cumque quis pariatur facere?</p>
                <div className="social-icons">
                    <div class="container">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <button id='facebook'>
                                <FaFacebook className='socials'/>
                            </button>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <button id='twitter'>
                                <FaTwitter className='socials'/>
                            </button>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <button id='instagram'>
                                <FaInstagram className='socials'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-nav">
                <h4>Useful Links</h4>
                <div className="footerLinks">
                    <ul>
                        <li>Home</li>
                        <li>Shirt style</li>
                        <li>Loungewear</li>
                        <li>Jackets</li>
                    </ul>
                    <ul>
                        <li>Dresses</li>
                        <li>Jeans</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
            <div className="contact-info">
                <h4>Contact</h4>
                <div className="footInfo">
                    <MdLocationOn/>
                    <p>blablabalbal</p>
                </div>
                <div className="footInfo">
                    <MdPhone/>
                    <p>-----------------</p>
                </div>
                <div className="footInfo">
                    <MdEmail/>
                    <p>-----------------</p>
                </div>                
            </div>
          {/* <div className="copyright">
            <p>&copy; {new Date().getFullYear()} E-Learning Site. All rights reserved.</p>
          </div> */}
        </div>
    );
  };
  
  export default Footer;