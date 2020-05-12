import React from 'react';
import Crypto from '../functional/Crypto';

const CryptoList = ({ crypto }) => {
	return (
		<div>
			<h3>TICKER CRYPTOCURRENCY PRICE</h3>
			{crypto.map((cryptos, i) => {
				const { coin, name, price } = cryptos;
				return (
					<div key={i}>
						<Crypto coin={coin} name={name} price={price} />
					</div>
				);
			})}
		</div>
	);
};

export default CryptoList;
