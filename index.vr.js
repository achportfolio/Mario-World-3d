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
  Sound,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';
import MainMenu from './Components/Scenes/MainMenu.js';
import SceneSelect from './Components/Scenes/SceneSelect.js';
import MovieTheater from './Components/Scenes/MovieTheater.js';
import ButterflyModel from './Components/Models/ButterflyModel.js'

export default class ButterflyVR extends React.Component {
  constructor() {
    super();

    this.state = {
      mainMenu: true, 
      SceneSelect: false};
  }

updateScene(scene) {
  switch(scene) {
    case 1: 
      this.setState({mainMenu: true, sceneSelect: false});
      break;
    case 2:
      this.setState({mainMenu: false, sceneSelect: true});
      break;
    case 3:
      this.setState({mainMenu: false, sceneSelect: false});
      break;
  }
}

  render() {
    const mainMenu = this.state.mainMenu;
    const sceneSelect = this.state.sceneSelect;

    return (
      <View>
        <Pano source={asset('360view.jpg')}>
        <Sound
		    volume={0.8}
		    loop = {true}
		    source={{mp3: asset('')}}
		  /> 
        </Pano>

        {
          mainMenu ?(
            <MainMenu text={"Butterfly / No Signal"} buttonText={"Select Song"}
            updateScene={this.updateScene.bind(this)} scene={1}/>
          ) : (
            sceneSelect ? (<SceneSelect text={"Song Select"} buttonText={"Static"}
              updateScene={this.updateScene.bind(this)} scene={2}/>
            ) : (
                  <MovieTheater text={"Don't forget the love"} buttonText={"back"}
                  updateScene={this.updateScene.bind(this)} scene={3}/>
            )
          ) 
        }

        <ButterflyModel/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
