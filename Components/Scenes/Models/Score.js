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

class Score extends React.Component {
  constructor() {
  	super();

  	this.state= {}
  }

  componentDidMount() {
  }

  render() {
    const AnimatedModel4 = Animated.createAnimatedComponent(Model);

    return (
        <AnimatedModel4
    		  source={{
    		    obj: asset('ScoreInfo.obj'),
    		    mtl: asset('ScoreInfo.mtl')
    		}}
        texture = {asset('ScoreInfo.png')}
    		style={{
          transform: [
    			      {translateX: -360},
                {translateY: 30},
                {translateZ: 100},
                {rotateY: 86},
                {rotateX: 0}
    			    ]
    	    }}
    		/>
      )
  }
}


module.exports = Score;