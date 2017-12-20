// main menu component

import React from 'react';
import {
  View
} from 'react-vr';

import VideoElement from './Elements/VideoElement.js';
import Button from './Elements/Button.js';

//Layout
class VideoPlayerLayout extends React.Component {
  render() {
    return (
        <View>
        	<View>
            <View style={{
              flex: 1,
              width: 8,
              flexDirection: 'column',
              alignItems: 'stretch',
              backgroundColor: '#333333',
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -5]}]
            }}>
            <VideoElement streamURL={this.props.streamURL}/>
            </View>
          <View style={{
              flex: 1,
              width: 2.5,
              flexDirection: 'column',
              alignItems: 'stretch',
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 3.5, 5]}, {rotateY: -180}]
            }}>
            <Button
              showButton={this.props.showButton}
              text={this.props.text}
              changeScenes={this.props.changeScenes}
              scene={this.props.scene}
            />
            </View>
      </View>
        </View>
      )
  }
}


module.exports = VideoPlayerLayout;