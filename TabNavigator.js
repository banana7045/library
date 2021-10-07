import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BDScreen from "../Screens/BDScreen";
import BRScreen from "../Screens/BRScreen";
import { AppStackNavigator} from './StackNavigation'




export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/12.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: BRScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/12.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});
