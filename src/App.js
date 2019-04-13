import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
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
                    <Route exact path="/" component={Home}>
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/about-me" component={AboutMe}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
