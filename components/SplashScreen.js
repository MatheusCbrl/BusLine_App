import React, { Component } from 'react';
import { View, StatusBar, Image, Dimensions } from 'react-native';
import introImage from '../assets/icons/loading-icon.png';

export default class Loading extends Component {

  render() {
    
    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: '#FDFDFF' }}>
      <StatusBar hidden />
        <Image
         style={{width: '100%', height: '100%'}}
        source={ introImage}
       />
      </View>
    );
  }
}