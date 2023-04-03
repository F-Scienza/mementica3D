import React, { useContext } from 'react';
import { CartCard } from '../../Components/CartCard';
import { TotalCost } from '../../Components/TotalCost';
import AppContext from '../../Context/AppContext';
import emptyCart from '../../Images/carro-vacio.png'
import './cart.css'
function Cart() {
	const { state, removeFromCart } = useContext(AppContext);
	const { cart } = state
	const handleRemoveFromCart = (product) => () => {
		removeFromCart(product)
	}
	return (
		<>
			<div className="cart-container">
				<div className="cart-container-cart">
					<h4 className="mementica-font">
						Productos en el carrito:{' '}
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
							<div className='empty-cart-container'>
								<img src={emptyCart} alt="carrito" className='empty-cart'/>
								<h1 className="mementica-font">no hay productos</h1>
							</div>
						)}
					</div>
				</div>
				<TotalCost />
			</div>
		</>
	);
}
export { Cart };