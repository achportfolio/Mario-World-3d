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

class MarioTitle extends React.Component {
  constructor() {
  	super();
    this.state = {slideDown:new Animated.Value(80)};
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
            this.state.slideDown,{
              toValue: 0,
              duration: 4000,
              easing: Easing.linear
            }
          )
     ])
   ]).start();
  }

  render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model);

    return (
          <AnimatedModel
      		  source={{
      		    obj: asset('MarioTitle.obj'),
      		    mtl: asset('MarioTitle.mtl')
      		}}

      	    texture={asset('MarioTitle.png')}

            style={{
              transform: [
              {translateX:-150},
              {translateY:this.state.slideDown}, 
              {translateZ:-300}
              ]
            }}
      		/>
      )
  }
}


module.exports = MarioTitle;