import React, { Component } from 'react';
import './nav1.css';
import Teamnav from './Teamnav';
import Teamfoot from './Teamfoot';
// import { Media, Player, controls } from 'react-media-player'
import video from '../vid/timi.mp4';
import Objective from './Objective';
import Pricing from './Pricing';
// import CustomPlayPause from './CustomPlayPause'
// const { PlayPause, MuteUnmute } = controls

class Teami extends Component {

  render() {
  
    return (
     
      <div id='Teeemm' >
        <div id="foot">
          <Teamnav />
          {/* <Media>
      <CustomPlayPause />
      <Player src="https://youtu.be/VOyYwzkQB98" />
    </Media> */}

{/* <video id="samp" width="640" height="480" controls>
        <source src="timi.mp4" type="video/mp4">
        </source>
      </video> */}
      <div id='videotimi'>
 <video controls src={video} type="video/mp4"  width="85%" height="480" id='vvvtimivideo'></video>

 </div>
<Objective />
<Pricing />
        </div>

        <Teamfoot />
      </div>
    
    );
  }
}

export default Teami;
