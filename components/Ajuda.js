import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import sun from '../assets/informationBot.png';
const CONTENT = [
  {
    title: 'Paradas próximas de sua casa',
    content: 'Apenas aperte no botão "Linhas" na tela inicial, entre e escolha seu turno... pronto! Agora é só escolher seu bairro para descobrir as paradas próximas de sua casa.',
  },
  {
    title: 'Paradas próximas de você',
    content: 'As paradas serão listadas ao redor da sua localização nas telas iniciais, você pode também procurar em outra localidade de seu interesse, apenas pesquise no campo "outro local?" o endereço ou nome do local.\nIMPORTANTE: Atentar ao seu turno.',
  },
  {
    title: 'Quanto tempo antes nas paradas',
    content: 'Recomendamos chegar pelo menos 5 minutos antes na sua parada de embarque, assim evitará de perder o ônibus.',
  },
  {
    title: 'Telefones de Contato dos Prestadores',
    content: 'Pode ligar para o responsável por sua linha:\nCaxiense: (54) 99175-7469\nBragé: (54) 98412-3035\nGiratur: (54) 99917-5187\nUnidos: (54) 99160-0126\nNova Palmira: (51) 99865-8387 ',
  },
  {
    title: 'Linhas de saída',
    content: 'Vá até o menu, aparecerá duas opções, línhas de saida diurno, noturno ou terceiro turno; escolha e  veja qual ônibus pegar na hora de ir para casa.\nIMPORTANTE: Não se esqueça de verificar no mapa a localização de seu ônibus no pátio da empresa.',
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
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
        <TouchableOpacity TouchableOpacity onPress={() => this.props.navigation.navigate('Diurno')}>
          {/*Donute Button Image */}
          <Image
            source={require('../assets/back.png')}
            style={{ marginLeft: 10, marginTop: 25, width: 25, height: 25, tintColor: '#FF3D00' }} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
          <Text style={styles.title}>Dúvidas frequentes</Text>

          <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>Habilitar a multipla seleção?</Text>
            <Switch
              trackColor={{ true: "#FF3D00" }}
              value={multipleSelect}
              onValueChange={a => this.setState({ multipleSelect: a })}
            />
          </View>
          <TouchableOpacity onPress={this.toggleExpanded}>
          </TouchableOpacity>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    margin: 12,
    color: '#34495e',
  },
  header: {
    backgroundColor: '#fff',
    padding: 2,
  },
  headerText: {
    //textAlign: 'center',
    padding: 8,
    fontWeight: 'bold',
    borderRadius: 15,
    backgroundColor: '#FF3D00',
    color: 'white',
    fontSize: 16,
    marginRight: 3,
    marginLeft: 3,
    alignItems: 'center',
  },
  chatBot: {
    flexDirection: 'row',
    fontWeight: 'bold',
    borderRadius: 2,
    backgroundColor: '#FF3D00',
    color: 'white',
    fontSize: 16,
    marginBottom: 3,
    marginRight: 3,
    marginLeft: 3,
    alignItems: 'center',
  },
  content: {
    padding: 5,
    marginLeft: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#fff',
  },
  inactive: {
    backgroundColor: '#fff',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
    alignItems: 'center',
    padding: 5,
    margin: 1,
    fontWeight: 'bold',
    borderRadius: 5,
    fontSize: 16,

  },
  multipleToggle__title: {
    fontSize: 16,
    color: '#34495e',
    fontWeight: 'bold',
    marginRight: 5,
  },
  ImageIconStyle: {
    padding: 10,
    tintColor: 'white',
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});