import React from 'react';




	

const SearchCrypto = ({searchC})=>{
	return(
		<div className='flex w-50 pa3 mr2'>
		<input 
		className='input-reset ba b--black-20 pa2 mb2 db w-50'
		type='search'
		 placeholder='Search Cryptocurrency'
		 onChange={(event) => searchC(event)}
		 />
		  <input 
		  className='input-reset ba b--black-20 pa2 mb2 db w-50'
		  type='text' placeholder="Enter Crypto amount"></input>
		 </div>
		 );
      }
export default SearchCrypto;