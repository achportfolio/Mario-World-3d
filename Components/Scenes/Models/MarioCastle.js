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

class MarioCastle extends React.Component {
  constructor() {
  	super();

  	this.state= {}
  }

  componentDidMount() {
  }

  render() {
    const AnimatedModel7 = Animated.createAnimatedComponent(Model);

    return (
        <AnimatedModel7
    		  source={{
    		    obj: asset('MarioCastle.obj'),
    		    mtl: asset('MarioCastle.mtl')
    		}}
        texture = {asset('MarioCastle.png')}
    		style={{
          transform: [
    			      {translateX: 0},
                {translateY: 0},
                {translateZ: -100}
    			    ]
    	    }}
    		/>
      )
  }
}


module.exports = MarioCastle;