// main menu component

import React from 'react';
import {
  Text,
  View,
  Animated
} from 'react-vr';
//Element

import {Easing} from 'react-native';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {slideDown:new Animated.Value(2), fadeIn: new Animated.Value(0)}
  }
  
  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
            this.state.slideDown,{
              toValue: 0,
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
      <View style={{ margin: 0.1}}>
        <Animated.Text style={{
          fontSize: 0.25, 
          textAlign: 'center', 
          color: "#FFFFFF",
          opacity: this.state.fadeIn,
          transform: [
            {translateY: this.state.slideDown}
          ]
        }}>
        Welcome to Mario's World
        </Animated.Text>
      </View>
    )
  }
}
module.exports = Title;