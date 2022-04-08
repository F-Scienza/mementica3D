import React from 'react';
import './CartCard.css'
const CartCard = ({ product, handleRemoveFromCart }) => {
	return (
		<>
			<div className="cardcart-container">
				<h3>{product.title}</h3>
				<img className="cartcard-img" src={product.image} alt="molde" />
				<p className="cartcard-description">{product.description}</p>
				<p className="cartcard-price">${product.price}</p>
				<button
					className="cartcard-btn"
					onClick={handleRemoveFromCart(product)}
				>
					{' '}
					🗑{' '}
				</button>
			</div>
		</>
	);
};

export { CartCard };