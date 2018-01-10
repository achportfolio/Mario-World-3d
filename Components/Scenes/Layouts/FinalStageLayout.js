import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import Timing from './Elements/Timing.js';  

//Scene
class FinalStageLayout extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
  }

  render() {
    return (
        <View>
            <Text>
              Congratulations on Helping Mario hit the box! Luigi would be proud :) You did it in {this.props.counter} seconds!
            </Text>
            <Text>
              Here are the top 3 scores {this.props.scores.map((scores) => (<Text>       Mario: {scores}                      </Text>) )}
            </Text>
        </View>
      )
  }
}


module.exports = FinalStageLayout;