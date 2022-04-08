import React, {useContext} from 'react';
import { CartCard } from '../../Components/CartCard';
import AppContext from '../../Context/AppContext';
function Cart() {
	const { state, removeFromCart } = useContext(AppContext);
	const { cart } = state

	const handleRemoveFromCart = (product) => () =>{
		removeFromCart(product)
		console.log( product )
	}
    return (
			<div >
				<h4>Lista de productos en el carrito: </h4>
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
		);
}
export { Cart };