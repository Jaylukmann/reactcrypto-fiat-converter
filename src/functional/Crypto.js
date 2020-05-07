import React from 'react' ;



 const Crypto =({code,price})=> {

    return (

     <div className='crypto'>
      <p  className='symbol'>{code}</p>
      <p  className='price'>{price}</p> 
        
     </div>
     
     );
  }
   
   

export default Crypto;
