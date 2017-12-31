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

class Time extends React.Component {
  constructor() {
  	super();

  	this.state= {}
  }

  componentDidMount() {
  }

  render() {
    const AnimatedModel5 = Animated.createAnimatedComponent(Model);

    return (
        <AnimatedModel5
    		  source={{
    		    obj: asset('Time.obj'),
    		    mtl: asset('Time.mtl')
    		}}
        texture = {asset('Time.png')}
    		style={{
          transform: [
    			      {translateX: 360},
                {translateY: 15},
                {translateZ: -160},
                {rotateY: -85},
                {rotateX: 4}
    			    ]
    	    }}
    		/>
      )
  }
}


module.exports = Time;