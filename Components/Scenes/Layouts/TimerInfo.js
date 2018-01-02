// main menu component

import React from 'react';
import {
  Text,
  View
} from 'react-vr';

import Timing from './Elements/Timing.js';

class TimerInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
          <Timing TimerInfo={this.props.TimerInfo} />
    );
  }
}


module.exports = TimerInfo;