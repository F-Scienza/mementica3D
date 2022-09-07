import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';

function Searcher() {
	const {searchValue, onSearchValueChange} = useContext(AppContext)
	return (
		<div>
			<input
				type="text"
				placeholder="Buscar producto"
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</div>
	);
}

export { Searcher };
