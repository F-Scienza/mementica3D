import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
	const [state, setState] = useState(initialState);
	const addToCart = payload => {
		setState({
			...state,
			cart: [...state.cart, payload],
		});
	};
	const removeFromCart = payload => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	}

	const setBuyer = payload => {
		setState({
			...state,
			buyer: payload
		})
	}

	const [searchValue, setSearchValue] = useState('');
	const onSearchValueChange = e => {
		setSearchValue(e.target.value);
	};

	let searchedProducts = [];
	if (!searchValue.length >= 1) {
		searchedProducts = state.products;
	} else {
		searchedProducts = state.products.filter(prod => {
			const prodText = prod.title.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return prodText.includes(searchText);
		});
	}

	return {
		addToCart,
		removeFromCart,
		setBuyer,
		searchValue,
		searchedProducts,
		onSearchValueChange,
		state,
	};
};

export default useInitialState;
