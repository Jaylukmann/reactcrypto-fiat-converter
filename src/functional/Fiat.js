import React from 'react';

const Fiat = ({ ticker,rate }) => {
	return (
		<div className='bg-blue white dib mr7 pa2 ma2 bs2 grow'>
			<h3 >{ticker}</h3>
			<p >{rate}</p>
		</div>
	);
};

export default Fiat;
