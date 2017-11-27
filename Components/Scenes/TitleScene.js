// main menu component

import React from 'react';
import {
  Text,
  View,
  VrButton,
  asset,
  Pano
} from 'react-vr';

import TitleLayout from './Layouts/TitleLayout.js';

class TitleScene extends React.Component {
  render() {
    return (
    	<View>
        	<Pano source={asset('title-background.jpg')}/>
        	<TitleLayout text={this.props.text}/>
        </View>
      )
  }
}


module.exports = TitleScene;