// main menu component

import React from 'react';
import {
  Text,
  View,
  Animated
} from 'react-vr';

import SceneSelectMenu from './Layouts/SceneSelectMenu.js';

class SceneSelect extends React.Component {
  render() {
    return (
        <SceneSelectMenu text={this.props.text} buttonText={this.props.buttonText} 
        updateScene={this.props.updateScene} scene={this.props.scene}/>
      )
  }
}


module.exports = SceneSelect;