// MovieProjector component

import React from 'react';
import {
  Video,
  View,
  Text,
  Animated,
  VrButton
} from 'react-vr';
//Layout

import {Easing} from 'react-native';
import Button from './Elements/Button.js';
import MarioTitle from './Elements/MarioTitle.js';

class TitleLayout extends React.Component {
  constructor() {
    super();
    this.state = {slideDown:new Animated.Value(2), fadeIn: new Animated.Value(0)}
  }
  
  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
            this.state.slideDown,{
              toValue: -0.3,
              duration: 4000,
              easing: Easing.ease
            }
          ),
        Animated.timing(
            this.state.fadeIn,{
              toValue: 1,
              duration: 2000,
              easing: Easing.ease
            }
          )
     ])
   ]).start();
  }

  render() {
    return (
      <View 
        style={{
        width: 2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -3]}],
      }}>
        <Animated.View
          style={{
              margin:0.1,

              transform: [
              {translateY: this.state.slideDown}]
          }}>
          <Button
            showButton={this.props.showButton}
            text={this.props.text}
            changeScenes={this.props.changeScenes}
            scene={this.props.scene}
          />
        </Animated.View>
        <MarioTitle/>
      </View>
    )
  }
}

module.exports = TitleLayout;