import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './Screens/Login';
import { AppDrawerNavigator } from './navigators/DrawerNavigator'
import { AppTabNavigator } from './navigators/TabNavigator'


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
