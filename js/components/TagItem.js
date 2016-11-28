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
  ListView,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class TagItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textStyle: {}
    }
  }

  componentDidMount() {
  }

  render() {
    const tag = this.props.data;

    return (
      <Text style={styles.tag} numberOfLines={1}>{tag}</Text>
    )
  }
}

const styles = StyleSheet.create({
  tag: {
    color: '#e95260',
    fontSize: 14,
    marginRight: 8
  }
});

module.exports = TagItem;