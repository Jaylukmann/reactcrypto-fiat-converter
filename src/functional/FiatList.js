import React from 'react';
import Fiat from '../functional/Fiat';

const FiatList = ({ fiat }) => {
	console.log(fiat);
	return (
		<div>
			{fiat.map((f, i) => (
				<React.Fragment key={i}>
					<Fiat id={f.id} code={f.code} rate={f.rate} />
				</React.Fragment>
			))}
		</div>
	);
};

export default FiatList;
