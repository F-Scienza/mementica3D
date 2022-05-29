import React from 'react';
import Card2 from '../Card2/Index';
import './CategoryCards.css'
import moldesResina from '../../Images/ProductsImages/ceniceros.jpg'
import moldesVelas from '../../Images/ProductsImages/velazigzagrecta.jpg'
import reventa from '../../Images/ProductsImages/resinaepoxi300.jpg'
import outletProd from '../../Images/ProductsImages/expansores.jpg'
import impresion3D from '../../Images/logo-M-scaled.webp'
import { Link } from 'react-router-dom';

function CategoryCards() {
    return (
			<div>
				<h2 className="mementica-font">CATEGORIAS</h2>
				<div className="Category-cards-container">
					<Link to="/ProductList/moldesvelas">
						<Card2
							categoryTitle="MOLDES PARA VELAS"
							categoryBackground={moldesVelas}
						/>
					</Link>
					<Link to="/ProductList/MoldesResina">
						<Card2
							categoryTitle="MOLDES PARA RESINA"
							categoryBackground={moldesResina}
						/>
					</Link>
					<Link to="/ProductList/ProductosVarios">
						<Card2
							categoryTitle="PRODUCTOS DE REVENTA"
							categoryBackground={reventa}
						/>
					</Link>
					<Link to="/ProductList/Impresion3D">
						<Card2
							categoryTitle="IMPRESION 3D"
							categoryBackground={impresion3D}
						/>
					</Link>
					<Link to="/ProductList/Outlet">
						<Card2 categoryTitle="OUTLET" categoryBackground={outletProd} />
					</Link>
				</div>
			</div>
		);
}

export {CategoryCards};