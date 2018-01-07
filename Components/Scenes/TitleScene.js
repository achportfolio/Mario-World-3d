// main menu component

import React from 'react';
import {
  Text,
  View,
  VrButton,
  asset,
  Pano,
  Sound
} from 'react-vr';

import TitleLayout from './Layouts/TitleLayout.js';

class TitleScene extends React.Component {
  render() {
    return (
    	<View>
        	<Pano source={asset('title-background.jpg')}>
           <Sound
            volume={0.8}
            loop = {true}
            source={{mp3: asset('SuperMarioBros.mp3')}}
          />
          </Pano>
        	<TitleLayout
            showButton={this.props.showButton}
            text={this.props.text}
            changeScenes={this.props.changeScenes}
            scene={this.props.scene}
          />
        </View>
      )
  }
}


module.exports = TitleScene;