import React, { Component } from 'react'
import ChildComponent1 from './ChildComponent1';

class ParentComponent1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : "Parent Component"
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(CHILD){
        alert(`parent name : ${this.state.parentName} from ${CHILD}`);
    }

    render() {
        return (
            <div>
                <ChildComponent1 greetHandler = {this.greetParent}></ChildComponent1>
            </div>
        )
    }
}

export default ParentComponent1
