import React, { Component } from 'react';
import './App.css';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import CanvasContainer from './containers/CanvasContainer';
import ControllsContainer from './containers/ControllsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ControllsContainer />
          <CanvasContainer />          
      </div>
    );
  }
}

export default App;
