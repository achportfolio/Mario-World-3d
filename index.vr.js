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

export default class ButterflyVR extends React.Component {
  constructor() {
    super();

    this.state = {
      textColor: 'white',
      mainMenu: true, 
      SceneSelect: false,
      spin: new Animated.Value(0)};
  }

updateScene(scene) {
  switch(scene) {
    case 2:
      this.setState({mainMenu: false, sceneSelect: true});
      break;
    case 3:
      this.setState({mainMenu: false, sceneSelect: false});
      break;
  }
}

  componentDidMount() {
  this.spinAnimation();
}
spinAnimation() {
  this.state.spin.setValue(0);
  Animated.timing(
    this.state.spin,
    {
     toValue: 360,
     duration: 5500,
     easing: Easing.ease
    }
  ).start( () => this.spinAnimation() );
}


  render() {
    const spin = this.state.spin.interpolate({
	    inputRange: [0, 360],
	    outputRange: ['0deg', '360deg']
    });

    const AnimatedModel = Animated.createAnimatedComponent(Model);

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
            <MainMenu text={"Butterfly Movie Theater"} buttonText={"Select a film"}
            updateScene={this.updateScene.bind(this)} scene={1}/>
          ) : (
            sceneSelect ? (<SceneSelect text={"Scene Select"} buttonText={"Static"}
              updateScene={this.updateScene.bind(this)} scene={2}/>
            ) : (
                  <MovieTheater/>
            )
          ) 
        }

        <AnimatedModel
    		  source={{
    		    obj: asset('butterfly.obj'),
    		    mtl: asset('butterfly.mtl')
    		}}

    		style={{
    			transform: [
    			      {translate: [0, -7, -85]},
        			  {rotate: spin}
    			    ]
    	    }}
    	    texture={"assets/butterfly.png"}
    		/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
