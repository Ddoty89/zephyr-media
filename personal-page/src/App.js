import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';

class App extends Component {
  render() {
    return (
        <div className="App">
			<Header />
        	<About />
      	</div>
    );
  }
}

export default App;
