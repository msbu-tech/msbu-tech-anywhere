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
import { getWeeklyList } from '../actions/weekly';
import ArticleItem from '../components/ArticleItem';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const SCREEN_WIDTH = Dimensions.get('window').width;

class WeeklyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      weeklyList: [],
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  static navigatorButtons = {
    leftButtons: [{
      icon: require('../assets/img/navicon_menu.png'),
      id: 'menu'
    }]
  };

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }

  componentDidMount() {
    this._fetch();
  }

  _fetch() {
    getWeeklyList().then((responseData) => {

      this.setState({
        loading: false,
        weeklyList: ds.cloneWithRows(responseData.weekly)
      });

    }).done();
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <View key={rowData.id}>
        <View style={[styles.cardHeader, rowID == 0 ? {borderTopWidth: 0} : {}]}>
          <Text style={styles.date}>{rowData.date}</Text>
        </View>
        {
          rowData.articles.map((article) => (
            <ArticleItem key={article.link} data={article}/>
          ))
        }
      </View>
    );
  }

  render() {

    let content = null;

    if (this.state.loading) {
      content = (
        <Text style={styles.loading}>
          Loading...
        </Text>
      );
    } else {
      content = (
        <ListView
          style={styles.listView}
          dataSource={this.state.weeklyList}
          renderRow={this._renderRow.bind(this)}
        />
      );
    }

    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFF'
  },
  cardHeader: {
    borderTopWidth: 10,
    borderTopColor: '#F0F1F2',
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F1F2'
  },
  date: {
    fontSize: 18,
    alignSelf: 'center',
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#505359'
  },
  weeklyTitle: {
    color: '#393C40',
    marginBottom: 5,
  },
  weeklyUrl: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listView: {
    width: SCREEN_WIDTH
  },
  loading: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 200,
    color: '#505359'
  }
});

module.exports = WeeklyPage;