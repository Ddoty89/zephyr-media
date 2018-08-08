import React, { Component } from 'react';
import './App.css';

import IndexHeader from './components/Header/IndexHeader'
import IndexMain from './components/Main/IndexMain'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexHeader />
        <IndexMain />
      </div>
    );
  }
}

export default App;
