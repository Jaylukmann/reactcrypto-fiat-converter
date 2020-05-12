import React from 'react';

// destructure 'searchF' from props - instead of props.searchF
const SearchFiat = ({ searchF }) => {
	return (
		<div className='pa2'>
			<input
				className=''
				type='search'
				placeholder='Search Fiat'
				onChange={(event) => searchF(event)} // set proper handling of onChange function
			/>
			<input type='text' placeholder='Enter fiat amount'></input>
		</div>
	);
};
export default SearchFiat;
