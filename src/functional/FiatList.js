import React from 'react';
import Fiat from '../functional/Fiat';

const FiatList = ({ fiat }) => {
	return (
		<div>
		<h3>FIATS TICKER RATE</h3>

			{fiat.map((fiat,i)=> {
				const{rate}=fiat;
				return(
				<React.Fragment key={i}>
				<Fiat  
					  rate={rate} />
				</React.Fragment>
			)})}
		</div>
	);
};

export default FiatList;
