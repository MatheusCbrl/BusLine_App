# BusLine_App


Prerequisites

What things you need to install the software and how to install them

Get Google map API Key https://developers.google.com/maps/documentation/javascript/get-api-key

**********************************************************************
\node_modules\metro-config\src\defaults\blacklist.js

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
change to:

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
**********************************************************************
In app.json add
"sourceExts": [ "js", "json", "ts", "tsx", "jsx", "vue"]
Inside
"packagerOpts"
***********************************************************************
Do this on AppEntry.js
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from '../../app';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
************************************************************************
Authors

Matheus Cabral - Initial work - matheus.cabral@marcopolo.com.br

RH Team - Initial work - rh@marcopolo.com.br

License

This project is licensed under the MIT License



        <TouchableOpacity style={styles.chatBot} activeOpacity={0.5}  onPress={() => this.props.navigation.navigate('ChatBot')}>
          <Image
            source={sun}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Ainda com dúvidas? Fale com a Mia! </Text>
        </TouchableOpacity>