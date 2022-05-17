import React, {useContext}from 'react';
import './AdressForm.css';
import AppContext from '../../Context/AppContext';
function AdressForm() {
	const { setBuyer } = useContext(AppContext)
	return (
		<div className="row">
			<div className="col-75">
				<div className="container">
					<form action="/checkout/payment">
						<div className="row">
							<div className="col-50">
								<h3>Direccion de envio</h3>
								<label htmlFor="fname">
									<i className="fa fa-user"></i> Nombre completo:
								</label>
								<input
									type="text"
									id="fname"
									name="firstname"
									placeholder="Juan Perez"
								/>
								<label htmlFor="email">
									<i className="fa fa-envelope"></i> Email
								</label>
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
								<label htmlFor="city">
									<i className="fa fa-institution"></i> Ciudad
								</label>
								<input
									type="text"
									id="city"
									name="city"
									placeholder="Córdoba"
								/>
								<label htmlFor="adr">
									<i className="fa fa-address-card-o"></i> Direccion
								</label>
								<input
									type="text"
									id="adr"
									name="address"
									placeholder="Olmos 123"
								/>
								<label htmlFor="zip">Codigo postal</label>
								<input type="text" id="zip" name="zip" placeholder="0000" />
							</div>
						</div>
						<input type="submit" value="Ir a pagar" className="btn" />
					</form>
				</div>
			</div>
		</div>
	);
}

export { AdressForm };
