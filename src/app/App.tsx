import React from 'react';
import 'react-native-gesture-handler';
import MainNavigator from '../navigation/MainNavigator';
import navigation from '../navigation';

export const App = () => {
  return <MainNavigator ref={navigation.init} />;
};
