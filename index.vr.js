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
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

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
        <Pano source={asset('360view.jpg')}/>
        <Text
          style={{
            fontSize: 0.4,
            color: this.state.textColor,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{rotateY : 0},
                        {translate: [0, 1, -3]},
                        {scale : 0.91},],
          }}
          onEnter={() => this.setState({textColor: 'black'})}
          onExit={() => this.setState({textColor: 'white'})}>
          Welcome To Butterfly

        </Text>
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
