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
					cerrar
				</a>
				<Link className="nvabar__link" to="/ProductList/moldesvelas">
					{' '}
					MOLDES PARA VELAS Y JABONES{' '}
				</Link>
				<Link className="nvabar__link" to="/ProductList/moldesresina">
					{' '}
					MOLDES PARA RESINA
					{' '}
				</Link>
				<Link className="nvabar__link" to="/ProductList/Impresion3D">
					{' '}
					PRODUCTOS DE IMPRESION 3D{' '}
				</Link>
				<Link className="nvabar__link" to="/ProductList">
					{' '}
					PRODUCTOS DE REVENTA
				</Link>
				<Link className="nvabar__link" to="/cart">
					{' '}
					CARRITO{' '}
				</Link>
			</div>
		</nav>
	);
}

export default MainNavbar;