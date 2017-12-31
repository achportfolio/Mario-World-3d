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
import VideoPlayer from './Components/Scenes/VideoPlayer.js';
import Cloud from './Components/Scenes/Models/Cloud.js';
import axios from 'react-native-axios';

export default class ButterflyVR extends React.Component {
  constructor() {
    super();
    this.state={scene: 1, selectedEnv: "",
    environments: ["title-background.jpg", "dashboard-background.jpg", "Arizona.jpg", "Hawaii.jpg", "New Hampshire.jpg", "Texas.jpg"]};
  }

  componentWillMount() {
  }
  

  changeScenes(nextScene, selectionIndex) {
  switch (nextScene) {
    case 1:
      this.setState({scene: 1});
      break;
    case 2:
      this.setState({scene: 2});
      break;
    case 3:
      this.captureSelection(2, selectionIndex);
      this.setState({scene: 3});
      break;
  }
}

  captureSelection(stage, value) {
  switch (stage) {
    case 1:
      break;
    case 2:
      this.setState({selectedEnv: this.state.environments[value-1]});
      break;
  }
}

  render() {
    const scene = this.state.scene;

    return (
        <View>
        <Cloud/>
      {scene === 1 ? (
        <TitleScene
          showButton={true}
          text={"Play"}
          changeScenes={this.changeScenes.bind(this)}
          scene={this.state.scene}
        />
      ) : (
        scene === 2 ? (
          <Dashboard
            captureSelection={this.captureSelection.bind(this)}
            environments={this.state.environments}
            showButton={false}
            text={"Select Environment"}
            changeScenes={this.changeScenes.bind(this)}
            scene={this.state.scene}
          />
        ) : (
          <VideoPlayer
            env={this.state.selectedEnv}
            showButton={true}
            text={"Back to Dashboard"}
            changeScenes={this.changeScenes.bind(this)}
            scene={this.state.scene}
          />
        )
      )}
    </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
