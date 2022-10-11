import React from 'react';
import Card2 from '../Card2/Index';
import './CategoryCards.css'
import moldesResina from '../../Images/moldesvarios.png';
import moldesVelas from '../../Images/vela.png';
import reventa from '../../Images/reventa.jpg';
import impresion3D from '../../Images/3d.png';
import allproducts from '../../Images/logo-M-scaled.webp';
import { Link } from 'react-router-dom';

function CategoryCards() {
    return (
			<div className="category-container">
				<h2 className="mementica-font">CATEGORIAS</h2>
				<div className="Category-cards-container">
					<Link to="/mementica3d/ProductList/">
						<Card2
							categoryTitle="VER TODOS LOS PRODUCTOS"
							categoryBackground={allproducts}
						/>
					</Link>
					<Link to="/mementica3d/ProductList/moldesvelas">
						<Card2
							categoryTitle="MOLDES PARA VELAS"
							categoryBackground={moldesVelas}
						/>
					</Link>
					<Link to="/mementica3d/ProductList/MoldesResina">
						<Card2
							categoryTitle="MOLDES PARA RESINA"
							categoryBackground={moldesResina}
						/>
					</Link>
					<Link to="/mementica3d/ProductList/ProductosVarios">
						<Card2
							categoryTitle="PRODUCTOS DE REVENTA"
							categoryBackground={reventa}
						/>
					</Link>
					<Link to="/mementica3d/ProductList/3D">
						<Card2
							categoryTitle="IMPRESION 3D"
							categoryBackground={impresion3D}
						/>
					</Link>
				</div>
			</div>
		);
}

export {CategoryCards};