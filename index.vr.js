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
    let scoresRef = fire.database().ref('scores').orderByKey().limitToLast(5);
    scoresRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let score = { text: snapshot.val(), id: snapshot.key };
      this.setState({ scores: [score].concat(this.state.scores) });
    })
  }

  finalTime(endTime) {
    this.setState({counter:endTime});
    //this.setState({scores:[...this.state.scores, endTime]});
    fire.database().ref('scores').push( this.endTime.value );
    this.endTime.value = '';
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
            text={"Select Environment"}
            changeScenes={this.changeScenes.bind(this)}
            scene={this.state.scene}
            counter={this.state.counter}
            finalTime={this.finalTime.bind(this)}
          />
        ) : (
          <FinalStage counter={this.state.counter} scores={this.state.scores}/>
        )
      )}
    </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
