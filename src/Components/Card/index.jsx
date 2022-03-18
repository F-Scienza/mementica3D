import React from 'react';
import './card.css'
import defaultImage from '../../Images/logo-M-scaled.webp'
function Card(product, handleAddToCart) {
	const prod = product.product
	const prodimg = prod.img ? prod.img : defaultImage
    return (
			<div className="Card-Container">
				<div className='img-container'>
					<img
						className="product-img"
						src= {prodimg} 
						alt="mementica"
					/>
				</div>
				<h3 className="title">{prod.title}</h3>
				<p className="price">${prod.price}</p>
				<p className="description">
					{prod.description}
				</p>
				<button className="chart-btn" onClick={handleAddToCart}>Añadir al carrito</button>
			</div>
		);
}

export { Card };