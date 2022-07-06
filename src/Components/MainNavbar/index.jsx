import './MainNavbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
function MainNavbar() {
    return (
			<nav className="navbar__container">
				<a href="#menu">🍔</a>
				<div className="navbar__links" id="menu">
					<Link className="nvabar__link" to="/mementica3d/">
						x
					</Link>
					<a className="nvabar__link" href="/mementica3d/ProductList">
						{' '}
						PRODUCTOS
					</a>
					<a className="nvabar__link" href="/mementica3d/cart">
						{' '}
						CARRITO{' '}
					</a>
					<a className="nvabar__link" href="/mementica3d/login">
						{' '}
						LOGUIN{' '}
					</a>
				</div>
			</nav>
		);
}

export default MainNavbar;