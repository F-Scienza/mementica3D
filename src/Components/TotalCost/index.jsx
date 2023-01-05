import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import './Totalcost.css';
const envio = { title: 'Envio', price: 1000, image: 'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/envio.png?alt=media&token=e37e8ea9-8dd8-4722-a504-57af310ffb3a' }
const envioGratis = { title: 'Envio', price: 0, image: 'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/envio.png?alt=media&token=e37e8ea9-8dd8-4722-a504-57af310ffb3a' }
function TotalCost() {
	const { state, addToCart } = useContext(AppContext);
	const { cart } = state;

	let cartTotal = 0;
	cart.forEach(prod => (cartTotal += prod.price));
	const handleAddToCart = object => () => {
		addToCart(object);
	};
	return (
		<div className="cart-total">
			<h3 className="carousel-title cart-title"> Subtotal: ${cartTotal}</h3>
			{
				cart.find(p => p.title === 'Envio')
					? null
					: cartTotal > 10000 ?
						<button onClick={handleAddToCart(envioGratis)} className='chart-btn envio-btn'>
							Aregar envio gratis
						</button> :
						<button onClick={handleAddToCart(envio)} className='chart-btn envio-btn'>
							Agregar envio por $1000
						</button>
			}
			<Link className="cart-btn-pay" to="/Checkout/form">
				<button className="chart-btn "> Confirmar carrito </button>
			</Link>
		</div>
	);
}

export { TotalCost };
