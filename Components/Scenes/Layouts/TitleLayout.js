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

class TitleLayout extends React.Component {
  render() {
    return (
      <View 
        style={{
        width: 2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -3]}]
      }}>
        <Title/>
        <Button showButton={this.state.showButton} text={this.props.text}/>
      </View>
    )
  }
}

module.exports = TitleLayout;