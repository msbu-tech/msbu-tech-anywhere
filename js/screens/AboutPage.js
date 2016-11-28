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
  Image,
  TouchableWithoutFeedback,
  AsyncStorage,
  Alert
} from 'react-native';

const CLICK_HISTORY_RECORD = "CLICK_HISTORY_RECORD";
const EASTER_EGGS_ALERT_TITLE = "SURPRISE";
const EASTER_EGGS_ALERT_MESSAGE = "YOU GOT A EASTER EGG!!!";
const EASTER_EGGS_TRIGGER_DEFAULT_COUNT = 7;

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      gotEasterEggs: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem(CLICK_HISTORY_RECORD, (err, result) => {
      console.log(err)
      console.log(result)
      if (!err && result) {
        this.setState({
          gotEasterEggs: true
        });
      }
    });
  }

  _handlePress() {
    if (!this.state.gotEasterEggs) {
      if (this.state.clickCount < EASTER_EGGS_TRIGGER_DEFAULT_COUNT) {
        this.setState({
          clickCount: this.state.clickCount + 1
        });

      } else {
        Alert.alert(
          EASTER_EGGS_ALERT_TITLE,
          EASTER_EGGS_ALERT_MESSAGE,
          [{
            text: 'GET IT', onPress: () => {
              AsyncStorage.setItem(CLICK_HISTORY_RECORD, "1", (err, result) => {
              });
              this.setState({
                gotEasterEggs: true
              });
            }
          }]
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableWithoutFeedback onPress={this._handlePress.bind(this)}>
          <Image
            style={styles.logo}
            source={require('../assets/img/logo.png')}
          />
        </TouchableWithoutFeedback>

        <Text style={styles.copyright}>
          Copyright &copy; MSBU Tech, 2016.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  copyright: {
    textAlign: 'center',
    color: '#81858c',
    marginBottom: 20
  },
  logo: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#F0F1F2',
    borderRadius: 18,
    marginTop: 100
  }
});

module.exports = AboutPage;