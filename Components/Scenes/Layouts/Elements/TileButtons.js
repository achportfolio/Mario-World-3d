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
class TileButtons extends React.Component {
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <View style={{ 
          margin: 0.1,
          width: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{ 
            margin: 0.1, 
            height: 0.6, 
            backgroundColor: "#CAB9E5",
            borderWidth: this.props.borderWidths[1],
            borderColor: "#ffb6c1",
            borderStyle: "solid"}}>
            <VrButton onClick={ () => this.props.updateStage(1)}>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5"}}>
            <VrButton onClick={ () => this.props.updateStage(2) }>
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

        <View style={{ 
          margin: 0.1,
          width: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5"}}>
            <VrButton onClick={ () => this.props.updateStage(3) }>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5"}}>
            <VrButton onClick={ () => this.props.updateStage(4)}>
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

        <View style={{ 
          margin: 0.1,
          width: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5"}}>
            <VrButton onClick={ () => this.props.updateStage(5)}>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5"}}>
            <VrButton onClick={ () => this.props.updateStage(6)}>
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
      </View>
    )
  }
}

module.exports = TileButtons;