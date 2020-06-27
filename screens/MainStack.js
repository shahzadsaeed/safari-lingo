import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import QuestionScreen from './QuestionScreen';
import LandingPage from './LandingPage';

const MainStack = createStackNavigator();

export default class Mainn extends Component {
  render() {
    return (
      <MainStack.Navigator initialRouteName="LandingPage" headerMode="none">
        <MainStack.Screen name="LandingPage" component={LandingPage} />
        <MainStack.Screen name="QuestionScreen" component={QuestionScreen} />
      </MainStack.Navigator>
    );
  }
}
