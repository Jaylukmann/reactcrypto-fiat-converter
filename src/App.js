
import React,{Component} from 'react';
import  Clock from './container/Clock';
import  SearchCrypto from './functional/SearchCrypto';
import  SearchFiat from './functional/SearchFiat';
import  CryptoList from './functional/CryptoList';
import  FiatList from './functional/FiatList';
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
		};
	}

	fetchcrypto=()=>{
		fetch("https://mineable-coins.p.rapidapi.com/coins", {
			"method": "GET",
			"headers": {
			"x-rapidapi-host": "mineable-coins.p.rapidapi.com",
			"x-rapidapi-key": "1cafc1611bmshd26f0100d392252p12b743jsn77d11e12a875"
			}
			})
				.then((res) => res.json())
				.then((data) => {
				this.setState({crypto:data});
	  		})
	}

	fetchfiat=()=>{
		fetch("https://currencyscoop.p.rapidapi.com/latest", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "currencyscoop.p.rapidapi.com",
				"x-rapidapi-key": "1cafc1611bmshd26f0100d392252p12b743jsn77d11e12a875"
			}
			})
				.then((res) => res.json())
				.then((data) => {
				this.setState({fiat:data.response});
				});
	}

	componentDidMount() {
		this.fetchcrypto();
		this.fetchfiat();
	}


	onSearchCryptoChange =(event) => {
		this.setState({cryptoSearch:event.target.value });
	};

	onSearchFiatChange =(event) => {
		 this.setState({fiatSearch:event.target.value });
		 
	};


	render() {
		const {crypto,fiat,cryptoSearch,fiatSearch} = this.state;
		const filteredCrypto = crypto.filter(cryptos => {
			return cryptos.coin.toLowerCase().includes(cryptoSearch.toLowerCase());
		});

		const filteredFiat = fiat.filter(fiats => {
			return fiats.rates.toLowerCase().includes(fiatSearch.toLowerCase());
		});

      if(!fiat || !crypto){
         return <h1>LOADING...</h1>
      }
      else{

		return (
			<div className='App'>
				<h2 className='welcome'>Welcome Smarty!</h2>
				<h2 className='time'>
					<Clock great={'Time waits for nobody'} />
				</h2>
				<h3 className='appName'>Crypto-Fiat Converter</h3>
				<h3 className='instruction'>
					Convert your crypto asset to your local currency below
				</h3>

				<h3>
					<SearchCrypto searchC={this.onSearchCryptoChange} />
				</h3>
				<h3>
					<SearchFiat searchF={this.onSearchFiatChange} />
				</h3>

				<button type='submit' onSubmit={Calculate}>
					Convert
				</button>
				{/* <h3 className='result'></h3> */}
				<h3>
					<ul className='display'>
						<li className='c'>
							<CryptoList crypto={filteredCrypto} />
						</li>
						<li className='f'>
							<FiatList fiat={filteredFiat} />
						</li>
					</ul>
				</h3><br/><br/><br/><br/><br/><br/>

				<p className='footer'>
					Contact us:Email:jaylukmann@gmail.com,phone:08095832306 A trademark of
					Brainy Technologies.
				</p>
			</div>
		);
	}
}

    }
  export default App;
 
