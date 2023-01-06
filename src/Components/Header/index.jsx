import React, { useContext }from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import BlackLogo from '../../Images/logo-mementica-scaled.webp';
import MLogo from '../../Images/logo-M-scaled.webp'
import MainNavbar from '../MainNavbar';
import cartIcon from '../../Images/Asets/shopping-cart.png'
function Header() {
	const {state} = useContext(AppContext)
	const {cart} = state
    return (
			<div className="header-container">
				<MainNavbar/>
				<Link className="header-logos-container" to="/">
					<img className="header-logo2" src={MLogo} alt="logo" />
					<img className="header-logo" src={BlackLogo} alt="logo" />
				</Link>
				<div>
					<Link className="cart" to="/Cart">
						<img className="cart-icon" src={cartIcon} alt="" />
						{cart.length > 0 ? (
							<div className="cart-alert">
								<span>{cart.length}</span>
							</div>
						) : (
							<div className="cart-alert none-alert">
								<span>{cart.length}</span>
							</div>
						)}
					</Link>
				</div>
			</div>
		);
}

export { Header };