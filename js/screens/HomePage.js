/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class HomePage extends React.Component {
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
    color: '#393C40'
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#B4B8BF',
    marginBottom: 5,
  },
});

module.exports = HomePage;