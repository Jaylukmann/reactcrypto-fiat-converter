import React,{Component} from 'react';
import  Clock from './container/Clock';
import  SearchCrypto from './functional/SearchCrypto';
import  SearchFiat from './functional/SearchFiat';
import  CryptoList from './functional/CryptoList';
import  FiatList from './functional/FiatList';

import  Calculate from './container/Calculate';
import './App.css';


    class App extends Component{
	    constructor(props){
	    super(props)
        this.state={
          fiat:[],
          crypto:[],
          cryptoSearch:'',
          fiatSearch:'',
          }
      }   

      componentDidMount(){
        fetch("https://currency23.p.rapidapi.com/cripto", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "currency23.p.rapidapi.com",
              "x-rapidapi-key": "a52ac09f88msh86e0f7c158fee09p1d1f93jsn89f1eaefa3e8"
          }
      })
      .then(res => {
        res.json().then(data => {
          this.setState({crypto:data}); 
        })
      });
      }
      componentDidMount(){
        fetch("https://currency23.p.rapidapi.com/exchange?int=1&base=USD&to=EUR", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "currency23.p.rapidapi.com",
              "x-rapidapi-key": "a52ac09f88msh86e0f7c158fee09p1d1f93jsn89f1eaefa3e8"
          }
      })
      .then(res => {
      res.json().then(data => {
        this.setState({fiat:data}); 
      })
    });
    }
    

      onSearchCryptoChange=(event)=>{
        this.setState({cryptoSearch:event.target.value})
        }

      onSearchFiatChange=(event)=>{
          this.setState({fiatSearch:event.target.value})
          }
        
      render(){  
        const filteredCrypto = this.state.crypto.filter(cr=>{
          return cr.symbol.toLowerCase().includes(this.state.cryptoSearch.toLowerCase())
            })

       const filteredFiat= this.state.fiat.filter(fi=>{
              return fi.symbol.toLowerCase().includes(this.state.fiatSearch.toLowerCase())
                })

      return(
        <div className="App">
            <h2 className='welcome'>Welcome Smarty!</h2>
            <h2 className='time'><Clock great={'Time waits for nobody'}/></h2>
            <h3  className='appName'>Crypto-Fiat Converter</h3>
            <h3 className='instruction'>Convert your crypto asset to your local currency below</h3>

           <h3><SearchCrypto onChange={this.onSearchCryptoChange}/></h3>
           <h3><SearchFiat  onChange={this.onSearchFiatChange}/></h3>
            
            <button type='submit' onSubmit={Calculate}>Convert</button>
              <h3 className='result'></h3>
              <h3>
              <ul className='display'>
              <li className='c'><CryptoList crypto={filteredCrypto}/></li>
               <li className='f'><FiatList fiat={filteredFiat}/></li>
              </ul>
               </h3>
               

           <p className="footer">Contact us:Email:jaylukmann@gmail.com,phone:08095832306
                A trademark of Brainy Technologies.
                </p>
        </div>
      )
  }
}
  export default App;