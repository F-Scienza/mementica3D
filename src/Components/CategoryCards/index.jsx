import React from 'react';
import Card2 from '../Card2/Index';
import './CategoryCards.css'
import moldesResina from '../../Images/ProductsImages/ceniceros.jpg'
import moldesVelas from '../../Images/ProductsImages/velazigzagrecta.jpg'
import reventa from '../../Images/ProductsImages/resinaepoxi300.jpg'
import outletProd from '../../Images/ProductsImages/expansores.jpg'
import impresion3D from '../../Images/logo-M-scaled.webp'

function CategoryCards() {
    return (
		<div>
			<h2>Categorias</h2>
			<div className="Category-cards-container">
				<a href="/">
					<Card2 
						categoryTitle = 'Moldes para velas'
						categoryBackground={moldesVelas}
					/>
				</a>
				<a href="/">
					<Card2 
						categoryTitle = 'Moldes para resina'
						categoryBackground={moldesResina}
					/>
				</a>
				<a href="/">
					<Card2 
						categoryTitle = 'Productos de reventa'
						categoryBackground={reventa}
					/>
				</a>
				<a href="/">
					<Card2 
						categoryTitle = 'Impresion 3D'
						categoryBackground={impresion3D}
					/>
				</a>
				<a href="/">
					<Card2 
						categoryTitle = 'Outlet'
						categoryBackground={outletProd}
					/>
				</a>					
			</div>
		</div>
	);
}

export {CategoryCards};