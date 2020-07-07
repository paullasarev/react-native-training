import React from 'react';
import 'react-native-gesture-handler';
import MainNavigator from '../navigation/MainNavigator';
import navigation from '../navigation';

if (__DEV__) {
  // eslint-disable-next-line no-console
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return <MainNavigator ref={navigation.init} />;
};

export default App;
