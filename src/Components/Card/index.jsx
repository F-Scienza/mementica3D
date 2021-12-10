import React from 'react';
import './card.css'
import imagenEjemplo from '../../Images/producto05.jpg';
function Card() {
    return (
			<div className="Card-Container">
				<div className='img-container'>
					<img
						className="product-img"
						src={imagenEjemplo}
						alt="imagen de ejemplo"
					/>
				</div>
				<h3 className="title">Soy producto</h3>
				<p className="price">$1234</p>
				<p className="description">
					Descripcion del producto en cuestion que va a venir por JSON
				</p>
				<button className="chart-btn">Añadir al carrito</button>
			</div>
		);
}

export { Card };