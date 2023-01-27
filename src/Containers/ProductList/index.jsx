import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import { Card } from '../../Components/Card';
import { Searcher } from '../../Components/Searcher';
import './productList.css';
function ProductList() {
	const { addToCart, searchedProducts } = useContext(AppContext);
	const handleAddToCart = product => () => {
		addToCart(product);
	};
	const { type } = useParams();

	const typeProducts = searchedProducts.filter(prod => {
		return prod.type === type;
	});

	return (
		<div className="ProductsList-container">
			<h1 className="mementica-font">
				{' '}
				{type ? type.toUpperCase() : 'TODOS LOS PRODUCTOS'}{' '}
			</h1>
			<Searcher/>
			<div className="PorductsList-cards">
				{typeProducts.length > 0 ? (
					typeProducts.map(product => (
						<Card
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))
				) : searchedProducts.length > 0 ? (
					searchedProducts.map(product => (
						<Card
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))
				) : (
					<h2>no hay resultados</h2>
				)}
			</div>
		</div>
	);
}

export { ProductList };
