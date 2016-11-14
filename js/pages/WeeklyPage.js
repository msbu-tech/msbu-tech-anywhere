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

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const SCREEN_WIDTH = Dimensions.get('window').width;

class WeeklyPage extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      loading: true,
      weeklyList: [],
    };
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

  onButtonPress() {
    Alert.alert('Button has been pressed!');
  }

  _renderRow(rowData) {
    return (
      <View key={rowData.id}>
        <Text style={styles.date}>{rowData.date}</Text>
        {
          rowData.articles.map((article) => (
            <View key={article.link}>
              <Text style={styles.title}>{article.id}. {article.title}</Text>
            </View>
          ))
        }
      </View>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text style={styles.pageTitle}>
            MSBU Tech Weekly
          </Text>
          <Text style={styles.loading}>
            Loading...
          </Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.pageTitle}>
            MSBU Tech Weekly
          </Text>
          <ListView
            style={styles.listView}
            dataSource={this.state.weeklyList}
            renderRow={this._renderRow.bind(this)}
          />
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
    backgroundColor: '#FFF'
  },
  date: {
    fontSize: 20,
    alignSelf: 'flex-end',
    paddingRight: 20
  },
  pageTitle: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center'
  },
  title: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
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
    alignSelf: 'center',
    marginTop: 200
  }
});

module.exports = WeeklyPage;