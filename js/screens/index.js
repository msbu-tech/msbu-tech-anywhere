import { Navigation } from 'react-native-navigation';
import SideMenu from './SideMenu';

import HomePage from './HomePage';
import WeeklyPage from './WeeklyPage';
import MorePage from './MorePage';
import AboutPage from './AboutPage';

export function registerScreens() {
  Navigation.registerComponent('example.HomePage', () => HomePage);
  Navigation.registerComponent('example.WeeklyPage', () => WeeklyPage);
  Navigation.registerComponent('example.MorePage', () => MorePage);
  Navigation.registerComponent('example.AboutPage', () => AboutPage);
  Navigation.registerComponent('example.SideMenu', () => SideMenu);
}