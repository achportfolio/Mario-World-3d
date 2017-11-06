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

import MainMenuContainer from './Layouts/MainMenuContainer.js';

class MainMenu extends React.Component {
  render() {
    return (
        <MainMenuContainer text={this.props.text} buttonText={this.props.buttonText} 
        updateScene={this.props.updateScene} scene={this.props.scene}/>
      )
  }
}


module.exports = MainMenu;