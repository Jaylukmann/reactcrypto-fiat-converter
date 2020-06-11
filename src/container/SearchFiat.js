
	import React from 'react';
	

	const SearchFiat = ({toggleFiat,searchF,setFiatAmount }) => {
		return (
			<form className='tc'>
			<div className='flex w-160 pa3 mr2 tc mr1 ml1'>
			
		{/* <button onClick={(event) =>toggleCrypto(event)}></button> */}
		<select className='input-reset ba b--black-20 pa2 mb2 db w-25'>
	
		  <option value=""  Search Fiat
		    onChange={(event) => searchF(event)}>
		  </option>
  		</select>  

		<input 
		className='input-reset ba b--black-20 pa2 mb2 db w-80'
		type='search'
		 placeholder='Search Fiat'
		 onChange={(event) => searchF(event)}
		//  onClick={(event) => listC(event)}
		 ></input>
		
		  <input 
		  className='input-reset ba b--black-20 pa2 mb2 db w-70'
		  type='text' placeholder="Enter Fiat amount"
		  onChange={(event) => setFiatAmount(event)}>
		  </input>

		 </div>
		 </form>
		 );
      }
	  export default SearchFiat;

