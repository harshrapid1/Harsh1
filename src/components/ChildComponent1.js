import React from 'react'

function ChildComponent1(props) {
    return (
        <div>
            <button onClick = {()=> props.greetHandler("child")}>GreetHandler</button>
        </div>
    )
}

export default ChildComponent1
