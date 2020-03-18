import {DrawerNavigator} from 'react-navigation'; // 1.0.3
import React, {Component} from 'react';

import HomeScreen from './Login.js';
import Noturno from './containerNoturno.js';
import Diurno from './containerDiurno.js';
import TerceiroTurno from './containerTerceiroTurno.js';


import Linhas from './Linhas.js';
import Ajuda from './Ajuda.js';
import ChatBot from './ChatBot.js';
import Sobre from './sobre.js';

import ImageDiurno from './PatioDiunro.js'
import ImageNoturno from './PatioNoturno.js'
import ImageTerTurno from './PatioTerTurno.js'

import LinhaDiurno01 from './Diurno/3ªLégua-Oriental-NossaSenhoradasGraças.js';
import LinhaDiurno02 from './Diurno/4ªLégua-Galópolis.js';
import LinhaDiurno03 from './Diurno/BelaVista-Cruzeiro.js';
import LinhaDiurno04 from './Diurno/BomPrincípio-ValedoHermes-MorroParis.js';
import LinhaDiurno05 from './Diurno/CantoKrewer-ValeReal.js';
import LinhaDiurno06 from './Diurno/Castelo-SãoCristóvão.js';
import LinhaDiurno07 from './Diurno/Centro-Exposição-Ipiranga-Lourdes-BR116.js';
import LinhaDiurno08 from './Diurno/CidadeNova.js';
import LinhaDiurno09 from './Diurno/ColinaSorriso-AltosdoSeminário-SantaLúcia-SantaCatarina-Centro-Planalto.js';
import LinhaDiurno10 from './Diurno/Cruzeiro-SãoLuiz-CamposdaSerra-DeZorziII.js';
import LinhaDiurno11 from './Diurno/Cruzeiro.js';
import LinhaDiurno12 from './Diurno/Desvio Rizzo.js';
import LinhaDiurno13 from './Diurno/DesvioRizzo.js';
import LinhaDiurno14 from './Diurno/Escadinhas-CantodoRio-Matiel.js';
import LinhaDiurno15 from './Diurno/Esplanada-ArcoBaleno-União-SãoCaetano-BomPastor.js';
import LinhaDiurno16 from './Diurno/Esplanada-Planalto.js';
import LinhaDiurno17 from './Diurno/Farroupilha .js';
import LinhaDiurno18 from './Diurno/Farroupilha.js';
import LinhaDiurno19 from './Diurno/Fátima-MoradadosAlpes.js';
import LinhaDiurno20 from './Diurno/Feliz-Coqueral-PiacadaCara-SãoRoque-Bananal-LinhaTemerária-Tirol-VilaCristina.js';
import LinhaDiurno21 from './Diurno/Felliz-ArroiodoOuro.js';
import LinhaDiurno22 from './Diurno/FloresdaCunha.js';
import LinhaDiurno23 from './Diurno/Floresta-SãoCatano-SãoCatanodoSul.js';
import LinhaDiurno24 from './Diurno/ForquetaBaixa-ArroiodoOuro-NovaPalmira.js';
import LinhaDiurno25 from './Diurno/Forqueta-SãoPelegrino-Centro-JardelinoRamos-SagradaFamília.js';
import LinhaDiurno26 from './Diurno/Industrial-SantoAntonio-VilaIpê-ColinadoSol-BeloHorizonte-RotadoSol.js';
import LinhaDiurno27 from './Diurno/JardimAmérica-Centro-Lourdes.js';
import LinhaDiurno28 from './Diurno/JardimdoShopping-RosárioII-AltosSanTiago.js';
import LinhaDiurno29 from './Diurno/JardimEsmeralda-Fátima.js';
import LinhaDiurno30 from './Diurno/JardimIracema.js';
import LinhaDiurno31 from './Diurno/Kaiser-BomPastor-SãoCaetano.js';
import LinhaDiurno32 from './Diurno/Madureira-1ºdeMaio-Centro-AvenidaSãoLeopoldo-SagradaFamilia.js';
import LinhaDiurno33 from './Diurno/Madureira-Universitário-NossaSenhoradeFátima.js';
import LinhaDiurno34 from './Diurno/MarechalFloriano-Cinquentenário-RioBranco-Panazzolo-Planalto.js';
import LinhaDiurno35 from './Diurno/Mariani-Reolon-MarechalFloriano.js';
import LinhaDiurno36 from './Diurno/Mariani.js';
import LinhaDiurno37 from './Diurno/NossaSenhoradasGraças-Caravaggio-MonteCarmelo-Kaiser-Planalto-BelaVista.js';
import LinhaDiurno38 from './Diurno/NossaSra.js';
import LinhaDiurno39 from './Diurno/NovaPetrópolis-VilaCristina-Galópolis.js';
import LinhaDiurno40 from './Diurno/Panazzolo-CristoRedentor-BR116.js';
import LinhaDiurno41 from './Diurno/Petrópolis-Treviso-Br116.js';
import LinhaDiurno42 from './Diurno/Planalto-MonteReale.js';
import LinhaDiurno43 from './Diurno/RioBranco-SãoLeopoldo.js';
import LinhaDiurno44 from './Diurno/RioBranco-Kaiser-BomPastor.js';
import LinhaDiurno45 from './Diurno/Rosario-Charqueadas-SãoLeopoldo.js';
import LinhaDiurno46 from './Diurno/SantaCatarina-PioX-Pioneiro-PordoSol-Centenário-SantaFé.js';
import LinhaDiurno47 from './Diurno/SantoAntônio-JardimIracema-Serrano.js';
import LinhaDiurno48 from './Diurno/SantosDumont.js';
import LinhaDiurno49 from './Diurno/SãoGotardo-SantaBárbara-LoteamentoBachi-VilaAlpina.js';
import LinhaDiurno50 from './Diurno/SãoJosé-Centenário-SãoCiroI-SãoCiroII.js';
import LinhaDiurno51 from './Diurno/SãoJosé-Fátima-VilaMari.js';
import LinhaDiurno52 from './Diurno/SãoMarcos-PedrasBrancas.js';
import LinhaDiurno53 from './Diurno/SãoMarcos.js';
import LinhaDiurno54 from './Diurno/SãoMateus-MonteCarmelo-Consolação-Esplanada.js';
import LinhaDiurno55 from './Diurno/SãoPedro-CentroAltoFeliz-ArroioFeliz-ValeReal.js';
import LinhaDiurno56 from './Diurno/SãoRoque-FazendaSouza-SãoBraz-RotadoSol.js';
import LinhaDiurno57 from './Diurno/SãoValentin-ParadaCristal-TravessãoPorto-LoteamenteBalardin.js';
import LinhaDiurno58 from './Diurno/SãoVictorCohab-SantaBárbara-Vitória-Paiquerê.js';
import LinhaDiurno59 from './Diurno/SãoVirgílio-BelaVista-LaPaloma-VilaLeon-RecantodosPássaros-SãoFrancisco.js';
import LinhaDiurno60 from './Diurno/SéculoXX-Mariland-JardimdasHortências-JardimEldorado.js';
import LinhaDiurno61 from './Diurno/Serrano-SantoAntônio.js';
import LinhaDiurno62 from './Diurno/Serrano.js';
import LinhaDiurno63 from './Diurno/Veneto-VilaLobos-SantaCorona.js';
import LinhaDiurno64 from './Diurno/Veneza-SantaFé-BeloHorizonte.js';
import LinhaDiurno65 from './Diurno/VilaPinga-ValeReal.js';
import LinhaDiurno66 from './Diurno/VilaRica-RS452.js';
import LinhaDiurno67 from './Diurno/VilaSeca-BocadaSerra-AnaRech-SolardoPrado.js';
import LinhaDiurno68 from './Diurno/VilaVerde-Planalto.js';
import LinhaDiurno69 from './Diurno/Vinhedos-NossaSenhoradaSaúde-VilaIpê-BeloHorizonte.js';
import LinhaDiurno70 from './Diurno/PlanaltoRioBranco.js';
import LinhaDiurno71 from './Diurno/PresidenteVargas-Diamantino.js';
import LinhaDiurno72 from './Diurno/Serrano .js';

import LinhaNoturno01 from './Noturno/3ª Légua-Oriental-Nossa Senhora das Graças-Caravaggio.js';
import LinhaNoturno02 from './Noturno/Arco Baleno-Esplanada-Santos Dumont-Kaiser-Salgado Filho.js';
import LinhaNoturno03 from './Noturno/Arroio do Ouro-Nova Palmira-Vila Cristina-Galópolis.js';
import LinhaNoturno04 from './Noturno/Bananal-São Roque-Vila Pavão-Picada Cará-Vila Rica-Feliz-Arroio Feliz-Vila Cristina.js';
import LinhaNoturno05 from './Noturno/Boca da Serra-São Gotardo-Santa Bárbara.js';
import LinhaNoturno06 from './Noturno/Bom Pastor-Bom Pastor 1-Bom Pastor 2-Santos Dumont.js';
import LinhaNoturno07 from './Noturno/Canto Krewer-Vale Real.js';
import LinhaNoturno08 from './Noturno/Canyon-Brandalise-Santo Antônio-Colina do Sol-Vila Ipê-Belo Horizonte.js';
import LinhaNoturno09 from './Noturno/Castelo-Solar do Prado-Ana Rech.js';
import LinhaNoturno10 from './Noturno/Centenário-Parque Oásis.js';
import LinhaNoturno11 from './Noturno/Centro-Imigrante BR-Petrópolis UCS-Presidente Vargas BR.js';
import LinhaNoturno12 from './Noturno/Cidade Nova-Monte Bérico.js';
import LinhaNoturno13 from './Noturno/Consolação-Monte Carmelo-Montes Claros.js';
import LinhaNoturno14 from './Noturno/Cruzeiro-De Zorzi-Diamantino.js';
import LinhaNoturno15 from './Noturno/De Lazzer-Século XX-Marilan-São Ciro-São Ciro 2.js';
import LinhaNoturno16 from './Noturno/Diamantino-De Zorzi 1-De Zorzi 2-Campos da Serra-Belvedere-São Luiz.js';
import LinhaNoturno17 from './Noturno/Esplanada -Bom Pastor -Kaiser-Rio Branco-Cinquentenário-São José.js';
import LinhaNoturno18 from './Noturno/Esplanada -Salgado Filho.js';
import LinhaNoturno19 from './Noturno/Fátima-Interlagos.js';
import LinhaNoturno20 from './Noturno/AltoFeliz-ValeReal-MPPlanalto.js';
import LinhaNoturno21 from './Noturno/Galópolis-Santa Corona.js';
import LinhaNoturno22 from './Noturno/Jardelino Ramos-Cristo Redentor-Lourdes.js';
import LinhaNoturno23 from './Noturno/Jardim Iracema-Brasília.js';
import LinhaNoturno24 from './Noturno/Jardim Itália-Santa Lúcia-Colina Sorriso-Santa Catarina-Pioneiro.js';
import LinhaNoturno25 from './Noturno/Loteamento Mandrean-Desvio Rizzo-Parque das Rosas.js';
import LinhaNoturno26 from './Noturno/Loteamento Santa Rita-Parque dos Pinhais-Parada Cristal-Balardin-Loteamento Back-Brasília.js';
import LinhaNoturno27 from './Noturno/Loteamento Santiago-Rosário 2-São Francisco-Vila Amélia-Rosário-Jardim do Shopping.js';
import LinhaNoturno28 from './Noturno/Morada dos Alpes-Vitório 3-Fátima Baixo-Fátima-Parque Oasis-Nossa Senhora do Rosário.js';
import LinhaNoturno29 from './Noturno/Nossa Senhora da Saúde-Vinhedos-São José-Belo Horizonte.js';
import LinhaNoturno30 from './Noturno/Nossa Senhora das Graças-Esplanada-Caravagio II-Glória-Bela Vista-Cruzeiro.js';
import LinhaNoturno31 from './Noturno/Planalto 2-Monte Reale-Planalto 1.js';
import LinhaNoturno32 from './Noturno/Planalto 2-Planalto.js';
import LinhaNoturno33 from './Noturno/Planalto Rio Branco-Intral-Perimetral Bruno Segala.js';
import LinhaNoturno34 from './Noturno/Presidente Vargas-Diamantino-Residencial Treviso-São Ciro BR 116.js';
import LinhaNoturno35 from './Noturno/Rota do Sol-Faxinal-São Bráz-Fazenda Souza.js';
import LinhaNoturno36 from './Noturno/Samuara-Forqueta-Tirol-São Leopoldo-Panazzolo.js';
import LinhaNoturno37 from './Noturno/Santa Catarina-Madureira-1º de Maio-Universitário-Jardim América-Sagrada Família.js';
import LinhaNoturno38 from './Noturno/Santa Fé-São Bernardo-Santo Antonio.js';
import LinhaNoturno39 from './Noturno/Santo Antonio-Jardim Eldorado-Iracema.js';
import LinhaNoturno40 from './Noturno/Santo Antônio 6ª Légua-São Virgílio 6ª Légua-Bela Vista-Vila Leon.js';
import LinhaNoturno41 from './Noturno/Santo Antônio-Iracema-Serrano.js';
import LinhaNoturno42 from './Noturno/São Caetano.js';
import LinhaNoturno43 from './Noturno/São Caetano-Arco Baleno-Kaiser-Floresta-União-Perimetral-Cinquentenário-Santa Catarina.js';
import LinhaNoturno44 from './Noturno/São Caetano-Esplanada-BR 116.js';
import LinhaNoturno45 from './Noturno/São Cristóvão-Serrano.js';
import LinhaNoturno46 from './Noturno/São Giacomo-Matioda-Reolon-Belo Horizonte-São José-Santa Catarina-Santo André-Tijuca-Fatima Baixo.js';
import LinhaNoturno47 from './Noturno/São Leopoldo-Rio Branco-São Pelegrino-Jardim das Hortências.js';
import LinhaNoturno48 from './Noturno/São Leopoldo-Vila Verde-Planalto.js';
import LinhaNoturno49 from './Noturno/São Lucas-Desvio Rizzo-Vila Romana-Santa Tereza-Conceição-Pedreira do Guerra.js';
import LinhaNoturno50 from './Noturno/São Pelegrino-Centro-Nsª de Lourdes-Hospital Geral BR 116-Cartório BR 116-Daniel Fut7.js';
import LinhaNoturno51 from './Noturno/São Vitor Cohab-Santa Barbara-Vitória-Paiquere-Bela Vista.js';
import LinhaNoturno52 from './Noturno/Serrano-Jardim Adorado.js';
import LinhaNoturno53 from './Noturno/Serrano.js';
import LinhaNoturno54 from './Noturno/Tijuca-Reolon-Mariane 1-Mariane 2-Cidade Nova-Industrial.js';
import LinhaNoturno55 from './Noturno/Vila Ipiranga-Cruzeiro-Bela Vista.js';
import LinhaNoturno56 from './Noturno/Vila Lobos-São Leopoldo-Exposição-Centro-PioX-Perimetral Norte-Universitário-Interlagos-Sagrada Família.js';
import LinhaNoturno57 from './Noturno/Vila Mari-Planato 1-Bela Vista-BR 116.js';
import LinhaNoturno58 from './Noturno/Vila Seca-Boca de Serra.js';
import LinhaNoturno59 from './Noturno/Feliz-Morro Paris-Canto Krewer.js';
import LinhaNoturno60 from './Noturno/Serrano01.js';

import LinhaTerceiroTurno01 from './Noturno/Terceiro Turno/Cidade nova-Mariani-Reolon-Santo André-Santa Catarina-Perimetral(medianeira)-Mariland.js';
import LinhaTerceiroTurno02 from './Noturno/Terceiro Turno/Consolação-São Matheus-Oriental.js';
import LinhaTerceiroTurno03 from './Noturno/Terceiro Turno/Cruzeiro-Vila leon-São Luiz-Campos da Serra- Dezorzi -Treviso.js';
import LinhaTerceiroTurno04 from './Noturno/Terceiro Turno/Desvio Rizzo-São lucas-Parque das Rosas-Marechal Floriano.js';
import LinhaTerceiroTurno05 from './Noturno/Terceiro Turno/Galópolis-Vila Lobos-Santa Corona-UCS-Jardim das Hortências.js';
import LinhaTerceiroTurno06 from './Noturno/Terceiro Turno/Kaiser-Bom Pastor-São Caetano-Caravagio- Oriental-Esplanada.js';
import LinhaTerceiroTurno07 from './Noturno/Terceiro Turno/Kaiser-Rio Branco-Presidente Vargas- diamantino.js';
import LinhaTerceiroTurno08 from './Noturno/Terceiro Turno/Parque Oases-Santa Fé-Colina do Sol-Pioneiro, Fátima-Fátima-Centenário-Belo Horizonte-Vila Ipe-São José.js';
import LinhaTerceiroTurno09 from './Noturno/Terceiro Turno/Planalto-Vila Mari-São Vitor-Vitoria.js';
import LinhaTerceiroTurno10 from './Noturno/Terceiro Turno/Santa Tereza-Desvio Rizzo- Jardim do Shopping-Rosário I-Planalto-Rio Branco.js';
import LinhaTerceiroTurno11 from './Noturno/Terceiro Turno/Serrano-Parada Cristal- Iracema- Eldorado-Santa Barbara- Loteamento Back-Solar Prado-Ana Rech.js';

class App extends Component{
 render(){
   return(
      <Navegador />
   );
 } 
}

const Navegador = DrawerNavigator(
{
    Menu: { screen: HomeScreen },
    Diurno:{ screen: Diurno},
    Noturno: { screen: Noturno },
    TerceiroTurno: {screen: TerceiroTurno},
    Linhas: { screen: Linhas },
    Ajuda: { screen: Ajuda },
    Sobre: { screen: Sobre },
    ChatBot: { screen: ChatBot },
    ImageDiurno: { screen: ImageDiurno },
    ImageNoturno: { screen: ImageNoturno },
    ImageTerTurno: { screen: ImageTerTurno },

    LinhaDiurno01: { screen: LinhaDiurno01},
    LinhaDiurno02: { screen: LinhaDiurno02},
    LinhaDiurno03: { screen: LinhaDiurno03},
    LinhaDiurno04: { screen: LinhaDiurno04},
    LinhaDiurno05: { screen: LinhaDiurno05},
    LinhaDiurno06: { screen: LinhaDiurno06},
    LinhaDiurno07: { screen: LinhaDiurno07},
    LinhaDiurno08: { screen: LinhaDiurno08},
    LinhaDiurno09: { screen: LinhaDiurno09},
    LinhaDiurno10: { screen: LinhaDiurno10},
    LinhaDiurno11: { screen: LinhaDiurno11},
    LinhaDiurno12: { screen: LinhaDiurno12},
    LinhaDiurno13: { screen: LinhaDiurno13},
    LinhaDiurno14: { screen: LinhaDiurno14},
    LinhaDiurno15: { screen: LinhaDiurno15},
    LinhaDiurno16: { screen: LinhaDiurno16},
    LinhaDiurno17: { screen: LinhaDiurno17},
    LinhaDiurno18: { screen: LinhaDiurno18},
    LinhaDiurno19: { screen: LinhaDiurno19},
    LinhaDiurno20: { screen: LinhaDiurno20},
    LinhaDiurno21: { screen: LinhaDiurno21},
    LinhaDiurno22: { screen: LinhaDiurno22},
    LinhaDiurno23: { screen: LinhaDiurno23},
    LinhaDiurno24: { screen: LinhaDiurno24},
    LinhaDiurno25: { screen: LinhaDiurno25},
    LinhaDiurno26: { screen: LinhaDiurno26},
    LinhaDiurno27: { screen: LinhaDiurno27},
    LinhaDiurno28: { screen: LinhaDiurno28},
    LinhaDiurno29: { screen: LinhaDiurno29},
    LinhaDiurno30: { screen: LinhaDiurno30},
    LinhaDiurno31: { screen: LinhaDiurno31},
    LinhaDiurno32: { screen: LinhaDiurno32},
    LinhaDiurno33: { screen: LinhaDiurno33},
    LinhaDiurno34: { screen: LinhaDiurno34},
    LinhaDiurno35: { screen: LinhaDiurno35},
    LinhaDiurno36: { screen: LinhaDiurno36},
    LinhaDiurno37: { screen: LinhaDiurno37},
    LinhaDiurno38: { screen: LinhaDiurno38},
    LinhaDiurno39: { screen: LinhaDiurno39},
    LinhaDiurno40: { screen: LinhaDiurno40},
    LinhaDiurno41: { screen: LinhaDiurno41},
    LinhaDiurno42: { screen: LinhaDiurno42},
    LinhaDiurno43: { screen: LinhaDiurno43},
    LinhaDiurno44: { screen: LinhaDiurno44},
    LinhaDiurno45: { screen: LinhaDiurno45},
    LinhaDiurno46: { screen: LinhaDiurno46},
    LinhaDiurno47: { screen: LinhaDiurno47},
    LinhaDiurno48: { screen: LinhaDiurno48},
    LinhaDiurno49: { screen: LinhaDiurno49},
    LinhaDiurno50: { screen: LinhaDiurno50},
    LinhaDiurno51: { screen: LinhaDiurno51},
    LinhaDiurno52: { screen: LinhaDiurno52},
    LinhaDiurno53: { screen: LinhaDiurno53},
    LinhaDiurno54: { screen: LinhaDiurno54},
    LinhaDiurno55: { screen: LinhaDiurno55},
    LinhaDiurno56: { screen: LinhaDiurno56},
    LinhaDiurno57: { screen: LinhaDiurno57},
    LinhaDiurno58: { screen: LinhaDiurno58},
    LinhaDiurno59: { screen: LinhaDiurno59},
    LinhaDiurno60: { screen: LinhaDiurno60},
    LinhaDiurno61: { screen: LinhaDiurno61},
    LinhaDiurno62: { screen: LinhaDiurno62},
    LinhaDiurno63: { screen: LinhaDiurno63},
    LinhaDiurno64: { screen: LinhaDiurno64},
    LinhaDiurno65: { screen: LinhaDiurno65},
    LinhaDiurno66: { screen: LinhaDiurno66},
    LinhaDiurno67: { screen: LinhaDiurno67},
    LinhaDiurno68: { screen: LinhaDiurno68},
    LinhaDiurno69: { screen: LinhaDiurno69},
    LinhaDiurno70: {screen: LinhaDiurno70},
    LinhaDiurno71: {screen: LinhaDiurno71},
    LinhaDiurno72: {screen: LinhaDiurno72},
    
    LinhaNoturno01: { screen: LinhaNoturno01},
    LinhaNoturno02: { screen: LinhaNoturno02},
    LinhaNoturno03: { screen: LinhaNoturno03},
    LinhaNoturno04: { screen: LinhaNoturno04},
    LinhaNoturno05: { screen: LinhaNoturno05},
    LinhaNoturno06: { screen: LinhaNoturno06},
    LinhaNoturno07: { screen: LinhaNoturno07},
    LinhaNoturno08: { screen: LinhaNoturno08},
    LinhaNoturno09: { screen: LinhaNoturno09},
    LinhaNoturno10: { screen: LinhaNoturno10},
    LinhaNoturno11: { screen: LinhaNoturno11},
    LinhaNoturno12: { screen: LinhaNoturno12},
    LinhaNoturno13: { screen: LinhaNoturno13},
    LinhaNoturno14: { screen: LinhaNoturno14},
    LinhaNoturno15: { screen: LinhaNoturno15},
    LinhaNoturno16: { screen: LinhaNoturno16},
    LinhaNoturno17: { screen: LinhaNoturno17},
    LinhaNoturno18: { screen: LinhaNoturno18},
    LinhaNoturno19: { screen: LinhaNoturno19},
    LinhaNoturno20: { screen: LinhaNoturno20},
    LinhaNoturno21: { screen: LinhaNoturno21},
    LinhaNoturno22: { screen: LinhaNoturno22},
    LinhaNoturno23: { screen: LinhaNoturno23},
    LinhaNoturno24: { screen: LinhaNoturno24},
    LinhaNoturno25: { screen: LinhaNoturno25},
    LinhaNoturno26: { screen: LinhaNoturno26},
    LinhaNoturno27: { screen: LinhaNoturno27},
    LinhaNoturno28: { screen: LinhaNoturno28},
    LinhaNoturno29: { screen: LinhaNoturno29},
    LinhaNoturno30: { screen: LinhaNoturno30},
    LinhaNoturno31: { screen: LinhaNoturno31},
    LinhaNoturno32: { screen: LinhaNoturno32},
    LinhaNoturno33: { screen: LinhaNoturno33},
    LinhaNoturno34: { screen: LinhaNoturno34},
    LinhaNoturno35: { screen: LinhaNoturno35},
    LinhaNoturno36: { screen: LinhaNoturno36},
    LinhaNoturno37: { screen: LinhaNoturno37},
    LinhaNoturno38: { screen: LinhaNoturno38},
    LinhaNoturno39: { screen: LinhaNoturno39},
    LinhaNoturno40: { screen: LinhaNoturno40},
    LinhaNoturno41: { screen: LinhaNoturno41},
    LinhaNoturno42: { screen: LinhaNoturno42},
    LinhaNoturno43: { screen: LinhaNoturno43},
    LinhaNoturno44: { screen: LinhaNoturno44},
    LinhaNoturno45: { screen: LinhaNoturno45},
    LinhaNoturno46: { screen: LinhaNoturno46},
    LinhaNoturno47: { screen: LinhaNoturno47},
    LinhaNoturno48: { screen: LinhaNoturno48},
    LinhaNoturno49: { screen: LinhaNoturno49},
    LinhaNoturno50: { screen: LinhaNoturno50},
    LinhaNoturno51: { screen: LinhaNoturno51},
    LinhaNoturno52: { screen: LinhaNoturno52},
    LinhaNoturno53: { screen: LinhaNoturno53},
    LinhaNoturno54: { screen: LinhaNoturno54},
    LinhaNoturno55: { screen: LinhaNoturno55},
    LinhaNoturno56: { screen: LinhaNoturno56},
    LinhaNoturno57: { screen: LinhaNoturno57},
    LinhaNoturno58: { screen: LinhaNoturno58},
    LinhaNoturno59: { screen: LinhaNoturno59},
    LinhaNoturno60: { screen: LinhaNoturno60},

    LinhaTerceiroTurno01: { screen: LinhaTerceiroTurno01},
    LinhaTerceiroTurno02: { screen: LinhaTerceiroTurno02},
    LinhaTerceiroTurno03: { screen: LinhaTerceiroTurno03},
    LinhaTerceiroTurno04: { screen: LinhaTerceiroTurno04},
    LinhaTerceiroTurno05: { screen: LinhaTerceiroTurno05},
    LinhaTerceiroTurno06: { screen: LinhaTerceiroTurno06},
    LinhaTerceiroTurno07: { screen: LinhaTerceiroTurno07},
    LinhaTerceiroTurno08: { screen: LinhaTerceiroTurno08},
    LinhaTerceiroTurno09: { screen: LinhaTerceiroTurno09},
    LinhaTerceiroTurno10: { screen: LinhaTerceiroTurno10},
    LinhaTerceiroTurno11: { screen: LinhaTerceiroTurno11},
    
    
}, {
  drawerPosition:'right',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth:1,
  contentOptions:{
    activeTintColor:'#ffffff',
    inactiveTintColor:'#000000',
    activeBackgroundColor:'#FF3D00',
    inactiveBackgroundColor:'#ffffff',
    itemsContainerStyle:{
     marginTop: 0 
    },
    itemStyle:{
      marginTop: 0
    },
    labelStyle:{
      fontSize:16
    },
    iconContainerStyle:{
      backgroundColor:"#000000"
    }
  }
});

export default App;


