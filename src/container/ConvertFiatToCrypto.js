import React from 'react';

const ConvertFiatToCrypto=({selectedCrypto, selectedFiat, fiatValue})=>{
    const fiatUsd = fiatValue / selectedFiat.rate
    const cryptoValue = fiatUsd / selectedCrypto.price
    return  <span> {cryptoValue} {selectedCrypto.coin}</span>
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


