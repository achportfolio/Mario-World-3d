// main menu component

import React from 'react';
import {
  asset,
  Text,
  View,
  Animated,
  Model
} from 'react-vr';

import { Easing } from 'react-native';

class Cloud extends React.Component {
  constructor() {
  	super();

  	this.state= {hover: new Animated.Value(0)};
  }

  componentDidMount() {
    this.hoverAnimation();
  }

  hoverAnimation() {
    this.state.hover.setValue(-7);
    Animated.sequence([
      Animated.timing(
        this.state.hover,
        {
         toValue: -50,
         duration: 2200,
         easing: Easing.linear
        }
      ),

      Animated.timing(
        this.state.hover,
        {
         toValue: -7,
         duration: 2200,
         easing: Easing.linear
        }
      )
    ]).start( () => this.hoverAnimation() );
  }

  render() {
    const spin = this.state.hover.interpolate({
      inputRange: [0, 200],
      outputRange: [-100, 100]
    });
    const AnimatedModel2 = Animated.createAnimatedComponent(Model);

    return (
        <AnimatedModel2
    		  source={{
    		    obj: asset('Cloud.obj'),
    		    mtl: asset('Cloud.mtl')
    		}}
        texture = {asset('Cloud.png')}
    		style={{
          transform: [
    			      {translateX: 145},
                {translateY: this.state.hover},
                {translateZ: -295},
                {rotateY: -40}
    			    ]
    	    }}
    		/>
      )
  }
}


module.exports = Cloud;