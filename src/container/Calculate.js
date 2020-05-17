import React from 'react';
import ConvertFiatToCrypto from '../container/ConvertFiatToCrypto';
import ConvertCryptoToFiat from '../container/ConvertCryptoToFiat';
import SearchCrypto from '../container/SearchCrypto';
import SearchFiat from '../container/SearchFiat';



const Calculate=()=>{
   
   const {cryptoInputValue,ConvertCryptoToFiat,ConvertFiatToCrypto}=this.props;
   return (cryptoInputValue='') 
   ?ConvertFiatToCrypto()
   :ConvertCryptoToFiat() ;

}




export default Calculate;