import React from 'react';
import {
  View,
  Video
} from 'react-vr';
//Scene

import MovieProjector from './Layouts/MovieProjector.js';

class MovieTheater extends React.Component {
  render() {
    return (
      <MovieProjector text={this.props.text} buttonText={this.props.buttonText} 
        updateScene={this.props.updateScene} scene={this.props.scene}/>
    )
  }
}
module.exports = MovieTheater;