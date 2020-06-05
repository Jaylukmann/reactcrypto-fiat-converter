import React from 'react';
import Fiat from '../functional/Fiat';

const FiatList = ({fiat}) => {
	return (
		<div>
			{/* <p className='pt13 f3 blue'>FIAT RATE</p> */}

			{fiat.map((f, i) => {
				const {ticker,rate } = f;
				return (
					<div key={i}>
						<Fiat ticker={ticker} rate={rate}  />
					</div>
				);
			})}
		</div>
	);
};

export default FiatList;
