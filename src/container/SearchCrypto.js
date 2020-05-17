
import React,{useState,Component} from 'react';

const SearchCrypto=({props,searchC})=>{
	const [cryptoInputValue, getCryptoInputValue] = useState('');
	const [selectedCrypto, getSelectedCrypto] = useState('');
	return(			
		<div className='w-50 pa3 mr2 flex'>
			<input 
			className='input-reset ba b--black-30 pa2 mb2 db w-50'
			type='search'
			placeholder='Search Cryptocurrency'
			value={cryptoInputValue} onChange={event =>getSelectedCrypto(event.target.value)}
			onChange={(event) =>searchC(event)}/>

			<input 
			className='input-reset ba b--black-30 pa2 mb2 db w-50'
			type='search'
			placeholder='Cryptocurrency Amount'
			value={selectedCrypto} onChange={event => getCryptoInputValue(event.target.value)}
			onChange={(event) =>searchC(event)}/>

		</div>
	)
}

export default SearchCrypto;

// class SearchCrypto extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 		cryptoInputValue:"",
// 		selectedCrypto:''
// 		};
// 	}
	// getCryptoInputValue(event) {
	// 	this.setState({
	// 		cryptoInputValue: event.target.value
	// 	});
	//   }

	//   getSelectedCrypto(event) {
	// 	this.setState({
	// 	selectedCrypto: event.target.value
	// 	});
	//   }

 
    //   render(){
	// 	const {searchC}= this.props
	// 	const {cryptoInputValue}= this.state
	// 	const SearchCrypto = ({searchC})=>{
			{/* return(
				
				<div className='w-50 pa3 mr2 flex'>
				<input 
				className='input-reset ba b--black-30 pa2 mb2 db w-50'
				type='search'
				 placeholder='Search Cryptocurrency'
				 value={selectedCrypto} onChange={event =>getSelectedCrypto(event)}
				 onChange={(event) =>searchC(event)}
				 */}
				 {/* /> */}
				 {/* </div>
				  
			)}
          return(
              <div>
			 
       <input 
		className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
		type='search'
		 placeholder='Search Cryptocurrency'
		 value={this.state.selectedCrypto} onChange={event => this.getSelectedCrypto(event)}
		 onChange={(event) =>searchC(event)}
		 /> */}
		  {/* <input 
		  className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
		  type='text' placeholder="Enter Crypto amount"
		  value={cryptoInputValue} onChange={event => this.getCryptoInputValue(event)}></input>
              </div>
          )
      }
    }
export default SearchCrypto; */}