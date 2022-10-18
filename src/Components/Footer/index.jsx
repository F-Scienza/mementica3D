import React from 'react';
import './Footer.css'
import logomementica from '../../Images/logo-M-scaled.webp'
function Footer() {
    return (
			<div className="footer-container">
				<div className="footer-logo-container">
					<img
						src={logomementica}
						alt="logo-mementica"
						className="footer-logo"
					/>
					<h1 className="mementica-font">MEMENTICA</h1>
				</div>
				<div className="footer-we">
					<h1 className="mementica-font">¿QUIENES SOMOS?</h1>
					<p>
						Somos emprendedores igual que vos, buscamos crecer junto a nuestros
						clientes, innovamos con vos. <br />
						Todos los productos son de fabricacion propia: molderia de caucho,
						impresiones 3D y carteleria con polifan. <br />
						Si es necesario algún molde o impresión 3D en particular que no esté
						en nuestro catálogo, podes contactarnos y nosotros lo diseñamos.
					</p>
				</div>
				<div className="footer-contact">
					<h2 className="mementica-font">Contactanos</h2>
					<p>mementica@gmail.com</p>
					<p>+54 9 3517 71-9390</p>
					<p>@mementica3d</p>
				</div>
			</div>
		);
}
export { Footer };