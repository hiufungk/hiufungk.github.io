import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Switch, BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import TopNavBar from './components/TopNavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <TopNavBar/>
					<Switch>
						<Route exact path="/" component={Home}/>
					</Switch>
      </BrowserRouter>
    );
  }
}

export default App;
