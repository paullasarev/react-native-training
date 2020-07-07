import React from 'react';
import 'react-native-gesture-handler';
// import { Text, View } from 'react-native';
import MainNavigator from '../navigation/MainNavigator';
import navigation from '../navigation';

const App = () => {
  // return <MainNavigator />;
  // return (
  //   <View>
  //     <Text>app</Text>
  //   </View>
  // );
  return <MainNavigator ref={navigation.init} />;
};

export default App;
