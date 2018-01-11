// main menu component

import React from 'react';
import {
  asset,
  Pano,
  Video,
  Text,
  View,
  Animated,
  VrButton,
  Sound
} from 'react-vr';

import DashboardLayout from './Layouts/DashboardLayout.js';
import MarioModel from './Models/MarioModel.js';
import MarioBox from './Models/MarioBox.js';
import Timer from './Timer.js';
import Score from './Models/Score.js';
import Time from './Models/Time.js';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state={jump: new Animated.Value(-67), inertiaForward: new Animated.Value(-270)};
  }

  message(){
    setTimeout(() => {
      if(this.state.jump._value>-2 && this.state.inertiaForward._value<-248){this.props.changeScenes(3);};
    }, 1000);
  }

  render() {
    return (
        <View>
          <Pano source={asset('title-background.jpg')}>
           <Sound
            volume={0.8}
            loop = {true}
            source={{mp3: asset('MarioWorldOne.mp3')}}
          />
          </Pano>
          <DashboardLayout
            changeScenes={this.props.changeScenes}
          />
          <MarioBox/>
          <VrButton onClick={()=>{this.message()}}>
            <MarioModel jump={this.state.jump} inertiaForward={this.state.inertiaForward}/>
          </VrButton>
          <Score/>
          <Time/>
          <Timer counter={this.props.counter} finalTime={this.props.finalTime}/>
        </View>
      )
  }
}


module.exports = Dashboard;