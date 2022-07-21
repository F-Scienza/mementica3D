import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import { useForm } from '../../Hooks/useForm';
import './Form2.css';

const initialForm = {
	fname: '',
	lname: '',
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
		errors.fname = 'Este campo solo acepta letras y espacios en blanco'
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
		id: 2606
	}
	const {
		form,
		errors,
		loading,
		response,
		mercadoPago,
		handleBlur,
		handleChange,
		handleSubmit,
		handleSetMp
	} = useForm(initialForm, validateForm);

	return (
		<div>
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
				<label htmlFor="phone">Telefono</label>
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

				{
					//logica para que esta parte del formulario aparezca solo
					//si compraron el envio
					<div>
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
					</div>
				}
				{errors.cp && <p> {errors.cp} </p>}

				<div className="form-paymethod">
					<h3> Selecciona un metodo de pago </h3>
					<span>
						<input
							type="radio"
							name="paymethod"
							value="ft"
							onChange={handleSetMp}
						/>{' '}
						Efectivo/transferencia ( $
						{parseInt(cartTotal2	)} )
					</span>
					<span>
						<input
							type="radio"
							name="paymethod"
							value="mp"
							onChange={handleSetMp}
						/>
						Mercadopago ( ${parseInt(cartTotal2 + mercadoPago15.price)} )
						{mercadoPago && (
							<p className="alert">
								pagar con mercado pago tiene una comision del 15%
							</p>
						)}
					</span>
				</div>
				<div>
					<button className='chart-btn' type="submit" > PAGAR </button>
				</div>
			</form>
		</div>
	);
}

export default Form2;
