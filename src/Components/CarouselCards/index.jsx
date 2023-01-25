import React, { useRef, useContext } from 'react';
import { Card } from '../Card'
import AppContext from '../../Context/AppContext'
import './CarouselCards.css'
import nextIcon from '../../Images/Asets/right.png'
import prevIcon from '../../Images/Asets/left.png'
function CarouselCards({titleCarousel, type }) {
    const { state, addToCart, handleSetPmodal } = useContext(AppContext);
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
		: type === 'new' 
		? (carouselProducts = products.filter(prod => prod.isNew === true))
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
							handleSetPmodal={handleSetPmodal}
						/>
					))}
				</div>

				<div className="carousel-buttons">
					<button className="btn-carousel-cards" onClick={leftClick}>
						<img className="btn-img" src={prevIcon} alt="<" />
					</button>
					<button className="btn-carousel-cards" onClick={rightClick}>
						<img className="btn-img" src={nextIcon} alt=">" />
					</button>
				</div>
			</div>
		);
}

export { CarouselCards };