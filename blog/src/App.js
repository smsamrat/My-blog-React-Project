import './App.css';

import React, { Component } from 'react'
import Navber from './components/Navber';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navber/>
        <News/>
      </div>
    )
  }
}

