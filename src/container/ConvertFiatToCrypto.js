import React,{Component} from 'react';
import SearchCrypto from './container/SearchCrypto';
import SearchFiat from './container/SearchFiat';
// import FiatList from '../functional/FiatList';
// import CryptoList from '../functional/CryptoList';



const getcryptoSelectedPrice=()=>{
    const {crypto} = this.props;
    if(cryptoSelected == crypto.coin){
        return crypto.price
    }
    
}

const getFiatSelectedRate=()=>{
    const {fiat} = this.props;
    if(fiatSelected == fiat.ticker){
        return fiat.rate
    }
}


const ConvertFiatToCrypto=(crypto)=>{
    const cryptoSelected = <SearchCrypto>{selectedCrypto}</SearchCrypto>
    const fiatAmount = <SearchCrypto>{getCryptoInputValue}</SearchCrypto>
    const fiatSelected = <SearchFiat>{getSelectedFiat}</SearchFiat>
    const cryptoPrice = getcryptoSelectedPrice();
    const fiatRate = getFiatSelectedRate();
    const fiatUsd = fiatAmount /fiatRate;
    const cryptoValue = fiatUsd / cryptoPrice;
    return <h2>{cryptoValue}</h2>
}

		



export default ConvertFiatToCrypto;