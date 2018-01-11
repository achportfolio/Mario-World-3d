import React from 'react';
import {
  Text,
  View,
  asset,
  Sound,
  Pano
} from 'react-vr';

import FinalStageLayout from './Layouts/FinalStageLayout.js';
import MarioCastle from './Models/MarioCastle.js';

//Scene
class Finalstage extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
  }

  render() {
    return (
        <View>
        	<Pano source={asset('title-background.jpg')}>
           <Sound
            volume={0.8}
            loop = {true}
            source={{mp3: asset('MarioEndSong.mp3')}}
          />
          </Pano>
          <View 
          style={{
            height:1.15,
            width: 2,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
            backgroundColor: 'black',
            marginTop: -0.2,
            paddingLeft: 0.2,
            paddingRight: 0.2
          }}>
            <FinalStageLayout counter={this.props.counter} scores={this.props.scores}/>
            <MarioCastle />
          </View>
        </View>
      )
  }
}


module.exports = Finalstage;