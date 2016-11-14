/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React from 'react'
import MSBUApp from './MSBUApp';
import CodePush from "react-native-code-push";

function setup(): ReactClass<{}> {
  class Root extends React.Component {

  componentDidMount() {
    // CodePush.sync();
    // CodePush.sync({ updateDialog: { title: "An update is available!" }, installMode: CodePush.InstallMode.IMMEDIATE });
    CodePush.sync({ updateDialog: { title: "An update is available!" } });

  }

  render() {
      return (
        <MSBUApp />
      );
    }
  }

  return Root;
}

module.exports = setup;