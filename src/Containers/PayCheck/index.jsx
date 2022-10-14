import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import './paycheck.css'
function PayCheck() {
	const { state } = useContext(AppContext);
	const { cart, buyer } = state;
	let carttotal = 0;
	return (
		<div className="payinfo-container">
			<h1>¡Todo listo!</h1>
			<table className="table-products">
				{cart.map(
					p => (
						// eslint-disable-next-line
						(carttotal = carttotal + p.price),
						(
							<tr>
								<th>{p.title}</th>
								<td>${p.price}</td>
							</tr>
						)
					)
				)}
				<tr className="table-total">
					<th>Total:</th>
					<td>${carttotal}</td>
				</tr>
			</table>
			<h2>
				Gracias por tu compra {buyer.fname} {buyer.lname}
			</h2>
			<p>
				Recorda que nuestros horarios de atención son de lunes a viernes de 9 a 16hs. 
				Los pedidos pueden tener demora de hasta 48hs habiles. <br />
				Por favor le pedimos que conserve una captura de pantalla para evitar
				cualquier inconveniente.
			</p>
			<h3>Muchas gracias por confiar en nosotros</h3>
			<span className='mementica-font'>MEMENTICA</span>
			<br />
			<Link className="backbutton" to="/mementica3d/">
				<div className="backbutton-link">Regresar al inicio</div>
			</Link>
		</div>
	);
}

export { PayCheck };
