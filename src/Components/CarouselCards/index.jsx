import React, { useRef, useContext } from 'react';
import { Card } from '../Card'
import AppContext from '../../Context/AppContext'
import './CarouselCards.css'

function CarouselCards({titleCarousel}) {
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;
    const handleAddToCart = product => () => {
			addToCart(product);
			console.log(product);
		};

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
				<h1 className="carousel-title">{titleCarousel}</h1>
				<div className="cards-container" ref={carousel}>
					{products.map(product => (
						<Card
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</div>
				<div className="carousel-buttons">
					<button className="btn-carousel-cards" onClick={leftClick}>
						◀
					</button>
					<button className="btn-carousel-cards" onClick={rightClick}>
						▶
					</button>
				</div>
			</div>
		);
}

export { CarouselCards };