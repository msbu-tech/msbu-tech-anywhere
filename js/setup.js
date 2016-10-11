/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

import React from 'react'
import MSBUApp from './MSBUApp';

function setup(): ReactClass<{}> {
  class Root extends React.Component {
    render() {
      return (
        <MSBUApp />
      );
    }
  }

  return Root;
}

module.exports = setup;