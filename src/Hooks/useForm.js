import { useState } from 'react';

export const useForm = (initalForm, validateForm) => {
	const [form, setForm] = useState(initalForm);
	const [errors, setErrors] = useState({defecto:'pordefecto'});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);
    const [mercadoPago, setMercadoPago] = useState(false)
	const [envio, setEnvio] = useState(false)
	const handleChange = e => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleBlur = e => {
		handleChange(e);
		setErrors(validateForm(form));
	};

	const handleSetMp = e => {
		const { value } = e.target;
        value === 'mp' ? setMercadoPago(true) : setMercadoPago(false)
	};
	const handleSetEnvio = () =>{
		setEnvio(!envio)
	}
	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validateForm(form));

		if (Object.keys(errors).length === 0) {
			alert('enviando formulario');
		} else {
			return;
		}
	};

	return {
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
		handleSetEnvio
	};
};
