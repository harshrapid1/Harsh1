import React, { Component } from 'react'

export class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    render() {

        return (
        this.state.isLoggedIn?<h2>Greet Kar rahe hai</h2>:<h2>Sahi Password Dalo</h2>
        )
    }
}

export default UserGreetings
