import React from 'react';
import  Crypto from '../functional/Crypto';

const CryptoList=({crypto})=>{
 return(
        <div>
    {
         crypto.map((c,i)=><React.Fragment key={i}>
            <Crypto
                id={crypto[i].id} 
                code={crypto[i].code}
                price={crypto[i].price}/>
            </React.Fragment>
            )
    }
        </div>
 )
}





 export default CryptoList;
