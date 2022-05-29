import React from 'react';
import './Card2.css'

function Card2({categoryTitle, categoryBackground}) {
    return (
			<div className="Category-card">
				<div className="Card-img2">
					<img
						src={categoryBackground}
						alt="background"
						className="Background-image-card2"
					/>
				</div>
				<span className="mementica-font Card2-span">{categoryTitle}</span>
			</div>
		);
}

export default Card2;
