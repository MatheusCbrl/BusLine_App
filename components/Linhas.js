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
import Modal from 'react-native-modal';
import SearchableDropdown from 'react-native-searchable-dropdown';
import ImageViewer from 'react-native-image-zoom-viewer';
const { width } = Dimensions.get('window');
//Item array for the dropdown
var itemsDiurno = [
  //name key is must.It is to show the text in front
  { id: 71, name: 'L001 - Presidente Vargas-Diamantino', key: 'LinhaDiurno71'},
  { id: 72, name: 'L002 - Serrano', key: 'LinhaDiurno72'},
  { id: 41, name: 'L003 - Petrópolis-Treviso-BR 116', key: 'LinhaDiurno41'},
  { id: 26, name: 'L004 - Industrial-Santo Antonio-Vila Ipê-Colinado Sol-Belo Horizonte-Rota do Sol', key: 'LinhaDiurno26'},
  { id: 49, name: 'L005 - São Gotardo-Santa Bárbara-Loteamento Bachi-Vila Alpina', key: 'LinhaDiurno49'},
  { id: 62, name: 'L006 - Serrano', key: 'LinhaDiurno62'},
  { id: 62, name: 'L007 -Jardim Iracema', key: 'LinhaDiurno'},
  { id: 11, name: 'L008 - Cruzeiro', key: 'LinhaDiurno11'},
  { id: 60, name: 'L009 - Século XX-Mariland-Jardim das Hortências-Jardim Eldorado', key: 'LinhaDiurno60'},
  { id: 10, name: 'L010 - Cruzeiro-São Luiz-Campos da Serra-De Zorzi II', key: 'LinhaDiurno10'},
  { id: 19, name: 'L011 - Fátima-Morada dos Alpes', key: 'LinhaDiurno19'},
  { id: 57, name: 'L012 - São Valentin-Parada Cristal-Travessão Porto-Loteamente Balardin', key: 'LinhaDiurno57'},
  { id: 17, name: 'L013 - Farroupilha', key: 'LinhaDiurno17'},
  { id: 61, name: 'L014 - Serrano-Santo Antônio', key: 'LinhaDiurno61'},
  { id: 69, name: 'L015 - Vinhedos-Nossa Senhora da Saúde-Vila Ipê-Belo Horizonte', key: 'LinhaDiurno69'},
  { id: 53, name: 'L016 - São Marcos', key: 'LinhaDiurno53'},
  { id: 52, name: 'L017 - São Marcos-Pedras Brancas', key: 'LinhaDiurno52'},
  { id: 46, name: 'L018 - Santa Catarina-Pio X-Pioneiro-Por do Sol-Centenário-Santa Fé', key: 'LinhaDiurno46'},
  { id: 43, name: 'L019 - Rio Branco-São Leopoldo', key: 'LinhaDiurno43'},
  { id: 33, name: 'L020 - Madureira-Universitário-Nossa Senhora de Fátima', key: 'LinhaDiurno33'},
  { id: 58, name: 'L021 - São Victor Cohab-Santa Bárbara-Vitória-Paiquerê', key: 'LinhaDiurno58'},
  { id: 50, name: 'L022 - São José-Centenário-São Ciro I-São Ciro II', key: 'LinhaDiurno50'},
  { id: 27, name: 'L023 - Jardim América-Centro-Lourdes', key: 'LinhaDiurno27'},
  { id: 59, name: 'L024 - São Virgílio-Bela Vista-La Paloma-Vila Leon-Recantodos Pássaros-São Francisco', key: 'LinhaDiurno59'},
  { id: 40, name: 'L025 - Panazzolo-Cristo Redentor-BR 116', key: 'LinhaDiurno40'},
  { id: 7,  name: 'L026 - Centro-Exposição-Ipiranga-Lourdes-BR 116', key: 'LinhaDiurno07'},
  { id: 68, name: 'L027 - Vila Verde-Planalto', key: 'LinhaDiurno68'},
  { id: 30, name: 'L028 - Jardim Iracema', key: 'LinhaDiurno30'},
  { id: 24, name: 'L029 - Forqueta Baixa-Arroio do Ouro-Nova Palmira', key: 'LinhaDiurno24'},
  { id: 38, name: 'L030 - Nossa Sra. do Rosário', key: 'LinhaDiurno38'},
  { id: 6,  name: 'L031 - Castelo-São Cristóvão', key: 'LinhaDiurno06'},
  { id: 35, name: 'L032 - Mariani-Reolon-Marechal Floriano', key: 'LinhaDiurno35'},
  { id: 67, name: 'L033 - Vila Seca-Boca da Serra-Ana Rech-Solar do Prado', key: 'LinhaDiurno67'},
  { id: 56, name: 'L034 - São Roque-Fazenda Souza-São Braz-Rota do Sol', key: 'LinhaDiurno56'},
  { id: 13, name: 'L035 - Desvio Rizzo', key: 'LinhaDiurno13'},
  { id: 42, name: 'L036 - Planalto-Monte Reale', key: 'LinhaDiurno42'},
  { id: 3,  name: 'L037 - Bela Vista-Cruzeiro', key: 'LinhaDiurno03'},
  { id: 12, name: 'L038 - Desvio Rizzo', key: 'LinhaDiurno12'},
  { id: 29, name: 'L039 - Jardim Esmeralda-Fátima', key: 'LinhaDiurno29'},
  { id: 47, name: 'L040 - Santo Antônio-Jardim Iracema-Serrano', key: 'LinhaDiurno47'},
  { id: 31, name: 'L041 - Kaiser-Bom Pastor-São Caetano', key: 'LinhaDiurno31'},
  { id: 64, name: 'L042 - Veneza-Santa Fé-Belo Horizonte', key: 'LinhaDiurno64'},
  { id: 48, name: 'L100 - Santos Dumont', key: 'LinhaDiurno48'},
  { id: 2,  name: 'L101 - 4ª Légua-Galópolis', key: 'LinhaDiurno02'},
  { id: 22, name: 'L102 - Flores da Cunha', key: 'LinhaDiurno22'},
  { id: 18, name: 'L103 - Farroupilha', key: 'LinhaDiurno18'},
  { id: 23, name: 'L104 - Floresta-São Catano-São Caetano do Sul', key: 'LinhaDiurno23'},
  { id: 8,  name: 'L105 - Cidade Nova', key: 'LinhaDiurno08'},
  { id: 63, name: 'L106 - Veneto-Vila Lobos-Santa Corona', key: 'LinhaDiurno63'},
  { id: 51, name: 'L107 - São José-Fátima-Vila Mari', key: 'LinhaDiurno51'},
  { id: 54, name: 'L108 - São Mateus-Monte Carmelo-Consolação-Esplanada', key: 'LinhaDiurno54'},
  { id: 20, name: 'L109 - Feliz-Coqueral-Piacada Cará-São Roque-Bananal-Linha Temerária-Tirol-Vila Cristina', key: 'LinhaDiurno20'},
  { id: 55, name: 'L110 - São Pedro-Centro Alto Feliz-Arroio Feliz-Vale Real', key: 'LinhaDiurno55'},
  { id: 21, name: 'L111 - Feliz-Arroio do Ouro', key: 'LinhaDiurno21'},
  { id: 66, name: 'L112 - Vila Rica-RS 452', key: 'LinhaDiurno66'},
  { id: 65, name: 'L113 - Vila Pinga-Vale Real', key: 'LinhaDiurno65'},
  { id: 14, name: 'L114 - Escadinhas-Canto do Rio-Matiel', key: 'LinhaDiurno14'},
  { id: 5,  name: 'L115 - Canto Krewer-Vale Real', key: 'LinhaDiurno05'},
  { id: 4,  name: 'L116 - Bom Princípio-Vale do Hermes-Morro Paris', key: 'LinhaDiurno04'},
  { id: 25, name: 'L117 - Forqueta-São Pelegrino-Centro-Jardelino Ramos-Sagrada Família', key: 'LinhaDiurno25'},
  { id: 39, name: 'L118 - Nova Petrópolis-Vila Cristina-Galópolis', key: 'LinhaDiurno39'},
  { id: 70, name: 'L119 - Planalto Rio Branco', key: 'LinhaDiurno70'},
  { id: 45, name: 'L120 - Rosario-Charqueadas-São Leopoldo', key: 'LinhaDiurno45'},
  { id: 28, name: 'L121 - Jardim do Shopping-Rosário II-Altos San Tiago', key: 'LinhaDiurno28'},
  { id: 36, name: 'L122 - Mariani', key: 'LinhaDiurno36'},
  { id: 34, name: 'L123 - Marechal Floriano-Cinquentenário-Rio Branco-Panazzolo-Planalto', key: 'LinhaDiurno34'},
  { id: 15, name: 'L124 - Esplanada-Arco Baleno-União-São Caetano-Bom Pastor', key: 'LinhaDiurno15'},
  { id: 44, name: 'L125 - Rio Branco-Kaiser-Bom Pastor-Salgado Filho', key: 'LinhaDiurno44'},
  { id: 1,  name: 'L126 - 3ª Légua-Oriental-Nossa Senhora das Graças', key: 'LinhaDiurno01'},
  { id: 9,  name: 'L128 - Colina Sorriso-Altos do Seminário-Santa Lúcia-Santa Catarina-Centro-Planalto', key: 'LinhaDiurno09'},
  { id: 32, name: 'L129 - Madureira-1º de Maio-Centro-Avenida São Leopoldo-Sagrada Familia', key: 'LinhaDiurno32'},
  { id: 16, name: 'L130 - Esplanada-Planalto', key: 'LinhaDiurno16'},
  { id: 37, name: 'L131 - Nossa Senhora das Graças-Caravaggio-Monte Carmelo-Kaiser-Planalto-Bela Vista', key: 'LinhaDiurno37'},  
];
var itemsNoturno = [
  //name key is must.It is to show the text in front
  { id: 21, name: 'L001 - Galópolis-Santa Corona', key: 'LinhaNoturno21'},
  { id: 16, name: 'L002 - Diamantino-De Zorzi I-De Zorzi II-Campos da Serra-Belvedere-São Luiz', key: 'LinhaNoturno16'},
  { id: 51, name: 'L003 - São Vitor Cohab-Santa Barbara-Vitória-Loteamento Paiquere-Bela Vista', key: 'LinhaNoturno51'},
  { id: 13, name: 'L004 - Consolação-Monte Carmelo-Montes Claros', key: 'LinhaNoturno13'},
  { id: 8,  name: 'L005 - Canyon-Brandalise-Santo Antônio-Colina do Sol-Vila Ipê-Belo Horizonte', key: 'LinhaNoturno08'},
  { id: 39, name: 'L006 - Santo Antônio 6ª Légua-São Virgílio 6ª Légua-Bela Vista-Vila Leon', key: 'LinhaNoturno40'},
  { id: 32, name: 'L007 - Planalto II-Planalto', key: 'LinhaNoturno32'},
  { id: 1,  name: 'L008 - 3ª Légua-Oriental-Nossa Senhoradas Graças-Caravaggio', key: 'LinhaNoturno01'},
  { id: 37, name: 'L009 - Santa Catarina-Madureira-1º de Maio-Universitário-Jardim América-Sagrada Família', key: 'LinhaNoturno37'},
  { id: 15, name: 'L010 - De Lazzer-Século XX-Marilan-São Ciro-São Ciro II', key: 'LinhaNoturno15'},
  { id: 34, name: 'L011 - Presidente Vargas-Diamantino-Residencial Treviso-São Ciro BR116', key: 'LinhaNoturno34'},
  { id: 49, name: 'L012 - São Lucas-Desvio Rizzo-Vila Romana-Santa Tereza-Conceição-Pedreira do Guerra', key: 'LinhaNoturno49'},
  { id: 24, name: 'L013 - Jardim Itália-Santa Lúcia-Colina Sorriso-Santa Catarina-Pioneiro', key: 'LinhaNoturno24'},
  { id: 60, name: 'L014 - Serrano', key: 'LinhaNoturno60'},
  { id: 54, name: 'L015 - Tijuca-Reolon-Mariane I-Mariane II-Cidade Nova-Industrial', key: 'LinhaNoturno54'},
  { id: 27, name: 'L016 - Loteamento Santiago-Rosário II-São Francisco-Vila Amélia-Rosário-Jardimdo Shopping', key: 'LinhaNoturno27'},
  { id: 33, name: 'L017 - Planalto Rio Branco-Intral-Perimetral Bruno Segala', key: 'LinhaNoturno33'},
  { id: 48, name: 'L018 - São Leopoldo-Vila Verde-Planalto', key: 'LinhaNoturno48'},
  { id: 22, name: 'L019 - Jardelino Ramos-Cristo Redentor-Lourdes', key: 'LinhaNoturno22'},
  { id: 23, name: 'L020 - Jardim Iracema-Brasília', key: 'LinhaNoturno23'},
  { id: 6,  name: 'L021 - Bom Pastor-Bom Pastor I-Bom Pastor II-Santos Dumont', key: 'LinhaNoturno06'},
  { id: 29, name: 'L022 - Nossa Senhora da Saúde-Vinhedos-SãoJosé-BeloHorizonte', key: 'LinhaNoturno29'},
  { id: 19, name: 'L023 - Fátima-Interlagos', key: 'LinhaNoturno19'},
  { id: 45, name: 'L024 - São Cristóvão-Serrano', key: 'LinhaNoturno45'},
  { id: 9,  name: 'L025 - Castelo-Solar do Prado-Ana Rech', key: 'LinhaNoturno09'},
  { id: 11, name: 'L026 - Centro-Imigrante BR-Petrópolis UCS-Presidente Vargas BR', key: 'LinhaNoturno11'},
  { id: 42, name: 'L027 - São Caetano', key: 'LinhaNoturno42'},
  { id: 12, name: 'L028 - Cidade Nova-Monte Bérico', key: 'LinhaNoturno12'},
  { id: 43, name: 'L029 - São Caetano-Arco Baleno-Kaiser-Floresta-União-Perimetral-Cinquentenário-Santa Catarina', key: 'LinhaNoturno43'},
  { id: 57, name: 'L030 - Vila Mari-Planato I-Bela Vista-BR 116', key: 'LinhaNoturno57'},
  { id: 7,  name: 'L031 - Canto Krewer-Vale Real', key: 'LinhaNoturno07'},
  { id: 17, name: 'L032 - Esplanada-Bom Pastor-Kaiser-Rio Branco-Cinquentenário-São José', key: 'LinhaNoturno17'},
  { id: 55, name: 'L033 - Vila Ipiranga-Cruzeiro-Bela Vista', key: 'LinhaNoturno55'},
  { id: 52, name: 'L034 - Serrano-Jardim Adorado', key: 'LinhaNoturno52'},
  { id: 31, name: 'L035 - Planalto II-Monte Reale-Planalto I', key: 'LinhaNoturno31'},
  { id: 40, name: 'L036 - Santo Antônio-Iracema-Serrano', key: 'LinhaNoturno41'},
  { id: 10, name: 'L037 - Centenário-Parque Oásis', key: 'LinhaNoturno10'},
  { id: 47, name: 'L038 - São Leopoldo-Rio Branco-São Pelegrino-Jardim das Hortências', key: 'LinhaNoturno47'},
  { id: 59, name: 'L039 - Feliz-Morro Paris-Canto Krewer', key: 'LinhaNoturno59'},
  { id: 20, name: 'L040 - Alto Feliz-Vale Real-MP Planalto', key: 'LinhaNoturno20'},
  { id: 36, name: 'L041 - Samuara-Forqueta-Tirol-São Leopoldo-Panazzolo', key: 'LinhaNoturno36'},
  { id: 58, name: 'L042 - Vila Seca-Boca de Serra', key: 'LinhaNoturno58'},
  { id: 35, name: 'L043 - Rota do Sol-Faxinal-São Bráz-Fazenda Souza', key: 'LinhaNoturno35'},
  { id: 4,  name: 'L044 - Bananal-São Roque-Vila Pavão-Picada Cará-Vila Rica-Feliz-Arroio Feliz-Vila Cristina', key: 'LinhaNoturno04'},
  { id: 26, name: 'L045 - Loteamento Santa Rita-Parquedos Pinhais-Parada Cristal-Balardin-Loteamento Back-Brasília', key: 'LinhaNoturno26'},
  { id: 50, name: 'L046 - São Pelegrino-Centro-Nsª de Lourdes-Hospital Geral BR 116-Cartório BR 116-Daniel Fut7', key: 'LinhaNoturno50'},
  { id: 18, name: 'L047 - Esplanada-Salgado Filho', key: 'LinhaNoturno18'},
  { id: 14, name: 'L048 - Cruzeiro-De Zorzi-Diamantino', key: 'LinhaNoturno14'},
  { id: 44, name: 'L049 - São Caetano-Esplanada-BR 116', key: 'LinhaNoturno44'},
  { id: 38, name: 'L050 - Santa Fé-São Bernardo-Santo Antonio', key: 'LinhaNoturno38'},
  { id: 25, name: 'L051 - Loteamento Mandrean-Desvio Rizzo-Parquedas Rosas', key: 'LinhaNoturno25'},
  { id: 41, name: 'L052 - Santo Antônio-Iracema-Serrano', key: 'LinhaNoturno41'},
  { id: 28, name: 'L053 - Morada dos Alpes-Vitório III-Fátima Baixo-Fátima-Parque Oásis-Nossa Senhora do Rosário', key: 'LinhaNoturno28'},
  { id: 5,  name: 'L054 - Boca da Serra-São Gotardo-Santa Bárbara', key: 'LinhaNoturno05'},
  { id: 3,  name: 'L055 - Arroiodo Ouro-Nova Palmira-Vila Cristina-Galópolis', key: 'LinhaNoturno03'},
  { id: 56, name: 'L056 - Vila Lobos-São Leopoldo-Exposição-Centro-Pio X-Perimetral Norte-Universitário-Interlagos-Sagrada Família', key: 'LinhaNoturno56'},
  { id: 46, name: 'L057 - São Giácomo-Matioda-Reolon-Belo Horizonte-São José-Santa Catarina-Santo André-Tijuca-Fátima Baixo', key: 'LinhaNoturno46'},
  { id: 53, name: 'L058 - Serrano', key: 'LinhaNoturno53'},
  { id: 2,  name: 'L059 - Arco Baleno-Esplanada-Santos Dumont-Kaiser-Salgado Filho', key: 'LinhaNoturno02'},
  { id: 30, name: 'L060 - Nossa Senhora das Graças-Esplanada-Caravagio II-Glória-Bela Vista-Cruzeiro', key: 'LinhaNoturno30'},  
];
var itemsTerceiroTurno = [
  //name key is must.It is to show the text in front
  { id: 4, name: 'L001 - Desvio Rizzo-São lucas-Parque das Rosas-Marechal Floriano', key: 'LinhaTerceiroTurno04'},
  { id: 7, name: 'L002 - Kaiser-Rio Branco-Presidente Vargas-Diamantino', key: 'LinhaTerceiroTurno07'},
  { id: 1, name: 'L004 - Cidade Nova-Mariani-Reolon-Santo André-Santa Catarina-Perimetral(Medianeira)-Mariland', key: 'LinhaTerceiroTurno01'},
  { id: 11, name:'L005 - Serrano-Parada Cristal-Iracema-Eldorado-Santa Barbara-Loteamento Back-Solar Prado-Ana Rech', key: 'LinhaTerceiroTurno11'},
  { id: 8, name: 'L006 - Parque Oásis-Santa Fé-Colina do Sol-Pioneiro-Fátima-Centenário-Belo Horizonte-Vila Ipê-São José', key: 'LinhaTerceiroTurno08'},
  { id: 2, name: 'L007 - Consolação-São Matheus-Oriental', key: 'LinhaTerceiroTurno02'},
  { id: 5, name: 'L008 - Galópolis-Vila Lobos-Santa Corona-UCS-Jardim das Hortências', key: 'LinhaTerceiroTurno05'},
  { id: 10, name:'L009 - Santa Tereza-Desvio Rizzo-Jardim do Shopping-Rosário I-Planalto-Rio Branco', key: 'LinhaTerceiroTurno10'},
  { id: 3, name: 'L010 - Cruzeiro-Vila leon-São Luiz-Campos da Serra-Dezorzi-Treviso', key: 'LinhaTerceiroTurno03'},
  { id: 6, name: 'L011 - Kaiser-Bom Pastor-São Caetano-Caravagio-Oriental-Esplanada', key: 'LinhaTerceiroTurno06'},
  { id: 9, name: 'L012 - Planalto-Vila Mari-São Vitor-Vitória', key: 'LinhaTerceiroTurno09'},
  
];
var itemsSaidaDiurno = [
  //name key is must.It is to show the text in front
{id:  1,  name: 'FELIZ', prestadora: 'NOVA PALMIRA', linha: '1'},
{id:  1,  name: 'VILA PINGA', prestadora: 'NOVA PALMIRA', linha: '1'},
{id:  1,  name: 'VILA RICA', prestadora: 'NOVA PALMIRA', linha: '1'},
{id:  2,  name: 'FARROUPILHA', prestadora: 'UNIDOS', linha: '2'},
{id:  3,  name: 'NOVA PETROPOLIS', prestadora: 'NOVA PALMIRA', linha: '3'},
{id:  3,  name: 'VILA CRISTINA', prestadora: 'NOVA PALMIRA', linha: '3'},
{id:  4,  name: 'DESVIO RIZZO', prestadora: 'UNIDOS', linha: '4'},
{id:  4,  name: 'INDUSTRIAL', prestadora: 'UNIDOS', linha: '4'},
{id:  5,  name: 'LINHA TEMERÁRIA', prestadora: 'NOVA PALMIRA', linha: '5'},
{id:  5,  name: 'PICADA CARÁ', prestadora: 'NOVA PALMIRA', linha: '5'},
{id:  5,  name: 'SÃO ROQUE (Temerária)', prestadora: 'NOVA PALMIRA', linha: '5'},
{id:  6,  name: 'FARROUPILHA', prestadora: 'GIRATUR', linha: '6'},
{id:  7,  name: 'SÃO MARCOS', prestadora: 'SÃO MARCOS', linha: '7'},
{id:  8,  name: 'SÃO MARCOS', prestadora: 'SÃO MARCOS', linha: '8'},
{id:  9,  name: '4ª LÉGUA', prestadora: 'BRAGÉ', linha: '9'},
{id:  9,  name: 'GALÓPOLIS', prestadora: 'BRAGÉ', linha: '9'},
{id:  10,  name: 'MORRO PARIS', prestadora: 'NOVA PALMIRA', linha: '10'},
{id:  10,  name: 'VALE REAL', prestadora: 'NOVA PALMIRA', linha: '10'},
{id:  11,  name: 'ALTO FELIZ', prestadora: 'NOVA PALMIRA', linha: '11'},
{id:  12,  name: 'CANTO DO RIO', prestadora: 'NOVA PALMIRA', linha: '12'},
{id:  12,  name: 'ESCADINHAS', prestadora: 'NOVA PALMIRA', linha: '12'},
{id:  12,  name: 'MATIEL', prestadora: 'NOVA PALMIRA', linha: '12'},
{id:  13,  name: 'FELIZ', prestadora: 'NOVA PALMIRA', linha: '13'},
{id:  13,  name: 'VALE REAL (RS 452) ', prestadora: 'NOVA PALMIRA', linha: '13'},
{id:  14,  name: 'CANTO KREWER', prestadora: 'NOVA PALMIRA', linha: '14'},
{id:  14,  name: 'VILA PINGA', prestadora: 'NOVA PALMIRA', linha: '14'},
{id:  15,  name: 'ARROIO DO OURO', prestadora: 'NOVA PALMIRA', linha: '15'},
{id:  15,  name: 'FORQUETA BAIXA', prestadora: 'NOVA PALMIRA', linha: '15'},
{id:  16,  name: 'BOM FIM', prestadora: 'NOVA PALMIRA', linha: '16'},
{id:  16,  name: 'BOM PRINCIPIO', prestadora: 'NOVA PALMIRA', linha: '16'},
{id:  16,  name: 'RODOVIÁRIA DE FELIZ', prestadora: 'NOVA PALMIRA', linha: '16'},
{id:  16,  name: 'VALE DO HERMES', prestadora: 'NOVA PALMIRA', linha: '16'},
{id:  17,  name: 'CONCEIÇÃO - LINHA FEIJÓ', prestadora: 'CAXIENSE', linha: '17'},
{id:  17,  name: 'DESVIO RIZZO', prestadora: 'CAXIENSE', linha: '17'},
{id:  17,  name: 'PARAISO CRISTAL', prestadora: 'CAXIENSE', linha: '17'},
{id:  17,  name: 'ROTA DO SOL', prestadora: 'CAXIENSE', linha: '17'},
{id:  17,  name: 'SÃO LUCAS', prestadora: 'CAXIENSE', linha: '17'},
{id:  18,  name: 'SANTA CORONA', prestadora: 'CAXIENSE', linha: '18'},
{id:  18,  name: 'VILA LOBOS', prestadora: 'CAXIENSE', linha: '18'},
{id:  19,  name: 'ANHANGUERA', prestadora: 'BRAGÉ', linha: '19'},
{id:  19,  name: 'CIDADE NOVA', prestadora: 'BRAGÉ', linha: '19'},
{id:  19,  name: 'FORQUETA - CAXIAS', prestadora: 'BRAGÉ', linha: '19'},
{id:  19,  name: 'SEDE MARCOPOLO', prestadora: 'BRAGÉ', linha: '19'},
{id:  20,  name: 'FLORES DA CUNHA', prestadora: 'BRAGÉ', linha: '20'},
{id:  20,  name: 'VILA MAESTRA (RS 122)', prestadora: 'BRAGÉ', linha: '20'},
{id:  21,  name: 'CRISTOVÃO DE MENDOZA', prestadora: 'CAXIENSE', linha: '21'},
{id:  21,  name: 'HOSPITAL UNIMED', prestadora: 'CAXIENSE', linha: '21'},
{id:  21,  name: 'JARDELINO RAMOS', prestadora: 'CAXIENSE', linha: '21'},
{id:  21,  name: 'MARECHAL FLORIANO', prestadora: 'CAXIENSE', linha: '21'},
{id:  21,  name: 'SAGRADA FAMÍLIA', prestadora: 'CAXIENSE', linha: '21'},
{id:  22,  name: 'LOTEAMENTO ROTA NOVA', prestadora: 'BRAGÉ', linha: '22'},
{id:  22,  name: 'MATIODA', prestadora: 'BRAGÉ', linha: '22'},
{id:  22,  name: 'REOLON', prestadora: 'BRAGÉ', linha: '22'},
{id:  22,  name: 'TIJUCA', prestadora: 'BRAGÉ', linha: '22'},
{id:  22,  name: 'VALE VERDE ', prestadora: 'BRAGÉ', linha: '22'},
{id:  23,  name: 'ESPLANADA', prestadora: 'CAXIENSE', linha: '23'},
{id:  23,  name: 'MONTE CARMELO', prestadora: 'CAXIENSE', linha: '23'},
{id:  23,  name: 'MONTES CLAROS', prestadora: 'CAXIENSE', linha: '23'},
{id:  24,  name: 'PAIQUERÊ', prestadora: 'BRAGÉ', linha: '24'},
{id:  24,  name: 'SÃO VICTOR COHAB', prestadora: 'BRAGÉ', linha: '24'},
{id:  24,  name: 'VITÓRIA', prestadora: 'BRAGÉ', linha: '24'},
{id:  25,  name: 'CHARQUEADAS', prestadora: 'CAXIENSE', linha: '25'},
{id:  25,  name: 'JARDIM DO SHOPING', prestadora: 'CAXIENSE', linha: '25'},
{id:  25,  name: 'PLANALTO RIO BRANCO', prestadora: 'CAXIENSE', linha: '25'},
{id:  25,  name: 'SÃO FRANCISCO', prestadora: 'CAXIENSE', linha: '25'},
{id:  25,  name: 'SHOPING IGUATEMI', prestadora: 'CAXIENSE', linha: '25'},
{id:  26,  name: 'CRUZEIRO (Via Luiz Michelon)', prestadora: 'CAXIENSE', linha: '26'},
{id:  26,  name: 'MECATRONICA', prestadora: 'CAXIENSE', linha: '26'},
{id:  26,  name: 'UCS', prestadora: 'CAXIENSE', linha: '26'},
{id:  27,  name: 'NOSSA SENHORA DO ROSARIO I', prestadora: 'CAXIENSE', linha: '27'},
{id:  27,  name: 'NOSSA SENHORA DO ROSARIO II', prestadora: 'CAXIENSE', linha: '27'},
{id:  28,  name: 'FLORESTA', prestadora: 'CAXIENSE', linha: '28'},
{id:  28,  name: 'INTRAL', prestadora: 'CAXIENSE', linha: '28'},
{id:  28,  name: 'MARIANI', prestadora: 'CAXIENSE', linha: '28'},
{id:  28,  name: 'RIO BRANCO', prestadora: 'CAXIENSE', linha: '28'},
{id:  28,  name: 'SAN VITO', prestadora: 'CAXIENSE', linha: '28'},
{id:  29,  name: '3ª LÉGUA', prestadora: 'CAXIENSE', linha: '29'},
{id:  29,  name: 'GLÓRIA', prestadora: 'CAXIENSE', linha: '29'},
{id:  29,  name: 'NOSSA SENHORA DAS GRAÇAS', prestadora: 'CAXIENSE', linha: '29'},
{id:  29,  name: 'NOSSA SENHORA DO CARAVAGGIO', prestadora: 'CAXIENSE', linha: '29'},
{id:  29,  name: 'ORIENTAL', prestadora: 'CAXIENSE', linha: '29'},
{id:  29,  name: 'SÃO MATEUS', prestadora: 'CAXIENSE', linha: '29'},
{id:  30,  name: 'ANA RECH', prestadora: 'CAXIENSE', linha: '30'},
{id:  30,  name: 'ARROIO DAS MARRECAS', prestadora: 'CAXIENSE', linha: '30'},
{id:  30,  name: 'BARRAGEM FAXINAL', prestadora: 'CAXIENSE', linha: '30'},
{id:  30,  name: 'BOCA DA SERRA', prestadora: 'CAXIENSE', linha: '30'},
{id:  30,  name: 'SOLAR DO PRADO', prestadora: 'CAXIENSE', linha: '30'},
{id:  30,  name: 'VILA SECA', prestadora: 'CAXIENSE', linha: '30'},
{id:  31,  name: 'KAISER (ANDREAZZA)', prestadora: 'BRAGÉ (reforço 29)', linha: '31'},
{id:  31,  name: 'KAISER (BRISTOT MATERIAIS DE CONSTRUÇÃO) ', prestadora: 'BRAGÉ (reforço 29)', linha: '31'},
{id:  32,  name: 'BECO DA FILOMENA', prestadora: 'CAXIENSE', linha: '32'},
{id:  32,  name: 'JARDIM IRACEMA', prestadora: 'CAXIENSE', linha: '32'},
{id:  32,  name: 'NOSSA SENHORA DAS DORES', prestadora: 'CAXIENSE', linha: '32'},
{id:  32,  name: 'SEDE SINDICATO METALÚRGICO', prestadora: 'CAXIENSE', linha: '32'},
{id:  32,  name: 'SERRARIA', prestadora: 'CAXIENSE', linha: '32'},
{id:  33,  name: 'CENTRO ( Via 20 de Setembro)', prestadora: 'BRAGÉ', linha: '33'},
{id:  33,  name: 'CINQUENTENÁRIO (Via Julio de Castilhos)', prestadora: 'BRAGÉ', linha: '33'},
{id:  34,  name: 'LOTEAMENTO BACHI', prestadora: 'BRAGÉ', linha: '34'},
{id:  34,  name: 'SANTA BÁRBARA', prestadora: 'BRAGÉ', linha: '34'},
{id:  34,  name: 'SÃO GOTARDO (Vila Seca)', prestadora: 'BRAGÉ', linha: '34'},
{id:  34,  name: 'VILA ALPINA', prestadora: 'BRAGÉ', linha: '34'},
{id:  35,  name: 'CASTELO', prestadora: 'CAXIENSE', linha: '35'},
{id:  35,  name: 'SANTO HOMOBOM', prestadora: 'CAXIENSE', linha: '35'},
{id:  35,  name: 'SÃO CRISTOVÃO', prestadora: 'CAXIENSE', linha: '35'},
{id:  36,  name: 'CRISTO REDENTOR (Via Tronca)', prestadora: 'CAXIENSE', linha: '36'},
{id:  36,  name: 'EXPOSIÇÃO (Via Tronca)', prestadora: 'CAXIENSE', linha: '36'},
{id:  36,  name: 'RIO BRANCO (Via Tronca)', prestadora: 'CAXIENSE', linha: '36'},
{id:  37,  name: 'ARCO BALENO', prestadora: 'CAXIENSE', linha: '37'},
{id:  37,  name: 'BOM PASTOR', prestadora: 'CAXIENSE', linha: '37'},
{id:  37,  name: 'SÃO CAETANO', prestadora: 'CAXIENSE', linha: '37'},
{id:  38,  name: 'SÃO CAETANO (Mobitec)', prestadora: 'CAXIENSE', linha: '38'},
{id:  38,  name: 'SÃO CAETANO DO SUL', prestadora: 'CAXIENSE', linha: '38'},
{id:  39,  name: 'GAUCHINHA', prestadora: 'CAXIENSE', linha: '39'},
{id:  39,  name: 'KAISER', prestadora: 'CAXIENSE', linha: '39'},
{id:  39,  name: 'SALGADO FILHO', prestadora: 'CAXIENSE', linha: '39'},
{id:  40,  name: 'AMÉLIA', prestadora: 'CAXIENSE', linha: '40'},
{id:  40,  name: 'BOSQUE DAS ARAUCÁRIAS', prestadora: 'CAXIENSE', linha: '40'},
{id:  40,  name: 'DESVIO RIZZO', prestadora: 'CAXIENSE', linha: '40'},
{id:  41,  name: 'CAMPOS DA SERRA', prestadora: 'CAXIENSE', linha: '41'},
{id:  41,  name: 'DE ZORZI', prestadora: 'CAXIENSE', linha: '41'},
{id:  41,  name: 'PENA BRANCA', prestadora: 'CAXIENSE', linha: '41'},
{id:  41,  name: 'SÃO LUIZ', prestadora: 'CAXIENSE', linha: '41'},
{id:  41,  name: 'SÃO VALENTIN (Cruzeiro)', prestadora: 'CAXIENSE', linha: '41'},
{id:  42,  name: '6ª LÉGUA', prestadora: 'CAXIENSE', linha: '42'},
{id:  42,  name: 'BELA VISTA', prestadora: 'CAXIENSE', linha: '42'},
{id:  42,  name: 'LA PALOMA', prestadora: 'CAXIENSE', linha: '42'},
{id:  42,  name: 'SÃO VIRGÍLIO', prestadora: 'CAXIENSE', linha: '42'},
{id:  42,  name: 'VILA LEON', prestadora: 'CAXIENSE', linha: '42'},
{id:  43,  name: 'CENTRO ( via 18 do Forte)', prestadora: 'GIRATUR', linha: '43'},
{id:  44,  name: 'CENTRO ( via 18 do Forte)', prestadora: 'BRAGÉ', linha: '44'},
{id:  45,  name: 'FAZENDA SOUZA', prestadora: 'CAXIENSE', linha: '45'},
{id:  45,  name: 'ROTA DO SOL', prestadora: 'CAXIENSE', linha: '45'},
{id:  45,  name: 'SÃO BRÁS', prestadora: 'CAXIENSE', linha: '45'},
{id:  45,  name: 'SÃO ROQUE (Fazenda Souza)', prestadora: 'CAXIENSE', linha: '45'},
{id:  46,  name: 'BELO HORIZONTE', prestadora: 'GIRATUR', linha: '46'},
{id:  46,  name: 'NOSSA SENHORA DA SAÚDE', prestadora: 'GIRATUR', linha: '46'},
{id:  46,  name: 'PORTAL DA MAESTRA', prestadora: 'GIRATUR', linha: '46'},
{id:  46,  name: 'VILA IPÊ', prestadora: 'GIRATUR', linha: '46'},
{id:  46,  name: 'VINHEDOS', prestadora: 'GIRATUR', linha: '46'},
{id:  47,  name: 'PLANALTO (Marcopolo)', prestadora: 'GIRATUR', linha: '47'},
{id:  47,  name: 'VILA VERDE', prestadora: 'GIRATUR', linha: '47'},
{id:  48,  name: 'HOSPITAL FÁTIMA', prestadora: 'CAXIENSE', linha: '48'},
{id:  48,  name: 'PIO X', prestadora: 'CAXIENSE', linha: '48'},
{id:  48,  name: 'SAGRADA FAMÍLIA', prestadora: 'CAXIENSE', linha: '48'},
{id:  48,  name: 'UNIVERSITÁRIO ', prestadora: 'CAXIENSE', linha: '48'},
{id:  49,  name: 'BELA VISTA', prestadora: 'CAXIENSE', linha: '49'},
{id:  49,  name: 'MONTE REALE', prestadora: 'CAXIENSE', linha: '49'},
{id:  49,  name: 'PLANALTO (Cancha de areia)', prestadora: 'CAXIENSE', linha: '49'},
{id:  50,  name: 'FÁTIMA ', prestadora: 'CAXIENSE', linha: '50'},
{id:  50,  name: 'INTERLAGOS', prestadora: 'CAXIENSE', linha: '50'},
{id:  50,  name: 'JARDIM ESMERALDA', prestadora: 'CAXIENSE', linha: '50'},
{id:  50,  name: 'SANTA CATARINA', prestadora: 'CAXIENSE', linha: '50'},
{id:  51,  name: 'FÁTIMA', prestadora: 'BRAGÉ', linha: '51'},
{id:  51,  name: 'MAXI ATACADO', prestadora: 'BRAGÉ', linha: '51'},
{id:  51,  name: 'PERIMETRAL NORTE', prestadora: 'BRAGÉ', linha: '51'},
{id:  52,  name: 'CRISTO REDENTOR', prestadora: 'CAXIENSE', linha: '52'},
{id:  52,  name: 'IPIRANGA', prestadora: 'CAXIENSE', linha: '52'},
{id:  52,  name: 'PANAZZOLO', prestadora: 'CAXIENSE', linha: '52'},
{id:  53,  name: 'ALTOS DO SEMINÁRIO', prestadora: 'CAXIENSE', linha: '53'},
{id:  53,  name: 'COLINA SORRISO', prestadora: 'CAXIENSE', linha: '53'},
{id:  53,  name: 'PIONEIRO', prestadora: 'CAXIENSE', linha: '53'},
{id:  53,  name: 'ROTA DO SOL (Posto São Luiz)', prestadora: 'CAXIENSE', linha: '53'},
{id:  53,  name: 'SÃO JOSÉ', prestadora: 'CAXIENSE', linha: '53'},
{id:  54,  name: 'FÁTIMA BAIXO', prestadora: 'CAXIENSE', linha: '54'},
{id:  54,  name: 'JARDIM ITÁLIA', prestadora: 'CAXIENSE', linha: '54'},
{id:  54,  name: 'MORADA DOS ALPES', prestadora: 'CAXIENSE', linha: '54'},
{id:  54,  name: 'PARQUE OÁSIS', prestadora: 'CAXIENSE', linha: '54'},
{id:  54,  name: 'SANTA LÚCIA', prestadora: 'CAXIENSE', linha: '54'},
{id:  54,  name: 'SÃO JOSÉ (Senai)', prestadora: 'CAXIENSE', linha: '54'},
{id:  55,  name: 'BELA VISTA', prestadora: 'CAXIENSE', linha: '55'},
{id:  55,  name: 'CRUZEIRO', prestadora: 'CAXIENSE', linha: '55'},
{id:  55,  name: 'PETRÓPOLIS', prestadora: 'CAXIENSE', linha: '55'},
{id:  56,  name: 'CENTENÁRIO', prestadora: 'CAXIENSE', linha: '56'},
{id:  56,  name: 'PARQUE OÁSIS', prestadora: 'CAXIENSE', linha: '56'},
{id:  57,  name: 'AEROPORTO', prestadora: 'CAXIENSE', linha: '57'},
{id:  57,  name: 'SANTOS DUMONT', prestadora: 'CAXIENSE', linha: '57'},
{id:  59,  name: 'JARDIM DAS HORTÊNCIAS', prestadora: 'GIRATUR', linha: '59'},
{id:  59,  name: 'MARILAND', prestadora: 'GIRATUR', linha: '59'},
{id:  59,  name: 'SÃO CIRO', prestadora: 'GIRATUR', linha: '59'},
{id:  59,  name: 'SÃO CIRO II', prestadora: 'GIRATUR', linha: '59'},
{id:  59,  name: 'SÉCULO XX', prestadora: 'GIRATUR', linha: '59'},
{id:  60,  name: 'DIAMANTINO', prestadora: 'GIRATUR', linha: '60'},
{id:  60,  name: 'PRESIDENTE VARGAS', prestadora: 'GIRATUR', linha: '60'},
{id:  60,  name: 'TREVISO', prestadora: 'GIRATUR', linha: '60'},
{id:  61,  name: 'PLANALTO', prestadora: 'CAXIENSE', linha: '61'},
{id:  61,  name: 'VILA MARI', prestadora: 'CAXIENSE', linha: '61'},
{id:  62,  name: 'CRUZEIRO', prestadora: 'GIRATUR', linha: '62'},
{id:  63,  name: 'CENTRO (via 18 do Forte)', prestadora: 'CAXIENSE', linha: '63'},
{id:  63,  name: 'MARECHAL FLORIANO', prestadora: 'CAXIENSE', linha: '63'},
{id:  63,  name: 'SAINT ETIENE', prestadora: 'CAXIENSE', linha: '63'},
{id:  64,  name: 'BR 116', prestadora: 'CAXIENSE', linha: '64'},
{id:  64,  name: 'RIO BRANCO', prestadora: 'CAXIENSE', linha: '64'},
{id:  64,  name: 'SÃO LEOPOLDO', prestadora: 'CAXIENSE', linha: '64'},
{id:  65,  name: '1° MAIO', prestadora: 'CAXIENSE', linha: '65'},
{id:  65,  name: 'HOSPITAL DO CÍRCULO', prestadora: 'CAXIENSE', linha: '65'},
{id:  65,  name: 'JARDIM AMÉRICA', prestadora: 'CAXIENSE', linha: '65'},
{id:  65,  name: 'MADUREIRA', prestadora: 'CAXIENSE', linha: '65'},
{id:  65,  name: 'UNIVERSITÁRIO ', prestadora: 'CAXIENSE', linha: '65'},
{id:  66,  name: 'JARDIM ELDORADO', prestadora: 'CAXIENSE', linha: '66'},
{id:  66,  name: 'JARDIM IRACEMA', prestadora: 'CAXIENSE', linha: '66'},
{id:  66,  name: 'SANTO ANTÔNIO', prestadora: 'CAXIENSE', linha: '66'},
{id:  67,  name: 'PARADA CRISTAL', prestadora: 'SÃO MARCOS', linha: '67'},
{id:  67,  name: 'SÃO VALENTIN (Parada Cristal)', prestadora: 'SÃO MARCOS', linha: '67'},
{id:  68,  name: 'PLANALTO (Marcopolo)', prestadora: 'CAXIENSE', linha: '68'},
{id:  69,  name: 'COLINA DO SOL', prestadora: 'CAXIENSE', linha: '69'},
{id:  69,  name: 'SANTA FÉ', prestadora: 'CAXIENSE', linha: '69'},
{id:  69,  name: 'VENEZZA', prestadora: 'CAXIENSE', linha: '69'},
{id:  70,  name: 'JARDIM ADORADO', prestadora: 'BRAGÉ', linha: '70'},
];
var itemsSaidaNoturno = [
  //name key is must.It is to show the text in front
  {id: 1, name: 'ANA RECH', prestadora: 'UNIDOS', pos: 'P01'},
  {id: 2, name: 'ARROIO DAS MARRECAS', prestadora: 'UNIDOS', pos: 'P01'},
  {id: 3, name: 'VILA SECA', prestadora: 'UNIDOS', pos: 'P01'},
  {id: 4, name: 'BEVILÁQUA', prestadora: 'UNIDOS', pos: 'P02'},
  {id: 5, name: 'FAZENDA SOUZA', prestadora: 'UNIDOS', pos: 'P02'},
  {id: 6, name: 'SÃO BRÁS', prestadora: 'UNIDOS', pos: 'P02'},
  {id: 7, name: 'SÃO ROQUE (Fazenda Souza)', prestadora: 'UNIDOS', pos: 'P02'},
  {id: 8, name: 'BARRAGEM FAXINAL', prestadora: 'UNIDOS', pos: 'P03'},
  {id: 9, name: 'BOCA DA SERRA', prestadora: 'UNIDOS', pos: 'P03'},
  {id: 10, name: 'SANTA BÁRBARA', prestadora: 'UNIDOS', pos: 'P03'},
  {id: 11, name: 'SÃO GOTARDO (Vila Seca)', prestadora: 'UNIDOS', pos: 'P03'},
  {id: 12, name: 'ALTO FELIZ (Sociedade Arroio Feliz)', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 13, name: 'ALTO FELIZ (Brigada - Sociedade)', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 14, name: 'ARROIO DO OURO (RS 452)', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 15, name: 'FELIZ (Concretos KG)', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 16, name: 'FELIZ ( Vínícula Don Guerino)', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 17, name: 'GALÓPOLIS', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 18, name: 'MORRO BELO', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 19, name: 'MORRO CAPIM', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 20, name: 'VALE REAL(Lombada Eletrônica - RS 452)', prestadora: 'NOVA PALMIRA', pos: 'P04'},
  {id: 21, name: 'CANTO KREWER', prestadora: 'NOVA PALMIRA', pos: 'P05'},
  {id: 22, name: 'LOTEAMENTO PARQUE REAL', prestadora: 'NOVA PALMIRA', pos: 'P05'},
  {id: 23, name: 'MORRO PARIS', prestadora: 'NOVA PALMIRA', pos: 'P05'},
  {id: 24, name: 'VALE REAL (RS 452) ', prestadora: 'NOVA PALMIRA', pos: 'P05'},
  {id: 25, name: 'VILA PINGA (Esquina Zimmermann)', prestadora: 'NOVA PALMIRA', pos: 'P05'},
  {id: 26, name: 'BANANAL', prestadora: 'NOVA PALMIRA', pos: 'P06'},
  {id: 27, name: 'FELIZ - SÃO ROQUE (Sobra)', prestadora: 'NOVA PALMIRA', pos: 'P06'},
  {id: 28, name: 'NOVA PALMIRA (RS 452)', prestadora: 'NOVA PALMIRA', pos: 'P06'},
  {id: 29, name: 'PICADA CARÁ', prestadora: 'NOVA PALMIRA', pos: 'P06'},
  {id: 30, name: 'VILA RICA', prestadora: 'NOVA PALMIRA', pos: 'P06'},
  {id: 31, name: 'ARROIO BELO', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 32, name: 'BOM FIM (Comunidade Santa Inácio)', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 33, name: 'FELIZ (Canto do Rio)', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 34, name: 'FELIZ (Rodoviária)', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 35, name: 'FELIZ (Trevo Lauro Weber)', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 36, name: 'MATIEL', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 37, name: 'VALE DO HERMES', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 38, name: 'VILA CRISTINA (RS 452) ', prestadora: 'NOVA PALMIRA', pos: 'P07'},
  {id: 39, name: 'FORQUETA', prestadora: 'GIRATUR', pos: 'P08'},
  {id: 40, name: '4ª LÉGUA', prestadora: 'BRAGÉ', pos: 'P09'},
  {id: 41, name: 'LOTEAMENTO VÊNETO', prestadora: 'BRAGÉ', pos: 'P09'},
  {id: 42, name: 'VILA LOBOS', prestadora: 'BRAGÉ', pos: 'P09'},
  {id: 43, name: 'ANHANGUERA(DESVIO RIZZO)', prestadora: 'CAXIENSE', pos: 'P10'},
  {id: 44, name: 'BOSQUE DAS ARAUCÁRIAS', prestadora: 'CAXIENSE', pos: 'P10'},
  {id: 45, name: 'DESVIO RIZZO', prestadora: 'CAXIENSE', pos: 'P10'},
  {id: 46, name: 'ROTA DO SOL (Posto São Luiz)', prestadora: 'CAXIENSE', pos: 'P10'},
  {id: 47, name: 'SANTA TEREZA', prestadora: 'CAXIENSE', pos: 'P10'},
  {id: 48, name: 'CAMPOS DA SERRA', prestadora: 'CAXIENSE', pos: 'P11'},
  {id: 49, name: 'TREVISO', prestadora: 'CAXIENSE', pos: 'P11'},
  {id: 50, name: 'CONCEIÇÃO - LINHA FEIJÓ', prestadora: 'CAXIENSE', pos: 'P12'},
  {id: 51, name: 'DESVIO RIZZO', prestadora: 'CAXIENSE', pos: 'P12'},
  {id: 52, name: 'INDUSTRIAL', prestadora: 'CAXIENSE', pos: 'P12'},
  {id: 53, name: 'SÃO LUCAS', prestadora: 'CAXIENSE', pos: 'P12'},
  {id: 54, name: 'DE ZORZI (UBS Diamantino via Vanderlei Padilha Pescador)', prestadora: 'CAXIENSE', pos: 'P13'},
  {id: 55, name: 'DIAMANTINO', prestadora: 'CAXIENSE', pos: 'P13'},
  {id: 56, name: 'ESCADINHAS', prestadora: 'CAXIENSE', pos: 'P13'},
  {id: 57, name: 'PRESIDENTE VARGAS', prestadora: 'CAXIENSE', pos: 'P13'},
  {id: 58, name: '6ª LÉGUA', prestadora: 'CAXIENSE', pos: 'P14'},
  {id: 59, name: 'SÃO VIRGÍLIO', prestadora: 'CAXIENSE', pos: 'P14'},
  {id: 60, name: 'VILA LEON', prestadora: 'CAXIENSE', pos: 'P14'},
  {id: 61, name: 'CRUZEIRO (Via Rodrigues Alves)', prestadora: 'CAXIENSE', pos: 'P15'},
  {id: 62, name: 'ALTOS DO SEMINÁRIO(BAIXO)', prestadora: 'CAXIENSE', pos: 'P16'},
  {id: 63, name: 'COLINA SORRISO', prestadora: 'CAXIENSE', pos: 'P16'},
  {id: 64, name: 'FÁTIMA BAIXO (Via Mário Lopes)', prestadora: 'CAXIENSE', pos: 'P16'},
  {id: 65, name: 'PARQUE OÁSIS (Condomínio Villaggio Ventura)', prestadora: 'CAXIENSE', pos: 'P16'},
  {id: 66, name: 'SANTA LÚCIA', prestadora: 'CAXIENSE', pos: 'P16'},
  {id: 67, name: 'SÃO JOSÉ (Senai)', prestadora: 'CAXIENSE', pos: 'P16'},
  {id: 68, name: '1° MAIO', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 69, name: 'JARDELINO RAMOS', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 70, name: 'JARDIM AMÉRICA', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 71, name: 'MADUREIRA', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 72, name: 'PIO X', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 73, name: 'SAGRADA FAMÍLIA', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 74, name: 'HOSPITAL DO CÍRCULO', prestadora: 'CAXIENSE', pos: 'P18'},
  {id: 75, name: 'HOSPITAL FÁTIMA', prestadora: 'CAXIENSE', pos: 'P18'},
  {id: 76, name: 'SANTA CATARINA', prestadora: 'CAXIENSE', pos: 'P18'},
  {id: 77, name: 'UNIVERSITÁRIO ', prestadora: 'CAXIENSE', pos: 'P18'},
  {id: 78, name: 'JARDIM ADORADO', prestadora: 'CAXIENSE', pos: 'P19'},
  {id: 79, name: 'JARDIM IRACEMA III (Mercado Diego)', prestadora: 'CAXIENSE', pos: 'P19'},
  {id: 80, name: 'MONTE REALE', prestadora: 'CAXIENSE', pos: 'P20'},
  {id: 81, name: 'PLANALTO (Via Aparecida - Quadra de Futsal)', prestadora: 'CAXIENSE', pos: 'P20'},
  {id: 82, name: 'SÃO VICTOR COHAB', prestadora: 'CAXIENSE', pos: 'P20'},
  {id: 83, name: 'LA PALOMA', prestadora: 'CAXIENSE', pos: 'P21'},
  {id: 84, name: 'PAIQUERÊ', prestadora: 'CAXIENSE', pos: 'P21'},
  {id: 85, name: 'SANVITTO', prestadora: 'CAXIENSE', pos: 'P21'},
  {id: 86, name: 'VITÓRIA', prestadora: 'CAXIENSE', pos: 'P21'},
  {id: 87, name: 'PLANALTO (Padaria Pão de Mel)', prestadora: 'CAXIENSE', pos: 'P22'},
  {id: 88, name: 'VALE VERDE ', prestadora: 'CAXIENSE', pos: 'P22'},
  {id: 89, name: 'VILA VERDE', prestadora: 'CAXIENSE', pos: 'P22'},
  {id: 90, name: 'BR 116', prestadora: 'GIRATUR', pos: 'P23'},
  {id: 91, name: 'PLANALTO (Marcopolo PL - Colégio Guerino)', prestadora: 'GIRATUR', pos: 'P23'},
  {id: 92, name: 'BELA VISTA', prestadora: 'CAXIENSE', pos: 'P24'},
  {id: 93, name: 'VILA MARI', prestadora: 'CAXIENSE', pos: 'P24'},
  {id: 94, name: 'MECATRONICA', prestadora: 'GIRATUR', pos: 'P25'},
  {id: 95, name: 'PENA BRANCA', prestadora: 'GIRATUR', pos: 'P25'},
  {id: 96, name: 'PETRÓPOLIS', prestadora: 'GIRATUR', pos: 'P25'},
  {id: 97, name: 'SÃO LUIZ', prestadora: 'GIRATUR', pos: 'P25'},
  {id: 98, name: 'SÃO VALENTIN (Cruzeiro)', prestadora: 'GIRATUR', pos: 'P25'},
  {id: 99, name: 'UCS', prestadora: 'CAXIENSE', pos: 'P25'},
  {id: 100, name: 'GAUCHINHA', prestadora: 'CAXIENSE', pos: 'P26'},
  {id: 101, name: 'INTRAL', prestadora: 'CAXIENSE', pos: 'P26'},
  {id: 102, name: 'KAISER', prestadora: 'CAXIENSE', pos: 'P26'},
  {id: 103, name: 'JARDIM DAS HORTÊNCIAS', prestadora: 'CAXIENSE', pos: 'P27'},
  {id: 104, name: 'MARILAND', prestadora: 'CAXIENSE', pos: 'P27'},
  {id: 105, name: 'SAINT ETIENE', prestadora: 'CAXIENSE', pos: 'P27'},
  {id: 106, name: 'SÃO CIRO I e II', prestadora: 'CAXIENSE', pos: 'P27'},
  {id: 107, name: 'SÉCULO XX', prestadora: 'CAXIENSE', pos: 'P27'},
  {id: 108, name: 'BOM PASTOR', prestadora: 'CAXIENSE', pos: 'P28'},
  {id: 109, name: 'LOTEAMENTO ROTA NOVA', prestadora: 'GIRATUR', pos: 'P29'},
  {id: 110, name: 'MATIODA', prestadora: 'GIRATUR', pos: 'P29'},
  {id: 111, name: 'REOLON', prestadora: 'GIRATUR', pos: 'P29'},
  {id: 112, name: 'TIJUCA', prestadora: 'GIRATUR', pos: 'P29'},
  {id: 113, name: 'CARAVÁGIO', prestadora: 'GIRATUR', pos: 'P30'},
  {id: 114, name: 'GLÓRIA', prestadora: 'CAXIENSE', pos: 'P30'},
  {id: 115, name: 'NOSSA SENHORA DO CARAVAGGIO', prestadora: 'GIRATUR', pos: 'P30'},
  {id: 116, name: 'SÃO MATEUS', prestadora: 'GIRATUR', pos: 'P30'},
  {id: 117, name: 'VILA BRASIL', prestadora: 'GIRATUR', pos: 'P30'},
  {id: 118, name: 'CIDADE NOVA', prestadora: 'CAXIENSE', pos: 'P31'},
  {id: 119, name: 'MARIANI', prestadora: 'CAXIENSE', pos: 'P31'},
  {id: 120, name: 'SEDE FUNDAÇÃO MARCOPOLO', prestadora: 'CAXIENSE', pos: 'P31'},
  {id: 121, name: 'INTERLAGOS(Perimetral Norte)', prestadora: 'CAXIENSE', pos: 'P32'},
  {id: 122, name: 'MAXI ATACADO', prestadora: 'CAXIENSE', pos: 'P32'},
  {id: 123, name: 'PEDREIRA DO GUERRA', prestadora: 'CAXIENSE', pos: 'P32'},
  {id: 124, name: 'PERIMETRAL NORTE', prestadora: 'CAXIENSE', pos: 'P32'},
  {id: 125, name: 'SÃO JOSÉ', prestadora: 'CAXIENSE', pos: 'P32'},
  {id: 126, name: 'CHARQUEADAS', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 127, name: 'JARDIM DO SHOPING', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 128, name: 'NOSSA SENHORA DO ROSARIO I e II', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 129, name: 'PLANALTO RIO BRANCO', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 130, name: 'ROSÁRIO I e II', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 131, name: 'SÃO FRANCISCO', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 132, name: 'SHOPING IGUATEMI', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 133, name: 'VILA AMÉLIA', prestadora: 'CAXIENSE', pos: 'P33'},
  {id: 134, name: 'CENTRO (Via 20 de Setembro)', prestadora: 'CAXIENSE', pos: 'P34'},
  {id: 135, name: 'CINQUENTENÁRIO (Via Julio de Castilhos)', prestadora: 'CAXIENSE', pos: 'P34'},
  {id: 136, name: 'FLORESTA', prestadora: 'CAXIENSE', pos: 'P34'},
  {id: 137, name: 'HOSPITAL UNIMED', prestadora: 'CAXIENSE', pos: 'P34'},
  {id: 138, name: 'I. E. E. CRISTOVÃO DE MENDOZA', prestadora: 'CAXIENSE', pos: 'P34'},
  {id: 139, name: 'MARECHAL FLORIANO', prestadora: 'CAXIENSE', pos: 'P34'},
  {id: 140, name: 'RIO BRANCO(Capuchinho)', prestadora: 'CAXIENSE', pos: 'P34'},
  {id: 141, name: 'AEROPORTO', prestadora: 'CAXIENSE', pos: 'P35'},
  {id: 142, name: 'MONTE CARMELO', prestadora: 'CAXIENSE', pos: 'P35'},
  {id: 143, name: 'SALGADO FILHO', prestadora: 'CAXIENSE', pos: 'P35'},
  {id: 144, name: 'ESPLANADA', prestadora: 'CAXIENSE', pos: 'P36'},
  {id: 145, name: 'MONTES CLAROS', prestadora: 'GIRATUR', pos: 'P36'},
  {id: 146, name: 'BRASÍLIA', prestadora: 'CAXIENSE', pos: 'P37'},
  {id: 147, name: 'LOTEAMENTO BACHI', prestadora: 'CAXIENSE', pos: 'P37'},
  {id: 148, name: 'PARADA CRISTAL', prestadora: 'CAXIENSE', pos: 'P37'},
  {id: 149, name: 'SÃO VALENTIN (Parada Cristal)', prestadora: 'CAXIENSE', pos: 'P37'},
  {id: 150, name: 'VILA ALPINA', prestadora: 'CAXIENSE', pos: 'P37'},
  {id: 151, name: 'CASTELO', prestadora: 'CAXIENSE', pos: 'P38'},
  {id: 152, name: 'SANTO HOMOBOM', prestadora: 'CAXIENSE', pos: 'P38'},
  {id: 153, name: 'SÃO CRISTOVÃO', prestadora: 'CAXIENSE', pos: 'P38'},
  {id: 154, name: 'ARCO BALENO', prestadora: 'CAXIENSE', pos: 'P39'},
  {id: 155, name: 'SÃO CAETANO (Mobitec)', prestadora: 'CAXIENSE', pos: 'P40'},
  {id: 156, name: 'SÃO CAETANO DO SUL', prestadora: 'CAXIENSE', pos: 'P40'},
  {id: 157, name: '3ª LÉGUA', prestadora: 'CAXIENSE', pos: 'P41'},
  {id: 158, name: 'NOSSA SENHORA DAS GRAÇAS', prestadora: 'CAXIENSE', pos: 'P41'},
  {id: 159, name: 'ORIENTAL', prestadora: 'CAXIENSE', pos: 'P41'},
  {id: 160, name: 'SANTA CORONA', prestadora: 'CAXIENSE', pos: 'P42'},
  {id: 161, name: 'SANTOS DUMONT', prestadora: 'CAXIENSE', pos: 'P42'},
  {id: 162, name: 'CRISTO REDENTOR', prestadora: 'CAXIENSE', pos: 'P43'},
  {id: 163, name: 'EXPOSIÇÃO', prestadora: 'CAXIENSE', pos: 'P43'},
  {id: 164, name: 'IPIRANGA', prestadora: 'CAXIENSE', pos: 'P43'},
  {id: 165, name: 'PANAZZOLO', prestadora: 'CAXIENSE', pos: 'P43'},
  {id: 166, name: 'RIO BRANCO(Baixo)', prestadora: 'CAXIENSE', pos: 'P43'},
  {id: 167, name: 'SÃO LEOPOLDO', prestadora: 'CAXIENSE', pos: 'P43'},
  {id: 168, name: 'MORADA DOS ALPES', prestadora: 'CAXIENSE', pos: 'P44'},
  {id: 169, name: 'PARQUE OÁSIS (Via Bortolo Zanrosso)', prestadora: 'CAXIENSE', pos: 'P44'},
  {id: 170, name: 'BRANDALISE', prestadora: 'CAXIENSE', pos: 'P45'},
  {id: 171, name: 'COLINA DO SOL', prestadora: 'CAXIENSE', pos: 'P45'},
  {id: 172, name: 'SANTA FÉ', prestadora: 'CAXIENSE', pos: 'P45'},
  {id: 173, name: 'VENEZZA', prestadora: 'CAXIENSE', pos: 'P45'},
  {id: 174, name: 'VILA MAESTRA (RS 122)', prestadora: 'CAXIENSE', pos: 'P45'},
  {id: 175, name: 'BELO HORIZONTE', prestadora: 'CAXIENSE', pos: 'P46'},
  {id: 176, name: 'PORTAL DA MAESTRA', prestadora: 'CAXIENSE', pos: 'P46'},
  {id: 177, name: 'VILA IPÊ', prestadora: 'CAXIENSE', pos: 'P46'},
  {id: 178, name: 'FÁTIMA', prestadora: 'CAXIENSE', pos: 'P47'},
  {id: 179, name: 'INTERLAGOS(Via Domingos Chies - Danfoss)', prestadora: 'CAXIENSE', pos: 'P47'},
  {id: 180, name: 'JARDIM ESMERALDA', prestadora: 'CAXIENSE', pos: 'P47'},
  {id: 181, name: 'JARDIM IRACEMA I (Campo Canarinho e Mercado Duarte)', prestadora: 'CAXIENSE', pos: 'P48'},
  {id: 182, name: 'SANTO ANTÔNIO', prestadora: 'CAXIENSE', pos: 'P48'},
  {id: 183, name: 'SERRANO (Supermercado Andrezza)', prestadora: 'CAXIENSE', pos: 'P49'},
  {id: 184, name: 'JARDIM ELDORADO', prestadora: 'CAXIENSE', pos: 'P50'},
  {id: 185, name: 'SERRANO (Via Assis Mariani)', prestadora: 'CAXIENSE', pos: 'P50'},
  {id: 186, name: 'SERRANO (Via Imobiliária Minetto - Igreja Católica)', prestadora: 'CAXIENSE', pos: 'P51'},
  {id: 187, name: 'JARDIM IRACEMA II (Serraria e Sede Sindicato Metalúrgicos)', prestadora: 'CAXIENSE', pos: 'P52'},
  {id: 188, name: 'LOTEAMENTO FILOMENA', prestadora: 'CAXIENSE', pos: 'P52'},
  {id: 189, name: 'NOSSA SENHORA DAS DORES', prestadora: 'CAXIENSE', pos: 'P52'},
  {id: 190, name: 'SEDE SINDICATO METALÚRGICO', prestadora: 'CAXIENSE', pos: 'P52'},
  {id: 191, name: 'ALTOS DO SEMINÁRIO(ALTO)', prestadora: 'CAXIENSE', pos: 'P53'},
  {id: 192, name: 'CENTENÁRIO', prestadora: 'CAXIENSE', pos: 'P53'},
  {id: 193, name: 'JARDIM ITÁLIA', prestadora: 'CAXIENSE', pos: 'P53'},
  {id: 194, name: 'NOSSA SENHORA DA SAÚDE', prestadora: 'CAXIENSE', pos: 'P53'},
  {id: 195, name: 'PIONEIRO', prestadora: 'CAXIENSE', pos: 'P53'},
  {id: 196, name: 'POR DO SOL', prestadora: 'CAXIENSE', pos: 'P53'},
  {id: 197, name: 'VINHEDOS', prestadora: 'CAXIENSE', pos: 'P53'},
  {id: 198, name: 'ANA RECH', prestadora: 'CAXIENSE', pos: 'P54'},
  {id: 199, name: 'SOLAR DO PRADO', prestadora: 'CAXIENSE', pos: 'P54'},
];
var itemsTerQuar = [
  //name key is must.It is to show the text in front
  {id: 1, name: 'CARAVAGIO', prestadora: 'GIRATUR', pos: 'P01'},
  {id: 2, name: 'MONTES CLAROS', prestadora: 'GIRATUR', pos: 'P01'},
  {id: 3, name: 'NOSSA SENHORA DAS GRAÇAS', prestadora: 'GIRATUR', pos: 'P01'},
  {id: 4, name: 'ORIENTAL', prestadora: 'GIRATUR', pos: 'P01'},
  {id: 5, name: 'SALGADO FILHO', prestadora: 'GIRATUR', pos: 'P01'},
  {id: 6, name: '18 DO FORTE', prestadora: 'GIRATUR', pos: 'P02'},
  {id: 7, name: 'CENTRO', prestadora: 'GIRATUR', pos: 'P02'},
  {id: 8, name: 'GAUCHINHA', prestadora: 'GIRATUR', pos: 'P02'},
  {id: 9, name: 'KAISER', prestadora: 'GIRATUR', pos: 'P02'},
  {id: 10, name: 'RIO BRANCO', prestadora: 'GIRATUR', pos: 'P02'},
  {id: 11, name: 'SAGRADA FAMÍLIA ', prestadora: 'GIRATUR', pos: 'P02'},
  {id: 12, name: 'CASTELO', prestadora: 'GIRATUR', pos: 'P03'},
  {id: 13, name: 'JARDIM DAS HORTÊNCIAS', prestadora: 'GIRATUR', pos: 'P03'},
  {id: 14, name: 'SÃO CIRO', prestadora: 'GIRATUR', pos: 'P03'},
  {id: 15, name: 'SÃO CRISTOVÃO', prestadora: 'GIRATUR', pos: 'P03'},
  {id: 16, name: 'SECULO XX', prestadora: 'GIRATUR', pos: 'P03'},
  {id: 17, name: 'CHARQUEADAS', prestadora: 'GIRATUR', pos: 'P04'},
  {id: 18, name: 'DESVIO RIZZO', prestadora: 'GIRATUR', pos: 'P04'},
  {id: 19, name: 'PLANALTO RIO BRANCO', prestadora: 'GIRATUR', pos: 'P04'},
  {id: 20, name: 'ROSÁRIO', prestadora: 'GIRATUR', pos: 'P04'},
  {id: 21, name: 'SÃO FRANCISCO', prestadora: 'GIRATUR', pos: 'P04'},
  {id: 22, name: 'CIDADE NOVA II', prestadora: 'CAXIENSE', pos: 'P05'},
  {id: 23, name: 'INDUSTRIAL', prestadora: 'CAXIENSE', pos: 'P05'},
  {id: 24, name: 'MARIANE', prestadora: 'CAXIENSE', pos: 'P05'},
  {id: 25, name: 'PERIMETRAL - CASA DE PEDRA', prestadora: 'CAXIENSE', pos: 'P05'},
  {id: 26, name: 'PERIMETRAL - MAX ATACADO', prestadora: 'CAXIENSE', pos: 'P05'},
  {id: 27, name: 'ANA RECH', prestadora: 'GIRATUR', pos: 'P06'},
  {id: 28, name: 'PARADA CRISTAL', prestadora: 'GIRATUR', pos: 'P06'},
  {id: 29, name: 'SOLAR DO PRADO', prestadora: 'GIRATUR', pos: 'P06'},
  {id: 30, name: 'BAIRRO SÃO LEOPOLDO', prestadora: 'GIRATUR', pos: 'P07'},
  {id: 31, name: 'CRISTO REDENTOR', prestadora: 'GIRATUR', pos: 'P07'},
  {id: 32, name: 'EXPOSIÇÃO', prestadora: 'GIRATUR', pos: 'P07'},
  {id: 33, name: 'PANAZZOLO', prestadora: 'GIRATUR', pos: 'P07'},
  {id: 34, name: 'CRUZEIRO', prestadora: 'GIRATUR', pos: 'P08'},
  {id: 35, name: 'SÃO VIRGÍLIO', prestadora: 'GIRATUR', pos: 'P08'},
  {id: 36, name: 'VILA LEON', prestadora: 'GIRATUR', pos: 'P08'},
  {id: 37, name: 'FORQUETA', prestadora: 'BRAGÉ', pos: 'P09'},
  {id: 38, name: 'PARQUE DAS ROSAS', prestadora: 'BRAGÉ', pos: 'P09'},
  {id: 39, name: 'PIONEIRO', prestadora: 'BRAGÉ', pos: 'P09'},
  {id: 40, name: 'SÃO LUCAS ', prestadora: 'BRAGÉ', pos: 'P09'},
  {id: 41, name: 'CENTENÁRIO ', prestadora: 'BRAGÉ', pos: 'P10'},
  {id: 42, name: 'COLINA SORRISO', prestadora: 'BRAGÉ', pos: 'P10'},
  {id: 43, name: 'FÁTIMA', prestadora: 'BRAGÉ', pos: 'P10'},
  {id: 44, name: 'MONTE BÉRICO', prestadora: 'BRAGÉ', pos: 'P10'},
  {id: 45, name: 'NOSSA SENHORA DO ROSÁRIO', prestadora: 'BRAGÉ', pos: 'P10'},
  {id: 46, name: 'PIONEIRO', prestadora: 'BRAGÉ', pos: 'P10'},
  {id: 47, name: 'FÁTIMA', prestadora: 'BRAGÉ', pos: 'P11'},
  {id: 48, name: 'MONTE BÉRICO', prestadora: 'BRAGÉ', pos: 'P11'},
  {id: 49, name: 'NOSSA SENHORA DO ROSÁRIO', prestadora: 'BRAGÉ', pos: 'P11'},
  {id: 50, name: 'PARQUE OASIS ', prestadora: 'BRAGÉ', pos: 'P11'},
  {id: 51, name: 'PIONEIRO', prestadora: 'BRAGÉ', pos: 'P11'},
  {id: 52, name: 'POR DO SOL', prestadora: 'BRAGÉ', pos: 'P11'},
  {id: 53, name: 'CENTRO (VINTE DE SETEMBRO)', prestadora: 'BRAGÉ', pos: 'P12'},
  {id: 54, name: 'MARECHAL FLORIANO', prestadora: 'BRAGÉ', pos: 'P12'},
  {id: 55, name: 'SAGRADA FAMÍLIA ', prestadora: 'BRAGÉ', pos: 'P12'},
  {id: 56, name: 'BELO HORIZONTE', prestadora: 'BRAGÉ', pos: 'P13'},
  {id: 57, name: 'COLINA DO SOL', prestadora: 'BRAGÉ', pos: 'P13'},
  {id: 58, name: 'PORTAL DA MAESTRA', prestadora: 'BRAGÉ', pos: 'P13'},
  {id: 59, name: 'SANTA FÉ', prestadora: 'BRAGÉ', pos: 'P13'},
  {id: 60, name: 'SANTO ANTONIO', prestadora: 'BRAGÉ', pos: 'P13'},
  {id: 61, name: 'CAMPOS DA SERRA', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 62, name: 'DE ZORZI ', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 63, name: 'DE ZORZI II', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 64, name: 'DIAMANTINO', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 65, name: 'PENA BRANCA', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 66, name: 'PRESIDENTE VARGAS', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 67, name: 'SÃO LUIZ DA 6ª LÉGUA', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 68, name: 'TREVISO', prestadora: 'UNIDOS', pos: 'P14'},
  {id: 69, name: 'BELA VISTA', prestadora: 'UNIDOS', pos: 'P15'},
  {id: 70, name: 'MONTE REALI', prestadora: 'UNIDOS', pos: 'P15'},
  {id: 71, name: 'PAIQUERE', prestadora: 'UNIDOS', pos: 'P15'},
  {id: 72, name: 'PLANALTO   ', prestadora: 'UNIDOS', pos: 'P15'},
  {id: 73, name: 'SÃO VITOR', prestadora: 'UNIDOS', pos: 'P15'},
  {id: 74, name: 'VILA MARI', prestadora: 'UNIDOS', pos: 'P15'},
  {id: 75, name: 'VITORIA', prestadora: 'UNIDOS', pos: 'P15'},
  {id: 76, name: '1º DE MAIO', prestadora: 'GIRATUR', pos: 'P16'},
  {id: 77, name: 'JARDIM AMÉRICA', prestadora: 'GIRATUR', pos: 'P16'},
  {id: 78, name: 'PIO X', prestadora: 'GIRATUR', pos: 'P16'},
  {id: 79, name: 'SÃO JOSÉ', prestadora: 'GIRATUR', pos: 'P16'},
  {id: 80, name: 'ELDORADO', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 81, name: 'IRACEMA', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 82, name: 'SERRANO', prestadora: 'CAXIENSE', pos: 'P17'},
  {id: 83, name: '4ª LÉGUA', prestadora: 'GIRATUR', pos: 'P18'},
  {id: 84, name: 'ALTOS DE GALÓPOLIS', prestadora: 'GIRATUR', pos: 'P18'},
  {id: 85, name: 'GALÓPOLIS', prestadora: 'GIRATUR', pos: 'P18'},
  {id: 86, name: 'SANTA CORONA', prestadora: 'GIRATUR', pos: 'P18'},
  {id: 87, name: 'SANTOS DUMONT', prestadora: 'GIRATUR', pos: 'P18'},
  {id: 88, name: 'VILA LOBOS', prestadora: 'GIRATUR', pos: 'P18'},
  {id: 89, name: 'ARCO BALENO', prestadora: 'BRAGÉ', pos: 'P19'},
  {id: 90, name: 'BOM PASTOR', prestadora: 'BRAGÉ', pos: 'P19'},
  {id: 91, name: 'SÃO CAETANO', prestadora: 'BRAGÉ', pos: 'P19'},
  {id: 92, name: 'VILA VERDE', prestadora: 'BRAGÉ', pos: 'P19'},  
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      serverData: [],
      //Data Source for the
      modalVisible: false,
    };
  }
  render() {
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Diurno')}>
            {/*Donute Button Image */}
            <Image
              source={require('../assets/back.png')}
              style={{ marginLeft: 10, marginTop: 25, width: 25, height: 25, tintColor: '#FF3D00' }}
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
                <Text style={styles.paragraphSwipe}> DIURNO </Text>
                <SearchableDropdown
                  onTextChange={text => console.log(text)}
                  //On text change listner on the searchable input
                  //onItemSelect={item => Alert.alert('', JSON.stringify(item.prestadora + ", LINHA: " + item.linha))}
                  onItemSelect={item => {
                    this.props.navigation.navigate(item.key);
                  }}
                  //onItemSelect called after the selection from the dropdown
                  containerStyle={{ padding: 5 }}
                  //suggestion container style
                  textInputStyle={{
                    //inserted text style
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#FF3D00',
                    backgroundColor: '#FAF9F8',
                  }}
                  itemStyle={{
                    //single dropdown item style
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#FF3D00',
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    //single dropdown item's text style
                    color: '#222',
                  }}
                  itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: '86%',
                  }}
                  items={itemsDiurno}
                  //mapping of item array
                  //defaultIndex={2}
                  //default selected item index
                  placeholder="Digite algo como: 'Centro'"
                  //place holder for the search input
                  resetValue={false}
                  //reset textInput Value with true and false state
                  underlineColorAndroid="transparent"
                  //To remove the underline from the android input
                  showsVerticalScrollIndicator={false}
                />
            </View>
          </Modal>
          <Modal
            isVisible={this.state.isVisibleNoturno}
            style={styles.modalSwipe}
            onBackButtonPress={() => this.setState({ isVisibleNoturno: false })}
            onBackdropPress={() => this.setState({ isVisibleNoturno: false })}
            onSwipeComplete={() => this.setState({ isVisibleNoturno: false })}
            onSwipeThreshold={20}
            swipeDirection="down">
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                <Text style={styles.paragraphSwipe}> NOTURNO </Text>
                <SearchableDropdown
                  onTextChange={text => console.log(text)}
                  //On text change listner on the searchable input
                  //onItemSelect={item => Alert.alert('', JSON.stringify(item.prestadora + ", LINHA: " + item.linha))}
                  onItemSelect={item => {
                    this.props.navigation.navigate(item.key);
                  }}
                  //onItemSelect called after the selection from the dropdown
                  containerStyle={{ padding: 5 }}
                  //suggestion container style
                  textInputStyle={{
                    //inserted text style
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#FF3D00',
                    backgroundColor: '#FAF9F8',
                  }}
                  itemStyle={{
                    //single dropdown item style
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#FF3D00',
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    //single dropdown item's text style
                    color: '#222',
                  }}
                  itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: '86%',
                  }}
                  items={itemsNoturno}
                  //mapping of item array
                  //defaultIndex={2}
                  //default selected item index
                  placeholder="Digite algo como: 'Centro'"
                  //place holder for the search input
                  resetValue={false}
                  //reset textInput Value with true and false state
                  underlineColorAndroid="transparent"
                  //To remove the underline from the android input
                  showsVerticalScrollIndicator={false}
                />
            </View>
          </Modal>
          <Modal
            isVisible={this.state.isVisibleTerceiroTurno}
            style={styles.modalSwipe}
            onBackButtonPress={() =>
              this.setState({ isVisibleTerceiroTurno: false })
            }
            onBackdropPress={() =>
              this.setState({ isVisibleTerceiroTurno: false })
            }
            onSwipeComplete={() =>
              this.setState({ isVisibleTerceiroTurno: false })
            }
            onSwipeThreshold={20}
            swipeDirection="down">
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                <Text style={styles.paragraphSwipe}> TERCEIRO TURNO </Text>
                <SearchableDropdown
                  onTextChange={text => console.log(text)}
                  //On text change listner on the searchable input
                  //onItemSelect={item => Alert.alert('', JSON.stringify(item.prestadora + ", LINHA: " + item.linha))}
                  onItemSelect={item => {
                    this.props.navigation.navigate(item.key);
                  }}
                  //onItemSelect called after the selection from the dropdown
                  containerStyle={{ padding: 5 }}
                  //suggestion container style
                  textInputStyle={{
                    //inserted text style
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#FF3D00',
                    backgroundColor: '#FAF9F8',
                  }}
                  itemStyle={{
                    //single dropdown item style
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#FF3D00',
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    //single dropdown item's text style
                    color: '#222',
                  }}
                  itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: '86%',
                  }}
                  items={itemsTerceiroTurno}
                  //mapping of item array
                  //defaultIndex={2}
                  //default selected item index
                  placeholder="Digite algo como: 'Centro'"
                  //place holder for the search input
                  resetValue={false}
                  //reset textInput Value with true and false state
                  underlineColorAndroid="transparent"
                  //To remove the underline from the android input
                  showsVerticalScrollIndicator={false}
                />
            </View>
          </Modal>
          <Modal
            isVisible={this.state.isVisibleSaidaDiurno}
            style={styles.modalSwipe}
            onBackButtonPress={() =>
              this.setState({ isVisibleSaidaDiurno: false })
            }
            onBackdropPress={() =>
              this.setState({ isVisibleSaidaDiurno: false })
            }
            onSwipeComplete={() =>
              this.setState({ isVisibleSaidaDiurno: false })
            }
            onSwipeThreshold={20}
            swipeDirection="down">
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                <Text style={styles.paragraphSwipe}> DIURNO SAÍDA </Text>
                <SearchableDropdown
                  multi={true}
                  onTextChange={text => console.log(text)}
                  //On text change listner on the searchable input
                  //onItemSelect={item => Alert.alert('', JSON.stringify(item.prestadora + ", LINHA: " + item.linha))}
                  //onItemSelect={item => {this.props.navigation.navigate(item.key);}}
                  onItemSelect={item => Alert.alert(" ", JSON.stringify(item.prestadora + ", LINHA: " + item.linha), [{ text: "Localizar no Pátio", onPress:() =>(this.props.navigation.navigate('ImageDiurno'))},{ text: "Voltar", onPress: () => console.log("OK Pressed")}],{ cancelable: true })}
                  //onItemSelect called after the selection from the dropdown
                  containerStyle={{ padding: 5 }}
                  //suggestion container style
                  textInputStyle={{
                    //inserted text style
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#FF3D00',
                    backgroundColor: '#FAF9F8',
                  }}
                  itemStyle={{
                    //single dropdown item style
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#FF3D00',
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    //single dropdown item's text style
                    color: '#222',
                  }}
                  itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: '100%',
                  }}
                  items={itemsSaidaDiurno}
                  //mapping of item array
                  //defaultIndex={2}
                  //default selected item index
                  placeholder="Digite algo como: 'Centro'"
                  //place holder for the search input
                  resetValue={false}
                  //reset textInput Value with true and false state
                  underlineColorAndroid="transparent"
                  //To remove the underline from the android input
                  showsVerticalScrollIndicator={false}
                />
            </View>
          </Modal>
          <Modal
            isVisible={this.state.isVisibleSaidaNoturno}
            style={styles.modalSwipe}
            onBackButtonPress={() =>
              this.setState({ isVisibleSaidaNoturno: false })
            }
            onBackdropPress={() =>
              this.setState({ isVisibleSaidaNoturno: false })
            }
            onSwipeComplete={() =>
              this.setState({ isVisibleSaidaNoturno: false })
            }
            onSwipeThreshold={20}
            swipeDirection="down">
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                <Text style={styles.paragraphSwipe}> NOTURNO SAÍDA </Text>
                <SearchableDropdown
                  multi={true}
                  onTextChange={text => console.log(text)}
                  //On text change listner on the searchable input
                  //onItemSelect={item => Alert.alert('', JSON.stringify(item.prestadora + ", LINHA: " + item.linha))}
                  //onItemSelect={item => {this.props.navigation.navigate(item.key);}}
                  onItemSelect={item => Alert.alert(" ", JSON.stringify(item.prestadora + ", LINHA: " + item.pos), [{ text: "Localizar no Pátio", onPress:() =>(this.props.navigation.navigate('ImageNoturno'))},{ text: "Voltar", onPress: () => console.log("OK Pressed")}],{ cancelable: true })}
                  //onItemSelect called after the selection from the dropdown
                  containerStyle={{ padding: 5 }}
                  //suggestion container style
                  textInputStyle={{
                    //inserted text style
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#FF3D00',
                    backgroundColor: '#FAF9F8',
                  }}
                  itemStyle={{
                    //single dropdown item style
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#FF3D00',
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    //single dropdown item's text style
                    color: '#222',
                  }}
                  itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: '100%',
                  }}
                  items={itemsSaidaNoturno}
                  //mapping of item array
                  //defaultIndex={2}
                  //default selected item index
                  placeholder="Digite algo como: 'Centro'"
                  //place holder for the search input
                  resetValue={false}
                  //reset textInput Value with true and false state
                  underlineColorAndroid="transparent"
                  //To remove the underline from the android input
                  showsVerticalScrollIndicator={false}
                />
            </View>
          </Modal>
          <Modal
            isVisible={this.state.isVisibleSaidaTerQuar}
            style={styles.modalSwipe}
            onBackButtonPress={() =>
              this.setState({ isVisibleSaidaTerQuar: false })
            }
            onBackdropPress={() =>
              this.setState({ isVisibleSaidaTerQuar: false })
            }
            onSwipeComplete={() =>
              this.setState({ isVisibleSaidaTerQuar: false })
            }
            onSwipeThreshold={20}
            swipeDirection="down">
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                <Text style={styles.paragraphSwipe}> TERCEIRO TURNO SAÍDA </Text>
                <SearchableDropdown
                  multi={true}
                  onTextChange={text => console.log(text)}
                  //On text change listner on the searchable input
                  //onItemSelect={item => Alert.alert('', JSON.stringify(item.prestadora + ", LINHA: " + item.linha))}
                  //onItemSelect={item => {this.props.navigation.navigate(item.key);}}
                  onItemSelect={item => Alert.alert(" ", JSON.stringify(item.prestadora + ", LINHA: " + item.pos), [{ text: "Localizar no Pátio", onPress:() =>(this.props.navigation.navigate('ImageTerTurno'))},{ text: "Voltar", onPress: () => console.log("OK Pressed")}],{ cancelable: true })}
                  //onItemSelect called after the selection from the dropdown
                  containerStyle={{ padding: 5 }}
                  //suggestion container style
                  textInputStyle={{
                    //inserted text style
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#FF3D00',
                    backgroundColor: '#FAF9F8',
                  }}
                  itemStyle={{
                    //single dropdown item style
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#FF3D00',
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    //single dropdown item's text style
                    color: '#222',
                  }}
                  itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: '100%',
                  }}
                  items={itemsTerQuar}
                  //mapping of item array
                  //defaultIndex={2}
                  //default selected item index
                  placeholder="Digite algo como: 'Centro'"
                  //place holder for the search input
                  resetValue={false}
                  //reset textInput Value with true and false state
                  underlineColorAndroid="transparent"
                  //To remove the underline from the android input
                  showsVerticalScrollIndicator={false}
                />
            </View>
          </Modal>
 
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <Text style={styles.paragraphSwipe}>LINHAS DE ENTRADA</Text>
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
            <Text style={styles.buttonStyleSwipeMenu}> Diurno </Text>
          </TouchableOpacity>
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <TouchableOpacity
            onPress={() => this.setState({ isVisibleNoturno: true })}>
            <Text style={styles.buttonStyleSwipeMenu}> Noturno </Text>
          </TouchableOpacity>
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <TouchableOpacity
            onPress={() => this.setState({ isVisibleTerceiroTurno: true })}>
            <Text style={styles.buttonStyleSwipeMenu}> Terceiro Turno </Text>
          </TouchableOpacity>
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <Text style={styles.paragraphSwipe}>LINHAS DE SAÍDA</Text>
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <TouchableOpacity
            onPress={() => this.setState({ isVisibleSaidaDiurno: true })}>
            <Text style={styles.buttonStyleSwipeMenu}>Diurno</Text>
          </TouchableOpacity>
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
         
          <TouchableOpacity
           onPress={() => this.setState({ isVisibleSaidaNoturno: true })}>
            <Text style={styles.buttonStyleSwipeMenu}>Noturno</Text>
          </TouchableOpacity>
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
          <TouchableOpacity 
            onPress={() => this.setState({ isVisibleSaidaTerQuar: true })}>
            <Text style={styles.buttonStyleSwipeMenu}>Terceiro Turno</Text>
          </TouchableOpacity>
          
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraphSwipe: {
    margin: 12,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  modalSwipe: {
    justifyContent: 'flex-start',
    backgroundColor: '#e5e5e5',
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop: Platform.OS === 'ios' ? 50 : 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  buttonStyleSwipeMenu: {
    padding: 8,
    margin: 3,
    fontWeight: 'bold',
    borderRadius: 5,
    backgroundColor: '#FF3D00',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
  },
  modalSwipeAviso: {
    justifyContent: 'flex-start',
    backgroundColor: '#e5e5e5',
    marginHorizontal: 20,
    marginBottom: 200,
    marginTop: Platform.OS === 'ios' ? 85 : 85,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  close:{
    position:'absolute',
    padding: 8,
    backgroundColor:'#FF3D00',
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15,
    zIndex:9999,
    top: 5,
    right: 5,
},
});
