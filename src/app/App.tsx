import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import MainNavigator from '../navigation/MainNavigator';
import { initNavigation } from '../navigation/Navigation';

import { configureStore } from './configure-store';

if (__DEV__) {
  // eslint-disable-next-line no-console
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

// eslint-disable-next-line no-console
console.disableYellowBox = true;

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator ref={initNavigation} />
    </Provider>
  );
};

export default App;
