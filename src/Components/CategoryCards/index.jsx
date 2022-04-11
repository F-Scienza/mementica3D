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
				<h2 className="carousel-title">CATEGORIAS</h2>
				<div className="Category-cards-container">
					<a href="/">
						<Card2
							categoryTitle="MOLDES PARA VELAS"
							categoryBackground={moldesVelas}
						/>
					</a>
					<a href="/">
						<Card2
							categoryTitle="MOLDES PARA RESINA"
							categoryBackground={moldesResina}
						/>
					</a>
					<a href="/">
						<Card2
							categoryTitle="PRODUCTOS DE REVENTA"
							categoryBackground={reventa}
						/>
					</a>
					<a href="/">
						<Card2
							categoryTitle="IMPRESION 3D"
							categoryBackground={impresion3D}
						/>
					</a>
					<a href="/">
						<Card2 categoryTitle="OUTLET" categoryBackground={outletProd} />
					</a>
				</div>
			</div>
		);
}

export {CategoryCards};