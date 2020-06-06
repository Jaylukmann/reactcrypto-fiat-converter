import React from 'react';

const SearchCrypto=({searchC, setCryptoAmount})=>{

	return(			
		<div className='w-50 pa3 mr2 flex'>
			<input
			className='blue input-reset ba b--black-30 pa2 mb2 db w-50'
			type='search'
			placeholder='Search Cryptocurrency'
			onChange={(event) =>searchC(event)}>
			</input>
			

			<input
			className='blue input-reset ba b--black-30 pa2 mb2 db w-50'
			type='number'
			placeholder='Cryptocurrency Amount'
			onChange={(event) => setCryptoAmount(event)}
			></input>

		</div>
	)
}

export default SearchCrypto;
