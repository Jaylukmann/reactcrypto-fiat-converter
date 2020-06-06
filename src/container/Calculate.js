import React,{useState,Component, Fragment} from 'react';
import ConvertFiatToCrypto from '../container/ConvertFiatToCrypto';
import ConvertCryptoToFiat from '../container/ConvertCryptoToFiat';





const calc=()=>{
   return(
      <div>
         <button type='submit' onSubmit={Calculate}>
               Convert
         </button>
      </div>
   )
}

   const Calculate=()=>{
      const  [cryptoInputValue,ConvertCryptoToFiat] = useState('');
      const [fiatInputValue,ConvertFiatToCrypto] = useState('');

      if(cryptoInputValue=''){
         <ConvertFiatToCrypto />
         }
         else if(fiatInputValue='')
         {
         <ConvertCryptoToFiat/>
         }
          else{
             return null;
          }
      }
     
   

export default Calculate;