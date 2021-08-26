/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Platform, StatusBar} from 'react-native';
import 'react-native-gesture-handler';

StatusBar.setBarStyle('dark-content');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

AppRegistry.registerComponent(appName, () => App);
