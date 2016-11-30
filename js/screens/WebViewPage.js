import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  AlertIOS,
  WebView,
  Dimensions,
  Platform
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const NAVIGATION_BAR_HEIGHT = 80;

const returnButton = Platform.OS == 'ios' ? {
  leftButtons: [{
    title: 'Close',
    id: 'close',
    icon: require('../assets/img/icon_back_normal.png')
  }]
} : {};

export default class WebViewPage extends Component {
  static navigatorButtons = returnButton;

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id == 'close') {
      this.props.navigator.dismissModal();
    }
  }

  _handleNavigationstateChange(info) {
    if(info.title && info.url.indexOf(info.title) < 0) {
      this.props.navigator.setTitle({
        title: info.title
      });
    }
  }

  renderError() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webview}
          renderError={this.renderError.bind(this)}
          automaticallyAdjustContentInsets={true}
          mediaPlaybackRequiresUserAction={true}
          scalesPageToFit={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          source={{uri: this.props.link}}
          onNavigationStateChange={this._handleNavigationstateChange.bind(this)}>

        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '500'
  },
  webview: {
    width: SCREEN_WIDTH,
    height: Platform.OS == 'ios' ? SCREEN_HEIGHT : SCREEN_HEIGHT - NAVIGATION_BAR_HEIGHT
  }
});
