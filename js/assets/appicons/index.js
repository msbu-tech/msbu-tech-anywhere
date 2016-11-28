// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  "ios-home": [30, "#bbb"],
  "ios-home-outline": [30, "#fff"],

  "ios-paper": [30, "#bbb"],
  "ios-paper-outline": [30, "#fff"],

  "ios-albums": [30, "#bbb"],
  "ios-albums-outline": [30, "#fff"],

  "ios-person": [30, "#bbb"],
  "ios-person-outline": [30, "#fff"]

  // Use other Icon provider, see the logic at L39
  // "facebook": [30, "#bbb", FontAwesome],
  // "facebook--active": [30, "#fff", FontAwesome],
}

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      )
    })
  ).then(sources => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

    // Call resolve (and we are done)
    resolve(true);
  })
});

export {
  iconsMap,
  iconsLoaded
};
