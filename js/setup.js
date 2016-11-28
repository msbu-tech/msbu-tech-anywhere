/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from './assets/appicons';
import codePush from "react-native-code-push";

import { registerScreens } from './screens';
registerScreens();

iconsLoaded.then(() => {
  codePush.sync({updateDialog: {title: "An update is available!"}});
  startApp();
});

const createTabs = () => {
  let tabs = [
    {
      label: 'Home',
      screen: 'msbu.HomePage',
      icon: iconsMap['ios-home'],
      selectedIcon: iconsMap['ios-home-outline'],
      title: 'Home',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    },
    {
      label: 'Weekly',
      screen: 'msbu.WeeklyPage',
      icon: iconsMap['ios-paper'],
      selectedIcon: iconsMap['ios-paper-outline'],
      title: 'Weekly',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    },
    {
      label: 'More',
      screen: 'msbu.MorePage',
      icon: iconsMap['ios-albums'],
      selectedIcon: iconsMap['ios-albums-outline'],
      title: 'More',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    },
    {
      label: 'About',
      screen: 'msbu.AboutPage',
      icon: iconsMap['ios-person'],
      selectedIcon: iconsMap['ios-person-outline'],
      title: 'About',
      navigatorStyle: {
        tabBarBackgroundColor: '#F7F8FA',
      }
    }
  ];
  return tabs;
};

function startApp() {
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
}