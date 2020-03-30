import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                Message : "Subscribe Me"     
        }
       // this.eventClick = this.eventClick.bind(this)
    }
    // eventClick(){
    //     this.setState({
    //         Message : "Thanks for Subscribing"
    //     })
    // }
    eventClick = () => {
        this.setState({
            Message : "Thanks for Subscribing "
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.Message}</div>
                <button onClick = {this.eventClick}> EventBindClick </button>
            </div>
        )
    }
}

export default EventBind
