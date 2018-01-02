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

class MarioBox extends React.Component {
  constructor() {
  	super();

  	this.state= {}
  }

  componentDidMount() {
  }

  render() {
    const AnimatedModel2 = Animated.createAnimatedComponent(Model);

    return (
        <AnimatedModel2
    		  source={{
    		    obj: asset('questionbox.obj'),
    		    mtl: asset('questionbox.mtl')
    		}}
        texture={asset('questionbox.jpg')}
    		style={{
          transform: [
    			      {translateX: -35},
                {translateY: 70},
                {translateZ: -405}
    			    ]
    	    }}
    		/>
      )
  }
}


module.exports = MarioBox;