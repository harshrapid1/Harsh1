import React from 'react'

function FunctionClick() {

    function eventHandlerFn(){
        console.log('button Clicked');
    }
    return (
        <div>
            <button onClick= {eventHandlerFn} >click</button>
        </div>
    )
}

export default FunctionClick




