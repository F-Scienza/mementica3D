import React, {useContext}from 'react'
import AppContext from '../../Context/AppContext';
import './PayInfo.css'
function PayInfo() {
	const {state} = useContext(AppContext)
	const {cart} = state
	const importeTotal = cart
    return (
			<div className="payinfo-container">
				<h2>PAGO MEDIANTE EFECTIVO O TRANSFERENCIA</h2>
				<p>
					Para completar tu compra debes realizar una transferencia con el monto
					$$$ MONTO
					<br />
					una vez confirmado el pago, nos comunicaremos contigo, mediante los
					datos solicitados en el formulario anterior e informaremos los plazos
					de entrega.
					<br />
					<br />
					En caso de que el pago sea en efectivo y el retiro sea personal,
					deberas comunicarte con nosotros a traves de un mail o Whatsapp al
					numero 35100000
				</p>
				<h2>INFORMACION DE LA CUENTA</h2>
				<h4> Titular de la cuenta: Jose Maria Iriarte </h4>
				<h4> ALIAS: mementica3d </h4>
				<h4>CBU: 0000000000000 </h4>
			</div>
		);
}

export {PayInfo};