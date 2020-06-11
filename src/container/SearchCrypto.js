import React from 'react';

const SearchCrypto = ({toggleCrypto,searchC,listC,setCryptoAmount, crypto, selectCrypto})=>{
	const listCryptoSymbols = () => {
		const symbols =  crypto.map(c => {
			const coin = { id: c.id, ticker: c.coin } // Extract the coin property and rename it "tickers"
			return coin	
		}).sort() //  and sort alphabetically
		return symbols.map(s => <option key={s.id} value={s.ticker}>{s.ticker}</option>) // create option element for each coin
}
	return(
		<form className='tc'>
		<div className='flex w-160 pa3 mr1 ml1 tc'>
	
		{/* <button onClick={(event) =>toggleCrypto(event)}></button> */}
		<select className='input-reset ba b--black-20 pa2 mb2 db w-25'
		onChange={(e) => selectCrypto(e)}
		>
		  {
				listCryptoSymbols()
			}
  	</select> 
		
		  <input 
		  className='input-reset ba b--black-20 pa2 mb2 db w-70'
		  type='text' placeholder="Enter Crypto amount"
		  onChange={(event) => setCryptoAmount(event)}>
		  </input>

		 </div>
		 </form>
		 );
      }


export default SearchCrypto;
