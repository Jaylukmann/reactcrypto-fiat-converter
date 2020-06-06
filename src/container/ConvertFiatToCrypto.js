import React from 'react';

const ConvertFiatToCrypto=({filteredCrypto, filteredFiat, fiatValue})=>{
    if (filteredCrypto.length > 0 && filteredFiat.length > 0) {
        const fiatUsd = fiatValue / filteredFiat[0].rate
        const cryptoValue = fiatUsd / filteredCrypto[0].price
        console.log(cryptoValue)
        return  <span> {cryptoValue} {filteredCrypto[0].coin}</span>
    }
    return null;
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


