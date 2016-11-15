/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import HomePage from '../pages/HomePage';
import WeeklyPage from '../pages/WeeklyPage';
import MorePage from '../pages/MorePage';
import AboutPage from '../pages/AboutPage';

class MSBUApp extends React.Component {

  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        tabBarPosition={'bottom'}
        renderTabBar={() => <DefaultTabBar backgroundColor={'#F7F8FA'}
                                           tabBarTextStyle={{color: '#393C40', fontSize: 16}}
                                           activeTextColor={'#4A90E2'}
                                           inactiveTextColor={'#393c40'}
                                           underlineStyle={{backgroundColor: '#4A90E2'}}/>
        }
        scrollWithoutAnimation={true}
      >
        <HomePage tabLabel="Home"/>
        <WeeklyPage tabLabel="Weekly"/>
        <MorePage tabLabel="More"/>
        <AboutPage tabLabel="About"/>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

module.exports = MSBUApp;