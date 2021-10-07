import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BDScreen from '../Screens/BDScreen';
import RecieverDetails  from '../Screens/ReceiverDetails';




export const AppStackNavigator = createStackNavigator({
  BDScreen : {
    screen : BDScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetails,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BDScreen'
  }
);
