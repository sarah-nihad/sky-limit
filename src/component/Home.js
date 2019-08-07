import React, { Component } from 'react';
 import { Row,Col } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import { Animated } from "react-animated-css"; 
import Foot1 from './foot1';
import Nav1 from '../component/Nav1';
import Products from './Products';
import Contact from './Contact';
// import About from './About';
// import { log } from 'util';
class Home extends Component {
    constructor(){
        super();
        this.state={}
    }
// componentDidMount(){
//     console.log(this.props);
// }
    render() {
        
        
        return (
            <div id="App">
                <Nav1/>
                   <div id="apfot">

                
              <div id='homemainapp'>
              <div id="h3">Sky Limit X Core Business</div>
<Row style={{marginRight:'0px',width:'80%',marginTop:'8%'}}  > 
<Col md={6}> 
             
              <div id='flexhom'  >
                <div id='iconhome1'  >
                <i className="fas fa-stethoscope"></i>
                    </div> 
                   <div  id='firstelemnt'  >DOCTORS</div>
                    </div>
               
                    <div id='flexhom'  >
                <div id='iconhome2'  > 
                <i className="fas fa-hospital"></i> 
                    </div> 
                   <div  id='firstelemnt'  >PHARMACEUTICAL COMPANY</div>
                    </div>

                    <div id='flexhom'  >
                <div id='iconhome3'  >
                <i className="fas fa-store"></i>
                    </div> 
                   <div  id='firstelemnt'  >DRUG  STORES</div>
                    </div>

                    <div id='flexhom'  >
                <div id='iconhome4'  >
                <i className="fas fa-pills"></i>
                    </div> 
                   <div  id='firstelemnt'  >PHARMACY</div>
                    </div>


                    <div id='flexhom'  >
                <div id='iconhome'  >
                <i className="fas fa-male"></i>
                    </div> 
                   <div  id='firstelemnt'  >PATIENTS</div>
                    </div>
                    </Col>

<Col md={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    
<img src={require('../img/Slider.jpg')} id='styleimghomeo' alt='img'  />

</Col>



                    </Row>
              </div>
              <Products />
              <Contact />
              </div>
              <Foot1 />
            </div>
        );
    }
}

export default Home;
