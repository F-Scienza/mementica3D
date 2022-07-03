import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';
import AppContext from '../../Context/AppContext';
function Form() {
	const { state, addToBuyer } = useContext(AppContext)
	const form = useRef(null)
	const navigate = useNavigate()
	const { cart } = state
	let cartTotal2 = 0;
	cart.forEach(prod => (cartTotal2 += prod.price));

	const handleSubmit = () => {
		const formData = new FormData(form.current)
		const buyer = {
			"firstname": formData.get(' firstname'),
			"lastname": formData.get('lastname'),
			"phone": formData.get('phone'),
			"email": formData.get('email'),
			"state": formData.get('state'),
			"city": formData.get('city'),
			"address": formData.get('address'),
			"cp": formData.get('cp'),
		}
		addToBuyer(buyer)
		navigate('/mementica3d/Checkout/Payment')
	}
	return (
		<div className="row">
			<div className="col-75">
				<div className="container">
					<form ref={form}>
						<div className="row">
							<div className="col-50">
								<h3>Informacion de comprador</h3>
								<label htmlFor="fname">Nombre:</label>
								<input
									type="text"
									id="fname"
									name="firstname"
									placeholder="Juan"
								/>
								<label htmlFor="lname">Apellido:</label>
								<input
									type="text"
									id="lname"
									name="lastname"
									placeholder="Perez"
								/>
								<label htmlFor="phone">Telefono</label>
								<input
									type="text"
									id="phone"
									name="phone"
									placeholder="numero de telefono"
								/>
								<label htmlFor="email">Email</label>
								<input
									type="text"
									id="email"
									name="email"
									placeholder="juan@ejemplo.com"
								/>
								<label htmlFor="state">Provincia</label>
								<input
									type="text"
									id="state"
									name="state"
									placeholder="Córdoba"
								/>
								<label htmlFor="city">Ciudad</label>
								<input
									type="text"
									id="city"
									name="city"
									placeholder="Capital"
								/>
								<label htmlFor="adr">Direccion</label>
								<input
									type="text"
									id="adr"
									name="address"
									placeholder="Olmos 123"
								/>
								<label htmlFor="cp">Codigo postal</label>
								<input type="text" id="cp" name="cp" placeholder="0000" />
								<h3>Vas a pagar: ${cartTotal2} </h3>
								<div className="form-paymethod">
									<h3> Selecciona un metodo de pago </h3>
									<span>
										<input type="radio" name="paymethod" value="ft" />{' '}
										Efectivo/transferencia
									</span>
									<span>
										<input type="radio" name="paymethod" value="mp" /> 
										Mercadopago ( ${parseInt(cartTotal2*1.15)} )
									</span>
								</div>
							</div>
						</div>
						<div>
							<Link to="/mementica3d/cart">Regresar al carrito</Link>
						</div>
						<div>
							<button type="button" onClick={handleSubmit}>
								{' '}
								pagar{' '}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}


export { Form };