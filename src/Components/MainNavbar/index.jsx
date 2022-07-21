import './MainNavbar.css'
import React from 'react';
import burguerIcon from '../../Images/hamburguesa.ico';
import { Link } from 'react-router-dom';
function MainNavbar() {
    return (
			<nav className="navbar__container">
				<a href="#menu">
					<span>
						<img className="burguericon" src={burguerIcon} alt="🍔" />
					</span>
				</a>
				<div className="navbar__links" id="menu">
					<a className="nvabar__link navbar__x" href="#/">
						x
					</a>
					<Link className="nvabar__link" to="/mementica3d/ProductList">
						{' '}
						PRODUCTOS
					</Link>
					<Link className="nvabar__link" to="/mementica3d/cart">
						{' '}
						CARRITO{' '}
					</Link>
				</div>
			</nav>
		);
}

export default MainNavbar;