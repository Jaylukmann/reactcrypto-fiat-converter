
	import React from 'react';

	const SearchFiat = ({toggleFiat,searchF,listF,setFiatAmount,fiat, selectFiat}) => {
		
		const listFiatTickers = () => {
			const tickers =  fiat.map(f => f.ticker).sort() // Extract the tickers and sort alphabetically
			return tickers.map(t => <option key={t} value={t}>{t}</option>) // create option element for each fiat
	}

		return (
			<form className='tc'>
			<div className='flex w-160 pa3 mr2 tc mr1 ml1'>
			
		{/* <button onClick={(event) =>toggleCrypto(event)}></button> */}
		<select className='input-reset ba b--black-20 pa2 mb2 db w-25'
			onChange={(e) => selectFiat(e)}
		>
	
		  {
				listFiatTickers()
			}
  	</select>  
		
		  <input 
		  className='input-reset ba b--black-20 pa2 mb2 db w-70'
		  type='text' placeholder="Enter Fiat amount"
		  onChange={(event) => setFiatAmount(event)}>
		  </input>

		 </div>
		 </form>
		 );
      }
	  export default SearchFiat;

