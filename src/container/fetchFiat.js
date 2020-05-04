import React from 'react';

const fetchFiat =(fiat)=>{
    fetch("https://currency23.p.rapidapi.com/exchange?int=1&base=USD&to=EUR", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency23.p.rapidapi.com",
            "x-rapidapi-key": "a52ac09f88msh86e0f7c158fee09p1d1f93jsn89f1eaefa3e8"
        }
    })
    .then(response=>response.json())
    .then(data=>{this.setState({fiat:data})});     
}
export default fetchFiat;
// .then(response => {
//     console.log(response);
// })
// .catch(err => {
//     console.log(err);
// });
	
      
// export const fiat = [
//     {
//         id:1,
//     symbol: "USD/USD",
//     rate: "1",
    
//  },
//     {
//         id:2,
//         symbol: "USD/NGN",
//         rate : "450",
//  },
 
//  {
//     id:3,
//     symbol: "USD/EUR",
//     rate: "1.2",
//  },
    
//     {
//         id:4,
//         symbol: "USD/GBP",
//         rate: "2.3",
//     },
 
//     {
//         id:5,
//         symbol: "USD/CAD",
//         rate: "0.23",
//     }];
 



 
 

    
        



