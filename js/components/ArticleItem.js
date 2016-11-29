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
  Dimensions,
  TouchableHighlight
} from 'react-native';
import TagItem from './TagItem';

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  _handlePress(article) {
    this.props.navigator.showModal({
      screen: "msbu.WebViewPage",
      title: article.title,
      passProps: article
    });
  }

  render() {
    const article = this.props.data;

    return (
      <TouchableHighlight
        onPress={this._handlePress.bind(this, article)}
        activeOpacity={0.65}
        underlayColor={"#bbb"}>
        <View
          style={styles.container}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.comment} numberOfLines={3}>{article.comment}</Text>
          <View style={styles.tagContainer}>
            {
              article.tags.map((tag, index) => (
                <TagItem key={index + tag} data={"#" + tag}/>
              ))
            }
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F1F2'
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    color: '#505359'
  },
  comment: {
    marginTop: 10,
    color: '#81858c',
    lineHeight: 20,
    fontSize: 14
  },
  tagContainer: {
    flexWrap: "wrap",
    marginTop: 10,
    flexDirection: 'row'
  }
});

module.exports = ArticleItem;