import React from "react";
import {NavLink} from 'react-router-dom';

import {Container, Navbar, Nav} from "react-bootstrap";
import logo from '../../Img/logo.svg';

export class Header extends React.Component {
    render() {
        return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt="logo"
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                        />{" "}
                        React
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink 
                                className="nav-link"
                                to="/" >
                                    First
                            </NavLink>
                            <NavLink 
                                className="nav-link"
                                to="/FreeComp" >
                                    Second
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        );
    }
}

export default Header;