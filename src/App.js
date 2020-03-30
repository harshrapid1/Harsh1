import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter' 
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent1 from './components/ParentComponent1';
import UserGreetings from './components/UserGreetings';
class App extends Component{
  render(){
    return (
      <div className="App">
        <UserGreetings />
        {/* <ParentComponent1 /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter addValue = {2} ></Counter> */}
        {/* <Greet Name = 'Bruce' HeroName = "Batman" >
          <p className = "name">Hi This Is Hello Component1 </p>
          <p className = "name">Hi This Is Hello Component2 </p>
          </Greet>
        <Greet Name = 'Tommy' HeroName = "Superman" ><button>ClickMe </button></Greet>
        <Greet Name = 'Tony' HeroName = "Ironman"><button>TryOnce</button></Greet>
        <Welcome Name = 'Bruce' HeroName = "Batman" ><button>TryOnce</button></Welcome>
        <Welcome Name = 'Tommy' HeroName = "Superman"/>
        <Welcome Name = 'Tony' HeroName = "Ironman"/> */}
        {/* <Message />   */}
        
      </div>
    )
  
    }
}

export default App;
