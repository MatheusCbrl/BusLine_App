import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { ContainerTopLines, TypeDescription } from '../stylesInfo.js';
const markers = require('./diurno json/JardimIracema.json');
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -29.1684796;
const LONGITUDE = -51.1793861;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width;

export default class screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: markers,
      locationChosen: false,
    };
    this.switchMapType = this.switchMapType.bind(this);
  }

  componentWillMount() {
    this.id = 0;
    this.animation = new Animated.Value(0);
  }
   componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let id = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item  let id = Math.floor(value / CARD_WIDTH + 0.3);
      if (id >= this.state.markers.length) {
        id = this.state.markers.length - 1;
      }
      if (id <= 0) {
        id = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.id !== id) {
          this.id = id;
          const { latitude, longitude, mark } = this.state.markers[id];
          const { coordinate } = this.state.markers[id];
          this.map.animateToRegion(
            {
              latitude: JSON.parse(latitude),
              longitude: JSON.parse(longitude),
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            500
          );
          mark.showCallout();
        }
      }, 10);
    });
  }

  _mapReady = () => {
    this.animate();
    this.state.markers[0].mark.showCallout();
  };
  animate() {
    let r = {
      latitude: JSON.parse(this.state.markers[0].latitude),
      longitude: JSON.parse(this.state.markers[0].longitude),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta:
        (Dimensions.get('window').width / Dimensions.get('window').height) *
        0.00522,
    };
    this.map.animateToRegion(r, 500);
  }
  switchMapType = () => {
    console.log('changing');
    this.setState({
      mapType: this.state.mapType === 'hybrid' ? 'standard' : 'hybrid',
    });
  };
  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    console.log('Location picker Marker', coords);
    this.map.animateToRegion({
      ...this.state.focusedlocation,
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });

    this.setState(prevState => {
      return {
        focusedlocation: {
          ...prevState.focusedlocation,
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        locationChosen: true,
      };
    });
  };

  render() {
    const interpolations = this.state.markers.map(
      (markers, id, latitude, longitude, hora, linha, prestadora) => {
        const inputRange = [
          (id - 1) * CARD_WIDTH,
          id * CARD_WIDTH,
          (id + 1) * CARD_WIDTH,
        ];
        const scale = this.animation.interpolate({
          inputRange,
          outputRange: [1, 2.5, 1],
          extrapolate: 'clamp',
        });
        const opacity = this.animation.interpolate({
          inputRange,
          outputRange: [0.35, 1, 0.35],
          extrapolate: 'clamp',
        });
        return { scale, opacity };
      }
    );

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={Platform.OS === 'ios' ? false : true}
          //To hide statusBar
          backgroundColor="transparent"
          //Background color of statusBar
          translucent={true}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={false}
        />
        <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
          mapType={this.state.mapType}
          onMapReady={this._mapReady}>
          {this.state.markers.map(
            (markers, id, latitude, longitude, hora, linha, prestadora) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[id].scale,
                  },
                ],
              };
              const opacityStyle = {
                opacity: interpolations[id].opacity,
              };
              return (
                <MapView.Marker
                  onPress={this.pickLocationHandler}
                  ref={mark => (markers.mark = mark)}
                  key={id}
                  title={markers.linha + ' - ' + markers.prestadora}
                  pinColor={'tomato'}
                  description={
                    'Aguarde o seu transporte a partir de: ' + markers.hora
                  }
                  coordinate={{
                    latitude: JSON.parse(markers.latitude),
                    longitude: JSON.parse(markers.longitude),
                  }}
                />
              );
            }
          )}
        </MapView>
        <TouchableOpacity
          onPress={this.switchMapType.bind(this)}
          style={styles.fab3}>
          <Image
            source={require('../../assets/mapView.png')}
            style={{
              width: 35,
              height: 35,
              margin: 10,
              //tintColor: '#FF3D00',
            }}
          />
        </TouchableOpacity>
        <ContainerTopLines>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Linhas')}>
            {/*Donute Button Image */}
            <Image
              source={require('../../assets/back.png')}
              style={{
                marginLeft: 10,
                marginTop: 15,
                width: 25,
                height: 25,
                tintColor: '#FF3D00',
              }}
            />
          </TouchableOpacity>
        </ContainerTopLines>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}>
          {this.state.markers.map(
            (markers, id, latitude, longitude, hora, linha, prestadorax) => (
              <View style={styles.card} key={id}>
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.title}>
                    Ponto {markers.id}{' '}
                  </Text>
                  <Text numberOfLines={1} style={styles.text}>
                    A partir de: {markers.hora}
                  </Text>
                  <Text numberOfLines={1} style={styles.text1}>
                    
                  </Text>
                  <Image
                    source={require('../../assets/drag.png')}
                    style={{
                      marginLeft: Dimensions.get('window').width / 1.5, 
                      width: 65,
                      height: 65,
                      tintColor: '#FF3D00',
                    }}
                  />
                </View>
              </View>
            )
          )}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    //marginHorizontal: 5,
  },
  endPadding: {
    marginHorizontal: 5,
  },
  card: {
    padding: 10,
    backgroundColor: '#e5e5e5',
    shadowColor: '#000',
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  textContent: {
    flex: 1,
  },
  fab3: {
    position: 'absolute',
    bottom: 300,
    height: 55,
    width: 55,
    borderRadius: 30,
    marginLeft:
      Platform.OS === 'ios'
        ? Dimensions.get('window').width / 1.23
        : Dimensions.get('window').width / 1.23,
    backgroundColor: 'transparent',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FF3D00',
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#999',
    backgroundColor: 'transparent',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#999',
    backgroundColor: 'transparent',
  },
});
