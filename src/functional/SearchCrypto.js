import React from 'react';
import  Crypto from '../functional/Crypto';



	

const SearchCrypto = ({cryptoSearch,onChange})=>{
	return(
		<div className='pa2'>
		<input 
		className=''
		type='search'
		 placeholder='Search Cryptocurrency'/><select><option onClick={Crypto}> </option></select>
		  <input type='text' placeholder="Enter Crypto amount"></input>
		 </div>
		 );
      }
export default SearchCrypto;