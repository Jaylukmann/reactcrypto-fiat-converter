import React, { Component } from 'react';
import Clock from './container/Clock';
import SearchCrypto from './functional/SearchCrypto';
import SearchFiat from './functional/SearchFiat';
import CryptoList from './functional/CryptoList';
import FiatList from './functional/FiatList';
import Calculate from './container/Calculate';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fiat: [],
			crypto: [],
			cryptoSearch: '',
			fiatSearch: '',
			filteredFiat: [],
		};
	}

	fetchcrypto = () => {
		fetch('https://mineable-coins.p.rapidapi.com/coins', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'mineable-coins.p.rapidapi.com',
				'x-rapidapi-key': '1cafc1611bmshd26f0100d392252p12b743jsn77d11e12a875',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				this.setState({ crypto: data });
			});
	};

	fetchfiat = () => {
		fetch('https://currencyscoop.p.rapidapi.com/latest', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'currencyscoop.p.rapidapi.com',
				'x-rapidapi-key': '1cafc1611bmshd26f0100d392252p12b743jsn77d11e12a875',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				const fiat = Object.entries(data.response.rates).map((f) => {
					return { ticker: f[0], rate: f[1] };
				});
				this.setState({ fiat });
			});
	};

	componentDidMount() {
		this.fetchcrypto();
		this.fetchfiat();
	}

	onSearchCryptoChange = (event) => {
		this.setState({ cryptoSearch: event.target.value.toLowerCase() });
	};

	onSearchFiatChange = (event) => {
		this.setState({ fiatSearch: event.target.value.toLowerCase() }); // Change to lowercase before saving to component state
	};

	render() {
		const { crypto, fiat, cryptoSearch, fiatSearch } = this.state;
		const filteredCrypto = crypto.filter((cryptos) => {
			return cryptos.coin.toLowerCase().includes(cryptoSearch) ||
			 cryptos.name.toLowerCase().includes(cryptoSearch);
		});

		const filteredFiat = fiat.filter((fiats) => {
			return fiats.ticker.toLowerCase().includes(fiatSearch);
		});

		if (!fiat || !crypto) {
			return <h1>LOADING...</h1>;
		} else {
			return (
				<div className='App'>
					<h2 className='blue bg-white'>Welcome Smarty!</h2>
					<h2 className='blue bg-white'>
						<Clock great={'Time waits for nobody'} />
					</h2>
					<h3 className='white bg-blue'>Crypto-Fiat Converter</h3>
					<h3 className='white'>
						Convert your crypto asset to your local currency below
					</h3>

					<h3 className='flex justify-center tc'>
						<SearchCrypto searchC={this.onSearchCryptoChange} />
					
						<SearchFiat searchF={this.onSearchFiatChange} />
					</h3>

					<button type='submit' onSubmit={Calculate}>
						Convert
					</button>
					{/* <h3 className='result'></h3> */}
					<h3>
						<ul className='flex justify-center tc list pl0'> 
						
							<li className=' justify-center tc'>
							<h3 className='flex outline w-45 pa3 mr2 blue tc'>CRYPTOCURRENCIES/PRICES</h3>
								<CryptoList crypto={filteredCrypto} />
							</li>
							<li className=' justify-center tc'>
							<h3 className='flex outline w-40 pa3 ml3 blue tc'>FIATS/RATES</h3>
								<FiatList fiat={filteredFiat} />
							</li>
						</ul>
						<hr></hr>
					</h3>

					<p className='footer'>
						Contact us:Email:jaylukmann@gmail.com,phone:08095832306 A trademark
						of Brainy Technologies.
					</p>
				</div>
			);
		}
	}
}
export default App;
