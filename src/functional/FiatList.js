import React from 'react';
import Fiat from '../functional/Fiat';

const FiatList = ({ fiat }) => {
	return (
		<React.Fragment>
		<h3>EXCHANGE RATE</h3>

			{fiat.map((fiats,i)=> {
				const{rate}=fiats;
				return(
					<div  key={i}>
					<Fiat 
					  rate={rate} />
					</div>
					)})}
				</React.Fragment>
			
		
	);
};

export default FiatList;
