import React, { Component } from 'react';
import './nav1.css'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
class Teamnav extends Component {
    constructor() {
        super();
        this.state = {
            redir: false,
        }
    }

    renderRedirect() {
        if (this.state.redir) {
            return (
                <Redirect to='/Teami' />
            )
        }
    }
    render() {
        
        return (
            <div id="Appnav">


                <Navbar id="teamnav" expand="lg">
 <Navbar.Brand >  <Link to='./Teami'>  <img src={require('../img/log.png')} alt='img' id="logott" /></Link> 
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
                            <NavLink to="/Howtouse" style={{ textDecoration: 'none' }}> 
                            <div id="how"> How To Use</div>
                            </NavLink>
                            </div>
                            <div id='temnavmedia'>
                      
                            <NavLink to="/Concept" style={{ textDecoration: 'none' }} >     <div  id="abj">Concept</div></NavLink>
                            
                            </div>
                            <div id='temnavmedia'>
                            <NavLink to="/Report" style={{ textDecoration: 'none' }} > <div id="rep">Reports</div></NavLink>
                            </div>
                            <div id='temnavmedia'>
                            <NavLink to="/Services" style={{ textDecoration: 'none' }} >    <div   id="pric">Services</div></NavLink>
                              
                            </div>
                        </div>
                    </Navbar.Collapse>

                </Navbar>



            </div>
        );
    }
}

export default withRouter(Teamnav);