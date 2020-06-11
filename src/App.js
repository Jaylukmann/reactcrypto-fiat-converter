import React, { Component } from 'react';
import Clock from './container/Clock';
import SearchFiat from './container/SearchFiat';
import SearchCrypto from './container/SearchCrypto';
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
			cryptoAmount: 0,
			fiatAmount: 0,
			selectedFiat: null,
			selectedCrypto: null,
			convertToCrypto: true
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
     //searchC props
	onSearchCryptoChange = (event) => {
		this.setState({ cryptoSearch: event.target.value.toLowerCase() });
	};
      //searchF props
	onSearchFiatChange = (event) => {
		this.setState({ fiatSearch: event.target.value.toLowerCase() }); // Change to lowercase before saving to component state
	};
      //setCryptoAmount props
	onCryptoAmount = (event) => {
		this.setState({ cryptoAmount: Number(event.target.value) });
		this.setState({ fiatAmount: 0 });
	};
        //setFiatAmount props
	onFiatAmount = (event) => {
		this.setState({ cryptoAmount: 0 });
		this.setState({ fiatAmount: Number(event.target.value) }); // Change to lowercase before saving to component state
	};
		 //toggleCrypto props
		  toggleCryptoButton=(event)=>{
			this.setState({cryptoDisplay:true});
			// this.listCrypto();
				
		};
			 //toggleFiat props
		 toggleFiatButton=(event)=>{
			this.setState({fiatDisplay:true});
			// this.listFiat();	
		};

	selectFiat = (e) => {
		const selectedFiat = this.state.fiat.find(f => f.ticker === e.target.value) // identify the fiat from the list in the state
		this.setState({ selectedFiat }) // set the selected fiat for future logic calls
	}

	selectCrypto = (e) => {
		const selectedCrypto = this.state.crypto.find(f => f.coin === e.target.value) // identify the fiat from the list in the state
		this.setState({ selectedCrypto }) // set the selected fiat for future logic calls
	}

	changeConversion = () => {
		this.setState({ convertToCrypto: !this.state.convertToCrypto })
	}

	render() {
		const { crypto, fiat, cryptoSearch, fiatSearch } = this.state;

		const filteredCrypto = crypto.filter((cryptos) => {
			return cryptos.coin.toLowerCase() === (cryptoSearch) ||
			 cryptos.name.toLowerCase() === (cryptoSearch);
		});

		const filteredFiat = fiat.filter((fiats) => {
			return fiats.ticker.toLowerCase() === (fiatSearch);
		});

		const listFiat= fiat.filter((f) => {
			return f.ticker.toLowerCase().includes(SearchFiat);
		});
	
		const listCrypto = crypto.filter((c) => {
			return c.coin.toLowerCase().includes(SearchCrypto) ||
			c.name.toLowerCase().includes(SearchCrypto);
			});

		

		if(!fiat && !crypto) {
			return <h1 className='f1 blue grow tc'>LOADING DATA...</h1>;
		   } else {
			return (
				<div className='App'>
					<h1 className='blue bg-white'>Welcome Smarty!</h1>
					<p className='blue bg-white'>
						<Clock clockMsg={'Move,time counts!'} />
					</p>
					<h3 className='white bg-blue'>Crypto-Fiat Converter</h3>
					<h3 className='white'>
						Convert your crypto asset to your local currency below
					</h3>

					<h3 className='flex justify-center tc'>
					   <SearchCrypto 
					   searchC={this.onSearchCryptoChange} 
					   toggleCrypto ={this.toggleCryptoButton}
					   selectedCrypto={this.state.cryptoSearch} 
						 setCryptoAmount={this.onCryptoAmount}
						 crypto={this.state.crypto}
						selectCrypto={this.selectCrypto}	
							/>  
					</h3>
					 <button onClick={this.changeConversion}>
					 switch:CONVERT FROM {this.state.convertToCrypto ? 'CRYPTO' : 'FIAT'} TO {this.state.convertToCrypto ? 'FIAT' : 'CRYPTO'}
					 </button> 
						
						
						
					{/* <p><CryptoList crypto={this.listCrypto} /></p> */}

					<h3 className='flex justify-center tc'>
						<SearchFiat  
						searchF={this.onSearchFiatChange}
						toggleFiat ={this.toggleFiatButton} 
						selectedFiat={this.state.fiatSearch}
						setFiatAmount={this.onFiatAmount}
						fiat={this.state.fiat}	
						selectFiat={this.selectFiat}
					/>
					</h3>
					{/* <p> <FiatList fiat={this.listFiat} /></p> */}

					<h3 className='result white bg-blue'>
					Conversion:
					<Calculate 
						selectedCrypto={this.state.selectedCrypto}
						selectedFiat={this.state.selectedFiat}
						cryptoSearch={this.state.cryptoSearch}
						cryptoValue={this.state.cryptoAmount}
						fiatSearch={this.state.fiatSearch}
						fiatValue={this.state.fiatAmount}
						filteredCrypto={filteredCrypto}
						filteredFiat={filteredFiat}				
						convertToCrypto={this.state.convertToCrypto}	
					/></h3>
					

					<h3>
						<ul className='flex justify-center tc list pl0'> 
						
							<li className=' justify-center tc'>
							<h3 className='flex outline w-45 pa3 mr2 blue tc'>CRYPTOCURRENCIES(USD)</h3>
								<CryptoList crypto={filteredCrypto} />
							</li>
							<li className=' justify-center tc'>
							<h3 className='flex outline w-40 pa3 ml3 blue tc'>FIATS(USD)</h3>
								<FiatList fiat={filteredFiat} />
							</li>
						</ul>
					</h3>
					<hr></hr>

					<p className='b white bg-black'>
						Contact us:Email:jaylukmann@gmail.com,phone:08095832306 A trademark
						of Brainy Technologies.
					</p>
				</div>
			);
		}
	}
}

export default App;
