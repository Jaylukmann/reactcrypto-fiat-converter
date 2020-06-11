import React from 'react';

const SearchCrypto = ({toggleCrypto,searchC,listC,setCryptoAmount})=>{
	return(
		<form className='tc'>
		<div className='flex w-160 pa3 mr1 ml1 tc'>
	
		{/* <button onClick={(event) =>toggleCrypto(event)}></button> */}
		<select className='input-reset ba b--black-20 pa2 mb2 db w-25'>
		  <option value=""  
		    onClick={(event) => listC(event)}>
		  </option>
  		</select>  

		<input 
		className='input-reset ba b--black-20 pa2 mb2 db w-80'
		type='search'
		 placeholder='Search Cryptocurrency'
		 onChange={(event) => searchC(event)}
		//  onClick={(event) => listC(event)}
		 ></input>
		
		  <input 
		  className='input-reset ba b--black-20 pa2 mb2 db w-70'
		  type='text' placeholder="Enter Crypto amount"
		  onChange={(event) => setCryptoAmount(event)}>
		  </input>

		 </div>
		 </form>
		 );
      }


export default SearchCrypto;
