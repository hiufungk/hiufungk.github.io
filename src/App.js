import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home"
import TopNavBar from './components/TopNavBar';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

const theme = createMuiTheme({
    palette: {
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <TopNavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
