import React,{useState,Component} from 'react';
import SearchCrypto from './container/SearchCrypto';
import SearchFiat from './container/SearchFiat';
// import FiatList from '../functional/FiatList';
// import CryptoList from '../functional/CryptoList';

const cryptoAmount = <SearchCrypto>{getCryptoInputValue}</SearchCrypto>

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

const ConvertCryptoToFiat=(crypto)=>{
    const cryptoSelected = <SearchCrypto>{selectedCrypto}</SearchCrypto>
    const fiatSelected = <SearchFiat>{getSelectedFiat}</SearchFiat>
    const cryptoPrice = getcryptoSelectedPrice();
    const fiatRate = getFiatSelectedRate();
    const cryptoUsd = cryptoPrice * cryptoAmount;
    const fiatValue = cryptoUsd * fiatRate;
    return <h2>{fiatValue}</h2>
}
		














export default ConvertCryptoToFiat;







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