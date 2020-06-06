import React from 'react';

const ConvertCryptoToFiat=({filteredCrypto, filteredFiat, cryptoValue})=>{
  if (filteredCrypto.length > 0 && filteredFiat.length > 0) {
    const cryptoUsd = filteredCrypto[0].price * cryptoValue
    const fiatValue = cryptoUsd * filteredFiat[0].rate
    return  <span> {filteredFiat[0].ticker} {fiatValue} </span>
}
return null;

}

export default ConvertCryptoToFiat;



