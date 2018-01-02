// main menu component

import React from 'react';
import {
  Text,
  View
} from 'react-vr';

class Timing extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {

    return (
        <Text>
          {this.props.TimerInfo}
        </Text>
    );
  }
}


module.exports = Timing;