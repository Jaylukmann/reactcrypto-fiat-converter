import React from 'react' ;



 const Crypto =({symbol,price})=> {

    return (

     <div className='crypto'>
      <p  className='symbol'>{symbol}</p>
      <p  className='price'>{price}</p> 
        
     </div>
     
     );
  }
   
   

export default Crypto;