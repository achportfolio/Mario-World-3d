// MovieProjector component

import React from 'react';
import {
  Video,
  View,
  VrButton
} from 'react-vr';
//Layout

import Title from './Elements/Title.js';
import Button from './Elements/Button.js';

class SceneSelectMenu extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 3,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#333333',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -5]}]
      }}>

      <Title text={this.props.text}/>
      <Button buttonText={this.props.buttonText}
      updateScene={this.props.updateScene} scene={this.props.scene}/>
      
      </View>
    )
  }
}

module.exports = SceneSelectMenu;