import React from 'react';
import './CartCard.css'
function CartCard() {
    return (
			<div className="cardcart-container">
				<h3>Molde ninja cat</h3>
				<img
                    className='cartcard-img'
					src="http://d3ugyf2ht6aenh.cloudfront.net/stores/508/336/products/diseno-sin-titulo-4611-19f90067902640e73516267170459530-640-0.jpg"
					alt="molde"
				/>
				<p className='cartcard-description'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
					similique quasi! Reiciendis soluta recusandae.
				</p>
				<p className='cartcard-price'>$1200</p>
                <button className='cartcard-btn'> 🗑 </button>
			</div>
		);
}

export { CartCard };