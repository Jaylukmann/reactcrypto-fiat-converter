import React from 'react';
// import React,{useState} from 'react';


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()}
    }

    componentDidMount(){
        this.timerID=
        setInterval(
            ()=>this.tick(),1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

      tick=(props)=> {
          this.setState({date:new Date()});
      }

      render(){  
          const {great}=this.props;
        return(
          <div>
            <p><span className='mr2 f3'>{great}</span><span> {new Date().toLocaleTimeString()}</span></p>
            </div>
            
          
        ); 
    }
}
      
     


export default Clock;