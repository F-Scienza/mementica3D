import React from 'react';
import './card.css'
import defaultImage from '../../Images/logo-M-scaled.webp'
const Card = ({product, handleAddToCart}) => {
	return (
		<div className="Card-Container">
			<div className="img-container">
				<img className="product-img" src={defaultImage} alt='product' />
			</div>
			<h3 className="card-title">{product.title}</h3>
			<p className="price">${product.price}</p>
			<p className="description">{product.description}</p>
			<button className="chart-btn" onClick={handleAddToCart(product)}>
				Añadir al carrito
			</button>
		</div>
	);
}

export { Card };