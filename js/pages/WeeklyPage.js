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

import {getWeeklyList} from '../actions/weekly';

class WeeklyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      weeklyList: []
    };
  }

  componentDidMount() {
    // this._fetch();
  }

  _fetch() {
    getWeeklyList().then((responseData) => {
      this.setState({
        loading: false,
        weeklyList: responseData
      })
      .done();
    });
  }

  onButtonPress() {
    Alert.alert('Button has been pressed!');
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            MSBU Tech Weekly
          </Text>
          <Text style={styles.weeklyTitle}>
            Loading...
          </Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            MSBU Tech Weekly
          </Text>
          {this.state.weeklyList.map((item) => (
          <Text style={styles.weeklyTitle}>
            {item.title} {item.date.split(' ')[0]}
          </Text>
          ))}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  weeklyTitle: {
    color: '#333333',
    marginBottom: 5,
  },
  weeklyUrl: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = WeeklyPage;