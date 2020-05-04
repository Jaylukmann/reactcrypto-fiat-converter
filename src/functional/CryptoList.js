import React from 'react';
import  Crypto from '../functional/Crypto';

const CryptoList=({crypto})=>{
 return(
        <div>
    {
        
            crypto.map((c,i)=>{
            return(
                <Crypto
                id={crypto[i].id} 
                symbol={crypto[i].symbol}
                price={crypto[i].price}/>
            );
        })
        }
        </div>
 )
}





 export default CryptoList;