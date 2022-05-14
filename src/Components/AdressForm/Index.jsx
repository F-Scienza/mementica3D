import React from 'react';
import './AdressForm.css';

function AdressForm() {
	return (
		<div class="row">
			<div class="col-75">
				<div class="container">
					<form action="/checkout/payment">
						<div class="row">
							<div class="col-50">
								<h3>Direccion de envio</h3>
								<label for="fname">
									<i class="fa fa-user"></i> Nombre completo:
								</label>
								<input
									type="text"
									id="fname"
									name="firstname"
									placeholder="Juan Perez"
								/>
								<label for="email">
									<i class="fa fa-envelope"></i> Email
								</label>
								<input
									type="text"
									id="email"
									name="email"
									placeholder="juan@ejemplo.com"
								/>
								<label for="state">Provincia</label>
								<input type="text" id="state" name="state" placeholder="Córdoba" />
								<label for="city">
									<i class="fa fa-institution"></i> Ciudad
								</label>
								<input
									type="text"
									id="city"
									name="city"
									placeholder="Córdoba"
								/>
								<label for="adr">
									<i class="fa fa-address-card-o"></i> Direccion
								</label>
								<input
									type="text"
									id="adr"
									name="address"
									placeholder="Olmos 123"
								/>
								<label for="zip">Codigo postal</label>
								<input type="text" id="zip" name="zip" placeholder="0000" />
							</div>
						</div>
						<input type="submit" value="Ir a pagar" class="btn" />
					</form>
				</div>
			</div>
		</div>
	);
}

export { AdressForm };
