import React from 'react';

// destructure 'searchF' from props - instead of props.searchF
const SearchFiat = ({ searchF }) => {
	return (
		<div className='w-50 pa3 mr2 flex'>
		
			<input
				className='input-reset ba b--black-30 pa2 mb2 db w-50'
				type='search'
				placeholder='Search Fiat'
				onChange={(event) => searchF(event)} // set proper handling of onChange function
			/>
			<input 
			className='input-reset ba b--black-30 pa2 mb2 db w-50'
			 type='text' placeholder='Enter fiat amount'></input>
		</div>
	);
};
export default SearchFiat;
