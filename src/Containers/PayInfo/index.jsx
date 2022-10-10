import React from 'react';
import galicia from '../../Images/Galicia-logo.svg';
import wsp from '../../Images/Asets/whatsapp.svg';
import gmail from '../../Images/Asets/gmail.svg';
import './PayInfo.css';
function PayInfo() {
	return (
		<div className="payinfo-container">
			<h2>PAGO MEDIANTE EFECTIVO O TRANSFERENCIA</h2>
			<p>
				Para completar tu compra debes realizar una transferencia con el monto
				indicado
				<br />
				<br />
				Una vez confirmado el pago, nos comunicaremos contigo, mediante los
				datos brindados en el formulario anterior e informaremos los plazos de
				entrega.
				<br />
				<br />
				En caso de que el pago sea en efectivo y el retiro sea personal, deberás
				comunicarte con nosotros mediante un mail o nuestro WhatsApp.
			</p>
			<div className="payinfo-contact-container">
				<div className="payinfo-contact">
					<img src={gmail} className="payinfo-icons" alt="gmail" />{' '}
					<span className="payinfo-contact-info">mementica3d@gmail.com</span>
				</div>
				<div className="payinfo-contact">
					<img src={wsp} className="payinfo-icons" alt="wsp" />
					<span className="payinfo-contact-info">+54 9 3517 71-9390</span>
				</div>
			</div>
			<div className="payinfo-bank">
				<h2>INFORMACION DE LA CUENTA </h2>
				<span> Titular de la cuenta: </span>
				<span className="payinfo-bank-info"> Jose Maria Iriarte </span>
				<span> Alias: </span>
				<span className="payinfo-bank-info"> MEMENTICA3D </span>
				<span> CBU: </span>
				<span className="payinfo-bank-info"> 0070115630004016063612 </span>
			</div>
			<div className="galicia-container">
				<img className="payinfo-galicia" src={galicia} alt="banco galicia" />
			</div>
		</div>
	);
}

export { PayInfo };
