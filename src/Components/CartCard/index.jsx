import React from 'react';
import './CartCard.css'
import deleteIcon from '../../Images/Asets/delete.png'
const CartCard = ({ product, handleRemoveFromCart }) => {
	return (
		<>
			<div className="cardcart-container">
				<h3 className='cartcard-title'>{product.title}</h3>
				<img className="cartcard-img" src={product.image} alt="molde" />
				<h3 className="cartcard-price">${product.price}</h3>
				<button
					className="cartcard-btn"
					onClick={handleRemoveFromCart(product)}
				>
					<img className='cartcard-delete' src={deleteIcon} alt="x" />
				</button>
			</div>
		</>
	);
};

export { CartCard };