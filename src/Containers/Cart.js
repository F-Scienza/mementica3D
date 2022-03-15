import React from 'react';
import { CartCard } from '../Components/CartCard';
function Cart() {
    return (
			<>
				<h4>Lista de productos en el carrito: </h4>
				<CartCard />
				<CartCard />
				<CartCard />
			</>
		);
}
export { Cart };