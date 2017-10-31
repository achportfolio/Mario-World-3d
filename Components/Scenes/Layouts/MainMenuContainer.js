// main menu component

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  VideoPano,
  Video,
  Text,
  View,
  Model,
  Box,
  Animated
} from 'react-vr';

import Title from './Elements/Title.js';
import Button from './Elements/Button.js';

//Layout
class MainMenuContainer extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -5]}]
      }}>
        <Title/>
        <Button/>
      </View>
    )
  }
}


module.exports = MainMenuContainer;