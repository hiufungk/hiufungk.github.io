import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import './css/TopNavBar.css';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import { HashLink } from "react-router-hash-link";

class TopNavBar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/">
                    Kevin Chang
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/projects">
                            Projects
                        </NavLink>
                        <HashLink className="nav-link" to="/home#about-me">
                            About Me
                        </HashLink>
                        <HashLink className="nav-link" to="/home#work-exp">
                            Work Experience
                        </HashLink>
                    </Nav>
                    <a
                        href="http://github.com/hiufungk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Tooltip title="View my GitHub">
                            <IconButton className="github">
                                <i className="fab fa-github"/>
                            </IconButton>
                        </Tooltip>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kevinhfchang/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Tooltip title="View my Linkedin">
                            <IconButton className="linkedin">
                                <i className="fab fa-linkedin"/>
                            </IconButton>
                        </Tooltip>
                    </a>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNavBar;

