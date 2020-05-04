import React from 'react' ;


 const Fiat =({symbol,rate})=> {

    return (

     <div className='fiat'>
     
  
      <p className='symbol'>{symbol}</p>
      <p className='price'>{rate}</p> 
        
     </div>
     
     );
  }
   
   

export default Fiat;