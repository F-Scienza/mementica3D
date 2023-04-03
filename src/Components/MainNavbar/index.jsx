import './MainNavbar.css'
import React, { useState } from 'react';
import burguerIcon from '../../Images/hamburguesa.ico';
import { Link } from 'react-router-dom';
function MainNavbar() {

	const [openNav, setOpenNav] = useState(false)
	const handleOpenNav = () => {
		setOpenNav(!openNav)
	}

	return (
		<nav className="navbar__container">
			<button className='btn-nav' onClick={handleOpenNav}>
				<span>
					<img className="burguericon" src={burguerIcon} alt="🍔" />
				</span>
			</button>
			{
				openNav &&
				<div className="navbar__links animated-element">
					<Link onClick={handleOpenNav} className="nvabar__link mementica-font" to="/ProductList/moldesvelas">
						{' '}
						MOLDES PARA VELAS Y JABONES{' '}
					</Link>
					<Link onClick={handleOpenNav} className="nvabar__link mementica-font" to="/ProductList/moldesresina">
						{' '}
						MOLDES PARA RESINA
						{' '}
					</Link>
					<Link onClick={handleOpenNav} className="nvabar__link mementica-font" to="/ProductList/3D">
						{' '}
						TAPAS DE OPTICA Y 3D{' '}
					</Link>
					<Link onClick={handleOpenNav} className="nvabar__link mementica-font" to="ProductList/ProductosVarios">
						{' '}
						RESINAS Y PIGMENTOS
					</Link>
					<Link onClick={handleOpenNav} className="nvabar__link mementica-font" to="/cart">
						{' '}
						CARRITO{' '}
					</Link>
				</div>
			}
		</nav>
	);
}

export default MainNavbar;