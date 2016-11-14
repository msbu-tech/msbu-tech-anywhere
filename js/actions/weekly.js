/**
 * Copyright (c) 2016 MSBU Tech. All Rights Reserved.
 * This program is distributed under MIT License.
 */

'use strict';

function getWeeklyList() {
  return fetch('https://msbu-tech.github.io/api/weekly.json')
    .then((response) => {
      return response.json()
    });
}

module.exports = {getWeeklyList};