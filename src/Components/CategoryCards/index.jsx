import React from 'react';
import Card2 from '../Card2/Index';
import './CategoryCards.css'

function CategoryCards() {
    return (
			<div>
				<h2>Categorias</h2>
				<div className="Category-cards-container">
					<a href="/">
						<Card2 />
					</a>
					<a href="/">
						<Card2 />
					</a>
					<a href="/">
						<Card2 />
					</a>
					<a href="/">
						<Card2 />
					</a>					
				</div>
			</div>
		);
}

export {CategoryCards};