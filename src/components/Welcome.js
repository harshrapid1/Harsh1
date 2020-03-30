import React,{ Component } from 'react';

class Welcome extends Component {
    render(){
        return (
            <div>
            <h1>Welcome Class Component1</h1>
             <h3>Hi I am {this.props.Name} and aka {this.props.HeroName}</h3>
             {this.props.children}
            </div>
        )
    }
    
}

export default Welcome ; 