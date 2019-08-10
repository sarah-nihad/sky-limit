import React,{Component} from 'react';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
// import Nav1 from './component/Nav1';
// import Foot1 from './component/foot1';
import About from './component/About';
import Contact from './component/Contact';
import Teami from './component/Teami';
import Howtouse from './component/Howtouse';
import Pricing from './component/Pricing';
import Report from './component/Report';
import Objective from './component/Objective';
import Products from './component/Products';

// import Slider from './component/Slider';

class App extends Component{
render () {
  return (
    <BrowserRouter>



    <div id="apfot">
  {/* <Slider /> */}

    <Route exact path='/' component={Home} />
   <Route  path='/Contact' component={Contact} />
     <Route  path='/About' component={About} />
     <Route  path='/Products' component={Products} />
   <Route path='/Teami' component={Teami} />
  <Route path='/Howtouse' component={Howtouse} />
   <Route path='/Objective' component={Objective} />
   <Route path ='/Report' component={Report} />
   <Route path ='/Pricing' component={Pricing} />  
  
    </div>
  
   


 </BrowserRouter>
  );
}}

export default App;
