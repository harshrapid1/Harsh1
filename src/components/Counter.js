import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0 
        }
    }

     increment(){
        // this.setState({
        //     count : this.state.count +1 
        // },() => {console.log(`calbackvalue - ${this.state.count}`)} )
        // // this.state.count = this.state.count +1 
        // console.log(this.state.count)
        this.setState((prevState,props) => ({
            count: prevState.count + this.props.addValue
        }), ()=> {console.log(`callbackval - ${this.state.count}`)})
        console.log(this.state.count)
    }
    
     incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment(); 
        this.increment();
    }
    render() {
        return (
            <div>
                <h1>Counter Class increment COUNT - {this.state.count} </h1> 
               <button onClick = {()=> this.incrementFive()}>INC</button>
            </div>
        )
    }
}

export default Counter


