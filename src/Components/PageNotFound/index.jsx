import React from 'react';
import {Link} from 'react-router-dom'
import img404 from '../../Images/404.png'
import './NotFound.css';
function PageNotFound() {
    return (
			<div className="not-found-container">
				<img src={img404} alt="404" className="img404" />
				<span className="not-found-msj">Lo sentimos pagina no encontrada</span>
				<Link className="not-found-msj link" to="/mementica3d">
					<button className='not-found-btn'>Volver al inicio</button>
				</Link>
			</div>
		);
}

export {PageNotFound};