import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  AsyncStorage,
} from 'react-native';
import Modal from 'react-native-modal';
const userInfo = { password: 'marcopolo2020' };
import colors from './color';
import InputField from './InputField';
import NextArrowButton from './NextArrowButton';

export default class LoginScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      formValid: true,
      error: '',
      isVisible: false,
      isVisibleHelp: false
    };
    //this._authunticate = this._authunticate.bind(this);
  }

  static navigationOptions = {
    header: null,
  };
  _signin = async () => {
    const { password } = this.state
    if (password == "") {
      this.setState({ isVisibleHelp: true })
      //Alert.alert(" ",'Por favor Insira a Palavra Passe.')
      console.log('Campo palavra passe vazio!')
    } else if (
      userInfo.password === this.state.password
    ) {
      await AsyncStorage.setItem('Logado', '1');
      this.props.navigation.navigate('Diurno');
      console.log('Entrou!!')
    } else {
      this.setState({ isVisible: true })
      console.log('login inválido.. :(');
    }
  };
  componentDidMount() {
    this._loadData();
  }

  _loadData = async () => {
    const Logado = await AsyncStorage.getItem('Logado');
    this.props.navigation.navigate(Logado !== '1' ? 'Menu' : 'Diurno');
  };

  /*_authunticate() {
    fetch(
      'https://rhconnect.marcopolo.com.br/api/requests/employees/getcpf/'+JSON.stringify(this.state.password),
      {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json; charset=UTF-8',
          'Authorization': 'Basic Token e4b8860f456b3c98b9590250de0707560bda10b8'
        }
      }
    )
      .then(r => r.json())
      .then(data =>
        console.log(data)
          //this.props.navigation.navigate('Diurno');
      )
      .catch((e) => {
        console.error('banana:', e);
      });
  }*/
  render() {
    const { formValid, loadingVisible } = this.state;
    const showNotification = formValid ? false : true;
    const bgColor = formValid ? colors.backColor : colors.darkOrange;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: bgColor }, styles.wrapper]}
        behavior="padding">
        <View style={styles.scrollViewWrapper}>
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
          <ScrollView style={styles.scrollView}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('../assets/Marcopolo_H_negativo.png')}
            />
            <InputField
              labelText="VERIFICAÇÃO"
              onChangeText={password => this.setState({ password })}
              labelTextSize={14}
              //placeholder={'Senha Intranet'}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
          <View style={styles.nextButtonWrapper}>
            <NextArrowButton handelPress={this._signin} />
          </View>
          <Modal
            isVisible={this.state.isVisible}
            style={styles.modalSwipe}
            onBackButtonPress={() => this.setState({ isVisible: false })}
            onBackdropPress={() => this.setState({ isVisible: false })}
            onSwipeComplete={() => this.setState({ isVisible: false })}
            onSwipeThreshold={20}
            backdropOpacity={0.01}
            swipeDirection={['up', 'left', 'right', 'down']}>
            <View style={{ flex: 1 }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.paragraphSwipe}>Erro de palavra Passe!</Text>
              </ScrollView>
            </View>
          </Modal>
          <Modal
            isVisible={this.state.isVisibleHelp}
            style={styles.modalSwipeHelp}
            onBackButtonPress={() => this.setState({ isVisibleHelp: false })}
            onBackdropPress={() => this.setState({ isVisibleHelp: false })}
            onSwipeComplete={() => this.setState({ isVisibleHelp: false })}
            onSwipeThreshold={20}
            backdropOpacity={0.01}
            swipeDirection={['up', 'left', 'right', 'down']}>
            <View style={{ flex: 1 }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.paragraphSwipe}>Preencha o campo!</Text>
              </ScrollView>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  logo: {
    width: 300,
    height: 100,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 2,
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 10,
    flex: 1,
  },
  nextButtonWrapper: {
    alignItems: 'flex-end',
    right: 0,
    bottom: 0,
  },
  modalSwipe: {
    justifyContent: 'flex-start',
    backgroundColor: '#ff0000',
    marginHorizontal: 0,
    marginBottom: 530,
    marginTop: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  modalSwipeHelp: {
    justifyContent: 'flex-start',
    backgroundColor: '#DFAA1E',
    marginHorizontal: 0,
    marginBottom: 530,
    marginTop: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  paragraphSwipe: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  }
});