// imports
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './css/header.css'

const Header = () => {
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/listings'>Listings</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header;