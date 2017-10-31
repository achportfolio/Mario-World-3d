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

export default class ButterflyVR extends React.Component {
  constructor() {
    super();

    this.state = {textColor: 'white'};
    this.state = {spin: new Animated.Value(0)};
  }

  componentDidMount() {
  this.spinAnimation();
}
spinAnimation() {
  this.state.spin.setValue(0);
  Animated.timing(
    this.state.spin,
    {
     toValue: 1,
     duration: 1500,
     easing: Easing.linear
    }
  ).start( () => this.spinAnimation() );
}


  render() {
    const spin = this.state.spin.interpolate({
	    inputRange: [0, 360],
	    outputRange: ['0deg', '360deg']
    });

    var AnimatedModel = Animated.createAnimatedComponent(Model);

    return (
      <View>
        <Pano source={asset('360view.jpg')}>
        <Sound
		    volume={0.8}
		    loop = {true}
		    source={{mp3: asset('')}}
		  /> 
        </Pano>
        <MainMenu/>
        <AnimatedModel
		  source={{
		    obj: asset('butterfly.obj'),
		    mtl: asset('butterfly.mtl')
		}}

		style={{
			transform: [
			      {translate: [-25, -7, -85]},
    			  {rotate: spin}
			    ]
	    }}
	    texture={"assets\butterfly.png"}
		/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ButterflyVR', () => ButterflyVR);
