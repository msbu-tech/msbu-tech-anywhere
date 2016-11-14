/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React, { Component } from 'react'
import {
  Navigator
} from 'react-native';
import MSBUApp from './containers/MSBUApp';
import CodePush from "react-native-code-push";

export default class Root extends Component {

  componentDidMount() {
    CodePush.sync({updateDialog: {title: "An update is available!"}});
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'MSBUApp', index: 0}}
        renderScene={(route, navigator) =>
          <MSBUApp {...route.params} navigator={navigator}/>
        }
      >
      </Navigator>
    );
  }
}