import React, { useContext } from 'react';
import brubank from '../../Images/brubank.png';
import wsp from '../../Images/Asets/whatsapp.svg';
import gmail from '../../Images/Asets/gmail.svg';
import './PayInfo.css';
import AppContext from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
function PayInfo() {
	const { state } = useContext(AppContext);
	const { cart, buyer } = state;
	let carttotal = 0;
	const navigate = useNavigate();
	const handlePayConfirm = () =>{
		navigate('/Checkout/form/payinfo/paycheck')
	}
	return (
		<div className="payinfo-container">
			<h2>PAGO MEDIANTE EFECTIVO O TRANSFERENCIA</h2>
			<h3>{buyer.fname} estas por comprar: </h3>
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
					<th>Total a pagar:</th>
					<td>${carttotal}</td>
				</tr>
			</table>
			<p>
				Para completar tu compra debes realizar una transferencia bancaria a la
				siguiente cuenta con el monto total (${carttotal}).
			</p>

			<div className="payinfo-bank">
				<h2>INFORMACION DE LA CUENTA </h2>
				<div className="galicia-container">
					<img className="payinfo-galicia" src={brubank} alt="banco galicia" />
				</div>
				<span> Titular de la cuenta: </span>
				<span className="payinfo-bank-info"> Jose Maria Iriarte </span>
				<span> CUIT/CUIL: </span>
				<span className="payinfo-bank-info"> 20-37628033-1 </span>
				<span> Alias: </span>
				<span className="payinfo-bank-info"> joseiriarte.bru.6039 </span>
				<span> CBU: </span>
				<span className="payinfo-bank-info"> 1430001713031857800013 </span>
				<span> Nro de cuenta: </span>
				<span className="payinfo-bank-info"> 1303185780001 </span>
			</div>
			<div>
				<h2>SIGUIENTE PASO:</h2>
				<p>
					Envianos el comprobante del pago a nuestro mail o whatsapp asi aceleramos el proceso 
					de confirmación del mismo.
					<br />
					<br />
					En caso de que el pago sea en efectivo y el retiro sea personal,
					comunicate con nosotros y haznoslo saber
				</p>
			</div>
			<div className="payinfo-contact-container">
				<div className="payinfo-contact">
					<img src={gmail} className="payinfo-icons" alt="gmail" />{' '}
					<span className="payinfo-contact-info">mementica3d@gmail.com</span>
				</div>
				<div className="payinfo-contact">
					<img src={wsp} className="payinfo-icons" alt="wsp" />
					<span className="payinfo-contact-info">+54 9 351 771-9390</span>
				</div>
			</div>
			<div>
				<p>
					Presiona el siguiente botón cuando la transferencia haya sido
					realizada.
					<br />
				</p>
				<button
				type='submit'
				className='btn'
				onClick={handlePayConfirm}
				>!Pago realizado!</button>
			</div>
		</div>
	);
}

export { PayInfo };
