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
						Somos emprendedores igual que vos, buscamos crecer junto a nuestros clientes,
                        innovamos con vos. <br/>
                        Todos los productos son de fabricacion propia: molderia de caucho,
                        impresiones 3D y carteleria con polifan. <br/>
                        Si es necesario algún molde o impresión 3D en particular que no esté en nuestro catálogo, 
                        podes contactarnos y nosotros lo diseñamos. 
					</p>
				</div>
				<div className="footer-contact">
					<h2 className="mementica-font">Contactanos</h2>
					<p>mementica@gmail.com</p>
					<p>351000000</p>
					<p>@mementica3d</p>
				</div>
				{/*<div>
                <span className='footer-title'>AYUDA</span>
                <ul className='menu-list'>
                    <li className='menu-list-li'>Preguntas frecuentes</li>
                    <li className='menu-list-li'>Como comprar</li>
                    <li className='menu-list-li'>Cambios y devoluciones</li>
                </ul>
            </div>
            <div>
                <span className='footer-title'>INSTITUCIONAL</span>
                <ul className='menu-list'>
                    <li className='menu-list-li'>Quienes somos</li>
                    <li className='menu-list-li'>Contacto</li>
                </ul>
            </div>
            <div>
                <span className='footer-title'>SEGUINOS</span>
                <ul className='menu-list'>
                    <li className='menu-list-li'>
                        <a href="https://www.instagram.com/mementica/"> 
                            Instagram 
                        </a>
                    </li>
                </ul>
            /div>*/}
			</div>
		);
}
export { Footer };