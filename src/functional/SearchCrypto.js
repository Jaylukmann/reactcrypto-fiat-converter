import React from 'react';




	

const SearchCrypto = (searchC,onSearchCryptoChange)=>{
	return(
		<div className='pa2'>
		<input 
		className=''
		type='search'
		 placeholder='Search Cryptocurrency'
		 onChange={() => onSearchCryptoChange}
		 />
		  <input type='text' placeholder="Enter Crypto amount"></input>
		 </div>
		 );
      }
export default SearchCrypto;