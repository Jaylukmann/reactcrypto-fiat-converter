import React from 'react';


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
        return(
          <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            {/* <h2>{this.props.great}</h2> */}
          </div>
        ); 
    }
}
      
     


export default Clock;