import React from 'react';
import Fiat from '../functional/Fiat';

const FiatList = ({ fiat }) => {
	return (
		<div>
			<h3>EXCHANGE RATE</h3>

			{fiat.map((f, i) => {
				const { rate, ticker } = f;
				return (
					<div key={i}>
						<Fiat rate={ticker} ticker={rate} />
					</div>
				);
			})}
		</div>
	);
};

export default FiatList;
