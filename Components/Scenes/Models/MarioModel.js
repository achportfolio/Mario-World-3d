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
import TimerMixin from 'react-timer-mixin';

class MarioModel extends React.Component {
  constructor(props) {
  	super(props);

  	this.state= {spin: new Animated.Value(0)};
    this.flatCircleAnimation = new Animated.Value(0);

    var range = 1, snapshot = 180, radius = 270;
        /// translateX
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move);
        }
        this.translateX = this.flatCircleAnimation.interpolate({ inputRange, outputRange });

        /// translateY
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = -Math.cos(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move);
        }
        this.translateY = this.flatCircleAnimation.interpolate({ inputRange, outputRange });
  }

  componentDidMount() {
  	this.spinAnimation();
    this.flatCircleAnimations();
  }

  jumpAnimation() {
    Animated.sequence([
      Animated.timing(
        this.props.jump,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear
        }
        ),

      Animated.timing(
        this.props.jump,
        {
          toValue: -60,
          duration: 1000,
          easing: Easing.linear
        }
        ),
      ]).start();
  }

  spinAnimation() {
    this.state.spin.setValue(0);
    Animated.sequence([
        Animated.timing(
    	    this.state.spin,
    	    {
           toValue: 1,
  		     duration: 5200,
           easing: Easing.linear
        	  }
        ),

        Animated.timing(
          this.state.spin,
          {
           toValue: 2,
           duration: 5200,
           easing: Easing.linear
            }
        ),
        Animated.timing(
          this.state.spin,
          {
           toValue: 3,
           duration: 5200,
           easing: Easing.linear
            }
        ),
        Animated.timing(
          this.state.spin,
          {
           toValue: 4,
           duration: 5200,
           easing: Easing.linear
            }
        )
    ]).start( () => this.spinAnimation() );
  }

  flatCircleAnimations() {
        this.flatCircleAnimation.setValue(0);
        this.props.inertiaForward.setValue(-360);

         Animated.parallel([
          Animated.sequence([
            Animated.timing(
              this.props.inertiaForward,
              {
               toValue: 0,
               duration: 5200
                }
            ),

            Animated.timing(
              this.props.inertiaForward,
              {
               toValue: 275,
               duration: 5200
                }
            ),

            Animated.timing(
              this.props.inertiaForward,
              {
               toValue: 0,
               duration: 5200
                }
            ),

            Animated.timing(
              this.props.inertiaForward,
              {
               toValue: -275,
               duration: 5200
                }
            ),
          ]),

          Animated.timing(this.flatCircleAnimation, {
          toValue: 1,
          duration: 20800,
          easing: Easing.linear
          })
        ]).start(() => this.flatCircleAnimations() );
      }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0,1,2,3,4],
      outputRange: ['0deg', '-90deg', '-180deg', '-270deg', '-360deg']
    })

    const AnimatedModel = Animated.createAnimatedComponent(Model);

    return (
        <VrButton onClick={() => {this.jumpAnimation()}}>
          <AnimatedModel
      		  source={{
      		    obj: asset('mario.obj'),
      		    mtl: asset('mario.mtl')
      		}}

      		style={{
            transform: [
      			      {translateX: this.translateX},
                  {translateY: this.props.jump},
                  {translateZ: this.translateY},
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