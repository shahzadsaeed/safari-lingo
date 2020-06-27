import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import MainStack from './screens/MainStack';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MenuProvider>
          <MainStack />
        </MenuProvider>
      </NavigationContainer>
    );
  }
}

export default App;
