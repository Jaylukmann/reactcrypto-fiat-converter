import React from 'react' ;



 const Crypto =({coin,name,price})=> {
    return (
  <div className='crypto'>
   <p  className='symbol'>{coin}</p>
   <p  className='symbol'>{name}</p>
 
     <p className='price'>{price}</p>
  
      </div>
   
      
     
     );
  }
   
   

export default Crypto;
