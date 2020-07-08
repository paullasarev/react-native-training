import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

import Reactotron from 'reactotron-react-native';

let reactotron: any;
if (__DEV__ && Reactotron.setAsyncStorageHandler) {
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!
  // eslint-disable-next-line no-console
  console.log('Reactotron Configured');
}

export default reactotron;
