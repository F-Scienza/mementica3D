import React from 'react';
import './CartCard.css'
import defaultImage from '../../Images/logo-M-scaled.webp';
import deleteIcon from '../../Images/Asets/delete.png'
const CartCard = ({ product, handleRemoveFromCart }) => {
	return (
		<>
			<div className="cardcart-container">
				<h3 className='cartcard-title'>{product.title}</h3>
				<img className="cartcard-img" src={defaultImage} alt="molde" />
				<p className="cartcard-description">{product.description}</p>
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