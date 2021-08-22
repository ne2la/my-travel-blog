import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import './Styles/NavBar.css'

const NavBar = () => {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Explorer Ne2la
                <div className="homeIcon">
                <i class="far fa-compass"/>
                </div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
                </li>
                <li className='nav-item'>
                <Link
                    to='/travel-list'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    
                    Destinations
                </Link>
                </li>
                <li className='nav-item'>
                <Link
                    to='/about'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    About Me
                </Link>
                </li>

                <li className='nav-item'>
                    <SearchBar/>
                </li>

            </ul>
            </div>
        </nav>
        </>
    );
}

export default NavBar
