import React from 'react';

const Fiat = ({ rate, ticker }) => {
	return (
		<div className='fiat'>
			<p className='symbol'>{ticker}</p>

			<p className='price'>{rate}</p>
		</div>
	);
};

export default Fiat;
