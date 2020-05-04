import React from 'react';
import  Fiat from '../functional/Fiat';
  

const SearchFiat = ({fiatSearch,onChange})=>{
	return(
		<div className='pa2'>
		<input 
		className=''
		type='search'
		 placeholder='Search Fiat'/><select><option  onClick={Fiat}></option></select>
          <input type='text' placeholder="Enter fiat amount" ></input>
		 </div>
		 );
      }
export default SearchFiat;