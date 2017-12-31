// main menu component

import React from 'react';
import {
  Text,
  View
} from 'react-vr';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
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
      time: new Date().toLocaleString()
    });
  }
  render() {
    var stopwatch = new Date().getSeconds();
    
    return (
        <View
        style={{
          transform: [
                {translateX: 0},
                {translateY: .1},
                {translateZ: 142},
                {rotateY: -90}
              ]
          }}>
          <Text>
             reeeed 
          </Text>
        </View>
        <View
        style={{
          transform: [
                {translateX: 0},
                {translateY: 0},
                {translateZ: 0},
                {rotateY: 0}
              ]
          }}>
          <Text>
            reeeed 
          </Text>
        </View>
    );
  }
}


module.exports = Clock;