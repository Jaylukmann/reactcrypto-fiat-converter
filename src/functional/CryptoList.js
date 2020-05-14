import React from 'react';
import Crypto from '../functional/Crypto';

const CryptoList = ({ crypto }) => {
	return (
		<div>
			{/* <p className='f3 blue'>CRYPTOCURRENCY</p> */}
			{crypto.map((cryptos, i) => {
				const {coin, price } = cryptos;
				return (
					<div key={i}>
						<Crypto coin={coin} price={price} />
					</div>
				);
			})}
		</div>
	);
};

export default CryptoList;
