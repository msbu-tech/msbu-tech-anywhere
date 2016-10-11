/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import AboutTab from './tabs/AboutTab';
import HomeTab from './tabs/HomeTab';
import MoreTab from './tabs/MoreTab';
import WeeklyTab from './tabs/WeeklyTab';

class MSBUApp extends React.Component {
  state = {
    selectedTab: 'homeTab',
  };

  render() {
    return (
      <TabBarIOS
        title="MSBU Tech Anywhere"
        unselectedTintColor="white"
        tintColor="#06c"
        barTintColor="black">
        <TabBarIOS.Item
          title="Home"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          <HomeTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Weekly"
          selected={this.state.selectedTab === 'weeklyTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'weeklyTab',
            });
          }}>
          <WeeklyTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="More"
          systemIcon="more"
          selected={this.state.selectedTab === 'moreTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'moreTab',
            });
          }}>
          <MoreTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="About"
          selected={this.state.selectedTab === 'aboutTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'aboutTab',
            });
          }}>
          <AboutTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = MSBUApp;