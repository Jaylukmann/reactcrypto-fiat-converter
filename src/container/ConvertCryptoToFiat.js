import React from 'react';

const ConvertCryptoToFiat=({selectedCrypto, selectedFiat, cryptoValue})=>{
    const cryptoUsd = selectedCrypto.price * cryptoValue
    const fiatValue = cryptoUsd * selectedFiat.rate
    return  <span> {selectedFiat.ticker} {fiatValue} </span>
}

export default ConvertCryptoToFiat;



