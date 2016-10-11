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

class AboutTab extends React.Component {
  render() {
  	return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Copyright &copy; MSBU Tech, 2016.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = AboutTab;