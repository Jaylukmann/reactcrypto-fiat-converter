import React,{useState,Component, Fragment} from 'react';
import CryptoList from './functional/CryptoList';
import FiatList from './functional/FiatList';
import SearchCrypto from './functional/SearchCrypto';
import SearchFiat from './functional/SearchFiat';


const ConvertCryptoToFiat=(props)=>{
    const getSelectedCrypto='';
    const getSelectedFiat ='';
    const getCryptoInputValue ='';
    const getCryptoSelectedPrice = '';
    const getFiatSelectedRate = ';'
    
    const cryptoUsd = getCryptoSelectedPrice * getCryptoInputValue;
    const fiatValue = cryptoUsd * getFiatSelectedRate;
   <Fragment>
        <SearchCrypto 
          selectedCrypto  =   {getSelectedCrypto}
        />

         <SearchFiat
         selectedFiat =  {getSelectedFiat}
        />

        <SearchCrypto
          cryptoInputValue =  {getCryptoInputValue}
        />

   
        <CryptoList
          price = {getCryptoSelectedPrice}
    />

        <FiatList 
         rate = {getFiatSelectedRate}
        />
        </Fragment>
        return(
        <div>
            <h2>{fiatValue}</h2>
        </div>
        )
}
		

export default ConvertCryptoToFiat;



