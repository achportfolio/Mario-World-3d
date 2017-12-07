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
import ButterflyModel from './Components/Models/ButterflyModel.js';
import axios from 'react-native-axios';

export default class ButterflyVR extends React.Component {
  constructor() {
    super();
    this.state={previews: "", IDs: "", selectedStreamID: "", selectedEnv: ""}
  }

  componentWillMount() {
    axios.get('https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=bdecc4qgol67d6nkm6mplcgxdtywag')
      .then(response => {
        console.log(response);
        this.gatherPreviews(response);
        this.gatherStreamIDs(response);
      })
      .catch(e => {
        console.log(error);
      });
  }
  
  gatherPreviews(response) {
    const previews = response.data.featured.map(function(feat) {
      return feat.stream.preview.large;
    });
    this.setState({previews: previews});
  }

  gatherStreamIDs(response) {
    const IDs = response.data.featured.map(function(feat) {
      return feat.stream._id;
    });
    this.setState({IDs: IDs});
  }

  captureSelection(stage, value) {
    switch (stage) {
      case 1:
        this.setState({selectedStreamID: value});
        break;
      case 2:
        this.setState({selectedEnv: value});
        break;
    }
  }

  render() {
    // <TitleScene showButton={true} text={"Watch a video"}/>
    // <VideoPlayer streamID={this.state.selectedStreamID} 
    //env={this.state.selectedEnv} showButton={true} text={"Back to Dashboard"}/>
    // <ButterflyModel/>
    return (
      <View>
        <Dashboard 
          captureSelection={this.captureSelection.bind(this)} 
          previews={this.state.previews}
          showButton={false}
          text={"Select Environment"}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
