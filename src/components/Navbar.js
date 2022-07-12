import React from 'react';
import logo from '../images/logo.svg'
import navImg from '../images/icon-cart.svg'
import profileIcon from '../images/image-avatar.png'

const Navbar = () => {
    return(
        <div className='navbar'>
            
                <div className='logo-nav-list-container'>
                    <div className='logo-container'>
                        <img className='logo' src={logo}/>
                    </div>
                    
                    <ul className='nav-list'>
                        <li className='list-element'><a href='#' className='nav-menu-a'>Collections</a></li>
                        <li className='list-element'><a href='#'className='nav-menu-a'>Men</a></li>
                        <li className='list-element'><a href='#'className='nav-menu-a'>Women</a></li>
                        <li className='list-element'><a href='#'className='nav-menu-a'>About</a></li>
                        <li className='list-element'><a href='#'className='nav-menu-a'>Contact</a></li>
                    </ul>
                </div>
                <div className='cart-profile-img'>
                    <button className='shopping-cart-btn'> 
                    <img className='shopping-cart-icon' src={navImg}/>
                    </button>
                    <button className='profile-btn'>
                        <img className='profile-icon' src={profileIcon}/>
                    </button>
                </div>
            
        </div>
    )
}

export default Navbar;