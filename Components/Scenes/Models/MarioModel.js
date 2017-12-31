// main menu component

import React from 'react';
import {
  asset,
  Text,
  View,
  Animated,
  VrButton,
  Model
} from 'react-vr';

import { Easing } from 'react-native';

class MarioModel extends React.Component {
  constructor() {
  	super();

  	this.state= {spin: new Animated.Value(0), inertiaForward: new Animated.Value(-275),
      inertiaSideways: new Animated.Value(-45), jump: new Animated.Value(-60)}
  }

  componentDidMount() {
  	this.circularAnimation();
  }

  jumpAnimation() {
    Animated.sequence([
      Animated.timing(
        this.state.jump,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear
        }
        ),

      Animated.timing(
        this.state.jump,
        {
          toValue: -60,
          duration: 1000,
          easing: Easing.linear
        }
        ),
      ]).start();
  }

  circularAnimation() {
    this.state.spin.setValue(0);
    this.state.inertiaForward.setValue(-275);
    this.state.inertiaSideways.setValue(-45);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
    	    this.state.spin,
    	    {
           toValue: 1,
  		     duration: 5200,
           easing: Easing.linear
        	  }
        ),

        Animated.timing(
          this.state.inertiaForward,
          {
            toValue: 0,
            duration: 5200,
            easing: Easing.linear
          }
        ),

        Animated.timing(
          this.state.inertiaSideways,
          {
            toValue: -275,
            duration: 5200,
            easing: Easing.linear
          }
        )
      ]),

      Animated.parallel([
        Animated.timing(
          this.state.spin,
          {
           toValue: 2,
           duration: 5200,
           easing: Easing.linear
            }
        ),

        Animated.timing(
          this.state.inertiaForward,
          {
            toValue: 275,
            duration: 5200,
            easing: Easing.linear
          }
        ),

        Animated.timing(
          this.state.inertiaSideways,
          {
            toValue: 0,
            duration: 5200,
            easing: Easing.linear
          }
        )
      ]),

      Animated.parallel([
        Animated.timing(
          this.state.spin,
          {
           toValue: 3,
           duration: 5200,
           easing: Easing.linear
            }
        ),

        Animated.timing(
          this.state.inertiaForward,
          {
            toValue: 0,
            duration: 5200,
            easing: Easing.linear
          }
        ),

        Animated.timing(
          this.state.inertiaSideways,
          {
            toValue: 255,
            duration: 5200,
            easing: Easing.linear
          }
        )
      ]),

      Animated.parallel([
        Animated.timing(
          this.state.spin,
          {
           toValue: 4,
           duration: 5200,
           easing: Easing.linear
            }
        ),

        Animated.timing(
          this.state.inertiaForward,
          {
            toValue: -275,
            duration: 5200,
            easing: Easing.linear
          }
        ),

        Animated.timing(
          this.state.inertiaSideways,
          {
            toValue: -45,
            duration: 5200,
            easing: Easing.linear
          }
        )
      ])
    ]).start( () => this.circularAnimation() );
  }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0,1,2,3,4],
      outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg']
    })

    const AnimatedModel = Animated.createAnimatedComponent(Model);

    return (
        <VrButton
            onClick={() => {this.jumpAnimation()}}>
          <AnimatedModel
      		  source={{
      		    obj: asset('mario.obj'),
      		    mtl: asset('mario.mtl')
      		}}

      		style={{
            transform: [
      			      {translateX: this.state.inertiaSideways},
                  {translateY: this.state.jump},
                  {translateZ: this.state.inertiaForward},
      			      {rotateY: spin}
      			    ]
      	    }}
      	    texture={asset('mario2.png')}
      		/>
        </VrButton>
      )
  }
}


module.exports = MarioModel;