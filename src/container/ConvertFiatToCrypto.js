import React,{useState,Component, Fragment} from 'react';
import CryptoList from './functional/CryptoList';
import FiatList from './functional/FiatList';
import SearchCrypto from './functional/SearchCrypto';
import SearchFiat from './functional/SearchFiat';

const ConvertFiatToCrypto=(props)=>{
    const getSelectedCrypto= <SearchCrypto
    selectedCrypto  = { getSelectedCrypto}/>;
    const getSelectedFiat = 
    <SearchFiat 
       selectedFiat = {getSelectedFiat}/>;
    const getFiatInputValue =  
    <SearchFiat
   fiatInputValue = { getFiatInputValue}/>;
    const getCryptoSelectedPrice =   <CryptoList
    price = {getCryptoSelectedPrice}
   />;
    const getFiatSelectedRate = <FiatList 
    rate= {getFiatSelectedRate}/>;
    
    const fiatUsd = getFiatInputValue /getFiatSelectedRate;
    const cryptoValue =  fiatUsd  /getCryptoSelectedPrice;

    // <Fragment>
    //     <SearchCrypto
    //       selectedCrypto  = { getSelectedCrypto}/>

    //      <SearchFiat 
    //         selectedFiat = {getSelectedFiat}/>
        
    //     <SearchFiat
    //    fiatInputValue = { getFiatInputValue}/>
        
    //      <CryptoList
    //      price = {getCryptoSelectedPrice}
    //     />

    //     <FiatList 
    //     rate= {getFiatSelectedRate}/>
    // </Fragment>

        return(
             <div>
                 <h2>{cryptoValue}</h2>
             </div>
        )
    }


    export default ConvertFiatToCrypto;



		






















// class ConvertCryptoToFiat extends Component{
//    constructor(props){
//       super(props);
//       this.state={}
//   }
//   ConvertCryptoToFiat=()=>{

//    }
//    render(){
//        getFiatRate=()=>{

//        }
//        return(
//            <div>

//            </div>
//        )
//    }
 
   
// }




// export default ConvertCryptoToFiat;


