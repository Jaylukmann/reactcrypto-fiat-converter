import React, { useEffect, useState } from 'react';
import ConvertFiatToCrypto from '../container/ConvertFiatToCrypto';
import ConvertCryptoToFiat from '../container/ConvertCryptoToFiat';

const Calculate=({cryptoValue, fiatValue, filteredCrypto, filteredFiat})=>{
   const [conversionType, setConversionType] = useState('')
   useEffect(() => {
      if (cryptoValue > 0) {
         setConversionType('cryptoToFiat')
      } else if (fiatValue > 0) {
         setConversionType('fiatToCrypto')
      }
   }, [cryptoValue, fiatValue])
// console.log({fiat: fiatValue, crypto: cryptoValue })
   if (conversionType === 'fiatToCrypto') {
      return <ConvertFiatToCrypto fiatValue={fiatValue} filteredCrypto={filteredCrypto} filteredFiat={filteredFiat}/>
   }
   else if (conversionType === 'cryptoToFiat') {
      return <ConvertCryptoToFiat cryptoValue={cryptoValue} filteredCrypto={filteredCrypto} filteredFiat={filteredFiat}/>
   } else {
      return null
   }
}  

export default Calculate;