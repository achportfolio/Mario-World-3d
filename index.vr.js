import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  VideoPano,
  Video,
  Text,
  View,
  Model,
  Sound
} from 'react-vr';

import TitleScene from './Components/Scenes/TitleScene.js';
import Dashboard from './Components/Scenes/Dashboard.js';
import ButterflyModel from './Components/Models/ButterflyModel.js'

export default class ButterflyVR extends React.Component {
  render() {
    // <TitleScene showButton={true} text={"Watch a video"}/>
    // <ButterflyModel/>
    return (
      <View>
        <Dashboard showButton={false} text={"Select Environment"}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
