import React, { useContext }from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import BlackLogo from '../../Images/logo-mementica-scaled.webp';
import MLogo from '../../Images/logo-M-scaled.webp'

function Header() {
	const {state} = useContext(AppContext)
	const {cart} = state
    return (
			<div className="header-container">
				<div className="burger-nav">🍔</div>
				<div className="header-logos-container">
					<Link to="/">
						<img className="header-logo2" src={MLogo} alt="logo" />
						<img className="header-logo" src={BlackLogo} alt="logo" />
					</Link>
				</div>
				<div className="chart">
					{' '}
					<Link to="/Cart">
						<span>🛒</span>
						<span>{cart.length}</span>
					</Link>
				</div>
			</div>
		);
}

export { Header };