import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home}/>
					</Switch>
      </BrowserRouter>
    );
  }
}

export default App;
