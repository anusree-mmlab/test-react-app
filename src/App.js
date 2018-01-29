import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h3>T App</h3>
       <Person name="Roger" age="36"/>
       <Person name="Sachin" age="44"><p><span className="hobbyLabel">Hobbies Are:</span> <span className="hobby">Football, Travelling</span></p></Person>
       <Person name="Sindhu" age="25"/>
      </div>
    );
  }
}

export default App;
