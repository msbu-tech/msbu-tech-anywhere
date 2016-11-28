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
  Alert
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class HomePage extends React.Component {

  static navigatorButtons = {
    leftButtons: [{
      icon: require('../assets/img/navicon_menu.png'),
      id: 'menu'
    }]
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          MSBU Tech Anywhere
        </Text>
        <Text style={styles.instructions}>
          More than this.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color: '#505359',
    lineHeight: 25
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#81858c',
    marginBottom: 5,
    lineHeight: 20
  },
});

module.exports = HomePage;