import React, { Component } from 'react';
import User from './user'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          coucou
        </div>
        <User user={{
          name:"toto",
          description:"Je Suis Toto",
          isHuman:true,
          img:"http://lorempixel.com/400/200"
        }}/>
      </div>
    );
  }
}

export default App;
