import React, {useContext} from 'react';
import { CartCard } from '../../Components/CartCard';
import AppContext from '../../Context/AppContext';
import './cart.css'
function Cart() {
	const { state, removeFromCart } = useContext(AppContext);
	const { cart } = state

	const handleRemoveFromCart = (product) => () =>{
		removeFromCart(product)
	}
	
	let cartTotal = 0
	cart.forEach(prod => cartTotal += prod.price)

    return (
			<>
				<div className='cart-container'>
					<div className='cart-container-cart'>
						<h4 className="carousel-title">
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
								<h1>no hay productos</h1>
							)}
						</div>
					</div>
					<div className="cart-total">
						<h3 className="carousel-title"> Total: ${cartTotal}</h3>
					</div>
				</div>
			</>
		);
}
export { Cart };