import React, { Component } from 'react';
import CommonFun from './javascript/commonFun';
import RouteUrl from './router'
import './App.css';
class App extends Component {
  render() {
    console.log('________公共函数_________:')
    console.log(CommonFun);
    return (
      <div className="App">
        <RouteUrl/>
      </div>
    );
  }
}

export default App;
