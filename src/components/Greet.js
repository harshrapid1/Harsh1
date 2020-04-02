import React from 'react';

// function Greet(){
//     return <h1>Hello Nawaz</h1>
// }
   
const Greet = props =>{ 
    console.log(props);
    return (
    <div>
    <h1>Greet function Component1</h1>
    <h3>Hi I am {props.Name} and aka {props.HeroName}</h3>
    <p>{props.children}</p>
    </div>
    )    
}
    
export default Greet;


