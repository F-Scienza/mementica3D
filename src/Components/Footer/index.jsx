import React from 'react';
import './Footer.css'
import logomementica from '../../Images/logo-M-scaled.webp'
function Footer() {
    return ( 
        <div className='footer-container'> 
            <div className='footer-logo-container'>
                <img src={logomementica} alt="logo-mementica" className='footer-logo'/>
                <h1 className='mementica-font'>MEMENTICA</h1>
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
            /div>*/
            }
        </div> 
    );
}
export { Footer };