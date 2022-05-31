import React, {useContext, useState}from 'react';
import './Form.css';
import AppContext from '../../Context/AppContext';
function Form() {
	const { createBuyer } = useContext(AppContext)
	const [ buyer, setBuyer ] = useState({})
	// probando lo de abajon no andaaa aa aa a a a aa a a 
	const handleSetBuyer = e => {
		setBuyer({
			...buyer,
			[e.target.name]: e.target.value
		})
	}
	const handleCreateBuyer = e => {
		e.preventDefault()
		createBuyer(buyer)
	}
	return (
		<div className="row">
			<div className="col-75">
				<div className="container">
					<form onSubmit={handleCreateBuyer} >
						<div className="row">
							<div className="col-50">
								<h3>Direccion de envio</h3>
								<label htmlFor="fname">
									<i className="fa fa-user"></i> Nombre:
								</label>
								<input
									type="text"
									id="fname"
									name="firstname"
									placeholder="Juan"
									onChange={handleSetBuyer}
								/>
								<label htmlFor="lname">
									<i className="fa fa-user"></i> Apellido:
								</label>
								<input
									type="text"
									id="lname"
									name="lastname"
									placeholder="Juan Perez"
									onChange={handleSetBuyer}
								/>
								<label htmlFor="email">
									<i className="fa fa-envelope"></i> Email
								</label>
								<input
									type="text"
									id="email"
									name="email"
									placeholder="juan@ejemplo.com"
									onChange={handleSetBuyer}
								/>
								<label htmlFor="state">Provincia</label>
								<input
									type="text"
									id="state"
									name="state"
									placeholder="Córdoba"
									onChange={handleSetBuyer}
								/>
								<label htmlFor="city">
									<i className="fa fa-institution"></i> Ciudad
								</label>
								<input
									type="text"
									id="city"
									name="city"
									placeholder="Capital"
									onChange={handleSetBuyer}
								/>
								<label htmlFor="adr">
									<i className="fa fa-address-card-o"></i> Direccion
								</label>
								<input
									type="text"
									id="adr"
									name="address"
									placeholder="Olmos 123"
									onChange={handleSetBuyer}
								/>
								<label htmlFor="cp">Codigo postal</label>
								<input type="text" id="cp" name="cp" placeholder="0000" 
									onChange={handleSetBuyer}/>
							</div>
						</div>
						<input type="submit" value="Ir a pagar" className="btn" />
					</form>
				</div>
			</div>
		</div>
	);
}

export { Form };
