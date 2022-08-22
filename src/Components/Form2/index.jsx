import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import { useForm } from '../../Hooks/useForm';
import './Form2.css';
import mpimg from '../../Images/Asets/mp.png';
const initialForm = {
	fname: '',
	lname: '',
	dni: '',
	email: '',
	phone: '',
	state: '',
	city: '',
	adr: '',
	dpto: '',
	cp: '',
};
const validateForm = form => {
	let errors = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

	if (!form.fname.trim()) {
		errors.fname = 'El campo nobmre es requerido';
	} else if (!regexName.test(form.fname.trim())) {
		errors.fname = 'Este campo solo acepta letras y espacios en blanco';
	}
	if (!form.lname.trim()) {
		errors.lname = 'El campo apellido es requerido';
	} else if (!regexName.test(form.lname.trim())) {
		errors.lname = 'Este campo solo acepta letras y espacios en blanco';
	}
	if (!form.phone.trim()) {
		errors.phone = 'Escribe un numero de telefono';
	}
	if (!form.email.trim()) {
		errors.email = 'El campo email es requerido';
	} else if (!regexEmail.test(form.email.trim())) {
		errors.email = 'Ingresa un email valido';
	}
	return errors;
};

function Form2() {
	const { state } = useContext(AppContext);
	const { cart } = state;
	let cartTotal2 = 0;
	cart.forEach(prod => (cartTotal2 += prod.price));
	let mercadoPago15 = {
		price: cartTotal2 * 0.15,
		title: 'Comision mercado Pago',
		description: 'costo de servicio mercado pago',
		id: 2606,
	};
	const {
		form,
		errors,
		loading,
		response,
		mercadoPago,
		envio,
		handleBlur,
		handleChange,
		handleSubmit,
		handleSetMp,
		handleSetEnvio,
	} = useForm(initialForm, validateForm);

	return (
		<div className="form-container">
			<h1>Informacion del comprador</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fname">Nombre:</label>
				<input
					type="text"
					id="fname"
					name="fname"
					placeholder="Juan"
					onChange={handleChange}
					onBlur={handleBlur}
					value={form.fname}
					required
				/>
				{errors.fname && <p className="required-p"> {errors.fname} </p>}
				<label htmlFor="lname">Apellido:</label>
				<input
					type="text"
					id="lname"
					name="lname"
					placeholder="Perez"
					onChange={handleChange}
					onBlur={handleBlur}
					value={form.lname}
					required
				/>
				{errors.lname && <p className="required-p"> {errors.lname} </p>}

				<label htmlFor="dni">Numero de documento</label>
				<input
					type="number"
					id="dni"
					name="dni"
					placeholder="dni"
					onChange={handleChange}
					onBlur={handleBlur}
					value={form.dni}
					required
				/>
				{errors.dni && <p className="required-p"> {errors.dni} </p>}

				<label htmlFor="phone">Numero de documento</label>
				<input
					type="number"
					id="phone"
					name="phone"
					placeholder="telefono"
					onChange={handleChange}
					onBlur={handleBlur}
					value={form.phone}
					required
				/>
				{errors.phone && <p className="required-p"> {errors.phone} </p>}
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="juan@mail"
					onChange={handleChange}
					onBlur={handleBlur}
					value={form.email}
					required
				/>
				{errors.email && <p className="required-p"> {errors.email} </p>}
				<div className="label-envio">
					<label htmlFor="envio">¿Deseas agregar informacion de envio?</label>
					<input
						id="envio"
						type="checkbox"
						name="envio"
						defaultChecked={envio}
						onChange={handleSetEnvio}
					/>
				</div>

				{envio && (
					//logica para que esta parte del formulario aparezca solo
					//si compraron el envio
					<div className="form-infoenvio">
						<label htmlFor="cp">Codigo postal</label>
						<input
							type="text"
							id="cp"
							name="cp"
							placeholder="0000"
							onChange={handleChange}
							onBlur={handleBlur}
							value={form.cp}
							required
						/>
						<label htmlFor="state">Provincia</label>
						<input
							type="text"
							id="state"
							name="state"
							placeholder="Córdoba"
							onChange={handleChange}
							onBlur={handleBlur}
							value={form.state}
							required
						/>
						{errors.state && <p className="required-p"> {errors.state} </p>}
						<label htmlFor="city">Ciudad</label>
						<input
							type="text"
							id="city"
							name="city"
							placeholder="Capital"
							onChange={handleChange}
							onBlur={handleBlur}
							value={form.city}
							required
						/>
						{errors.city && <p className="required-p"> {errors.city} </p>}
						<label htmlFor="adr">Direccion</label>
						<input
							type="text"
							id="adr"
							name="adr"
							placeholder="Olmos 123"
							onChange={handleChange}
							onBlur={handleBlur}
							value={form.adr}
							required
						/>
						{errors.adr && <p className="required-p"> {errors.adr} </p>}
						<label htmlFor="dpto">Dpto</label>
						<input
							type="text"
							id="dpto"
							name="dpto"
							placeholder="10"
							onChange={handleChange}
							onBlur={handleBlur}
							value={form.dpto}
						/>
					</div>
				)}
				{errors.cp && <p> {errors.cp} </p>}

				<div className="form-paymethod ">
					<h3> Selecciona un metodo de pago </h3>
					<div className="label-envio">
						<input
							type="radio"
							name="paymethod"
							value="ft"
							id="ft"
							onChange={handleSetMp}
						/>{' '}
						<label htmlFor="ft">
							Efectivo/transferencia ( ${parseInt(cartTotal2)} )
						</label>
					</div>
					<div className="label-envio">
						<input
							type="radio"
							name="paymethod"
							value="mp"
							onChange={handleSetMp}
							id="mp"
						/>
						<label htmlFor="mp">
							<img src={mpimg} alt="mp" className="icon-mp" />
							(${parseInt(cartTotal2 + mercadoPago15.price)})
						</label>
					</div>

					<h4 className="alert ">
						Pagar con mercado pago tiene una comision del 15%
					</h4>
				</div>
				<div>
					<Link className="backbutton-link" to="/mementica3d/cart">
						<div className="backbutton">Regresar al carrito</div>
					</Link>
					{mercadoPago === true ? (
						<button className="chart-btn btn-mercadopago" type="submit">
							IR A PAGAR
						</button>
					) : (
						<button className="chart-btn btn-transferencia" type="submit">
							IR A PAGAR
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default Form2;
