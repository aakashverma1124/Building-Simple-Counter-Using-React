import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from "react-dom";
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from "./components/learning-examples/ThirdComponent"
import Counter from "./components/counter/Counter";


class App extends Component {
  render() {
    return (
        <div className="App">
          <Counter />

        </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
        <div className="App">
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
        </div>
    );
  }
}


export default App;
