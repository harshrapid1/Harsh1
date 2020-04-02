import React, { Component } from 'react'

class ClassClick extends Component {

    classEventHandler(){
        console.log('ClassButtonClicked');
    }
    render() {
        return (
            <div>
                <div>Class Clicked </div>
                <button onClick = {this.classEventHandler}>ClassClick</button>
            </div>
        )
    }
}

export default ClassClick



