import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import './Totalcost.css';
function TotalCost() {
	const { state } = useContext(AppContext);
	const { cart } = state;
	let cartTotal = 0;
	cart.forEach(prod => (cartTotal += prod.price));
	return (
		<div className="cart-total">
			<h3 className="carousel-title cart-title"> Subtotal: ${cartTotal}</h3>
			<Link className="cart-btn-pay" to="/mementica3d/Checkout/form">
				<button className="chart-btn "> Confirmar carrito </button>
			</Link>
		</div>
	);
}

export { TotalCost };
