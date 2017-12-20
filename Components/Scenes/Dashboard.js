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
          <DashboardLayout
            environments={this.props.environments}
            captureSelection={this.props.captureSelection}
            previews={this.props.previews}
            text={this.props.text}
            changeScenes={this.props.changeScenes}
            scene={this.props.scene}
          />
        </View>
      )
  }
}


module.exports = Dashboard;