import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import logoEnvio from '../../Images/Asets/entrega.png'
import './Totalcost.css';
function TotalCost() {
	const { state, addToCart } = useContext(AppContext);
	const { cart } = state;
	let cartTotal = 0;
	cart.forEach(prod => (cartTotal += prod.price));
	const envio = {
		id: 10000,
		title: 'Envio',
		type: 'Envio',
		price: 1000,
		description: 'Envio Andreani',
		image: '/Images/asets/entrega.png',
	};
	const handleAddEnvio = () => {
		addToCart(envio);
	};
	return (
		<div className="cart-total">
			<h3 className="carousel-title cart-title"> Subtotal: ${cartTotal}</h3>
			<Link className="cart-btn-pay" to="/mementica3d/Checkout/form2">
				<button className="chart-btn "> Confirmar carrito </button>
			</Link>
		</div>
	);
}

export { TotalCost };
