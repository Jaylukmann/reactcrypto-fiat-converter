import React, { useEffect, useState } from 'react';
import ConvertFiatToCrypto from '../container/ConvertFiatToCrypto';
import ConvertCryptoToFiat from '../container/ConvertCryptoToFiat';

const Calculate=({cryptoValue, fiatValue, selectedFiat, selectedCrypto, convertToCrypto})=>{
   useEffect(() => {
   }, [cryptoValue, fiatValue, selectedFiat, selectedCrypto])
   if (selectedFiat && selectedCrypto && (fiatValue || cryptoValue)) {
      if (!convertToCrypto) {
         return <ConvertFiatToCrypto fiatValue={fiatValue} selectedCrypto={selectedCrypto} selectedFiat={selectedFiat}/>
      }
      else {
         return <ConvertCryptoToFiat cryptoValue={cryptoValue} selectedCrypto={selectedCrypto} selectedFiat={selectedFiat}/>
      }
   }
   return null
}  

export default Calculate;