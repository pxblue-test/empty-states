import * as React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Icon } from 'react-native-elements';
import * as Colors from '@pxblue/colors';

import Actions from '../pages/Actions';
import TextOnly from '../pages/TextOnly';
import Placeholder from '../pages/Placeholder';
import SubContent from '../pages/SubContent';

const bottomNavigation = createMaterialBottomTabNavigator(
  {
    Actions: {
      screen: Actions,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name={'touch-app'} size={25} color={tintColor} />
        ),
      },
    },
    'Text Only': {
      screen: TextOnly,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name={'subject'} size={25} color={tintColor} />
        ),
      },
    },
    Placeholder: {
      screen: Placeholder,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name={'crop-free'} size={25} color={tintColor} />
        ),
      },
    },
    'Sub-Content': {
      screen: SubContent,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name={'view-module'} size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    shifting: false,
    activeColor: Colors.white[50],
    inactiveColor: 'rgba(255,255,255,0.5)',
    barStyle: { backgroundColor: Colors.blue[500] }
  }
);


// const bottomNavigation = createBottomTabNavigator(
//   {
//     'Actions': {
//       screen: Actions,
//       navigationOptions: {
//         tabBarIcon: ({ focused, horizontal, tintColor }) => (
//           <Icon name={'touch-app'} size={25} color={tintColor} />
//         ),
//       },
//     },
//     'Text Only': {
//       screen: TextOnly,
//       navigationOptions: {
//         tabBarIcon: ({ focused, horizontal, tintColor }) => (
//           <Icon name={'subject'} size={25} color={tintColor} />
//         ),
//       },
//     },
//     'Placeholder': {
//       screen: Placeholder,
//       navigationOptions: {
//         tabBarIcon: ({ focused, horizontal, tintColor }) => (
//           <Icon name={'crop-free'} size={25} color={tintColor} />
//         ),
//       },
//     },
//     'Sub-Content': {
//       screen: SubContent,
//       navigationOptions: {
//         tabBarIcon: ({ focused, horizontal, tintColor }) => (
//           <Icon name={'view-module'} size={25} color={tintColor} />
//         ),
//       },
//     },
//   },
//   {
//     navigationOptions: ({navigation})=>({
//       tabBarOnPress:(tab,jumpToIndex) =>{
//         jumpToIndex(tab.index)
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: Colors.blue[500],
//       activeBackgroundColor: Colors.white[50],
//       inactiveTintColor: Colors.white[50],
//       inactiveBackgroundColor: Colors.blue[500],
//     },
//   }
// );

export default createAppContainer(bottomNavigation);
