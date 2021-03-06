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
import FinalStage from './Components/Scenes/FinalStage.js';
import Cloud from './Components/Scenes/Models/Cloud.js';
import fire from './fire.js'; 

export default class ButterflyVR extends React.Component {
  constructor() {
    super();
    this.state={scene: 1, counter: 0, scores: []};
  }

  componentWillMount() {
    /* Create reference to scores in Firebase Database */  
    let scoresRef = fire.database().ref('scores').orderByValue().limitToFirst(3);
    scoresRef.once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        this.state.scores.push(childData);
      });
    })
  }

  finalTime(endTime) {
    this.setState({counter:endTime});
    fire.database().ref('scores').push( endTime);
  }  

  changeScenes(nextScene) {
  switch (nextScene) {
    case 1:
      this.setState({scene: 1});
      break;
    case 2:
      this.setState({scene: 2});
      break;
    case 3:
      this.setState({scene: 3});
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
            showButton={false}
            changeScenes={this.changeScenes.bind(this)}
            scene={this.state.scene}
            counter={this.state.counter}
            finalTime={this.finalTime.bind(this)}
          />
        ) : (
          <FinalStage 
            counter={this.state.counter} 
            scores={this.state.scores} 
            changeScenes={this.changeScenes.bind(this)}
          />
        )
      )}
    </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
