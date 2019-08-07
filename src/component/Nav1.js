import React, { Component } from 'react';
import './nav1.css'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { log } from 'util';
import { withRouter, Redirect } from 'react-router';
class Nav1 extends Component {
    constructor() {
        super();
        this.state = {
            redir: false,
        }
    }
    renderRedirect() {
        if (this.state.redir) {
            return (
                <Redirect to='/' />
            )
        }
    }

    render() {
        console.log(this.props);

        return (
            <div className="App">


                <Navbar expand="lg" id="navmain">



                    <Navbar.Brand > <img src={require('../img/sk.png')} alt='img' id="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        {/* <Row  style={{marginRight:'0px'}}   >
                            <Col xs={12}  lg={3} > */}
                        <div id="teamrow1">
                            {this.renderRedirect()}
                            <div onClick={() => {

                                if (this.props.match.path !== '/') {
                                    this.setState({ redir: true })
                                }
                                setTimeout(() => {
                                    document.getElementById('App').scrollIntoView({ behavior: 'smooth' });
                                }, 200);
                            }} id="home">Home</div>
                            {/* </Col> */}
                            {/* <Col xs={12}  lg={3} > */}
                            {this.renderRedirect()}
                            <div onClick={() => {
                                if (this.props.match.path !== '/') {
                                    this.setState({ redir: true })
                                }
                                setTimeout(() => {
                                    document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
                                }, 200);

                            }} id="home">Products</div>
                            {/* </Col>
                            <Col xs={12} lg={3} > */}
                            <NavLink to="/About" id="about">About</NavLink>
                            {/* </Col>
                            <Col xs={12} lg={3} > */}
                            {this.renderRedirect()}
                            <div id='navcont'>
                                <div onClick={() => {
                                    if (this.props.match.path !== '/') {
                                        this.setState({ redir: true })
                                    }
                                    setTimeout(() => {
                                        document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
                                    }, 200);

                                }} id="about">Contact</div>
                            </div>
                            {/* </Col>
                            </Row> */}
                        </div>
                    </Navbar.Collapse>

                </Navbar>













            </div>
        );
    }
}

export default withRouter(Nav1);