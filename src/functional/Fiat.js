import React from 'react' ;


 const Fiat =({code,rate})=> {

    return (

     <div className='fiat'>
     
  
      <p className='symbol'>{code}</p>
      <p className='price'>{rate}</p> 
        
     </div>
     
     );
  }
   
   

export default Fiat;
