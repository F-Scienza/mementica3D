import React, {useContext} from 'react';
import { CartCard } from '../../Components/CartCard';
import { TotalCost } from '../../Components/TotalCost';
import AppContext from '../../Context/AppContext';
import './cart.css'
function Cart() {
	const { state, removeFromCart } = useContext(AppContext);
	const { cart } = state
	const handleRemoveFromCart = (product) => () =>{
		removeFromCart(product)
	}
    return (
		<>
		<div className="cart-container">
			<div className="cart-container-cart">
				<h4 className="carousel-title cart-title">
					Lista de productos en el carrito:{' '}
				</h4>
				<div className="cart-cards-container">
					{cart.length > 0 ? (
						cart.map(product => (
							<CartCard
								key={product.id}
								product={product}
								handleRemoveFromCart={handleRemoveFromCart}
							/>
						))
					) : (
						<h1 className="carousel-title cart-title">no hay productos</h1>
					)}
				</div>
			</div>
			<TotalCost/>
		</div>
		</>
	);
}
export { Cart };