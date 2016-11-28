/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: 'Home',
      screen: 'msbu.HomePage',
      icon: require('./assets/img/one.png'),
      selectedIcon: require('./assets/img/one_selected.png'),
      title: 'Home',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    },
    {
      label: 'Weekly',
      screen: 'msbu.WeeklyPage',
      icon: require('./assets/img/two.png'),
      selectedIcon: require('./assets/img/two_selected.png'),
      title: 'Weekly',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    },
    {
      label: 'More',
      screen: 'msbu.MorePage',
      icon: require('./assets/img/three.png'),
      selectedIcon: require('./assets/img/three_selected.png'),
      title: 'More',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    },
    {
      label: 'About',
      screen: 'msbu.AboutPage',
      icon: require('./assets/img/two.png'),
      selectedIcon: require('./assets/img/two_selected.png'),
      title: 'About',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    }
  ];
  return tabs;
};

Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#F7F8FA',
    tabBarButtonColor: '#B4B8BF',
    tabBarSelectedButtonColor: '#4A90E2'
  },
  drawer: {
    left: {
      screen: 'msbu.SideMenu'
    }
  }
});