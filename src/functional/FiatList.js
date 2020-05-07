import React from 'react';
import  Fiat from '../functional/Fiat';





const FiatList=({fiat})=>{
    return(
        <div>
    {

      fiat.map((f,i)=><React.Fragment key={i}>
               <Fiat
                   id={fiat[i].id} 
                   code={fiat[i].code}
                   rate ={fiat[i].rate}/>
                    </React.Fragment>
              )
    }
        </div>
    )
}
   
   
   
   
   
    export default FiatList;
