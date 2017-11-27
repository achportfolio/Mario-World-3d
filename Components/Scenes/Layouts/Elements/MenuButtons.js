// Button element

import React from 'react';
import {
  Text,
  View,
  VrButton,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

//Element
class MenuButtons extends React.Component {
  constructor() {
    super();
    this.state = { 
      slideRight: new Animated.Value(1), 
      fadeIn: new Animated.Value(0)
     };
    }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideRight,{
            toValue:0,
            duration: 2000,
            esing: Easing.ease
           }
          ),
        Animated.timing(
          this.state.fadeIn,{
            toValue:1,
            duration: 2000,
            esing: Easing.ease
           }
          )
        ])
      ]).start();
  }


  render() {
    return (
      <View style={{ 
        margin: 0.1, 
        width: 1, 
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
      }}>
        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
            Twitch
            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>

            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>

            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>

            </Text>
          </VrButton>
        </View>
      </View>
    )
  }
}

module.exports = MenuButtons;