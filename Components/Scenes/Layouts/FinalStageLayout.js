import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr'; 

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
            <Text style={{marginTop:0.08, lineHeight: 1}}>
              Congratulations on Helping Mario hit the box in {this.props.counter} seconds! Luigi would be proud :)
            </Text>
            <Text style={{marginTop:0.08, lineHeight: 1}}>
              Here are the top 3 scores {this.props.scores.map((scores) => (<Text>       Mario: {scores}                      </Text>) )}
            </Text>
        </View>
      )
  }
}


module.exports = FinalStageLayout;