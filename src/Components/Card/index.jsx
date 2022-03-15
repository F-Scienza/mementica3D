import React from 'react';
import './card.css'
function Card(product, handleAddToCart) {
    return (
			<div className="Card-Container">
				<div className='img-container'>
					<img
						className="product-img"
						src={product.image}
						alt="imagen de ejemplo"
					/>
				</div>
				<h3 className="title">{product.title}</h3>
				<p className="price">${product.price}</p>
				<p className="description">
					{product.description}
				</p>
				<button className="chart-btn" onClick={handleAddToCart}>Añadir al carrito</button>
			</div>
		);
}

export { Card };