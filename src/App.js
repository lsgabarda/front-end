import React, { Component } from 'react';
import './App.css';

import Dropdown from './components/Dropdown'

class App extends Component {
  render() {
    const anArray = ["Value1","Value2","Value3","Value4","Value5",];
    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        <Dropdown options={anArray}/>
      </div>
    );
  }
}

export default App;
