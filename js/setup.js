/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: 'Home',
      screen: 'example.HomePage',
      icon: require('../img/one.png'),
      selectedIcon: require('../img/one_selected.png'),
      title: 'Home'
    },
    {
      label: 'Weekly',
      screen: 'example.WeeklyPage',
      icon: require('../img/two.png'),
      selectedIcon: require('../img/two_selected.png'),
      title: 'Weekly',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    },
    {
      label: 'More',
      screen: 'example.MorePage',
      icon: require('../img/two.png'),
      selectedIcon: require('../img/two_selected.png'),
      title: 'More',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    },
    {
      label: 'About',
      screen: 'example.AboutPage',
      icon: require('../img/two.png'),
      selectedIcon: require('../img/two_selected.png'),
      title: 'About',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    }
  ];
  return tabs;
};

Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  },
  drawer: {
    left: {
      screen: 'example.SideMenu'
    }
  }
});