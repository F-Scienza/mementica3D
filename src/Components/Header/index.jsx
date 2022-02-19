import React from 'react'
import './Header.css'
import BlackLogo from '../../Images/logo-mementica-scaled.webp';
import MLogo from '../../Images/logo-M-scaled.webp'
function Header() {
    return (
			<div className="header-container">
				<div className="burger-nav">🍔</div>
                <div className='header-logos-container'>
                    <img className="header-logo2" src={MLogo} alt="logo" />
                    <img className="header-logo" src={BlackLogo} alt="logo" />
                </div>
				<div className="chart">🛒</div>
			</div>
		);
}

export { Header };