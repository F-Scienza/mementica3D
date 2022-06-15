import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import { Card } from '../../Components/Card';
import './productList.css';
function ProductList() {
	const { state, addToCart } = useContext(AppContext);
	const { products } = state;
	const handleAddToCart = product => () => {
		addToCart(product);
	};
	const { type } = useParams();
    
	const typeProducts = products.filter( prod=> { 
		return prod.type === type
	})

	return (
		<div className="ProductsList-container">
			<h1 className="mementica-font"> {type ? type : 'TODOS LOS PRODUCTOS'} </h1>
			<div className="PorductsList-cards">
				{typeProducts.length > 0 ?
					typeProducts.map(product => (
						<Card
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))
					:products.map(product => (
						<Card
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))
				}
			</div>
		</div>
	);
}

export { ProductList };
