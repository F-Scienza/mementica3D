import React from 'react';
import './card.css'
import imagenEjemplo from '../../Images/producto05.jpg';
function Card() {
    return (
			<div className="Card-Container">
				<div className="product-img">
					<img src={imagenEjemplo} alt="imagen de ejemplo" />
				</div>
				<h3 className="title">Soy producto</h3>
				<h3 className="price">$1234</h3>
				<p className='description'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Necessitatibus
				</p>
				<div className='chart'>
                    🗑                   
                    <div className='chart-btn'>
                        <button className='less'> - </button>
                        <p>0</p>
                        <button className='plus'> + </button>
                    </div>
                    🛒
                </div>
			</div>
		);
}

export { Card };