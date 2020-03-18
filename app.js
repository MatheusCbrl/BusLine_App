import React, { Component } from 'react';
import SplashScreen from './components/SplashScreen.js';
import Intro from './components/Menu.js';

export default class Index extends Component {
  state = {
    ready: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 3500);
  }

  render() {
    if (this.state.ready === false) {
      return <SplashScreen />;
    }
   return <Intro />;
  }
}