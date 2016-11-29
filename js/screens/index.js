import { Navigation } from 'react-native-navigation';
import SideMenu from './SideMenu';

import HomePage from './HomePage';
import WeeklyPage from './WeeklyPage';
import MorePage from './MorePage';
import AboutPage from './AboutPage';
import WebViewPage from './WebViewPage';

export function registerScreens() {
  Navigation.registerComponent('msbu.HomePage', () => HomePage);
  Navigation.registerComponent('msbu.WeeklyPage', () => WeeklyPage);
  Navigation.registerComponent('msbu.MorePage', () => MorePage);
  Navigation.registerComponent('msbu.AboutPage', () => AboutPage);
  Navigation.registerComponent('msbu.SideMenu', () => SideMenu);
  Navigation.registerComponent('msbu.WebViewPage', () => WebViewPage);
}