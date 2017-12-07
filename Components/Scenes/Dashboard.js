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

class Dashboard extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('360vr2.jpg')}/>
          <DashboardLayout captureSelection={this.props.captureSelection} 
          previews={this.props.previews} text={this.props.text}/>
        </View>
      )
  }
}


module.exports = Dashboard;