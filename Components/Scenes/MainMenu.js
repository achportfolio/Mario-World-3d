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
        <MainMenuContainer/>
      )
  }
}


module.exports = MainMenu;