import React from 'react';
import { Platform, View, TouchableOpacity, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const workPlace = {
  description: 'Trabalho',
  geometry: { location: { lat: -29.1166504, lng: -51.1115736 } },
};

class MapInput extends React.Component {
  state = {
    searchFocused: false,
  };
  render() {
    const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;
    return (
      <GooglePlacesAutocomplete
        ref={instance => {
          this.GooglePlacesRef = instance;
        }}
        placeholder="Outro Local?"
        placeholderTextColor="#222"
        returnKeyType={'search'} // Can be left out for default return key
        //onPress={onLocationSelected}
        onPress={(data, details = null) => {this.props.notifyChange(details.geometry.location); this.GooglePlacesRef.setAddressText("")}}// 'details' is provided when fetchDetails = true
        getDefaultValue={() => ''}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Ao meu redor?"
        //predefinedPlaces={[workPlace]}
        query={{
          key: 'AIzaSyBqKPYXiV7BlP65rt4SbKmRHrCYAkqh7j0', //"your_api_Key_here",
          language: 'pt-BR',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
        textInputProps={{
          onFocus: () => {
            this.setState({ searchFocused: true });
          },
          onBlur: () => {
            this.setState({ searchFocused: false });
          },
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        listViewDisplayed={searchFocused}
        fetchDetails={true}
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute',
            top: Platform.select({ ios: 30, android: 25 }),
            width: '100%',
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 40,
            marginHorizontal: 10,
            borderTopWidth: 0,
            borderRadius: 15,
            borderBottomWidth: 0,
          },
          textInput: {
            height: 40,
            margin: 0,
            borderRadius: 5,
            backgroundColor: '#e5e5e5',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            borderWidth: 1,
            borderColor: '#DDD',
            fontSize: 15,
          },
          listView: {
            borderWidth: 1,
            borderColor: '#DDD',
            backgroundColor: '#e5e5e5',
            marginHorizontal: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 10,
            fontSize: 15,
          },
          description: {
            fontSize: 15,
          },
          row: {
            padding: 20,
            height: 58,
          },
        }}
      />
    );
  }
}

export default MapInput;
