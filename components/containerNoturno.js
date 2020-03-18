import React, { Component, Fragment } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import {
  getLocation,
  geocodeLocationByName,
} from './services/location-service';
import MapInput from './search/map-input';
import MapView, { Marker } from 'react-native-maps';
import { FAB } from 'react-native-paper';
import Modal from 'react-native-modal';
import { ContainerTop, TypeDescription, ContainerTab } from './stylesInfo.js';
import night from '../assets/night.png';
import Geocoder from 'react-native-geocoding';
import { withNavigation } from 'react-navigation';
import down from '../assets/two-down-arrows.png';
import sun from '../assets/sun.png';
import tur from '../assets/dayNight.png';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -29.1684796;
const LONGITUDE = -51.1793861;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
Geocoder.init('AIzaSyBqKPYXiV7BlP65rt4SbKmRHrCYAkqh7j0');
const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      focusedlocation: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      isLoading: true,
      markers: [],
      modalVisible: false,
      isVisibleAviso: false,
      locationChosen: false,
      showAlert: true,
      initialized: false,
      destination: null,
      duration: null,
      location: null,
      open: false,
    };
    this.switchMapType = this.switchMapType.bind(this);
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(','));

        this.setState({
          location,
          region: {
            latitude,
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      }, //sucesso
      () => { }, //erro
      {
        enableHighAccuracy: true, // allows you to get the most accurate location
        timeout: 20000, // (milliseconds) in which the app has to wait for location before it throws an error
        maximumAge: 1000, // (milliseconds) if a previous location exists in the cache, how old for it to be considered acceptable
        distanceFilter: 10, // (meters) how many meters the user has to move before a location update is triggered
      }
    );
    this.getInitialState();
    this.getLocationHandler();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.backpress,
      this.backHandler
    );
    return fetch(
      'https://gist.githubusercontent.com/MatheusCbrl/31b54461cd5c83909e21b48740918ec9/raw/11ac757b16fc56c3054f24fbbc319f68c6a6f110/ParadasNoturno.json'
    )
      .then(response => response.json())
      .then(responseJson => {
        // just setState here e.g.
        this.setState({
          markers: responseJson,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  onMapReady = () => {
    this.setState({ initialized: true });
  };
  handleBack = () => {
    this.setState({ destination: null });
  };

  backpress = () => {
    this.setState({ modalVisible: !this.state.modalVisible });

    return true;
  };
  backpressSair = () => {
    this.setState({ isVisibleAviso: !this.state.isVisibleAviso });

    return true;
  };

  backHandler = () => {
    BackHandler.exitApp();
  };
  getInitialState() {
    getLocation().then(data => {
      console.log(data);
      this.setState({
        region: {
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        },
      });
    });
  }


  getCoordsFromName(loc) {
    this.mapView.animateToRegion({
      ...this.state.region,
      latitude: loc.lat,
      longitude: loc.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    this.setState(prevState => {
      return {
        region: {
          ...prevState.region,
          latitude: loc.lat,
          longitude: loc.lng,
        },
      };
    });
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    console.log('Location picker Marker', coords);
    this.mapView.animateToRegion({
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

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            },
          },
        };

        this.pickLocationHandler(coordsEvent);
      },
      err => {
        console.log(err);
        //Alert.alert(' ','Ocorreu um erro ao carregar sua localização, por favor ligue o GPS!');
      },
      {
        enableHighAccuracy: true, // allows you to get the most accurate location
        timeout: 20000, // (milliseconds) in which the app has to wait for location before it throws an error
        maximumAge: 1000, // (milliseconds) if a previous location exists in the cache, how old for it to be considered acceptable
        distanceFilter: 10, // (meters) how many meters the user has to move before a location update is triggered
      }
    );
  };
  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };
  renderMarkers() {
    return this.state.isLoading
      ? null
      : this.state.markers.map((marker, index) => {
        const coords = {
          latitude: JSON.parse(marker.latitude),
          longitude: JSON.parse(marker.longitude),
        };
        return (
          <MapView.Marker
            onPress={this.pickLocationHandler}
            ref={mark => (marker.mark = mark)}
            key={index}
            title={marker.linha + ' - ' + marker.prestadora}
            description={
              'Aguarde o seu transporte a partir de: ' + marker.hora
            }
            tracksViewChanges={!this.state.initialized}
            {...this.props}
            pinColor={'tomato'}
            coordinate={coords}>
            {this.props.children}
          </MapView.Marker>
        );
      });
  }
  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    });
  };
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Menu');
  };
  switchMapType = () => {
    console.log('changing');
    this.setState({
      mapType: this.state.mapType === 'hybrid' ? 'standard' : 'hybrid',
    });
  };
  render() {
    const { showAlert, destination, duration, region, location } = this.state;
    return (
      <View style={styles.container} {...this.props}>
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
        <View style={styles.headerView} />
        <View>
          <MapView
            ref={map => (this.mapView = map)}
            style={styles.map}
            rotateEnabled={true}
            scrollEnabled={true}
            showsMyLocationButton={false}
            showsUserLocation={true}
            zoomEnabled={true}
            mapType={this.state.mapType}
            showsPointsOfInterest={false}
            rotateEnabled={true}
            scrollEnabled={true}
            zoomTapEnabled={true}
            zoomControlEnabled={false}
            showsBuildings={false}
            followsUserLocation={false}
            showsTraffic={false}
            customMapStyle={customStyle}
            initialRegion={this.state.focusedlocation}>
            {this.renderMarkers()}
            <MapView.Marker
              onPress={this.pickLocationHandler}
              pinColor={'orange'}
              coordinate={this.state.region}
            />
          </MapView>
          <MapInput style={{ flex: 1, position: 'absolute' }} notifyChange={loc => this.getCoordsFromName(loc)} />
          <ContainerTab>
            <View style={styles.appbar}>
              <TouchableOpacity
                onPress={() => this.setState({ isVisible: true })}
                style={{ backgroundColor: 'transparent' }}>
                <Image
                  source={require('../assets/menu-button.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginLeft: Platform.OS === 'ios' ? 15 : 10,
                    marginTop: 5,
                    tintColor: '#FF3D00',
                  }}
                />
                <Text
                  style={{
                    marginBottom: 15,
                    marginLeft: Platform.OS === 'ios' ? 11 : 6,
                    fontSize: 12,
                    color: '#FF3D00',
                  }}>
                  Menu
                </Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Ajuda')}
                  style={{ backgroundColor: 'transparent' }}>
                  <Image
                    source={require('../assets/information.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginLeft: Platform.OS === 'ios' ? 30 : 25,
                      marginTop: 5,
                      tintColor: '#FF3D00',
                    }}
                  />
                  <Text
                    style={{
                      marginBottom: 15,
                      marginLeft: 20,
                      fontSize: 12,
                      color: '#FF3D00',
                    }}>
                    Ajuda
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Linhas')}
                  style={{ backgroundColor: 'transparent' }}>
                  <Image
                    source={require('../assets/location(1).png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginLeft: 35,
                      marginTop: 5,
                      tintColor: '#FF3D00',
                    }}
                  />
                  <Text
                    style={{
                      marginBottom: 15,
                      marginLeft: 28,
                      fontSize: 12,
                      color: '#FF3D00',
                    }}>
                    Linhas
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ContainerTab>
          <TouchableOpacity style={styles.fab6}>
            <Image
              source={require('../assets/noturno.png')}
              resizeMode="contain"
              style={{
                height: 40,
                width: 80,
                tintColor: '#FF3D00',
              }}
            />
          </TouchableOpacity>
          <FAB.Group
            theme={{ colors: { accent: '#FF3D00' } }}
            color="#fff"
            backgroundColor="#FF3D00"
            open={this.state.open}
            icon={this.state.open ? down : night}
            actions={[
              {
                icon: sun,
                label: 'Diurno',
                onPress: () => this.props.navigation.navigate('Diurno'),
              },
              {
                icon: tur,
                label: 'Terceiro Turno',
                onPress: () => this.props.navigation.navigate('TerceiroTurno'),
              },
            ]}
            onStateChange={({ open }) => this.setState({ open })}
            onPress={() => {
              if (this.state.open) {
                // do something if the speed dial is open
              }
            }}
          />
          <TouchableOpacity
            onPress={this.getLocationHandler}
            style={styles.fab2}>
            <Image
              source={require('../assets/gps.png')}
              style={{
                width: 35,
                height: 35,
                margin: 10,
                tintColor: '#FF3D00',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.switchMapType.bind(this)}
            style={styles.fab3}>
            <Image
              source={require('../assets/mapView.png')}
              style={{
                width: 35,
                height: 35,
                margin: 10,
                //tintColor: '#FF3D00',
              }}
            />
          </TouchableOpacity>
          <Modal
            isVisible={this.state.isVisible}
            style={styles.modalSwipe}
            onBackButtonPress={() => this.setState({ isVisible: false })}
            onBackdropPress={() => this.setState({ isVisible: false })}
            onSwipeComplete={() => this.setState({ isVisible: false })}
            onSwipeThreshold={20}
            swipeDirection="down">
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.paragraphSwipe}>Menu</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Sobre')}>
                  <Text style={styles.buttonStyleSwipe}> Sobre </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ isVisibleAviso: true })}
                //onPress={this._logout}
                >
                  <Text style={styles.buttonStyleSwipe}> Sair </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isVisibleAviso}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 300,
                  height: 120,
                  backgroundColor: '#FFF',
                  padding: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{ fontSize: 20, color: 'black', alignSelf: 'center' }}>
                  Deseja Deslogar do aplicativo?
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => this.backpressSair()}
                    style={{
                      padding: 10,
                      marginHorizontal: 10,
                      backgroundColor: '#99d12a',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        padding: 5,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                      }}>
                      VOLTAR
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this._logout}
                    style={{
                      padding: 10,
                      marginHorizontal: 10,
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{ color: '#FFF', padding: 5, fontWeight: 'bold' }}>
                      DESLOGAR
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 300,
                  height: 120,
                  backgroundColor: '#FFF',
                  padding: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{ fontSize: 20, color: 'black', alignSelf: 'center' }}>
                  Deseja sair do aplicativo?
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => this.backpress()}
                    style={{
                      padding: 10,
                      marginHorizontal: 10,
                      backgroundColor: '#99d12a',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        padding: 5,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                      }}>
                      VOLTAR
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.backHandler()}
                    style={{
                      padding: 10,
                      marginHorizontal: 10,
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{ color: '#FFF', padding: 5, fontWeight: 'bold' }}>
                      SAIR
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
//export default withNavigation(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  appbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 46,
    flexDirection: 'row',
  },
  fab2: {
    position: 'absolute',
    bottom: 250,
    height: 55,
    width: 55,
    borderRadius: 30,
    marginLeft:
      Platform.OS === 'ios'
        ? Dimensions.get('window').width / 1.23
        : Dimensions.get('window').width / 1.23,
    backgroundColor: 'transparent',
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
  fab6: {
    position: 'absolute',
    bottom: 8,
    marginLeft:
      Platform.OS === 'ios'
        ? Dimensions.get('window').width / 1.85
        : Dimensions.get('window').width / 1.85,
    backgroundColor: 'transparent',
  },
  paragraphSwipe: {
    margin: 12,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  modalSwipe: {
    justifyContent: 'flex-start',
    backgroundColor: '#e5e5e5',
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop:
      Platform.OS === 'ios'
        ? Dimensions.get('window').width / 0.8
        : Dimensions.get('window').width / 0.8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  buttonStyleSwipe: {
    padding: 7,
    margin: 1,
    fontWeight: 'bold',
    borderRadius: 5,
    backgroundColor: '#FF3D00',
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
  },
});