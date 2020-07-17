import React, { Component } from 'react';
import { View, StatusBar, Image, Dimensions } from 'react-native';
import introImage from '../assets/icons/loading-icon.png';

export default class Loading extends Component {

  render() {
    
    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: '#FDFDFF' }}>
      <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          //hidden={Platform.OS === 'ios' ? false : true}
          //To hide statusBar
          backgroundColor="transparent"
          //Background color of statusBar
          translucent={true}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={false}
        />
        <Image
         style={{width: '100%', height: '100%'}}
        source={ introImage}
       />
      </View>
    );
  }
}