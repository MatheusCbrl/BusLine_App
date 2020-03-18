import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
  Platform,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
const imageNotuno = [
  {
    url: '',
    props: {
      source: require('../assets/NoturnoPatio.jpg')
    },
  },
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalStatusTerQuar: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={{ flex: 1, backgroundColor: '#222' }}>
          <Text
            style={styles.close}
            onPress={() => this.props.navigation.navigate('Linhas')}>
            FECHAR
          </Text>
          <ImageViewer imageUrls={imageNotuno} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  close: {
    position: 'absolute',
    padding: 10,
    backgroundColor: '#FF3D00',
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15,
    zIndex: 9999,
    top: 5,
    right: 5,
  },
});
