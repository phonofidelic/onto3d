import React, { Component } from 'react';
import './App.css';
import 'aframe';
import CanvasContainer from './containers/CanvasContainer';
import ControlsContainer from './containers/ControlsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ControlsContainer />
          <CanvasContainer />          
      </div>
    );
  }
}

export default App;
