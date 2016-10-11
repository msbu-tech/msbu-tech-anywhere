/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

function getWeeklyList() {
  return fetch('http://127.0.0.1:4000/weekly/index.json')
    .then((response) => response.json());
}

module.exports = {getWeeklyList};