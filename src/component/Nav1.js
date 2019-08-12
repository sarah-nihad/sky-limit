// import React, { Component } from 'react';
// import './nav1.css'
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { withRouter, Redirect } from 'react-router';
// class Nav1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             redir: false,
//         }
//     }
//     renderRedirect() {
//         if (this.state.redir) {
//             return (
//                 <Redirect to='/' />
//             )
//         }
//     }

//     render() {
//         console.log(this.props);

//         return (
//             <div className="App">


//                 <Navbar expand="lg" id="navmain">



//                     <Navbar.Brand > <img src={require('../img/sk.png')} alt='img' id="logo" />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto">

//                         </Nav>
                 
//                         <div id="teamrow1">
//                             {this.renderRedirect()}
//                             <div onClick={() => {

//                                 if (this.props.match.path !== '/') {
//                                     this.setState({ redir: true })
//                                 }
//                                 setTimeout(() => {
//                                     document.getElementById('App').scrollIntoView({ behavior: 'smooth' });
//                                 }, 200);
//                             }} id="home">Home</div>
                        
//                             {this.renderRedirect()}
//                             <div onClick={() => {
//                                 if (this.props.match.path !== '/') {
//                                     this.setState({ redir: true })
//                                 }
//                                 setTimeout(() => {
//                                     document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
//                                 }, 200);

//                             }} id="home">Products</div>
                       
//                             <Link to="/About" id="about">About</Link>
                        
//                             {this.renderRedirect()}
//                             <div id='navcont'>
//                                 <div onClick={() => {
//                                     if (this.props.match.path !== '/') {
//                                         this.setState({ redir: true })
//                                     }
//                                     setTimeout(() => {
//                                         document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
//                                     }, 200);

//                                 }} id="about">Contact</div>
//                             </div>
                          
//                         </div>
//                     </Navbar.Collapse>

//                 </Navbar>

//             </div>
//         );
//     }
// }

// export default withRouter(Nav1);




import { Navbar, Nav } from 'react-bootstrap';
 import { Link } from 'react-router-dom';
 import { withRouter, Redirect } from 'react-router';
 import React,{Component} from 'react';
 import PropTypes from 'prop-types';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
//  import Typography from '@material-ui/core/Typography';
 import CssBaseline from '@material-ui/core/CssBaseline';
 import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//  import Box from '@material-ui/core/Box';
 import Slide from '@material-ui/core/Slide';
 
 function HideOnScroll(props) {
   const { children, window } = props;
 
   const trigger = useScrollTrigger({ target: window ? window() : undefined });
 
   return (
     <Slide appear={true} direction="down" in={!trigger}>
       {children}
     </Slide>
   );
 }
 
 HideOnScroll.propTypes = {
   children: PropTypes.element.isRequired,
  
   window: PropTypes.func,
 };
 
//  export default function HideAppBar(props) {
    
class HideAppBar extends Component{
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
render(){
   return (
     <React.Fragment>
       <CssBaseline />
       <HideOnScroll >
         <AppBar>
          
         <Navbar expand="lg" id="navmain">



<Navbar.Brand > <img src={require('../img/sk.png')} alt='img' id="logo" />
 </Navbar.Brand>                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">

</Nav>

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
     
          {this.renderRedirect()}
          <div onClick={() => {
             if (this.props.match.path !== '/') {
                  this.setState({ redir: true })
              }
             setTimeout(() => {
                  document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
             }, 200);

          }} id="home">Products</div>
    
          <Link to="/About" id="home">About</Link>
     
          {/* {this.renderRedirect()}
          <div id='navcont'>
              <div onClick={() => {
                  if (this.props.match.path !== '/') {
                      this.setState({ redir: true })
                  }
                  setTimeout(() => {
                      document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
                  }, 300);

             }} id="about">Contact</div>
          </div> */}
             <Link to="/Contact" id="home">Contact</Link>
       
      </div>
  </Navbar.Collapse>

</Navbar>


         </AppBar>
       </HideOnScroll>
       <Toolbar />
     </React.Fragment>
   );
 }
}

export default withRouter(HideAppBar);



    
   
 

