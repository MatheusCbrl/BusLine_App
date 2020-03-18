import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modalbox';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import texto from './sobretexto';
import email from 'react-native-email';

const MIN_HEIGHT = 80;
const MAX_HEIGHT = 270;



const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 280,
    marginTop: 100,
    marginLeft: 35,
    alignSelf: 'stretch',
    resizeMode: 'contain',
    tintColor: '#FF3D00',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FF3D00',
    backgroundColor: 'white',
    
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    borderTopEndRadius: 35, 
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#FF3D00',
    borderRadius: 10,
    margin: 1,
    padding: 8,
  },
  keyword: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    //alignItems: 'center',
    paddingTop: 16,
    marginLeft: 10,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 400,    
  },
    imageButtonTitle: {
    marginLeft: 5,
    width: 25, 
    height: 25
  },
  imageButtonForeground:{
    tintColor: 'white',
    marginLeft: 10,
    marginBottom: 5,
    width: 25, 
    height: 25
  }
});


class Sobre extends Component {
  constructor() {
    super();
    this.state = { showNavTitle: false };
  }

handleEmail = () => {
    const to = ['matheus.cabral@marcopolo.com.br'] // string or array of email addresses to = ['matheus.cabral@marcopolo.com', 'outronome@bar.com'] 
    email(to, {
        // Optional additional arguments
        //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        //bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'Dúvidas ou sugestões para o App',
        body: 'Digite sua mensagem aqui'
    }).catch(console.error)
}

  render() {

    return (

      <View style={{ flex: 1 }}>
        
         <StatusBar hidden />
        <HeaderImageScrollView
          showsVerticalScrollIndicator={false}
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.8}
          minOverlayOpacity={0.01}
          fadeOutForeground
          disableHeaderGrow={false}
          renderHeader={() => (
            <Image source={texto.image} style={styles.image} 
             />
          )}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}>
              <TouchableOpacity  onPress={() =>this.props.navigation.navigate('Diurno')}> 
              <Image source={require('../assets/back.png')} style={styles.imageButtonForeground}/> 
              </TouchableOpacity> 
              <Text style={styles.navTitle}>
                {texto.title}
              </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}></Text>
            </View>
          )}>
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(0)}
            onDisplay={() => this.navTitleView.fadeOut(0)}>
            <TouchableOpacity  onPress={() =>this.props.navigation.navigate('Diurno')}> 
              <Image source={require('../assets/back.png')} style={styles.imageButtonTitle}/> 
            </TouchableOpacity>
            <Text style={styles.title}>
              <Text style={styles.name}>{texto.title}</Text>
            </Text>
          </TriggeringView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projeto</Text>
            <Text style={styles.sectionContent}>{texto.overview}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>A Marcopolo</Text>
            <Text style={styles.sectionContent}>{texto.history}</Text>
          </View>
          <View style={[styles.section, styles.section]}>
            <Text style={styles.sectionTitle}>Dúvidas ou Sugestões</Text>
            <View style={styles.keywords}>
              {texto.keywords.map(keyword => (
                <View style={styles.keywordContainer} key={keyword}>
               
                  <TouchableOpacity  onPress={() => this.refs.modalContato.open()}>
                      <Text style={styles.keyword} >{keyword}</Text>
                   </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text style={styles.sectionTitle}>Contato Desenvolvedor</Text>
            <View style={styles.keywords}>
              {texto.keywords1.map(keywords1 => (
                <View style={styles.keywordContainer} key={keywords1}>
               
                  <TouchableOpacity  onPress={() => this.refs.modalContato.open()}>
                      <Text style={styles.keyword} >{keywords1}</Text>
                   </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </HeaderImageScrollView>

        

       {/*Bottom Modal*/}
        <Modal
          style={{
            height: 150, 
            padding: 10,
            backgroundColor: '#e5e5e5',    
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
            }}
          position={'bottom'}
          ref={'modalContato'}>
          <Text style={styles.title}>Entre em contato: </Text>
            <TouchableOpacity onPress={this.handleEmail} style={styles.keywordContainer}>
              <Text style={styles.keyword} >Enviar um E-mail</Text>
            </TouchableOpacity>
            
        </Modal>
      </View>
    );
  }
}

export default Sobre;
