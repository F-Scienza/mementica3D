import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import { Card } from '../../Components/Card';
function ProductList() {
	const { state, addToCart } = useContext(AppContext);
	const { products } = state;
	const handleAddToCart = product => () => {
		addToCart(product);
	};
	const { type } = useParams();
    
	return (
		<div>
			<h1> {type} </h1>
			{products.map(product => (
				<Card
					key={product.id}
					product={product}
					handleAddToCart={handleAddToCart}
				/>
			))}
		</div>
	);
}

export { ProductList };
