// main menu component

import React from 'react';
import {
  View,
  Text,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';
import Button from './Elements/Button.js';

//Layout
class DashboardLayout extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    slideLeft: new Animated.Value(-1), 
    fadeIn: new Animated.Value(0),
    showButton: false,
    color1: "#A482DF", 
    color2: "#DBDAF1",
    text: this.props.text,
    selectionIndex: "",
    borderWidths: [0, 0, 0, 0, 0, 0],
    stage: 1,
    time: new Date().toLocaleString()
  };
}

componentDidMount() {
  Animated.sequence([
    Animated.parallel([
      Animated.timing(
        this.state.slideLeft,
        {
          toValue:0,
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

  updateStage(input) {
  if(this.state.showButton === false) {
    this.setState({showButton: true});
  }
  }

  updateScene() {
  this.props.captureSelection(this.state.stage, this.state.selectionIndex);
  this.setState({color1: "#DBDAF1", color2: "#A482DF", text: "Watch Video", stage: 2});
}

  render() {
    return (
        <View>
        <Animated.View style={{
          width: 2,
          height: 0.25,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          layoutOrigin: [0.5, 0.5],
          opacity: this.state.fadeIn,
          transform: [{translateZ: -3},
                      {translateX: this.state.slideLeft}],
          marginTop: -0.1,
          backgroundColor: 'black'
        }}>
          <Text
          style={{
            fontSize: 0.11,
            margin: .06
          }}>
          Help mario hit the box by clicking him.
          </Text>
        </Animated.View>

        <View style={{
          width: 5,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -3]}],
          marginTop: -0.7
        }}>
          <Button
            updateScene={this.updateScene.bind(this)}
            showButton={this.state.showButton}
            changeScenes={this.props.changeScenes}
            stage={this.state.stage}
            scene={this.props.scene}
            selectionIndex={this.state.selectionIndex}
          />
        </View>
      </View>
    )
  }
}


module.exports = DashboardLayout;