import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';

export const useForm = (initalForm, validateForm) => {
	const {setBuyer} = useContext(AppContext)

	const [form, setForm] = useState(initalForm);
	const [errors, setErrors] = useState({defecto:'pordefecto'});
	//const [loading, setLoading] = useState(false);
	//const [response, setResponse] = useState(null);
    const [mercadoPago, setMercadoPago] = useState(false)
	const [envio, setEnvio] = useState(false)
	
	const navigate = useNavigate()

	const handleChange = e => {
		const { name, value } = e.target;
		
		setForm({
			...form,
			[name]: value,
		});
		setBuyer(form)
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
	const handleSubmit = () => {
		setErrors(validateForm(form));
		navigate('/Checkout/form/PAYINFO');
		if (Object.keys(errors).length === 0) {
			setBuyer(form)
		} else {
			return;
		}
	};

	return {
		form,
		errors,
		//loading,
		//response,
        mercadoPago,
		envio,
		handleBlur,
		handleChange,
		handleSubmit,
		handleSetMp,
		handleSetEnvio
	};
};
