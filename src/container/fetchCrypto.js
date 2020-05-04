import React from 'react';

const fetchCrypto = (crypto)=>{
    fetch("https://currency23.p.rapidapi.com/cripto", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency23.p.rapidapi.com",
            "x-rapidapi-key": "a52ac09f88msh86e0f7c158fee09p1d1f93jsn89f1eaefa3e8"
        }
    })
    .then(response=>response.json())
    .then(data=>{this.setState({crypto:data})});
}
export default fetchCrypto;
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
     
// export const crypto = [
//     {
//         id:1,
//     symbol: "BTC",
//     price: "$7450"
    
//  },
//     {
//         id:2,
//         symbol: "ETH",
//         price : "$190"
//  },
 
//  {
//     id:3,
//     symbol: "TRX",
//     price: "$0.015"
//  },
    
//     {
//         id:4,
//         symbol: "LTC",
//         price: "$120"
//     },
 
//     {
//         id:5,
//         symbol: "HYDRO",
//         price: "$0.00034"
//     }];
 
  
       
 

   
            
    
  
   