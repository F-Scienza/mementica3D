import React from 'react';
import './Footer.css'

function Footer() {
    return ( 
        <div className='footer-container'> 
            <span className='footer-title'>AYUDA</span>
            <div>
                <ul className='menu-list'>
                    <li className='menu-list-li'>Preguntas frecuentes</li>
                    <li className='menu-list-li'>Como comprar</li>
                    <li className='menu-list-li'>Cambios y devoluciones</li>
                </ul>
            </div>
            <span className='footer-title'>INSTITUCIONAL</span>
            <div>
                <ul className='menu-list'>
                    <li className='menu-list-li'>Quienes somos</li>
                    <li className='menu-list-li'>Contacto</li>
                </ul>
            </div>
            <span>Seguinos</span>
            <span>📷 ig</span>
        </div> 
    );
}

export { Footer };