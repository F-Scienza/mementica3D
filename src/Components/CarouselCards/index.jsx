import React, { useRef, useContext } from 'react';
import { Card } from '../Card'
import AppContext from '../../Context/AppContext'
import './CarouselCards.css'

function CarouselCards({titleCarousel, type }) {
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
	
	let carouselProducts
	type === 'offer'
		? (carouselProducts = products.filter(prod => prod.offer === true))
		: type === 'top'
		? (carouselProducts = products.filter(prod => prod.sells > 0))
		: (carouselProducts = products);
			
    return (
		<div className="carousel-container">
			<div>
				<h1 className="carousel-title">{titleCarousel}</h1>
			</div>
			<div className="cards-container" ref={carousel}>
				{carouselProducts.map(product => (
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