// main menu component

import React from 'react';
import {
  asset,
  Pano,
  Video,
  Text,
  View,
  Animated
} from 'react-vr';

import DashboardLayout from './Layouts/DashboardLayout.js';
import MarioModel from './Models/MarioModel.js';
import MarioBox from './Models/MarioBox.js';
import Timer from './Models/Timer.js';
import Score from './Models/Score.js';
import Time from './Models/Time.js';

class Dashboard extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('title-background.jpg')}/>
          <DashboardLayout
            environments={this.props.environments}
            captureSelection={this.props.captureSelection}
            text={this.props.text}
            changeScenes={this.props.changeScenes}
            scene={this.props.scene}
          />
          <MarioBox/>
          <MarioModel/>
          <Score/>
          <Time/>
          <Timer/>
        </View>
      )
  }
}


module.exports = Dashboard;