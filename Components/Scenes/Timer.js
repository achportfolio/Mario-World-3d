// main menu component

import React from 'react';
import {
  Text,
  View
} from 'react-vr';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state={time: new Date().getSeconds().toLocaleString(), counterState: 0};
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
    this.props.finalTime(this.state.counterState);
  }

  tick() {
    this.setState({
      time: new Date().getSeconds().toLocaleString(),
      counterState: this.state.counterState +1
    });
  }

  render() {

    return (
        <View
        style={{
          transform: [
                {translateX: 1},
                {translateY: .5},
                {translateZ: 0.28},
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
            {this.state.counterState}
          </Text>
        </View>
    );
  }
}


module.exports = Timer;