// imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import './css/header.css'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                <li><NavLink to='/portfolio' activeClassName='active'>Portfolio</NavLink></li>
                <li><NavLink to='/listings' activeClassName='active'>Listings</NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Header;