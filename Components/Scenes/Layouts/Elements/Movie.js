// Movie component

import React from 'react';
import {
  Video,
  View,
  Text,
  VrButton,
  asset
} from 'react-vr';
//Element

class Movie extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 2}}>
        <Video style={{height:2}} source={asset('happyDropsStatic.mp4')} loop={true} />
      </View>
    )
  }
}

module.exports = Movie;