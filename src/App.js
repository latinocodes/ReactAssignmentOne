import React, { Component } from 'react';
import './App.css';

import Userinput from'./Input/Userinput';
import Useroutput from './Output/Useroutput'


class App extends Component {
  state = {
    userName: "Jose Lara"
  };

  inputHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {

    const style = {
      border: '2px solid #eee',
      borderRadius: '4px',
      padding: '8px',
      cursor:'pointer',
      textAlign: 'center',
      backgroundColor: '#eee',
      float: 'left'
    };

    return (
      <div className="App" style={style}>
      <h1>Hi, doing react</h1>
          <Useroutput userName={this.state.userName}/>
          <Userinput  change={this.inputHandler}/>
      </div>
    );
  }
}

export default App;
