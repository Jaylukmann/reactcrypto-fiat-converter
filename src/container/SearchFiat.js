
import React,{useState,Component} from 'react';

const SearchCrypto=({props,searchF})=>{
	const [selectedFiat, getSelectedFiat] = useState('');
	const [fiatInputValue, getFiatInputValue] = useState('');

	return(			
		<div className='w-50 pa3 mr2 flex'>

			<input 
			className='input-reset ba b--black-30 pa2 mb2 db w-50'
			type='search'
			placeholder='Search Fiat'
			value={selectedFiat} onChange={event =>getSelectedFiat(event.target.value)}
			onChange={(event) =>searchF(event)}/>

			<input 
			className='input-reset ba b--black-30 pa2 mb2 db w-50'
			type='search'
			placeholder='Fiat Amount'
			value={fiatInputValue} onChange={event => getFiatInputValue(event.target.value)}
			onChange={(event) =>searchF(event)}/>

		</div>
	)
}
	export default SearchCrypto;


// class SearchFiat extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			fiatInputValue:"",
// 			selectedFiat:"",
	
// 		};
// 	}
	

// 	getFiatInputValue(event) {
// 		    this.setState({
// 			fiatInputValue: event.target.value
// 		    });
// 		  }

// 	getSelectedFiat(event) {
// 		    this.setState({
// 			selectedFiat: event.target.value
// 		    });
// 		  }

// // destructure 'searchF' from props - instead of props.searchF

// render(){
// 	const {searchF}=this.props;
// 	const{fiatInputValue}=this.state;
// 	const SearchFiat = ({searchF}) => {
// 		return(
// 		<div className='w-50 pa3 mr2 flex'>
		
// 		<input
// 			className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
// 			type='search'
// 			placeholder='Search Fiat'
// 			 onChange={event => this.getSelectedFiat(event)}
// 			onChange={(event) =>searchF(event)} // set proper handling of onChange function
// 			/></div>
// 			)
		
// 		}
// 	return (
// 		<div className='flex w-50 pa3 mr2'>
		
// 		<input
// 			className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
// 			type='search'
// 			placeholder='Search Fiat'
// 			 onChange={event => this.getSelectedFiat(event)}
// 			onChange={(event) =>searchF(event)} // set proper handling of onChange function
// 			/>
// 		<input 
// 			className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
// 			type='text' placeholder='Enter fiat amount'
// 			value={fiatInputValue} onChange={event => this.getFiatInputValue(event)}>
// 			</input>
// 		</div>
// 	);

//    }

// }   


// export default SearchFiat;
