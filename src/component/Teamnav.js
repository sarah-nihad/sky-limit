import React, { Component } from 'react';
import './nav1.css'
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
class Teamnav extends Component {


    render() {
        return (
            <div className="App">


                <Navbar id="teamnav" expand="lg">


                    <Navbar.Brand > <img src={require('../img/ll.png')} id="logott" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                      
                        <div id="teamrowtt">
                            <div id='temnavmedia'>
                            <Link to="/" style={{ textDecoration: 'none' }} > <div id="pric">Home</div></Link>
                            </div>
                            <div id='temnavmedia'>
                            <NavLink to="/Howtouse" style={{ textDecoration: 'none' }}> <div id="how"> How To Use</div></NavLink>
                            </div>
                            <div id='temnavmedia'>
                            <NavLink to="/Objective" style={{ textDecoration: 'none' }}><div id="abj">Concept</div></NavLink>
                            </div>
                            <div id='temnavmedia'>
                            <NavLink to="/Report" style={{ textDecoration: 'none' }} > <div id="rep">Reports</div></NavLink>
                            </div>
                            <div id='temnavmedia'>
                            <NavLink to="/Pricing" style={{ textDecoration: 'none' }}> <div id="pric">Services</div></NavLink>
                            </div>
                        </div>
                    </Navbar.Collapse>

                </Navbar>













            </div>
        );
    }
}

export default Teamnav;