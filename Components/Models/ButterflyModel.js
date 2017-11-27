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

class ButterflyModel extends React.Component {
  constructor() {
  	super();

  	this.state= {hover: new Animated.Value(0)}
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
    const AnimatedModel = Animated.createAnimatedComponent(Model);

    return (
        <AnimatedModel
    		  source={{
    		    obj: asset('butterfly.obj'),
    		    mtl: asset('butterfly.mtl')
    		}}

    		style={{
          transform: [
    			      {translateX: -85},
    			      {translateY: this.state.hover},
    			      {translateZ: -85}
    			    ]
    	    }}
    	    texture={"assets/butterfly.png"}
    		/>
      )
  }
}


module.exports = ButterflyModel;