// main menu component

import React from 'react';
import {
  Text,
  View
} from 'react-vr';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getSeconds().toLocaleString(), Counter: 0
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );

  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().getSeconds().toLocaleString(),
      Counter: this.state.Counter +1
    });
  }

  render() {

    return (
        <View
        style={{
          transform: [
                {translateX: 1},
                {translateY: .5},
                {translateZ: 0.093},
                {rotateY: -90}
              ]
          }}>
          <Text
          style={{
                    fontSize: 0.35,
                    fontWeight: '400',
                    textAlign: 'center',
                    color: "#FFFFFF"
          }}>
            {this.state.Counter}
          </Text>
        </View>
    );
  }
}


module.exports = Timer;