import React from 'react';

  

const SearchFiat = (searchF,onSearchFiatChange)=>{
	return(
		<div className='pa2'>
		<input 
		className=''
		type='search'
		 placeholder='Search Fiat'
		 onChange={() => onSearchFiatChange}
		
		 />
          <input type='text' placeholder="Enter fiat amount" ></input>
		 </div>
		 );
      }
export default SearchFiat;