import React ,{Component} from 'react' ;

class Message extends Component {
    constructor(){
        super()
        this.state = {
            Message : "Message class Component"
        }
    }

    changeMeassage(){
            this.setState({
                Message: "Thanks for joining us"
            })
            
        
    }
    render(){
        
        return(
            <div> 
                <h1>{this.state.Message}</h1>
                 <button onClick ={() =>this.changeMeassage()}> Subscribe</button>
            </div>
        )
    }
}

export default Message ;