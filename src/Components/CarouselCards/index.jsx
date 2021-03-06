import React, { useRef, useContext } from 'react';
import { Card } from '../Card'
import AppContext from '../../Context/AppContext'
import './CarouselCards.css'
import nextIcon from '../../Images/Asets/next.png'
import prevIcon from '../../Images/Asets/prev.png'
function CarouselCards({titleCarousel, type }) {
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;
    const handleAddToCart = product => () => {
			addToCart(product);
		};
    const carousel = useRef(null)
    const leftClick = e => {
			e.preventDefault();
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
		};
    const rightClick = e => {
			e.preventDefault();
            carousel.current.scrollLeft += carousel.current.offsetWidth;
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
				<h1 className="mementica-font">{titleCarousel}</h1>
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
					<img src={prevIcon} alt="<" />
				</button>
				<button className="btn-carousel-cards" onClick={rightClick}>
					<img src={nextIcon} alt=">" />
				</button>
			</div>
		</div>
		);
}

export { CarouselCards };