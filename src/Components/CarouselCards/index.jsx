import React, { useRef } from 'react';
import { Card } from '../Card'
import './CarouselCards.css'
function CarouselCards() {
    const carousel = useRef(null)
    const leftClick = e => {
			e.preventDefault();
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
            console.log(carousel.current.offsetWidth)
		};
    const rightClick = e => {
			e.preventDefault();
            carousel.current.scrollLeft += carousel.current.offsetWidth;
            console.log(carousel.current.offsetWidth);
		};
    return (
			<div className="carousel-container">
				<h1>voy a ser un carousel 😁</h1>
				<div className="cards-container" ref={carousel}>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="carousel-buttons">
					<button 
                        className="btn-carousel-cards"
                        onClick={leftClick}
                    > 
                        ◀ 
                    </button>
					<button 
                        className="btn-carousel-cards"
                        onClick={rightClick}
                    > 
                        ▶ 
                    </button>
				</div>
			</div>
		);
}

export { CarouselCards };