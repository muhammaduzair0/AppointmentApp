import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Navigation from './src/Navigation/NavigationStack';

const App = () => {
  return(
    <View style={{flex:1}}>
      <Navigation />
    </View>
  )
}

export default App;
