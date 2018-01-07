// Button element

import React from 'react';
import {
  Text,
  View,
  VrButton,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

//Element
class Button extends React.Component {
  render() {
    
    const showButton = this.props.showButton;
    const currentScene = this.props.scene;
    let nextScene;
    switch (currentScene) {
      case 1:
        nextScene = 2;
        break;
      case 2:
        nextScene = 3;
        break;
      case 3:
        nextScene = 1;
        break;
    }

    const stage = this.props.stage;
    const selectionIndex = this.props.selectionIndex;

    return (
      <View>
        {showButton ? (
          <View style={{ 
            margin: 0.1,
            paddingLeft: 0.2,
            paddingRight: 0.2, 
            height: 0.3, 
            Color: '#A482DF'
          }}>
            {currentScene === 2 ? (<View></View>) : (
              <VrButton onClick={() => this.props.changeScenes(nextScene)}
              style={{
                backgroundColor: '#d33b08'
              }}
              >
                <Text
                  style={{
                    fontSize: 0.2,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
                {this.props.text}
                </Text>
              </VrButton>
            )}
          </View>
          ) :(
            <View></View>
          )}
      </View>
    )
  }
}

module.exports = Button;