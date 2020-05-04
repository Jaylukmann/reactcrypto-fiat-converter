import React from 'react';
import  Fiat from '../functional/Fiat';





const FiatList=({fiat})=>{
    return(
           <div>
       {
        fiat.map((f,i)=>{
               return(
                   <Fiat
                   id={fiat[i].id} 
                   symbol={fiat[i].symbol}
                   rate ={fiat[i].rate}/>
               );
           })
       }
           </div>
    )
   }
   
   
   
   
   
    export default FiatList;
