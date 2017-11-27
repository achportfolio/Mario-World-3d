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
    this.state = {slideLeft:new Animated.Value(-1), fadeIn: new Animated.Value(0)}
  }
  
  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
            this.state.slideLeft,{
              toValue: 0,
              duration: 2000,
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
            {translateX: this.state.slideLeft}
          ]
        }}>
        Butterfly Video
        </Animated.Text>
      </View>
    )
  }
}
module.exports = Title;