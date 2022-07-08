import React from 'react';
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

	if (!form.fname.trim()) {
		errors.fname = 'El campo nobmre es requerido';
	}

	return errors;
};

function Form2() {
	const {
		form,
		errors,
		loading,
		response,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useForm(initialForm, validateForm);

	return (
		<div>
			<h1>form2</h1>
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
				{errors.fname && <p> {errors.fname} </p>}
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
				{errors.lname && <p> {errors.lname} </p>}
				<label htmlFor="phone">Telefono</label>
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="telefono"
					onChange={handleChange}
					onBlur={handleBlur}
					value={form.phone}
					required
				/>
				{errors.phone && <p> {errors.phone} </p>}

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
				{errors.email && <p> {errors.email} </p>}

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
				{errors.state && <p> {errors.state} </p>}

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
				{errors.city && <p> {errors.city} </p>}

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
				{errors.adr && <p> {errors.adr} </p>}

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
				{errors.cp && <p> {errors.cp} </p>}
			</form>
		</div>
	);
}

export default Form2;
