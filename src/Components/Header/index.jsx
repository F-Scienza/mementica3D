import React from 'react'
import './Header.css'
import BlackLogo from '../../Images/logo-negro.png'
function Header() {
    return (  
        <div className='header-container'>
            <div className='burger-nav'>
                🍔
            </div>
            <img className="header-logo" src={BlackLogo} alt="logo" />
            <div className='chart'>
                🛒
            </div>
        </div>
    );
}

export { Header };